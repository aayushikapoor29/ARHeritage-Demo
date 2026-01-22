'use client';

import dynamic from 'next/dynamic';

const ModelARViewer = dynamic(() => import('./ModelARViewer'), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex flex-col items-center justify-center bg-stone-900 border border-stone-800 rounded-xl">
       <div className="w-12 h-12 border-4 border-orange-500/30 border-t-orange-500 rounded-full animate-spin mb-4"></div>
       <p className="text-orange-400 font-medium tracking-wide text-sm animate-pulse">LOADING VIEWER...</p>
    </div>
  )
});

interface ModelARViewerWrapperProps {
  src: string;
  iosSrc?: string;
  poster?: string;
  alt: string;
}

export default function ModelARViewerWrapper(props: ModelARViewerWrapperProps) {
  return <ModelARViewer {...props} />;
}
