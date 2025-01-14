import React from 'react';
import { ArrowLeft, Youtube, Instagram, Music2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const XIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-x"
  >
    <path d="M4 4l16 16" />
    <path d="M20 4L4 20" />
  </svg>
);

export function ContentPage() {
  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        {/* Header */}
        <div className="mb-12">
          <Link 
            to="/" 
            className="inline-flex items-center text-fuchsia-400 hover:text-fuchsia-300 transition-colors mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-8">
            Content Hub
          </h1>

          {/* Social Links - Reordered */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <a 
              href="https://www.youtube.com/@maxochocinski" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors"
            >
              <Youtube className="h-6 w-6 text-red-500" />
              <span className="text-white font-semibold">YouTube</span>
            </a>
            <a 
              href="https://www.instagram.com/maxochocinski/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors"
            >
              <Instagram className="h-6 w-6 text-pink-500" />
              <span className="text-white font-semibold">Instagram</span>
            </a>
            <a 
              href="https://x.com/maxochocinski" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors"
            >
              <XIcon />
              <span className="text-white font-semibold">X</span>
            </a>
            <a 
              href="https://open.spotify.com/show/5HtTmAe7MXP7NlHp55UgDh?si=c0fdf07e246f41ef" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors"
            >
              <Music2 className="h-6 w-6 text-green-500" />
              <span className="text-white font-semibold">Spotify</span>
            </a>
          </div>

          {/* Rest of the content remains unchanged */}
          <div className="space-y-12">
            {/* YouTube Section */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">Latest Videos</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[1, 2, 3].map((id) => (
                  <div key={id} className="aspect-video rounded-lg overflow-hidden bg-gray-800">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/4ItRcnoNH5E?si=Xt3ATwLDLZ3UGNfJ`}
                      title={`YouTube video ${id}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                ))}
              </div>
            </section>

            {/* Instagram Section */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">Instagram Feed</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[1, 2, 3].map((id) => (
                  <div key={id} className="bg-gray-800 rounded-lg overflow-hidden aspect-square">
                    <iframe
                      src={`https://www.instagram.com/p/POST_ID_${id}/embed`}
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      scrolling="no"
                      allowtransparency="true"
                    ></iframe>
                  </div>
                ))}
              </div>
            </section>

            {/* X Section */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">Latest Posts</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[1, 2, 3].map((id) => (
                  <div key={id} className="bg-gray-800 rounded-lg h-[400px] overflow-hidden">
                    <div className="twitter-tweet-embed h-full">
                      <a 
                        href={`https://twitter.com/joltgrowth/status/TWEET_ID_${id}`}
                        className="twitter-timeline-embedded" 
                        data-theme="dark"
                      >
                        Loading Post...
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Spotify Section */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">Latest Podcasts</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[1, 2, 3].map((id) => (
                  <div key={id} className="bg-gray-800 rounded-lg aspect-[4/3] overflow-hidden">
                    <iframe 
                      src={`https://open.spotify.com/embed/episode/EPISODE_ID_${id}`}
                      width="100%" 
                      height="100%" 
                      frameBorder="0" 
                      allow="encrypted-media"
                    ></iframe>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}