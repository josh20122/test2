<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Cartegory;
use App\Models\Country;
use App\Models\Shop;
use Illuminate\Http\Request;
use Spatie\Browsershot\Browsershot;

class RandomController extends Controller
{





    public function categoryStatus($id)
    {
        $status = Cartegory::find($id)->status;
        Cartegory::where('id', $id)->update([
            'status' =>  $status === 1 ? false : true,
        ]);
        return redirect()->route('admin.cartegories');
    }

    public function shopstatus($id)
    {
        $status = Shop::find($id)->status;

        Shop::where('id', $id)->update([
            'status' => $status === 1 ? false : true,
        ]);

        return redirect()->back();
    }

    public function countryStatus($id)
    {
        $status = Country::find($id)->status;
        Country::where('id', $id)->update([
            'status' => $status === 1 ? false : true,
        ]);
        return redirect()->back();
    }
}
