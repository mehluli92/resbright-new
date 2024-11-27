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

        $price = Price::create($data);
        event(new RbFileQuote($price));
        return $price;
    }

    public function updatePrice($data) {
        return Price::updated($data);
    }

    public function deletePrice($id) {
        $price = Price::find($id);
    }
}