import Image from "next/image";
import HomeLink from "@/components/HomeLink";
import { redirect } from "next/navigation";

async function getFishData(fishName: string) {
    const res = await fetch('https://api.api-ninjas.com/v1/animals?name=' + fishName, {
        method: 'GET',
        headers: {
            'X-Api-Key': process.env.ANIMALS_KEY ?? '',
        },
        cache: 'no-store', // Para asegurarte de que no cachea la respuesta
    });

    if (!res.ok) {
        return undefined;
    }

    const data = await res.json();

    return data;
}

export default async function Fish() {
    const fishData = await getFishData('clownFish');

    if (!fishData) {
        redirect('/');
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-xl font-bold">Fish</h1>
            <p className="mb-2">This is a page where you can see a lot of cool Fish, just like this Clown!!!</p>
            <Image src="https://images.pexels.com/photos/128756/pexels-photo-128756.jpeg?auto=compress&cs=tinysrgb&w=600" width={600} height={500} alt="A clownfish!" />
            <p className="mt-2">Here&apos;s some cool data about this fish:</p>
            <p>Their name is {fishData[0].name}</p>
            <p>They are from the family: {fishData[0].taxonomy.family}</p>
            <p>And they can be found in the {fishData[0].locations}</p>
            <p>Their biggest enemy is the {fishData[0].characteristics.biggest_threat}</p>
            <p className="mt-2">If you want to see more cool Fish follow the links below!</p>
            <HomeLink />
        </div>
    );
}
