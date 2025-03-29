'use client'

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AuthButton from "@/components/AuthButton";
import { use } from "react";

export default function Home() {
  const router = useRouter()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-xl font-bold">Home</h1>
      <p className="mb-2">This is a page where you can see a lot of cool animals, just like this iguana!!!</p>
      <Image src="https://images.pexels.com/photos/20861/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" width={630} height={375} alt="cool iguana bro"/>
      <p className="mt-2">I hope you like it!</p>
      <p className="mt-2">If you want to see more cool animals follow the links below!</p>
      <div className="flex space-x-4 mt-4 mb-4 bg-blue-900 p-4 rounded">
        <Link href="/mammals" className="text-blue-500 hover:text-blue-700">
          Mammals
        </Link>
        <Link href="/birds" className="text-blue-500 hover:text-blue-700">
          Birds
        </Link>
        <Link href="/fish" className="text-blue-500 hover:text-blue-700">
          Fish
        </Link>
        <Link href="/reptiles" className="text-blue-500 hover:text-blue-700">
          Reptiles
        </Link>
      </div>
      <AuthButton />
      <div style={{margin:10}}>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=> router.push('/cat')}>
            Cat
      </button>
      </div>
    </div>

  );
}
