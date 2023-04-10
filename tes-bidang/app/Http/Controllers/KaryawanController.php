<?php

namespace App\Http\Controllers;

use App\Models\Karyawan;
use GuzzleHttp\Psr7\Response;
use Illuminate\Http\Request;
use Carbon\Carbon;
use DateTime;
use Inertia\Inertia;

class KaryawanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    // public function index()
    // {
    //     $karyawan = Karyawan::all();
    //     return Inertia::render('Dashboard', [
    //         'description' => $karyawan,

    //     ]);
    // }
    public function index()
    {
        $data = Karyawan::all();
        return Inertia::render('Dashboard', [
            'karyawan' => $data
        ]);
        
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('CreateForm', []);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = new Karyawan();
        $date=$request->tanggalLahir;
        $mysqlDate = Carbon::parse($date)->format('Y-m-d');
        $data->nama = $request->nama;
        $data->nip = $request->nip;
        $data->tempatLahir = $request->tempatLahir;
        $data->tanggalLahir = $mysqlDate;
        $data->umur = $request->umur;
        $data->alamat = $request->alamat;
        $data->agama = $request->agama;
        $data->jenisKelamin = $request->jenisKelamin;
        $data->noHandphone = $request->noHandphone;
        $data->email = $request->email;
        $data->save();
        return redirect('/dashboard');
    }

    /**
     * Display the specified resource.
     */
    public function show(Karyawan $karyawan)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Karyawan $karyawan)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Karyawan $karyawan)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Karyawan $karyawan)
    {
        //
    }
}
