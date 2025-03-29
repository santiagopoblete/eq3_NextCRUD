'use client'
import { useActionState } from "react";
import Image from "next/image";

async function meow(previousState: any) {
  await new Promise(resolve => {
    setTimeout(resolve, 1000);
  });

  if(Math.floor(Math.random() * 3) == 2){
    return "Error"
  }

  if(previousState=="Error"){
    return "Meow"
  } else {
    return previousState+"w";
  }
}

export default function StatefulForm({}) {
  const [state, formAction, pending] = useActionState(meow, 'Meow');
  return (
    <form>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Image src="https://images.pexels.com/photos/1576193/pexels-photo-1576193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" width={600} height={500} alt="Thats a cat!"/>
      {pending? "Loading..." : state}
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" formAction={formAction} disabled={pending}>Meow</button>
      </div>
    </form>
  )
}