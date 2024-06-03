"use client"
import React from 'react'
import { signIn } from 'next-auth/react';
import { buttonVariants } from './ui/button';
export const GoogleLogin = () => {
    const loginWithGoogle = () => {
        signIn('google', { callbackUrl: 'http://localhost:3000/' })
    }
    return (
        <button
            onClick={loginWithGoogle}
            className='btn bg-white text-black
                  hover:bg-neutral-200
            '

        >
            Login with Google
        </button >
    )
}
