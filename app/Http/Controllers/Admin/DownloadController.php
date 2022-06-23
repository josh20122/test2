<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Image;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

class DownloadController extends Controller
{
    public function downloadSellerPassport($id)
    {
        $image = Image::where('imageable_id', $id)
            ->where('imageable_type', 'App\Models\Shop')
            ->where('path', 'like', '%passport%')
            ->first()->path;

        $filepath = public_path(substr($image, 1));
        return Response::download($filepath);
    }

    public function downloadSellerBusinessDocument($id)
    {
        $document = Image::where('imageable_id', $id)
            ->where('imageable_type', 'App\Models\Shop')
            ->where('path', 'like', '%document%')
            ->first()->path;

        $filepath = public_path(substr($document, 1));
        return Response::download($filepath);
    }
}
