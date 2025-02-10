"use client";
import { useSession } from 'next-auth/react';
import React from 'react';

const page = ({params}) => {

    const session = useSession();
    const id = params.id;

    const handleUpdate = event =>{
        event.preventDefault();
        const updateDoc = {
            date: event.target.date.value,
            phone: event.target.phone.value,
            address: event.target.address.value,
        }
        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/my-bookings/api/delete-booking/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updateDoc)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
        })
    }
    return (
        <div>
            <form onSubmit={handleUpdate} className='grid grid-cols-2 gap-4 mt-5 shadow-2xl p-10'>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" defaultValue={session?.data?.user?.name} name='name' className='w-full border-[2px] border-gray-500 outline-none px-5 py-1 rounded-xl' />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' defaultValue={session?.data?.user?.email} className='w-full border-[2px] border-gray-500 outline-none px-5 py-1 rounded-xl' />
                </div>
                <div>
                    <label htmlFor="date">Date</label>
                    <input type="date" name='date' defaultValue={new Date().getDate()} className='w-full border-[2px] border-gray-500 outline-none px-5 py-1 rounded-xl' />
                </div>
                {/* <div>
                    <label htmlFor="amount">Amount</label>
                    <input type="number" name='amount' readOnly defaultValue={price} className='w-full border-[2px] border-gray-500 outline-none px-5 py-1 rounded-xl' />
                </div> */}
                <div>
                    <label htmlFor="phone">Phone</label>
                    <input type="number" name='phone' className='w-full border-[2px] border-gray-500 outline-none px-5 py-1 rounded-xl' />
                </div>
                <div>
                    <label htmlFor="address">Present Address</label>
                    <input type="text" name='address' className='w-full border-[2px] border-gray-500 outline-none px-5 py-1 rounded-xl' />
                </div>
                <input type="submit" value={"Update"} className='col-span-2 cursor-pointer bg-orange-500 font-bold border-[2px] border-gray-500 outline-none px-5 py-1 rounded-xl w-full'/>
            </form>
        </div>
    );
};

export default page;