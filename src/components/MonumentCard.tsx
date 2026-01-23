import Link from 'next/link';
import Image from 'next/image';
import { Monument } from '@/data/monuments';
import { getPosterPath } from '@/lib/paths';

interface MonumentCardProps {
  monument: Monument;
}

export default function MonumentCard({ monument }: MonumentCardProps) {
  return (
    <Link href={`/monuments/${monument.slug}`} className="group block bg-stone-900 rounded-lg overflow-hidden border border-stone-800 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-900/10">
      <div className="relative h-64 w-full overflow-hidden">
        {/* Placeholder for when image is missing or loading, using a gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-stone-800 to-stone-900" />
        {monument.posterPath && (
           <Image
            src={getPosterPath(monument.slug)}
            alt={monument.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
           <span className="inline-block px-2 py-1 text-xs font-semibold tracking-wider text-orange-400 uppercase bg-stone-950/50 backdrop-blur-sm rounded mb-2 border border-orange-500/20">
            {monument.city}, {monument.state}
          </span>
          <h3 className="text-xl font-bold text-white mb-1 font-serif group-hover:text-orange-200 transition-colors">{monument.title}</h3>
        </div>
      </div>
      <div className="p-4">
        <p className="text-stone-400 text-sm line-clamp-2 leading-relaxed">
          {monument.shortDescription}
        </p>
        <div className="mt-4 flex items-center text-orange-400 text-sm font-medium opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            View in AR <span className="ml-2">→</span>
        </div>
      </div>
    </Link>
  );
}
