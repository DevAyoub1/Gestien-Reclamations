<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\Reclamation;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ReclamationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return DB::table('reclamations')->paginate('7');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function UserR($id)
    {
        return Reclamation::where('idUser',$id)->paginate('10');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            "ville"=>['required'],
            'description'=> ['required','min:100'],
            
            "idUser"=>['required'],
        ]);
        DB::table('reclamations')->insert([
            "ville"=>$request->ville,
            "description"=>$request->description,
            "status"=>$request->status,
            "idUser"=>$request->idUser,
            "created_at"=>now()
        ]);
        return response()->json([
            "message"=>$request->message,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Reclamation $reclamation)
    {
        return $reclamation;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function Filter( $filter)
    {
        return Reclamation::where('ville', 'like',  $filter . '%')->paginate("10");
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Reclamation $reclamation)
    {
        return $reclamation->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy( $reclamation)
    {
        return Reclamation::find($reclamation)->delete();
    }
    public function CountReclamation(Reclamation $reclamation){
        return $reclamation->count();
    }
    public function CountReclamationEncours(){
        return Reclamation::where('status', 'en cours')->count();
    }
    public function CountReclamationTraitée(){
        return Reclamation::where('status', 'traitée')->count();
    }
    public function ClientReclamation( $id){
         return Reclamation::where('id','=',$id)->get();
         
    }
}
