import React, { useState } from 'react';
import { SkipForward, Layers, Users, ChevronDown, ChevronUp } from 'lucide-react';

function ServiceCard({ 
  title, 
  description, 
  icon: Icon, 
  gradient, 
  expandedContent 
}: { 
  title: string;
  description: string;
  icon: React.ElementType;
  gradient: string;
  expandedContent?: React.ReactNode;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative rounded-2xl bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 p-8 hover:border-purple-500/30 transition-all duration-300">
      {/* Header */}
      <div className="flex items-start gap-6">
        <div className={`rounded-xl bg-gradient-to-r ${gradient} p-3`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
        
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
          <p className="text-gray-400 leading-relaxed whitespace-pre-line">
            {description.split('\n\n')[0]}
          </p>
          
          {expandedContent && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-4 flex items-center gap-2 text-fuchsia-400 hover:text-fuchsia-300 transition-colors font-semibold"
            >
              {isExpanded ? 'Show Less' : 'Learn More'}
              {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>
          )}
        </div>
      </div>

      {/* Expandable Content */}
      {isExpanded && expandedContent && (
        <div className="mt-6 space-y-6 border-t border-gray-800 pt-6">
          {expandedContent}
        </div>
      )}
    </div>
  );
}

function ScaleService() {
  return (
    <ServiceCard
      title="Scale For You"
      description="Scale to new heights with custom build out and management solutions. We build and manage full-stack systems and teams tailored to your needs."
      icon={SkipForward}
      gradient="from-blue-600 via-blue-500 to-purple-600"
      expandedContent={
        <>
          {/* Lead Acquisition */}
          <div className="bg-gray-800/50 rounded-lg p-4">
            <h4 className="text-lg font-semibold text-fuchsia-400 mb-3">Lead Acquisition</h4>
            <ul className="space-y-2">
              {[
                'Market Research',
                'ICP Analysis',
                'Offer Creation / Improvement',
                'Sales & Conversion',
                'Email Newsletters DFY',
                'Launch New Offers',
                'Youtube & Instagram Optimization / Consulting',
                'Paid Meta & Youtube Ads',
                'Effective & Enjoyable Conversion Experiences',
                'A-Class Onboarding Experiences'
              ].map((item, index) => (
                <li key={index} className="text-gray-400 flex items-start">
                  <span className="mr-2 text-fuchsia-500">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Delivery */}
          <div className="bg-gray-800/50 rounded-lg p-4">
            <h4 className="text-lg font-semibold text-fuchsia-400 mb-3">Delivery</h4>
            <ul className="space-y-2">
              {[
                'Client Success Company principles and systems for continuous improvement',
                'Simple processes to collect client success stories, wins, and public ratings all building trust for future leads'
              ].map((item, index) => (
                <li key={index} className="text-gray-400 flex items-start">
                  <span className="mr-2 text-fuchsia-500">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Management */}
          <div className="bg-gray-800/50 rounded-lg p-4">
            <h4 className="text-lg font-semibold text-fuchsia-400 mb-3">Management</h4>
            <ul className="space-y-2">
              {[
                'Marketing & Launch Strategies, Calendars, and Accountability',
                'Hire, Train, Manage Sales Team',
                'Manage Sales Tracking, Payout, and Payment Provider Logistics',
                'Manage Client Success Team Improvements'
              ].map((item, index) => (
                <li key={index} className="text-gray-400 flex items-start">
                  <span className="mr-2 text-fuchsia-500">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </>
      }
    />
  );
}

function BuildService() {
  const description = "We'll build out everything you need to start making 10s of thousand of dollars with your coaching business saving you months of building yourself and the expense of contracting website builders, automation experts, and business consultants that only get you half way.";
  
  return (
    <ServiceCard
      title="Build For You"
      description={description}
      icon={Layers}
      gradient="from-purple-600 via-violet-500 to-indigo-600"
      expandedContent={
        <div className="bg-gray-800/50 rounded-lg p-4">
          <h4 className="text-lg font-semibold text-fuchsia-400 mb-3">Builds usually include:</h4>
          <ul className="space-y-2">
            {[
              'Web Sales Funnel',
              'VSL templates',
              'CRM Lead Pipeline (never lose a lead again)',
              'Automations Connecting Sales Funnel to Pipeline',
              'Automated Email and Slack Flows',
              'Automated Client Onboarding Flows',
              'Notion Team Space with custom voice recorded SOPs to train team',
              'Email Ai Agent Trained on Coaches Voice',
              '...more'
            ].map((item, index) => (
              <li key={index} className="text-gray-400 flex items-start">
                <span className="mr-2 text-fuchsia-500">•</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-gray-400">
            Reach Out to see if we can build the Sales / AI / Automation Infrastructure you need.
          </p>
        </div>
      }
    />
  );
}

function CommunityService() {
  return (
    <ServiceCard
      title="Community"
      description="Coming Soon...   network and scale in a community for coaches built for coaches implementing the highest level strategies and some techniques only possible with the right network."
      icon={Users}
      gradient="from-indigo-600 via-purple-500 to-blue-600"
      expandedContent={
        <div className="bg-gray-800/50 rounded-lg p-4">
          <h4 className="text-lg font-semibold text-fuchsia-400 mb-3">Coming Features:</h4>
          <ul className="space-y-2">
            {[
              'Exclusive Network of High-Performing Coaches',
              'Weekly Strategy Sessions',
              'Resource Sharing Platform',
              'Collaboration Opportunities',
              'Advanced Training Materials',
              'Private Mastermind Groups',
              'Direct Access to Industry Experts',
              'Early Access to New Features and Tools'
            ].map((item, index) => (
              <li key={index} className="text-gray-400 flex items-start">
                <span className="mr-2 text-fuchsia-500">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      }
    />
  );
}

export function Services() {
  return (
    <div id="services" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="border border-gray-800/50 rounded-2xl p-8 backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left side heading */}
            <div className="lg:col-span-3">
              <div className="sticky top-24">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  What We Offer
                </h2>
                <p className="mt-4 text-lg leading-8 text-gray-400">
                  We have years of experience starting and scaling online coaching businesses. With that we'd like to present our In depth offers helping you scale your Coaching Business into life changing money without wasting your scarce time spinning your wheels into another burnout.
                </p>
              </div>
            </div>

            {/* Right side cards */}
            <div className="lg:col-span-9">
              <div className="grid grid-cols-1 gap-6">
                <ScaleService />
                <BuildService />
                <CommunityService />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}