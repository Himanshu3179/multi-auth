import { GoogleLogin } from "@/components/GoogleLogin";
import LogoutButton from "@/components/LogoutButton";
import { buttonVariants } from "@/components/ui/button";
import { NextAuthOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession(NextAuthOptions)
  console.log(session);

  if (!session) {

    return (
      <div className="flex flex-col gap-5">
        <p className="text-lg">not logged in</p>
        <Link href="/signin"
          className={`${buttonVariants()}`}
        >Sign in</Link>
        <Link href="/signup"
          className={`${buttonVariants()}`}
        >Sign Up</Link>
        <GoogleLogin />
        <button className="butt"> oye hoye</button>
      </div>
    )
  }

  return (
    <div>
      {session?.user?.email}
      <LogoutButton />
    </div>
  );
}
