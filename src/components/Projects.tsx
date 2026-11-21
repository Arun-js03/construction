import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { PROJECTS, PROJECT_CATEGORIES } from '../data/content';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.categories.includes(activeCategory));

  return (
    <section id="projects" className="py-20 lg:py-28 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#6b829d] mb-2 block">
            WE ARE PROFESSIONAL
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#243344] tracking-tight font-['Poppins']">
            Our latest projects
          </h2>
          <div className="w-16 h-1 bg-[#f4c03b] mx-auto mt-4" />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {PROJECT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all ${
                activeCategory === cat
                  ? 'bg-[#243344] text-[#f4c03b] shadow-md'
                  : 'bg-white text-[#243344] hover:bg-[#f4c03b] hover:text-[#243344] shadow-sm'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white rounded-sm overflow-hidden shadow hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1541888946425-d0fbb18615f3?auto=format&fit=crop&w=600&q=80';
                  }}
                />

                {/* Yellow/Navy Hover Overlay */}
                <div className="absolute inset-0 bg-[#243344]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                  <span className="w-12 h-12 rounded-full bg-[#f4c03b] text-[#243344] flex items-center justify-center mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    <ExternalLink className="w-5 h-5" />
                  </span>
                  <span className="text-xs text-[#f4c03b] uppercase font-bold tracking-wider mb-1">
                    {project.category}
                  </span>
                  <h4 className="text-lg font-bold text-white font-['Poppins']">
                    {project.title}
                  </h4>
                </div>
              </div>

              {/* Card Footer Info */}
              <div className="p-4 border-t border-gray-100">
                <h4 className="font-bold text-base text-[#243344] group-hover:text-[#f4c03b] transition-colors truncate">
                  {project.title}
                </h4>
                <p className="text-xs text-gray-500 mt-1 truncate">
                  {project.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
