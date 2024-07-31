<?php

namespace App\Http\Controllers;

use App\Models\Account;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class AccountController extends Controller
{
    public function createNewAccount(Request $request) : JsonResponse
    {
        $account = new Account($request->all());
        $account->save();

        return response()->json([
            "error" => null,
            "data" => $account
        ]);
    }
}
