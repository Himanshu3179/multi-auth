import React from 'react'
import { getServerSession } from 'next-auth'
import { NextAuthOptions } from '@/lib/authOptions'
import db from "@/lib/db"
import ProfileForm from '@/components/ProfileForm'
const page = async () => {
    const session = await getServerSession(NextAuthOptions);
    console.log(session);
    if (!session || !session.user) {
        return (
            <div>
                <p>not logged in</p>
            </div>
        )
    }

    const user = await db.user.findUnique({
        where: {
            email: session.user.email as string 
        },
        select: {
            email: true,
            name: true,
            image: true
        }

    })

    if (!user) {
        return (
            <div>
                <p>user not found</p>
            </div>
        )
    }

    return (
        <div>
            <ProfileForm user={user} />
        </div>
    )
}

export default page


