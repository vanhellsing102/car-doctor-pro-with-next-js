"use client"
import Link from 'next/link';
import React from 'react';
import { signIn } from 'next-auth/react'; 
import { useRouter, useSearchParams } from 'next/navigation';
import SocialLogin from '@/components/shared/SocialLogin/SocialLogin';

const loginPage = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const path = searchParams.get("redirect");

    const handleLogin = async(e) =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const res = await signIn("credentials", {
            email,
            password,
            redirect: true,
            callbackUrl: path ? path : "/"
        })
        console.log(res);
        if(res.status === 200){
            router.push('/');
        }
    }
    return (
        <div className='flex justify-center items-center'>
            <div className='flex justify-center items-center flex-col mt-5 border-2 border-black w-1/2 p-10 rounded-xl'>
                <h2 className='text-5xl font-bold text-center'>Sing In</h2>
                <form onSubmit={handleLogin} className='w-full'>
                    <label className='text-orange-700 font-semibold' htmlFor="email">Email</label> 
                    <br />
                    <input type="email" name='email' placeholder='Your Email' className='border-[1px] outline-none w-full border-black py-2 px-7 text-orange-500 rounded-xl' />
                    <label className='text-orange-700 font-semibold' htmlFor="password">Password</label> 
                    <br />
                    <input type="password" name='password' placeholder='Your Password' className='border-[1px] outline-none w-full border-black py-2 px-7 text-orange-500 rounded-xl' />
                    <input type="submit" value={"Sign In"} className='border-[1px] outline-none w-full border-black py-2 mt-3 bg-orange-300 rounded-xl font-bold cursor-pointer' />
                </form>
                <p className='text-3xl font-medium text-center mt-3'>Or Sign In with</p>
                <SocialLogin></SocialLogin>
                <p>Don't have an acount? <Link href={'/register'} className='font-semibold text-orange-500'>Register</Link></p>
            </div>
        </div>
    );
};

export default loginPage;