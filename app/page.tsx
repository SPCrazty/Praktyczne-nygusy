"use client"
import Image from 'next/image'
import NavBar from '@/components/navbar'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route';
import { useSession } from 'next-auth/react';


export default function Home() {
  const {data} = useSession();
  // const data = await getServerSession(authOptions);
  return (
    <main>
      <NavBar />
      {JSON.stringify(data)}
    </main>
  )
}
