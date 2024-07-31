<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class TransactionController extends Controller
{
    public function getTransactions() : JsonResponse
    {
        return response()->json([]);
    }

    public function saveNewTransaction(Request $request) : JsonResponse
    {
        $transaction = new Transaction();
        $transaction->fecha = Carbon::now();
        $transaction->cliente_id = $request->cliente_id;
        $transaction->cuenta_id = $request->cuenta_id;
        $importe = $request->importe;
        if($request->tipo == 'retiro')
        {
            $importe = $importe * (-1);
        }
        $transaction->monto = $importe;
        $transaction->save();


        return response()->json([
            "error" => null,
            "data" => $transaction
        ]);
    }
}
