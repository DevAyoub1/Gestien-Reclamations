<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reclamation extends Model
{
    use HasFactory;
    protected $fillable = [
        "ville","description","status","idUser"
    ];
    protected $foreignkey="idUser";
    public function getCreatedAtAttribue($value)
    {
         return Carbon::parse($value)->diffForHumans();
    }
    

}
