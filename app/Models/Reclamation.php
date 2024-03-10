<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reclamation extends Model
{
    use HasFactory;
    protected $fillable = [
        "description","status","IdClient"
    ];
    protected $primaryKey = "IdReclamation";
    protected $foreign = "IdClient";

}
