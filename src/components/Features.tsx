import React from 'react';
import { Building2, ShieldAlert, Truck, ArrowRight } from 'lucide-react';
import { FEATURES } from '../data/content';

export const Features: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2':
        return <Building2 className="w-9 h-9 text-[#f4c03b]" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-9 h-9 text-[#f4c03b]" />;
      case 'Truck':
        return <Truck className="w-9 h-9 text-[#f4c03b]" />;
      default:
        return <Building2 className="w-9 h-9 text-[#f4c03b]" />;
    }
  };

  return (
    <section className="relative z-20 -mt-10 lg:-mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-3 text-center sm:text-left">
        <span className="text-xs font-bold uppercase tracking-widest text-[#6b829d]">
          FEATURES AT A GLANCE
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {FEATURES.map((feature) => (
          <div
            key={feature.id}
            className="group relative bg-[#243344] text-white p-8 sm:p-10 rounded-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute right-4 bottom-2 text-7xl sm:text-8xl font-black text-white/5 select-none pointer-events-none font-['Poppins']">
              {feature.bgNumber}
            </div>

            <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[#f4c03b] transition-colors" />

            <div>
              <div className="mb-6 flex items-center justify-between">
                <div className="w-16 h-16 rounded-md bg-[#2d3e52] flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  {getIcon(feature.iconName)}
                </div>
                <span className="text-xs uppercase font-bold tracking-wider text-[#f4c03b] opacity-80">
                  {feature.subtitle}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-4 font-['Poppins'] tracking-tight group-hover:text-[#f4c03b] transition-colors">
                {feature.title}
              </h3>

              <p className="text-sm text-gray-300 leading-relaxed font-['Roboto'] mb-6">
                {feature.description}
              </p>
            </div>

            <div className="pt-2">
              <a
                href={feature.link}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#f4c03b] hover:text-white transition-colors"
              >
                Learn More <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
