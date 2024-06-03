"use client"
import { useRouter } from 'next/navigation';
import React from 'react'

type User = {
    name: string | null;
    email: string;
    image: string | null;
};

type ProfileFormProps = {
    user: User;
};

const ProfileForm: React.FC<ProfileFormProps> = ({ user }) => {
    const [details, setDetails] = React.useState({
        name: user.name || '',
    })

    const router = useRouter()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.currentTarget
        const name = details.name
        if (!name) {
            alert('Please fill in all fields')
            return
        }
        handleUpdate(name)
    }

    const handleUpdate = async (name: string) => {

        console.log("name", name)

        const res = await fetch('/api/user', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name })
        })

        const data = await res.json()
        console.log(data)

        if (data.message === 'success') {
            alert('Profile updated')
            router.push('/')
        }
        else {
            alert('Profile not updated')
        }

    }

    return (
        <div className='w-full flex flex-col items-center'>
            <form action="" className='flex flex-col max-w-md gap-3 w-full'
                onSubmit={handleSubmit}
            >
                <input type="text" placeholder="name" name="name" id="name"
                    className='bg-transparent border p-2 rounded-lg'
                    value={details.name}
                    onChange={(e) => setDetails({ ...details, name: e.target.value })}
                />
                <input type="text" placeholder="email" name="email" id="email"
                    className='bg-transparent border p-2 rounded-lg 
                    cursor-not-allowed
                    '
                    value={user.email}
                    disabled
                />
                <button type="submit"
                    className='bg-white text-black p-2 rounded-md border border-black hover:bg-black hover:text-white'
                >Update</button>
            </form>
        </div>
    )
}

export default ProfileForm