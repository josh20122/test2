<?php

namespace App\Http\Controllers\Document;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade\Pdf;

class InvoiceController extends Controller
{
    public function print()
    {

        $pdf = PDF::loadView('documents.invoice')->setOptions(['defaultFont' => 'sans-serif']);
        return $pdf->download('invoice.pdf');
    }
}
