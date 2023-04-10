import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Chirp from './Tabel';
import { Head, Link } from '@inertiajs/react';
import React from 'react';

export default function Dashboard({ auth, karyawan }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="text-center font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}

        >
            <Head title="Dashboard" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="py-12">
                            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-6">
                                        <div className="flex flex-row justify-start mb-3">
                                            <Link href={route('CreateForm')} className="border-2 rounded border-blue-500 bg-blue-500 py-1 px-3 text-white">Insert new Data</Link>
                                        </div>
                                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                                <tr>
                                                    <th scope="col" className="px-6 py-3">
                                                        No
                                                    </th>
                                                    <th scope="col" className="px-6 py-3">
                                                        Nama
                                                    </th>

                                                    <th scope="col" className="px-6 py-3">
                                                        Action
                                                        <span className="sr-only">Edit</span>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {karyawan.map((data, index) => {
                                                    return(
                                                    <>
                                                        <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                {data.id}
                                                            </th>
                                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                {data.nama}
                                                            </th>

                                                            <td className="flex px-6 py-4 text-left gap-x-4">
                                                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a>
                                                                <Link href={route('editForm')} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                                                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</a>
                                                            </td>
                                                        </tr>
                                                    </>
                                                    )
                                                })}
                                            </tbody>
                                        </table>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* <div className="py-12">
                {props}
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-6">
                            <div className="flex flex-row justify-start mb-3">
                                <button className="border-2 rounded border-blue-500 bg-blue-500 py-1 px-3 text-white">Insert new Data</button>
                            </div>
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Nama
                                        </th>

                                        <th scope="col" className="px-6 py-3">
                                            Action
                                            <span className="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Apple MacBook Pro 17"
                                        </th>

                                        <td className="px-6 py-4 text-left">
                                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>

                    </div>

                </div>
            </div> */}
        </AuthenticatedLayout>
    );
}
