<?php

namespace App\Http\Controllers;

use App\Services\RbFileService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Log;

class RbFileController extends Controller
{
    protected $rbFileService;

    public function __construct(RbFileService $rbFileService){
        $this->rbFileService = $rbFileService;
    }

    public function index(Request $request){
        $files = $this->rbFileService->allFiles($request->all());
        return Inertia::render('Files/Files',
         [
            'files'=> $files
        ]);
    }

    public function createForm() {
        return Inertia::render('Files/CreateFile');
    }

    public function customerCreateForm() {
        return Inertia::render('Files/CustomerCreateFile');
    }

    public function create(Request $request) {
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'document' => 'required|file|mimes:pdf|max:2048', 
            'invoice' => 'required|file|mimes:pdf|max:2048',
            'address1'=> 'required|string'
        ]);

       $this->rbFileService->createFile($request->all());

       return redirect()->route('file-all')->with('success', "Rb file created successfully.");
    }

    public function update(Request $request, $id) {
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'document' => 'required', 
            'invoice' => 'required',
            'address1'=> 'required|string',
        ]);
        $this->rbFileService->updateFile($request->all());
        return redirect()->route('file-all')->with('success', "Rb file updated successfully");
    }

    public function downloadInvoice($fileName) {
        // Construct the full file path
        $filePath = public_path('invoices'.DIRECTORY_SEPARATOR. $fileName);
    
        // Check if the file exists
        if (!file_exists($filePath)) {
            // Log the error with the missing file's path
            Log::error("File not found: {$filePath}");
            
            // Return a 404 response if the file is missing
            abort(404, 'File not found');        }
    
        // Proceed to download the file if it exists
        return response()->download($filePath);
    }
    

    public function view($id){
        $file = $this->rbFileService->getFile($id);
        return Inertia::render("Files/ViewFile",
        [
            'file' => $file,
        ]);
    }

    public function editForm($id){
        $file = $this->rbFileService->getFile($id);
        return Inertia::render("Files/EditFile",
        [
            'file' => $file,
        ]);
    }

    public function delete($id) {
        $this->rbFileService->deleteFile($id);
    }
}
