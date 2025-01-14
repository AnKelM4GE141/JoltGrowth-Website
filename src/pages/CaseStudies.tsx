import React from 'react';
import { ArrowLeft, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const cases = [
  {
    title: '100k Follower Coach: from $0K to $15K/mo in 6 months',
    description: 'Ben grew his audience on instagram for just about 2 years having sold less than $9k in one off coaching coaching packages that never quite landed with his audience. He was getting overwhelmed having to do 50 million things tring to mannage his social media and grow his coaching business switch from ideation, recording, and editing to anylitical, marketing, sales, outreach modes all the time. He was spinning his wheels getting no where. Then we got together knowing he was sitting on a goldmine if only we found the right offer &m messaging. Within the first couple weeks we collected just under $9,000 & locked in making a custom tailored course around this first group. A month or so later we reopened the doors with a trained inbound setter and outbound sales team. It started off slow making abit here and there, but eventually we put the pieces together. Youtube Flywheel building deeper connection, messaging improvments, the sales team bot better and we got better at leading them, we dialed the backend, and started paid ads. 10k a month came, then $15/m became consistent. Ben moved out of his parents basement and into his dream corner appartment in a Boston highrise. Since then Jolt growth has been about making our clients and parnters life changing money as well as the imacact of allowing our clients to change so many more lives through their coaching & communities.',
    image: 'https://uqevveimyjvfnobrwdjk.supabase.co/storage/v1/object/public/case-studies/BenXMax.png',
    category: 'From Scratch',
    /* stats: [
      { label: 'Initial Revenue', value: '$0/month' },
      { label: 'Current Revenue', value: '$15K/month' },
      { label: 'Time Frame', value: '6 months' },
      { label: 'ROI', value: '1500%' }
    ] */
  },
  {
    title: 'Sales Infrastructure Overhaul',
    description: 'We undertook a comprehensive sales infrastructure project that transformed the client\'s entire sales process. We built a professional landing page featuring a compelling VSL and authentic video testimonials from the team. The project included setting up detailed appointment setting SOPs, creating a comprehensive Notion Team Training Hub, and implementing a secure Google Drive system for team file management. A key component was the implementation of a CRM system for lead tracking and management. We also developed sophisticated automations to ensure smooth booking processes, high show rates, seamless student onboarding, and accurate financial tracking. This integrated system dramatically improved operational efficiency and sales performance.',
    image: 'https://uqevveimyjvfnobrwdjk.supabase.co/storage/v1/object/public/case-studies/mindsetmattersbuild.png',
    category: 'Systems Development',
    /* stats: [
      { label: 'Sales Funnel', value: '✅ Built' },
      { label: 'Pro Grade VSL', value: '✅ Built' },
      { label: 'Team Training Hub', value: '✅ Built' },
      { label: 'Sales Process Automations', value: '✅ Built' }
    ] */
  },
  {
    title: 'Counsulting for Agency running $150K/mo Operation',
    description: 'Zack & Isiah were running a very large sales and management operation for one of the biggest miami tiktok influencer in the tiktok shopspace with over 5 sixfigure tiktok shop earners as coaches. There were contstant payment porcessor problems and logistical nightmares that needed to be solved fast using backend insfracture updates, difficult conversations, and negotiations at times. I was on the sidelines helping with these this operator agency solves probems fast',
    image: 'https://uqevveimyjvfnobrwdjk.supabase.co/storage/v1/object/public/case-studies/LakeWylieCounsulting.png',
    category: 'High Pressure Problem Solving',
    /* stats: [
      { label: 'Operation Size', value: '$150K/month' },
      { label: 'Problems Solved', value: '15+' },
      { label: 'Time Frame', value: 'Ongoing' },
      { label: 'Success Rate', value: '100%' }
    ] */
  },
  {
    title: 'Dating Coach: $40k in 2 weeks',
    description: 'We Made a detailed Marketing Campaign, ',
    image: 'https://uqevveimyjvfnobrwdjk.supabase.co/storage/v1/object/public/case-studies/QoH.png',
    category: 'Process Optimization',
    /* stats: [
      { label: 'Campaign Revenue', value: '$40K' },
      { label: 'Time Frame', value: '2 weeks' },
      { label: 'Conversion Rate', value: '25%' },
      { label: 'ROI', value: '800%' }
    ] */
  }
];

export function CaseStudiesPage() {
  const [expandedCase, setExpandedCase] = React.useState<string | null>(null);

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
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Our Success Stories
          </h1>
          <p className="mt-4 text-lg text-gray-400">
            Explore how we've helped coaches transform their businesses and achieve remarkable growth
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 gap-12">
          {cases.map((caseStudy) => (
            <div 
              key={caseStudy.title}
              className="group relative overflow-hidden rounded-2xl bg-gray-800/50 hover:bg-gray-800/80 transition-colors duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Image Section */}
                <div className="relative aspect-[16/9] lg:aspect-auto overflow-hidden rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600/20 to-purple-600/20 mix-blend-multiply group-hover:opacity-50 transition-opacity duration-300" />
                  <img
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="inline-flex items-center rounded-full bg-fuchsia-400/10 px-3 py-1 text-sm font-medium text-fuchsia-400 ring-1 ring-inset ring-fuchsia-400/20">
                      {caseStudy.category}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-4">{caseStudy.title}</h2>
                  
                  {/* Stats Grid - Commented out for now */}
                  {/* {caseStudy.stats && (
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {caseStudy.stats.map((stat) => (
                        <div key={stat.label} className="bg-gray-900/50 p-4 rounded-lg">
                          <p className="text-sm text-gray-400">{stat.label}</p>
                          <p className="text-lg font-semibold text-white">{stat.value}</p>
                        </div>
                      ))}
                    </div>
                  )} */}

                  <p className="text-gray-400 mb-6">
                    {expandedCase === caseStudy.title 
                      ? caseStudy.description 
                      : `${caseStudy.description.slice(0, 150)}...`}
                  </p>
                  
                  <button 
                    onClick={() => setExpandedCase(
                      expandedCase === caseStudy.title ? null : caseStudy.title
                    )}
                    className="inline-flex items-center text-fuchsia-400 hover:text-fuchsia-300 transition-colors"
                  >
                    {expandedCase === caseStudy.title ? (
                      <>Show Less <ChevronUp className="ml-2 h-4 w-4" /></>
                    ) : (
                      <>Read More <ChevronDown className="ml-2 h-4 w-4" /></>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}