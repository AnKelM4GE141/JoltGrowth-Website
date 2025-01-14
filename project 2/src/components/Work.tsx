import React from 'react';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'Modern online shopping experience',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800&h=600',
  },
  {
    title: 'Financial Dashboard',
    description: 'Data visualization platform',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=600',
  },
  {
    title: 'Mobile App Design',
    description: 'User-centric fitness application',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800&h=600',
  },
];

export function Work() {
  return (
    <div id="work" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Our Work</h2>
          <p className="mt-4 text-lg leading-8 text-gray-400">
            Check out some of our recent projects
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.title} className="group relative overflow-hidden rounded-2xl bg-gray-800">
              <img
                src={project.image}
                alt={project.title}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent">
                <div className="absolute bottom-0 p-6">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-2 text-sm text-gray-300">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}