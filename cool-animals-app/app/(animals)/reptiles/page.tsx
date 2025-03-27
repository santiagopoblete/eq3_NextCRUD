import Image from "next/image";
import HomeLink from "@/components/HomeLink";

export default function Reptiles() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-xl font-bold">Reptiles</h1>
        <p className="mb-2">This is a page where you can see a lot of cool reptiles, just like this elephant!!!</p>
        <Image src="https://.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=600" width={600} height={500} alt="Thats an elephant!"/>
        <p className="mt-2">I hope you like it!</p>
        <p className="mt-2">If you want to see more cool reptiles follow the links below!</p>
        <HomeLink />
        </div>
    
    );
}