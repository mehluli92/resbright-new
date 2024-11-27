<?php

namespace App\Http\Controllers;

use App\Services\StatusService;
use Illuminate\Http\Request;

class StatusController extends Controller
{
    protected $statusService;

    public function __construct(StatusService $statusService){
        $this->statusService = $statusService;
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $status = $this->statusService->updateStatus($request->all());
        return redirect()->route('file-view', [$request->id])->with('success', "Rb file status updated successfully");

    }
}
