<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Client extends Model
{
    use HasFactory;

    protected $table = 'cliente';
    public $timestamps = false;

    protected $fillable = [
        'id',
        'tipo_identificacion_id',
        'razon_social',
        'numero_identificacion',
        'nombres',
        'municipio',
        'apellidos'
    ];

    public function identificationType() : BelongsTo
    {
        return $this->belongsTo(IdentificationType::class, 'tipo_identificacion_id');
    }

    public function accounts() : HasMany
    {
        return $this->hasMany(Account::class, 'cliente_id', 'id');
    }
}
