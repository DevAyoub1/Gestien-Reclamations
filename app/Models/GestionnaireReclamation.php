<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GestionnaireReclamation extends Model
{
    use HasFactory;
    protected $fillable = [
        'idGestionnaire',
        'nom',
        'prenom',
    ];
}
