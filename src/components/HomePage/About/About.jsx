import React from 'react';
import about1 from '../../../assests/home/about1.webp';
import about2 from '../../../assests/home/about2.webp';
import Image from 'next/image';

const About = () => {
    return (
        <div className='mx-16 mt-24 flex justify-between gap-20'>
            <div className='relative w-1/2'>
                <Image className='w-full' src={about1} alt="" />
                <Image className='w-[400px] absolute top-[200px] left-[230px]  border-8 border-white' src={about2} alt="" />
            </div>
            <div className='w-1/2 z-10 flex flex-col justify-center items-center'>
                <h4 className='text-lg text-orange-400'>About Us</h4>
                <h2 className='text-3xl font-semibold'>We are qualified & of experience in this field</h2>
                <p className='text-sm font-semibold'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <button className='bg-orange-400 py-2 px-6 rounded-xl'>Read More</button>
            </div>
        </div>
    );
};

export default About;