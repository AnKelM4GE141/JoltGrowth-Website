import React from 'react';
import { Play } from 'lucide-react';

export function HeroVideo() {
  const [isPlaying, setIsPlaying] = React.useState(false);

  return (
    <div className="relative rounded-xl overflow-hidden shadow-2xl group">
      <div className="aspect-video w-full bg-gray-900">
        {!isPlaying ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <div 
              className="w-16 h-16 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm cursor-pointer group-hover:bg-white/20 transition-all duration-300"
              onClick={() => setIsPlaying(true)}
            >
              <Play className="h-8 w-8 text-white fill-white" />
            </div>
          </div>
        ) : null}
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/dQw4w9WgXcQ${isPlaying ? '?autoplay=1' : ''}`}
          title="Agency Showreel"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
          style={{ display: isPlaying ? 'block' : 'none' }}
        />
        {!isPlaying && (
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200&h=675"
            alt="Video thumbnail"
            className="w-full h-full object-cover"
          />
        )}
      </div>
    </div>
  );
}