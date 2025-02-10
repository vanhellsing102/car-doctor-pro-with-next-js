import { getServiceDetails } from '@/services/getServices';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: "Details",
    description: "Service Details Page"
}

const detailsPage = async({params}) => {
    
    const service = await getServiceDetails(params.id);
    const {title, img, price, description, facility, _id} = service;

    return (
        <div className='mx-16 my-7'>
            <div className='relative h-80'>
                <Image className='absolute h-full' src={img} width={1900} height={1000} alt={title}></Image>
                <h2 className='absolute left-20 top-32 text-white text-5xl font-bold'>{title}</h2>
            </div>
            <div className='my-5 rounded-xl bg-slate-500 shadow-xl p-10'>
                <h1 className='text-4xl font-bold mb-2 text-orange-600'>{title}</h1>
                <p className='text-sm'>{description}</p>
            </div>
            <div className='flex items-center gap-5'>
                <div className='w-2/3 grid grid-cols-2 gap-3'>
                    {
                        facility.map((item, index) =>
                            <div key={index} className='bg-orange-400 p-2 rounded-xl shadow-xl h-[160px]'>
                                <h3 className='text-2xl font-semibold text-white'>{item.name}</h3>
                                <p className='text-sm font-medium'>{item.details}</p>
                            </div>
                        )
                    }
                </div>
                <div className='w-1/3 p-3 border-2 border-gray-500 space-y-2'>
                    <Image src={img} className='w-full' width={1000} height={1000} alt={title}></Image>
                    <p className='text-2xl font-bold'>Price: $<span className='text-orange-500'>{price}</span></p>
                    <Link href={`/checkout/${_id}`}><button className='bg-orange-400 w-full py-1 rounded-lg text-white font-bold'>Check Out</button></Link>
                </div>
            </div>
        </div>
    );
};

export default detailsPage;