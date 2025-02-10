import React from 'react';
import { FaFacebookSquare, FaGoogle, FaLinkedin } from 'react-icons/fa';

const SocialLogin = () => {
    return (
        <div className='space-x-4 mt-3 text-3xl text-orange-500'>
            <button><FaFacebookSquare></FaFacebookSquare></button>
            <button><FaLinkedin></FaLinkedin></button>
            <button><FaGoogle></FaGoogle></button>
        </div>
    );
};

export default SocialLogin;