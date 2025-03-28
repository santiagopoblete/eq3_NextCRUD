'use client';

import Image from "next/image";

interface ErrorPageProps {
    error: Error;
    reset: () => void;
}


const ErrorPage: React.FC<ErrorPageProps> = ({ error, reset }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen w-7/8 mx-auto">
            <p className="bg-red-500 rounded-xs p-2 text-2xl text-white mb-2">Something went wrong!</p>
            <Image src={'https://i.pinimg.com/736x/47/43/0d/47430d0a38d7c4f3771ee0d6319fb2f8.jpg'} width={250} height={250} alt="gatito explosion"></Image>
            <p className="text-xl">We are sorry for the inconvenience.</p>
            <p className="text-xl">Here&apos;s what happened: </p>
            <p className="w-300px text-sm mb-2">{error.message}</p>
            <button onClick={reset} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                Try Again
            </button>

            <button onClick={() => window.location.href = '/'} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                Go Back Home
            </button>
    
        </div>
    );
};

export default ErrorPage;