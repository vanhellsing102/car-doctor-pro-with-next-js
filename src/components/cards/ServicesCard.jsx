import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ServicesCard = ({service}) => {
    const {img, title, price, _id} = service || {};
    return (
        <div className='border-2 border-gray-400 shadow-xl p-7 space-y-3'>
                <Image src={img} width={400} height={200} alt={title}/>
                <h3 className='text-2xl font-semibold'>{title}</h3>
                <div className='flex justify-between items-center text-orange-500'>
                    <p className='text-xl font-semibold'>Price: {price}</p>
                    <Link href={`/services/${_id}`} className='bg-orange-400 text-white p-2 rounded-lg font-bold'>View Details</Link>
                </div>
        </div>
    );
};

export default ServicesCard;