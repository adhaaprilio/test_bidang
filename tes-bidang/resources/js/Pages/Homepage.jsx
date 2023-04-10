import React from 'react'
import { Link, Head } from '@inertiajs/react';

export default function Homepage (props){
    console.log(props)
    return (
        <div>
        <Head title={props.title} />
        <h1 className="text-4xl flex justify-center items-center min-h-screen">{props.description}</h1>
        </div>
    )
}