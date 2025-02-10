import React from 'react';
import ServicesCard from '@/components/cards/ServicesCard';
import { getServices } from '@/services/getServices';

const Services = async() => {

    const services = await getServices();

    return (
        <div className='mx-16 mt-44'>
            <div className='text-center mb-20'>
                <h1 className='text-5xl font-bold'>Our Service Area</h1>
                <p className='text-sm mt-3'>the majority have suffered alteration in some form, by injected humour, <br /> or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
                {
                    services.map(service => <ServicesCard key={service._id} service={service}></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;