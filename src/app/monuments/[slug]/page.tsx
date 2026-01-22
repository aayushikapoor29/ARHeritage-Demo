import { monuments, Monument } from '@/data/monuments';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ModelARViewerWrapper from '@/components/ModelARViewerWrapper';

// Helper to find monument
const getMonument = (slug: string): Monument | undefined => {
  return monuments.find((m) => m.slug === slug);
};

export function generateStaticParams() {
  return monuments.map((monument) => ({
    slug: monument.slug,
  }));
}

// Correct type for Next.js App Router dynamic pages
type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const resolvedParams = await params;
  const monument = getMonument(resolvedParams.slug);
  
  if (!monument) {
    return {
      title: 'Monument Not Found',
    };
  }
  
  return {
    title: `${monument.title} | Indian Heritage AR`,
    description: monument.shortDescription,
  };
}

export default async function MonumentDetail({ params }: Props) {
  const resolvedParams = await params;
  const monument = getMonument(resolvedParams.slug);

  if (!monument) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100">
      {/* Back button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link href="/monuments" className="text-orange-400 hover:text-orange-300 transition-colors flex items-center gap-2">
          ← Back to Monuments
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 pb-20">
        
        {/* Left Column: 3D Viewer */}
        <div className="h-[400px] lg:h-[600px] bg-stone-900 rounded-xl overflow-hidden border border-stone-800 relative">
          <ModelARViewerWrapper
            src={monument.modelGlbPath}
            iosSrc={monument.modelUsdzPath}
            poster={monument.posterPath}
            alt={`3D model of ${monument.title}`}
          />
        </div>

        {/* Right Column: Details */}
        <div className="space-y-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-orange-900/40 text-orange-300 border border-orange-700/50 px-3 py-1 rounded text-xs uppercase tracking-widest font-bold">
                {monument.city}, {monument.state}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-serif text-white mb-6">{monument.title}</h1>
            <p className="text-stone-300 text-lg leading-relaxed border-l-4 border-orange-500 pl-6 italic">
              {monument.shortDescription}
            </p>
          </div>

          <div className="prose prose-invert prose-orange max-w-none">
            <h3 className="text-xl font-serif text-white">About</h3>
            <p className="text-stone-400 leading-relaxed">
              {monument.longDescription}
            </p>
          </div>

          <div className="bg-stone-900/50 p-6 rounded-xl border border-stone-800">
            <h3 className="text-lg font-bold font-serif text-white mb-4 border-b border-stone-800 pb-2">Interesting Facts</h3>
            <ul className="space-y-3">
              {monument.facts.map((fact, index) => (
                <li key={index} className="flex gap-3 text-stone-300">
                  <span className="text-orange-500 font-bold">•</span>
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-bold text-stone-500 uppercase tracking-widest mb-3">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {monument.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-stone-800 rounded-full text-xs text-stone-400 border border-stone-700">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
