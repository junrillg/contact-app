<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PhoneNumber extends Model
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['number'];

    /**
     * Relationship for Contact model
     */
    public function contacts()
    {
        return $this->belongsToMany(Contact::class);
    }
}
