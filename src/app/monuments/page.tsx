import MonumentCard from '@/components/MonumentCard';
import { monuments } from '@/data/monuments';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Monuments | Indian Heritage AR',
  description: 'Browse our collection of Indian heritage monuments available in Augmented Reality.',
};

export default function MonumentsPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif text-white">Explore Monuments</h1>
        <p className="text-stone-400 max-w-2xl mx-auto">
          Select a monument to view its history, fun facts, and interact with it in 3D or Augmented Reality.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {monuments.map((monument) => (
          <MonumentCard key={monument.slug} monument={monument} />
        ))}
      </div>
    </div>
  );
}
