<?php 

namespace App\Services;

use App\Events\RbFileCreated;
use App\Models\RbFile;
use Log;
use Illuminate\Support\Facades\Auth;

class RbFileService {
    protected $statusService;
    protected $destinationService;
    protected $paymentService;
    protected $priceService;

    public function __construct(
        StatusService $statusService,
        DestinationService $destinationService,
        PaymentService $paymentService,
        PriceService $priceService
        ){
        $this->statusService = $statusService;
        $this->destinationService = $destinationService;
        $this->paymentService = $paymentService;
        $this->priceService = $priceService;
    }

    public function allFiles($data, $countOfItems = 10)
    {
        $query = RbFile::query();

        
        if(Auth::user()->role === 3) {
            $query->where('id', Auth::user()->id);
        }
        
        if (isset($data['email']) && !empty($data['email'])) {
            if (isset($data['email']) && !empty($data['email'])) {
                $query->whereHas('user', function ($query) use ($data) {
                    $query->where('email', 'like', '%' . $data['email'] . '%');
                });
            }
        }

        if (isset($data['importer']) && !empty($data['importer'])) {
            $query->where('importer', 'like', '%' . $data['importer'] . '%');
        }

        if (isset($data['created_at']) && !empty($data['created_at'])) {
            $query->whereDate('created_at', $data['created_at']);
        }


        $query->with('user');
        $query->orderBy('created_at', 'desc');

        return $query->paginate($countOfItems);
    }


    public function getFile($id) {
        $query = RbFile::query();
        $query->where('id', $id);
        $query->with('user');
        $query->with('status');
        $query->with('destination');
        $query->with('payment');
        $query->with('price');
        $file = $query->first();
        return $file;
    }

    public function createFile($data) {
        if ($data['document']->isFile()) {
          // Call function for file upload
          $documentPath = $this->uploadDocument($data['document'],'rb_files','rb_file_');
          $data['document'] = $documentPath;
        }

        if ($data['invoice']->isFile()) {
            // Call function for file upload
            $invoicePath = $this->uploadDocument($data['invoice'],'invoices', 'invoice_');
            $data['invoice'] = $invoicePath;
        }

        $rbFile = RbFile::create($data);
        
        //create a file status for rb file
        $statusArray = [
            'rb_file_id' => $rbFile->id,
            'file_opened' => 1,
        ];
        $this->statusService->createStatus($statusArray);


        //create a destination for imports
        $destinationArray = [
            'rb_file_id' => $rbFile->id,
            'address1' => $data['address1'], 
            'address2' => $data['address2'],
            'country' => $data['country'],
        ];
        $this->destinationService->createDestination($destinationArray);

        //create a payment for this file
        $paymentArray = [
            'rb_file_id' => $rbFile->id,
        ];

        $this->paymentService->createPayment($paymentArray);

        //create a default price for this file
        $currency = $rbFile->currency !== null ? 'ZWL': $rbFile->currency;
        $priceArray = [
            'rb_file_id' => $rbFile->id,
            'currency' => $currency,
            'rtgs_price' => null,
            'rtgs_duty' => null,
            'usd_price' => null,
            'usd_duty' => null,
        ];

        $this->priceService->createPrice($priceArray);

        return $rbFile;
    }

    public function updateFile($data) {
        // Log::info($data);
        if ($data['document'] instanceof \Illuminate\Http\UploadedFile && $data['document']->isFile()) {
            // Call function for file upload
            $documentPath = $this->uploadDocument($data['document'],'rb_files','rb_file_');
            $data['document'] = $documentPath;
        }
  
          if ($data['invoice'] instanceof \Illuminate\Http\UploadedFile && $data['document']->isFile()) {
              // Call function for file upload
              $invoicePath = $this->uploadDocument($data['invoice'],'invoices', 'invoice_');
              $data['invoice'] = $invoicePath;
          }
          $data['ref'] = "RB".$data['id'];

        $rbfile = RbFile::find($data['id']);

        //update the destination for import
        $destinationArray = [
            'rb_file_id' => $rbfile->id,
            'id' => $rbfile->destination->id,
            'address1' => $data['address1'], 
            'address2' => $data['address2'],
            'country' => $data['country'],
        ];

        $this->destinationService->updateDestination($destinationArray);

        $updatedFile = $rbfile->update($data);

        event(new RbFileCreated($updatedFile));

        return $updatedFile;
    }

    public function deleteFile($id) {
        $file = RbFile::find($id);
        return $file->delete();
    }

    private function uploadDocument($file,$folder, $fileNamePrefix) {
        $timestamp = now()->format('YmdHis'); // e.g., 20241119123045
           $extension = $file->getClientOriginalExtension(); // Get file extension
           $newFileName = $fileNamePrefix . $timestamp . '.' . $extension;

           // Define the destination path under public/rb_files
           $destinationPath = public_path($folder);

           // Move the file to the destination path with the new name
           $file->move($destinationPath, $newFileName);
           return $folder.DIRECTORY_SEPARATOR. $newFileName;
    }
}