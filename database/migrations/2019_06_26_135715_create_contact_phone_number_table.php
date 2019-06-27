<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateContactPhoneNumberTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('contact_phone_number', function (Blueprint $table) {
             $table->increments('id');
            $table->integer('contact_id')
                  ->unsigned()
                  ->nullable();

            $table->integer('phone_number_id')
                  ->unsigned()
                  ->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('contact_phone_number');
    }
}
