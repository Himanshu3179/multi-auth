"use client"
import React from 'react'
import { signOut } from "next-auth/react"
const LogoutButton = () => {
    return (
        <button
            onClick={() => signOut()}
            className='bg-white text-black p-2 rounded-md border border-black hover:bg-black hover:text-white'
        >
            Logout
        </button>
    )
}

export default LogoutButton