import React, { useState } from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Link, Head } from '@inertiajs/react';
import { Inertia } from '@inertiajs/inertia';

export default function CreateForm({ auth }) {
    //const [startDate, setStartDate] = useState(new Date());
    const [input, setInput] = useState({
        nama: '',
        nip: '',
        tempatLahir: '',
        tanggalLahir: '',
        umur: '',
        alamat: '',
        agama: '',
        jenisKelamin: '',
        noHandphone: '',
        email: ''
    });

    const handleChange = (e) => {
        setInput((input) => ({
            ...input,
            [e.target.name]: e.target.value,
        }));
        // setInput({
        //     ...input,
        //     [e.target.name]: e.target.value,
        // });
    };
    const handleDateChange = (tanggalLahir) => {
        // let realDate = tanggalLahir.toISOString().split('T')[0]
        // console.log(realDate)
        setInput(input => ({ ...input, tanggalLahir }));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(input)
        Inertia.post('/CreateForm', input);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="text-center font-semibold text-xl text-gray-800 leading-tight">Create Form</h2>}

        >
            <Head title="Create Form" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="py-12">
                            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-6">
                                        <form onSubmit={handleSubmit}>
                                            <div className="mb-6">
                                                <label htmlFor="nama" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama</label>
                                                <input type="text" id="nama" name="nama" value={input.nama} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                                            </div>
                                            <div className="mb-6">
                                                <label htmlFor="nip" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">NIP</label>
                                                <input type="text" id="nip" name="nip" value={input.nip} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                            </div>
                                            <div className="mb-6">
                                                <label htmlFor="tempatLahir" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tempat Lahir</label>
                                                <input type="text" id="tempatLahir" name="tempatLahir" value={input.tempatLahir} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                            </div>
                                            <div className="mb-6">
                                                <label htmlFor="tanggalLahir" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tanggal Lahir</label>
                                                {/* <input type="date" id="tanggalLahir" name="tanggalLahir" value={input.tanggalLahir} onChange={handleChange} required /> */}
                                                <DatePicker selected={input.tanggalLahir} dateFormat="dd-MM-yyyy" onChange={handleDateChange} />
                                            </div>
                                            <div className="mb-6">
                                                <label htmlFor="umur" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">umur</label>
                                                <input type="number" id="umur" name="umur" value={input.umur} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                            </div>
                                            <div className="mb-6">
                                                <label htmlFor="alamat" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Alamat</label>
                                                <textarea type="text" id="alamat" name="alamat" value={input.alamat} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                            </div>
                                            <div className="mb-6">
                                                <label htmlFor="agama" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Agama</label>
                                                <input type="text" id="agama" name="agama" value={input.agama} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                            </div>
                                            <div className="mb-6">
                                                <label htmlFor="jenisKelamin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Jenis Kelamin</label>
                                                <input type="text" id="jenisKelamin" name="jenisKelamin" value={input.jenisKelamin} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                            </div>
                                            <div className="mb-6">
                                                <label htmlFor="noHandphone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">No Handphone</label>
                                                <input type="text" id="noHandphone" name="noHandphone" value={input.noHandphone} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                            </div>
                                            <div className="mb-6">
                                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                                <input type="email" id="email" name="email" value={input.email} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                            </div>
                                            
                                            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};