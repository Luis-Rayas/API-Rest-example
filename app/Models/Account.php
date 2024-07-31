<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Account extends Model
{
    use HasFactory;

    protected $table = 'cuenta';
    public $timestamps = false;

    protected $fillable = [
        'id',
        'cuenta',
        'cliente_id'
    ];

    public function transactions() : HasMany
    {
        return $this->hasMany(Transaction::class, 'cuenta_id', 'id')->orderBy('fecha', 'desc');
    }
}
