"use client"
import Link from 'next/link'
import React from 'react'
import { GoogleLogin } from './GoogleLogin'
const SignUpForm = () => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.currentTarget
        const email = form.email.value
        const password = form.password.value
        const confirmPassword = form.confirmPassword.value
        if (password !== confirmPassword) {
            alert('Passwords do not match')
            return
        }

        if (!email || !password || !confirmPassword) {
            alert('Please fill in all fields')
            return
        }

        handleSignUp(email, password)
    }

    const handleSignUp = async (email: string, password: string) => {
        const response = await fetch('/api/user/signup', {
            method: 'POST',
            body: JSON.stringify({ email, password })
        })
        const data = await response.json()
        if (response.ok) {
            console.log(response);
        } else {
            alert(data.message)
        }
    }


    return (
        <div className='w-full flex flex-col items-center
        hero bg-base-200
        h-full
        pt-20
        '>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form action="" className='flex flex-col max-w-md gap-3 w-full
                    card-body
                '
                    onSubmit={handleSubmit}
                >
                    <input type="text" placeholder="email" name="email" id="email"
                        className="input input-bordered w-full max-w-xs"
                    />


                    <input type="password" placeholder="password" name="password"
                        className="input input-bordered w-full max-w-xs"
                        id="password" />
                    <input type="password" placeholder="confirm password"
                        className="input input-bordered w-full max-w-xs"
                        name="confirmPassword" id="confirmPassword" />
                    <button type="submit"
                        className='btn btn-primary'

                    >Sign Up</button>
                    <GoogleLogin />
                    <p className='flex gap-2 justify-center mt-5'>
                        Already have an account?
                        <Link href="/signin" className='link link-primary'>
                            Sign In
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default SignUpForm