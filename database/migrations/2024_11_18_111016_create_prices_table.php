<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('prices', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('rb_file_id');	
            $table->decimal('us_value', 10, 2)->nullable(); //US dollar value of goods
            $table->decimal('rtgs_value', 10, 2)->nullable(); //RTGS dollarvalue of goods
            $table->decimal('rands_value', 10, 2)->nullable(); //Rands value of goods
            $table->decimal('cny_value', 10, 2)->nullable(); //cny value of goods
            $table->decimal('rupee_value', 10, 2)->nullable(); //rupee value of goods
            $table->decimal('euro_value', 10, 2)->nullable(); //euro value of goods
            $table->decimal('gbp_value', 10, 2)->nullable(); //gbp value of goods
            $table->decimal('pula_value', 10, 2)->nullable(); //pula value of goods 
            $table->decimal('us_price', 10, 2)->nullable(); //US dollar servie fee 
            $table->decimal('rtgs_price', 10, 2)->nullable(); //RTGS service fee
            $table->decimal('us_duty', 10, 2)->nullable(); //duty US
            $table->decimal('rtgs_duty', 10, 2)->nullable(); //duty RTGS
            $table->string('value_to_show')->nullable(); //value of goods
            $table->softDeletes('deleted_at', 0);	
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('prices');
    }
};
