import React from 'react';
import image01 from '../assets/page4.jpg'

function Page4() {
    return (
        <div className='relative'>
            <div className='absolute top-28 left-70 ml-32 text-white flex flex-col'>
                <p className='text-3xl'>"Jasmine has a unique </p>
                <p className='text-3xl'>style and is a true</p>
                <p className='text-3xl'>professional."</p>
                <p className='text-xs pt-4'>- Shiloh Carson, Client</p>
            </div>
            <img src={image01} alt="page4" className='h-screen w-full object-cover'/>
        </div>
    );
}

export default Page4;