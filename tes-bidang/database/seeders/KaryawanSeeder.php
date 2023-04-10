<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Carbon;
use Illuminate\Support\Str;


class KaryawanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        
        DB::table('karyawans')->insert([
            'nama' => Str::random(10),
            'nip' => Str::random(10),
            'tempatLahir' => Str::random(10),
            'tanggalLahir' => Carbon::now()->subDays(rand(1, 30)),
            'umur' => rand(2,50),
            'alamat' => Str::random(10),
            'agama' => Str::random(10),
            'jenisKelamin' => Str::random(10),
            'noHandphone' => Str::random(10),
            'email' => Str::random(10).'@gmail.com',
            
        ]);
    
    }
}
