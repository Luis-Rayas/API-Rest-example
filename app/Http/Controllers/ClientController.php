<?php

namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ClientController extends Controller
{
    public function getClientes() : JsonResponse
    {
        $clientes = Client::with(['identificationType', 'accounts', 'accounts.transactions'])->get();
        return response()->json($clientes);
    }
}
