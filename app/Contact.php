<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['first_name', 'last_name'];

    /**
     * Relationship for PhoneNumber model
     */
    public function phoneNumbers()
    {
        return $this->belongsToMany(PhoneNumber::class);
    }
}
