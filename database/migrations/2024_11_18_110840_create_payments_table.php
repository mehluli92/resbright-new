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
        Schema::create('payments', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('rb_file_id');	
            $table->decimal('us_price', 10, 2)->nullable(); //US dollar service fee paid
            $table->decimal('rtgs_price', 10, 2)->nullable(); //RTGS service fee paid 
            $table->decimal('us_duty', 10, 2)->nullable(); //duty US
            $table->decimal('rtgs_duty', 10, 2)->nullable(); //duty RTGS
            $table->softDeletes('deleted_at', 0);	
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('payments');
    }
};
