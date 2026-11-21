import React from 'react';
import { Building, Layers, Wrench, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/content';

export const Services: React.FC = () => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building':
        return <Building className="w-8 h-8 text-[#243344]" />;
      case 'Layers':
        return <Layers className="w-8 h-8 text-[#243344]" />;
      case 'Wrench':
        return <Wrench className="w-8 h-8 text-[#243344]" />;
      default:
        return <Building className="w-8 h-8 text-[#243344]" />;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#f8f9fa] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#6b829d] mb-2 block">
            WHAT WE CAN DO FOR YOU
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#243344] tracking-tight font-['Poppins']">
            Our construction services
          </h2>
          <div className="w-16 h-1 bg-[#f4c03b] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'https://images.unsplash.com/photo-1541888946425-d0fbb18615f3?auto=format&fit=crop&w=600&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-[#243344]/20 group-hover:bg-transparent transition-colors" />

                  <div className="absolute -bottom-5 right-6 w-14 h-14 bg-[#f4c03b] rounded-sm flex items-center justify-center shadow-lg transform group-hover:rotate-6 transition-transform">
                    {getServiceIcon(service.icon)}
                  </div>
                </div>

                <div className="p-8 pt-10">
                  <h3 className="text-2xl font-bold text-[#243344] mb-3 font-['Poppins'] group-hover:text-[#f4c03b] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-['Roboto']">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="px-8 pb-8 pt-2">
                <a
                  href="#quote"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#243344] group-hover:text-[#f4c03b] transition-colors"
                >
                  Read More <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
