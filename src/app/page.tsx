import Link from 'next/link';
import MonumentCard from '@/components/MonumentCard';
import { monuments } from '@/data/monuments';

export default function Home() {
  const featuredMonuments = monuments.slice(0, 3);

  return (
    <div className="flex flex-col min-h-[calc(100vh-64px)]">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background - in a real app this might be a video or high res image */}
        <div className="absolute inset-0 bg-stone-900">
           <div className="absolute inset-0 bg-[url('/images/hero-pattern.png')] opacity-10 mix-blend-overlay"></div>
           <div className="absolute inset-0 bg-gradient-to-b from-stone-950/50 via-transparent to-stone-950"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-serif tracking-tight">
            Explore <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-200">Indian Heritage</span> <br /> in Augmented Reality
          </h1>
          <p className="text-lg md:text-xl text-stone-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Experience the architectural marvels of India right in your living room. 
            Immersive, detailed, and accessible on your mobile device.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/monuments" 
              className="px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white rounded-full font-bold transition-all transform hover:scale-105 shadow-lg shadow-orange-900/50"
            >
              Start Exploring
            </Link>
            <Link 
              href="#featured" 
              className="px-8 py-4 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-full font-bold transition-all border border-stone-700"
            >
              Featured Sites
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section id="featured" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif text-white">Featured Monuments</h2>
          <div className="h-1 w-24 bg-orange-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredMonuments.map((monument) => (
            <MonumentCard key={monument.slug} monument={monument} />
          ))}
        </div>

        <div className="mt-16 text-center">
            <Link href="/monuments" className="inline-flex items-center text-orange-400 hover:text-orange-300 font-medium transition-colors border-b border-orange-400/30 hover:border-orange-300 pb-1">
                View All Monuments <span className="ml-2">→</span>
            </Link>
        </div>
      </section>
    </div>
  );
}
