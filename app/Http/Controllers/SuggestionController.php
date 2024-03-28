<?php

namespace App\Http\Controllers;

use App\Models\Suggestion;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SuggestionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return DB::table('suggestions')->paginate(7);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            
            'description'=> ['required','min:100'],
            
            "idUser"=>['required'],
        ]);
        Suggestion::create([
            
            "description"=>$request->description,
            
            "idUser"=>$request->idUser,
            "created_at"=>now()
        ]);
        return response()->json([
            "message"=>$request->message,
        ]);
    }
    public function UserS($id)
    {
        return Suggestion::where('idUser',$id)->paginate("7");
    }

    /**
     * Display the specified resource.
     */
    public function show( $suggestion)
    {
        return Suggestion::find($suggestion);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request,  $suggestion)
    {   
        $suggestions=$request->all();
        return Suggestion::find($suggestion)->update($suggestions);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy( $suggestion)
    {
        return Suggestion::find($suggestion)->delete();
    }
}
