import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className='mx-16 h-[90vh] bannerImage my-7 text-white flex flex-col justify-center items-center text-center'>
            <h1 className='text-5xl font-bold'>Affordable Price For <br /> Car <span className='text-orange-500'>Servicing</span></h1>
            <p className='text-red-500'>There are many variations of passages of  available, <br /> but the majority have suffered alteration in some form</p>
            <div className='flex gap-6'>
                <button className='bg-orange-400 py-2 px-5 rounded-xl'>Discover More</button>
                <button className=' py-2 px-5 rounded-xl border-2 border-orange-500'>Latest Projects</button>
            </div>
        </div>
    );
};

export default Banner;