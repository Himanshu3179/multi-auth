import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    const navlink = [
        {
            name: 'Home',
            href: '/'
        },
        {
            name: 'Sign Up',
            href: '/signup'
        },
        {
            name: 'Sign In',
            href: '/signin'
        },
        {
            name: 'Profile',
            href: '/profile'
        }
    ]
    return (
        <div
            className='p-4
                fixed top-0 left-0 w-full z-50
                rounded-b-xl    
                bg-base-100
                shadow-lg
            '
        >
            <ul className='flex gap-4'>
                {navlink.map((link, index) => (
                    <li key={index}>
                        <Link href={link.href}
                            className='text-white hover:text-blue-500'
                        >{link.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Navbar