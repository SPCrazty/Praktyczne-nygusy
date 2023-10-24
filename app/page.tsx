"use client"
import Image from 'next/image'
import NavBar from '@/components/navbar'
import { signOut, useSession } from 'next-auth/react';
import Slideshow from '@/components/Carousel';
import Bocznaik from '@/components/Boczniak';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import dynamic from 'next/dynamic';
import { SetStateAction, useState } from 'react';
import TextEditor from '@/components/TextEditor';






export default function Home() {
  const {data, status} = useSession();
  const logouthandler = async () => {
    await signOut();
  }

  // const data = await getServerSession(authOptions);
  return (
    <main>
      <div>
        <Slideshow/>
      {JSON.stringify(data)}
      <Bocznaik/>
      <TextEditor/>
      </div>
    </main>
  )
}
