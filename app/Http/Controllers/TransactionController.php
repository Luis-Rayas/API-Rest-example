<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class TransactionController extends Controller
{
    public function getTransactions() : JsonResponse
    {
        return response()->json([]);
    }

    public function store(Request $request) : JsonResponse
    {
        return response()->json([]);
    }
}
