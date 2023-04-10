<?php

use App\Http\Controllers\KaryawanController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function(){
    if(Auth::check()){
        return redirect()->route('dashboard');
    }
    return Inertia::render('Auth/Login');
});
Route::get('/welcome', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::resource('dashboard', KaryawanController::class)
// ->middleware(['auth']);

Route::get('/dashboard', [KaryawanController::class, 'index'])->middleware(['auth'])->name('dashboard');
Route::get('/CreateForm', [KaryawanController::class, 'create'])->middleware(['auth'])->name('CreateForm');
Route::post('/CreateForm', [KaryawanController::class, 'store'])->middleware(['auth']);
Route::get('/editForm', [KaryawanController::class, 'edit'])->middleware(['auth'])->name('editForm');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    //Route::get('/dashboard', [KaryawanController::class, 'index']);
});

require __DIR__.'/auth.php';
