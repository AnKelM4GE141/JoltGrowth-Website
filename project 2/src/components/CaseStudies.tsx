import React, { useState } from 'react';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

// Only show the highlighted cases on the home page
const highlightedCases = [
  {
    title: '100k Follower Coach: from $0K to $15K/mo in 6 months',
    description: 'Ben grew his audience on instagram for just about 2 years having sold less than $9k in one off coaching coaching packages that never quite landed with his audience. He was getting overwhelmed having to do 50 million things tring to mannage his social media and grow his coaching business switch from ideation, recording, and editing to anylitical, marketing, sales, outreach modes all the time. He was spinning his wheels getting no where. Then we got together knowing he was sitting on a goldmine if only we found the right offer &m messaging. Within the first couple weeks we collected just under $9,000 & locked in making a custom tailored course around this first group. A month or so later we reopened the doors with a trained inbound setter and outbound sales team. It started off slow making abit here and there, but eventually we put the pieces together. Youtube Flywheel building deeper connection, messaging improvments, the sales team bot better and we got better at leading them, we dialed the backend, and started paid ads. 10k a month came, then $15/m became consistent. Ben moved out of his parents basement and into his dream corner appartment in a Boston highrise. Since then Jolt growth has been about making our clients and parnters life changing money as well as the imacact of allowing our clients to change so many more lives through their coaching & communities.',
    image: 'https://uqevveimyjvfnobrwdjk.supabase.co/storage/v1/object/public/case-studies/BenXMax.png',
    category: 'From Scratch',
  },
  {
    title: 'Counsulting for Agency running $150K/mo Operation',
    description: 'Zack & Isiah were running a very large sales and management operation for one of the biggest miami tiktok influencer in the tiktok shopspace with over 5 sixfigure tiktok shop earners as coaches. There were contstant payment porcessor problems and logistical nightmares that needed to be solved fast using backend insfracture updates, difficult conversations, and negotiations at times. I was on the sidelines helping with these this operator agency solves probems fast',
    image: 'https://uqevveimyjvfnobrwdjk.supabase.co/storage/v1/object/public/case-studies/LakeWylieCounsulting.png',
    category: 'High Pressure Problem Solving',
  },
  {
    title: 'Dating Coach: $40k in 2 weeks',
    description: 'We Made a detailed Marketing Campaign, ',
    image: 'https://uqevveimyjvfnobrwdjk.supabase.co/storage/v1/object/public/case-studies/QoH.png',
    category: 'Process Optimization',
  }
];

export function CaseStudies() {
  return (
    <div id="case-studies" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="border border-gray-800/50 rounded-2xl p-8 backdrop-blur-sm">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left side heading */}
            <div className="lg:w-1/4">
              <div className="sticky top-24">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Featured Case Studies
                </h2>
                <p className="mt-4 text-lg leading-8 text-gray-400">
                  Highlighted success stories from our client partnerships
                </p>
                <Link 
                  to="/case-studies" 
                  className="inline-flex items-center mt-6 text-fuchsia-400 hover:text-fuchsia-300 transition-colors"
                >
                  View all cases <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right side cases - Show only highlighted cases */}
            <div className="lg:w-3/4">
              <div className="grid grid-cols-1 gap-8">
                {highlightedCases.map((caseStudy) => {
                  const [isExpanded, setIsExpanded] = useState(false);
                  const truncatedDescription = caseStudy.description.slice(0, 150) + '...';

                  return (
                    <div 
                      key={caseStudy.title}
                      className="group relative overflow-hidden rounded-2xl bg-gray-800/50 hover:bg-gray-800/80 transition-colors duration-300"
                    >
                      <div className="relative aspect-[16/9] overflow-hidden rounded-t-2xl">
                        <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600/20 to-purple-600/20 mix-blend-multiply group-hover:opacity-50 transition-opacity duration-300" />
                        <img
                          src={caseStudy.image}
                          alt={caseStudy.title}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-8">
                        <div className="flex items-center gap-4 mb-4">
                          <span className="inline-flex items-center rounded-full bg-fuchsia-400/10 px-3 py-1 text-sm font-medium text-fuchsia-400 ring-1 ring-inset ring-fuchsia-400/20">
                            {caseStudy.category}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">{caseStudy.title}</h3>
                        <p className="text-gray-400 mb-6">
                          {isExpanded ? caseStudy.description : truncatedDescription}
                        </p>
                        <button 
                          onClick={() => setIsExpanded(!isExpanded)}
                          className="inline-flex items-center text-fuchsia-400 hover:text-fuchsia-300 transition-colors"
                        >
                          {isExpanded ? (
                            <>Show Less <ChevronUp className="ml-2 h-4 w-4" /></>
                          ) : (
                            <>Read case study <ChevronDown className="ml-2 h-4 w-4" /></>
                          )}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}