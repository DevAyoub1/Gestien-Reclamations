<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class ClientController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return DB::table('users')->paginate('7');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
            $guards = array_keys(config('auth.guards'));
        $user = null;
        foreach ($guards as $guard) {
            $currentGuard = Auth::guard($guard);
            if ($currentGuard->check()) {
                $user = $currentGuard->user();
                break;
            }
        }
      $user->tokens()->delete();
      $guards = ['web', 'admin'];

foreach ($guards as $guard) {
    Auth::guard($guard)->logout();
}
        
        Auth::guard('web')->logout();
       // Auth::guard('admin')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return response()->json([
            'message'=>'user deconnecte'
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(User $client)
    {
        return $client;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Client $client)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $client)
    {
        return $client->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $client)
    {
        $client->delete();
    }
    public function CountNombre(User $client){
        return $client->count();
    }
}
