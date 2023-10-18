"use client"
import Image from 'next/image'
import NavBar from '@/components/navbar'
import { signOut, useSession } from 'next-auth/react';

export default function Home() {
    const {data, status} = useSession();
    const logouthandler = async () => {
      await signOut();
    }
    // const data = await getServerSession(authOptions);
    return (
      <main>
        <div>
        {JSON.stringify(data)}
        </div>
      </main>
    )
  }