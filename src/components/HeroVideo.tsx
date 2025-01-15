import React, { useState, useRef, useEffect } from 'react';
import { Play, RefreshCw } from 'lucide-react';

export function HeroVideo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoUrl = 'https://uqevveimyjvfnobrwdjk.supabase.co/storage/v1/object/public/VSL/Jan15vsl.mp4?t=2025-01-15T18%3A26%3A34.471Z';

  useEffect(() => {
    // Preload video metadata
    if (videoRef.current) {
      videoRef.current.preload = 'metadata';
    }
  }, []);

  const handlePlay = () => {
    setIsLoading(true);
    setIsPlaying(true);
    setError(false);

    if (videoRef.current) {
      // Attempt to load and play the video
      videoRef.current.load();
      const playPromise = videoRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsLoading(false);
          })
          .catch(err => {
            console.error('Video playback failed:', err);
            setError(true);
            setIsLoading(false);
            setIsPlaying(false);
          });
      }
    }
  };

  const handleRetry = () => {
    setError(false);
    handlePlay();
  };

  const handleError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    console.error("Video error details:", {
      error: e.currentTarget.error,
      networkState: e.currentTarget.networkState,
      readyState: e.currentTarget.readyState,
      currentSrc: e.currentTarget.currentSrc
    });
    setError(true);
    setIsLoading(false);
    setIsPlaying(false);
  };

  const handleCanPlay = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative rounded-xl overflow-hidden shadow-2xl group">
      <div className="aspect-video w-full bg-gray-900">
        <video
          ref={videoRef}
          width="100%"
          height="100%"
          controls={isPlaying}
          className={`absolute inset-0 w-full h-full ${!isPlaying ? 'hidden' : ''}`}
          onError={handleError}
          onCanPlay={handleCanPlay}
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {!isPlaying && (
          <>
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200&h=675"
              alt="Video thumbnail"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={handlePlay}
                className="w-16 h-16 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm cursor-pointer group-hover:bg-white/20 transition-all duration-300"
                aria-label="Play video"
              >
                <Play className="h-8 w-8 text-white fill-white" />
              </button>
            </div>
          </>
        )}

        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900/90">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white" />
          </div>
        )}

        {error && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900/90 gap-4">
            <p className="text-white text-center px-4">
              Sorry, there was an error loading the video.
            </p>
            <button
              onClick={handleRetry}
              className="flex items-center gap-2 px-4 py-2 bg-fuchsia-600 hover:bg-fuchsia-700 transition-colors rounded-md text-white"
            >
              <RefreshCw className="h-4 w-4" />
              Retry
            </button>
          </div>
        )}
      </div>
    </div>
  );
}