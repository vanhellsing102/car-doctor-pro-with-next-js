"use client";   
import SocialLogin from '@/components/shared/SocialLogin/SocialLogin';
import Link from 'next/link';
import React from 'react';

const registerPage = () => {
    const handleRegister = async(e) =>{
        e.preventDefault();
        const newUser = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
        };
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/register/api`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newUser)
        })
        console.log(res)
    }
    return (
        <div className='flex justify-center items-center'>
            <div className='flex justify-center items-center flex-col mt-5 border-2 border-black w-1/2 p-10 rounded-xl'>
                <h2 className='text-5xl font-bold text-center'>Sing Up</h2>
                <form onSubmit={handleRegister} className='w-full'>
                    <label className='text-orange-700 font-semibold' htmlFor="name">Name</label> 
                    <br />
                    <input type="text" name='name' placeholder='Your Name' className='border-[1px] outline-none w-full border-black py-2 px-7 text-orange-500 rounded-xl' />
                    <label className='text-orange-700 font-semibold' htmlFor="email">Email</label> 
                    <br />
                    <input type="email" name='email' placeholder='Your Email' className='border-[1px] outline-none w-full border-black py-2 px-7 text-orange-500 rounded-xl' />
                    <label className='text-orange-700 font-semibold' htmlFor="password">Password</label> 
                    <br />
                    <input type="password" name='password' placeholder='Your Password' className='border-[1px] outline-none w-full border-black py-2 px-7 text-orange-500 rounded-xl' />
                    <input type="submit" value={"Sign Up"} className='border-[1px] outline-none w-full border-black py-2 mt-3 bg-orange-300 rounded-xl font-bold cursor-pointer' />
                </form>
                <p className='text-3xl font-medium text-center mt-3'>Or Sign Up with</p>
                <SocialLogin></SocialLogin>
                <p>Already have an acount? <Link href={'/login'} className='font-semibold text-orange-500'>Login</Link></p>
            </div>
        </div>
    );
};

export default registerPage;