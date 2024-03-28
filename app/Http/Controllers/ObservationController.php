<?php

namespace App\Http\Controllers;

use App\Models\Observation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ObservationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return DB::table('observations')->paginate("8");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            
            'Description'=> ['required','min:100'],
            
            "idUser"=>['required'],
        ]);
        Observation::create([
            
            "Description"=>$request->Description,
            
            "idUser"=>$request->idUser,
            "created_at"=>now()
        ]);
        return response()->json([
            "message"=>$request->message,
        ]);
    }
    public function UserO($id)
    {
        return Observation::where('idUser',$id)->paginate("10");
    }

    /**
     * Display the specified resource.
     */
    public function show(Observation $observation)
    {
        return $observation;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Observation $observation)
    {
        return $observation->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Observation $observation)
    {
        return $observation->delete();
    }
}
