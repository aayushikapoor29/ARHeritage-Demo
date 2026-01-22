import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <h1 className="text-6xl md:text-8xl font-serif text-stone-800 mb-4 font-bold">404</h1>
      <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">Monument Not Found</h2>
      <p className="text-stone-400 max-w-lg mb-8">
        The heritage site you are looking for seems to be lost in time.
      </p>
      <Link href="/monuments" className="px-8 py-3 bg-orange-600 hover:bg-orange-500 text-white rounded-full font-bold transition-colors shadow-lg">
        Back to Monuments
      </Link>
    </div>
  );
}
