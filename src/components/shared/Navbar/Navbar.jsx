"use client";
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    const session = useSession();
    // console.log(session);
    const navOptions = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: "About",
            path: '/about'
        },
        {
            title: "Service",
            path: '/service'
        },
        {
            title: "Blogs",
            path: '/blogs'
        },
        {
            title: "Contact",
            path: '/contact'
        },
        {
            title: "My Bookings",
            path: '/my-bookings'
        }
    ]
    return (
        <div className='flex justify-between items-center py-2 bg-gray-300 px-10'>
            <Link className='text-3xl font-semibold' href={'/'}>Card Doctor Pro</Link>
            <div className='font-medium flex gap-5'>
                {
                    navOptions.map(link => <Link className='hover:text-red-500' key={link.path} href={link.path}>{link.title}</Link>)
                }
            </div>
            <div>
                {
                    session.data 
                    ?
                    <button onClick={() => signOut()} className='bg-red-400 px-3 py-1 rounded-sm'>Logout</button>
                    :
                    <Link href={'/login'} className='bg-red-400 px-3 py-1 rounded-sm'>Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;