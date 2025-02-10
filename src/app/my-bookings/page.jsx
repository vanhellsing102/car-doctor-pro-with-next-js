"use client";
import React, { useEffect, useState } from 'react';
import img from '../../assests/home/banner.jpeg'
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

const myBookingsPage = () => {
    const session = useSession();
    const email = session?.data?.user?.email;
    const [myBookings, setMyBookings] = useState([]);
    const handleDeleted = async(id) =>{
        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/my-bookings/api/delete-booking/${id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
        })
    }
    useEffect( () =>{
        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/my-bookings/api/${email}`)
        .then(res => res.json())
        .then(data => setMyBookings(data))
    }, [session])
    // console.log(myBookings);
    return (
        <div className='mx-16 my-6'>
            <div className='relative h-80'>
                <Image src={img} width={1900} height={1000} className='absolute h-full' alt='pic'></Image>
                <h2 className='absolute left-20 top-32 text-orange-500 text-5xl font-bold'>My Bookings</h2>
            </div>
            <div className='mt-6'>
                <table className='w-full table-fixed text-center'>
                    <thead>
                        <tr>
                            <td></td>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Title</td>
                            <td>Price</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        { myBookings.length > 0 
                            &&
                            myBookings.map((service, index) => <tr key={service._id}>
                                <td>{index + 1}</td>
                                <td>{service.name}</td>
                                <td>{service.email}</td>
                                <td>{service.title}</td>
                                <td>{service.price}</td>
                                <td className='space-x-2'>
                                    <Link href={`/my-bookings/update/${service?._id}`}><button className='bg-orange-500 px-3 py-1 rounded-xl'>Edit</button></Link>
                                    <button onClick={() => handleDeleted(service?._id)} className='bg-orange-500 px-3 py-1 rounded-xl'>Delete</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default myBookingsPage;