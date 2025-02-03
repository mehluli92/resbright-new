<?php 

namespace App\Services;

use App\Events\RbFileQuote;
use App\Models\Price;

class PriceService {
    public function getPrice($id) {
        return Price::find($id);
    }

    public function createPrice($data) {
        if($data['currency'] == 'USD') {
            $data['value_to_show'] = $data['us_price'] + $data['us_duty'];
        } else {
            $data['value_to_show'] = $data['rtgs_price'] + $data['rtgs_duty'];
        }
        
        // $price = Price::find($data['id']);
        // $price->fill($data);
        // $price->save();
        $price = Price::create($data);

        // event(new RbFileQuote($price));
        return $price;
    }

    public function updatePrice($data) {
        if($data['currency'] == 'USD') {
            $data['value_to_show'] = $data['us_price'] + $data['us_duty'];
            $data['rtgs_price'] = null;
            $data['rtgs_duty'] = null;

        } else {
            $data['value_to_show'] = $data['rtgs_price'] + $data['rtgs_duty'];
            $data['us_price'] = null;
            $data['us_duty'] = null;
        }
        
        $price = Price::find($data['id']);
        $price->fill($data);
        $price->save();
        event(new RbFileQuote($price));

        return $price;
    }

    public function deletePrice($id) {
        $price = Price::find($id);
    }
}