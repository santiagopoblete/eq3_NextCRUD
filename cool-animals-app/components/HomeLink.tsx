import Link from 'next/link';
export default function HomeLink() {
  return (
    <div className="flex space-x-4">
        <Link href="/" className="text-blue-500 underline hover:text-blue-700">
          Wanna go home?
        </Link>
    </div>
  );
}