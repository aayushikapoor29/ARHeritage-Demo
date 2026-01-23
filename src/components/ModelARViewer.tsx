'use client';

import '@google/model-viewer';
import '@google/model-viewer';
import { useState, useRef, useEffect } from 'react';

interface ModelARViewerProps {
  src: string;
  iosSrc?: string;
  poster?: string;
  alt: string;
}

const ModelViewer = 'model-viewer' as any;

export default function ModelARViewer({ src, iosSrc, poster, alt }: ModelARViewerProps) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const viewerRef = useRef<HTMLElement>(null);
  
  // ... existing code ...


  useEffect(() => {
    const viewer = viewerRef.current;
    if (!viewer) return;

    const onLoad = () => setLoading(false);
    const onError = () => {
        setLoading(false);
        setError(true);
    };

    viewer.addEventListener('load', onLoad);
    viewer.addEventListener('error', onError);

    return () => {
      viewer.removeEventListener('load', onLoad);
      viewer.removeEventListener('error', onError);
    };
  }, []);

  if (error) {
     return (
        <div className="w-full h-full flex items-center justify-center bg-stone-900 text-stone-500 flex-col gap-4">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-red-500/50">
             <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
           </svg>
           <p>Failed to load 3D Model</p>
        </div>
     );
  }

  return (
    <div className="relative w-full h-full bg-stone-900 rounded-xl overflow-hidden">
      {loading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-stone-900/80 backdrop-blur-sm pointer-events-none transition-opacity">
           <div className="w-12 h-12 border-4 border-orange-500/30 border-t-orange-500 rounded-full animate-spin mb-4"></div>
           <p className="text-orange-400 font-medium tracking-wide text-sm animate-pulse">LOADING 3D MODEL...</p>
        </div>
      )}
      
      <ModelViewer
        ref={viewerRef}
        src={src}
        ios-src={iosSrc}
        poster={poster}
        alt={alt}
        ar
        ar-modes="scene-viewer quick-look webxr"
        camera-controls
        auto-rotate
        loading="eager"
        className="w-full h-full"
        style={{ width: '100%', height: '100%', '--poster-color': 'transparent' } as any}
      >
          {/* Custom AR Button */}
          <button slot="ar-button" className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-orange-600 hover:bg-orange-500 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all hover:scale-105 flex items-center gap-2 z-20">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                 <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd" />
               </svg>
             <span>View in AR</span>
          </button>
      </ModelViewer>
    </div>
  );
}
