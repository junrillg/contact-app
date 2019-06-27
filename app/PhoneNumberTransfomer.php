<?php

namespace App;

use \League\Fractal\TransformerAbstract;

class PhoneNumberTransformer extends TransformerAbstract
{
    public function transform(PhoneNumber $phoneNumber)
    {
        return [
            'id' => (int) $phoneNumber->id,
            'number' => (int) $phoneNumber->number,
        ];
    }
}
