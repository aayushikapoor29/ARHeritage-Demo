import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-stone-900/90 backdrop-blur-sm border-b border-stone-800 text-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="font-serif text-xl tracking-wider text-orange-400 hover:text-orange-300 transition-colors">
            INDIAN HERITAGE
          </Link>
          <div className="flex space-x-8">
            <Link href="/monuments" className="text-sm font-medium hover:text-orange-400 transition-colors uppercase tracking-widest">
              Monuments
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
