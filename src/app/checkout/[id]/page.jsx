"use client";
import { getServiceDetails } from '@/services/getServices';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const checkoutPage = ({params}) => {
    const {id} = params;
    const session = useSession();
    // console.log(session?.data?.user?.name)
    const [service, setService] = useState({});
    const loadedService = async() =>{
        const details = await getServiceDetails(id);
        console.log(details);
        setService(details);
    }
    const {title, img, price, description, facility, _id} = service || {};

    const handleOrderConfirm = async(event) =>{
        event.preventDefault();
        console.log("order")
        const newBooking = {
            name: session?.data?.user?.name,
            email: session?.data?.user?.email,
            date: event.target.date.value,
            phone: event.target.phone.value,
            address: event.target.address.value,
            ...service
        }
        const res = await fetch("http://localhost:3000/checkout/api/new-booking", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newBooking)
        })
        console.log(res);
    }

    useEffect(() =>{
        loadedService();
    }, [params]);

    return (
        <div className='mx-16 my-5'>
            <div className='relative h-80'>
                <Image className='absolute h-full' src={img} width={1900} height={1000} alt={"title"}></Image>
                <h2 className='absolute left-20 top-32 text-white text-5xl font-bold'>ChekOut {title}</h2>
            </div>
            <form onSubmit={handleOrderConfirm} className='grid grid-cols-2 gap-4 mt-5 shadow-2xl p-10'>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" defaultValue={session?.data?.user?.name} name='name' className='w-full border-[2px] border-gray-500 outline-none px-5 py-1 rounded-xl' />
                </div>
                <div>
                    <label htmlFor="date">Date</label>
                    <input type="date" name='date' defaultValue={new Date().getDate()} className='w-full border-[2px] border-gray-500 outline-none px-5 py-1 rounded-xl' />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' defaultValue={session?.data?.user?.email} className='w-full border-[2px] border-gray-500 outline-none px-5 py-1 rounded-xl' />
                </div>
                <div>
                    <label htmlFor="amount">Amount</label>
                    <input type="number" name='amount' readOnly defaultValue={price} className='w-full border-[2px] border-gray-500 outline-none px-5 py-1 rounded-xl' />
                </div>
                <div>
                    <label htmlFor="phone">Phone</label>
                    <input type="number" name='phone' className='w-full border-[2px] border-gray-500 outline-none px-5 py-1 rounded-xl' />
                </div>
                <div>
                    <label htmlFor="address">Present Address</label>
                    <input type="text" name='address' className='w-full border-[2px] border-gray-500 outline-none px-5 py-1 rounded-xl' />
                </div>
                <input type="submit" value={"Order Confirm"} className='col-span-2 cursor-pointer bg-orange-500 font-bold border-[2px] border-gray-500 outline-none px-5 py-1 rounded-xl w-full'/>
            </form>
        </div>
    );
};

export default checkoutPage;