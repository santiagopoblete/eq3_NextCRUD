import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-xl font-bold">Home</h1>
      <p className="mb-2">This is a page where you can see a lot of cool animals, just like this iguana!!!</p>
      <Image src="https://images.pexels.com/photos/20861/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" width={630} height={375} alt="cool iguana bro"/>
      <p className="mt-2">I hope you like it!</p>
      <p className="mt-2">If you want to see more cool animals follow the links below!</p>
      <div className="flex space-x-4">
        <Link href="/animals/mammals" className="text-blue-500">
          Mammals
        </Link>
        <Link href="/animals/new" className="text-blue-500">
          Birds
        </Link>
        <Link href="/animals/new" className="text-blue-500">
          Fish
        </Link>
        <Link href="/animals/new" className="text-blue-500">
          Reptiles
        </Link>
      </div>
    </div>

  );
}
