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
        Schema::create('statuses', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('rb_file_id');
            $table->boolean('file_opened')->nullable();
            $table->boolean('controls_checked')->nullable();
            $table->boolean('tax_clearence_valid')->nullable();
            $table->boolean('worksheet_done')->nullable();
            $table->boolean('quotation_sent')->nullable();
            $table->boolean('duty_paid')->nullable();
            $table->boolean('entry_submitted')->nullable();
            $table->boolean('entry_self_assessed')->nullable();
            $table->boolean('entry_examined')->nullable();
            $table->boolean('query_raised_on_values')->nullable();
            $table->boolean('query_raised_on_classification')->nullable();
            $table->boolean('pe_conducted')->nullable();
            $table->boolean('query_resolved')->nullable();
            $table->boolean('entry_assessed')->nullable();
            $table->boolean('entry_released')->nullable();
            $table->boolean('entry_acquited')->nullable();
            $table->boolean('storages_paid')->nullable();
            $table->boolean('entry_dispached')->nullable();
            $table->boolean('goods_delivered')->nullable();
            $table->boolean('service_fees_paid')->nullable();
            $table->boolean('file_closed')->nullable();
            $table->softDeletes('deleted_at', 0);	
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('statuses');
    }
};
