"use client"
import React from 'react'
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
const SignInForm = () => {
    const router = useRouter()
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.currentTarget
        const email = form.email.value
        const password = form.password.value
        if (!email || !password) {
            alert('Please fill in all fields')
            return
        }
        handleSignUp(email, password)
    }

    const handleSignUp = async (email: string, password: string) => {
        const signInData = await signIn('credentials', {
            email,
            password,
            redirect: false
        })
        if (signInData?.error) {
            alert(signInData.error)
        }
        else {
            router.push('/')
            router.refresh()
        }
    }

    return (
        <div className='w-full flex flex-col items-center'>
            <form action="" className='flex flex-col max-w-md gap-3 w-full'
                onSubmit={handleSubmit}
            >
                <input type="text" placeholder="email" name="email" id="email"
                    className='bg-transparent border p-2 rounded-lg'
                />
                <input type="password" placeholder="password" name="password"
                    className='bg-transparent border p-2 rounded-lg'
                    id="password" />
                <button type="submit"
                    className='bg-white text-black p-2 rounded-md border border-black hover:bg-black hover:text-white'
                >Sign In</button>
            </form>
            <p className='flex gap-2'>
                Dont have an account?
                <Link href="/signup" className='text-blue-500 underline'>
                    Sign Up
                </Link>
            </p>
        </div>
    )
}

export default SignInForm