'use client';

import Image from "next/image";
import HomeLink from "@/components/HomeLink";

import { getFishData } from "@/app/actions";

export default function Fish() {
    const fishData = getFishData('clownFish');

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-xl font-bold">Fish</h1>
        <p className="mb-2">This is a page where you can see a lot of cool Fish, just like this Clown!!!</p>
        <Image src="https://images.pexels.com/photos/128756/pexels-photo-128756.jpeg?auto=compress&cs=tinysrgb&w=600" width={600} height={500} alt="Thats an elephant!"/>
        <p className="mt-2">Here&apos;s some cool data about this fish:</p>
        <p className="mt-2">Name: {fishData.name}</p>
        <p className="mt-2">If you want to see more cool Fish follow the links below!</p>
        <HomeLink />
        </div>
    
    );
}