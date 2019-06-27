<?php

namespace App;

use \League\Fractal\TransformerAbstract;
use Fractal\Resource\Item;

class ContactTransformer extends TransformerAbstract
{
    public function transform(Contact $contact)
    {
        return [
            'id' => (int) $contact->id,
            'firstName' => (string) $contact->first_name,
            'lastName' => (string) $contact->last_name,
            'phoneNumbers' => $contact->phoneNumbers
        ];
    }
}
