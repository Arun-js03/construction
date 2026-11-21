import React from 'react';
import { PROCESS_STEPS } from '../data/content';

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Content / Step Breakdown */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#6b829d] mb-2 block">
                PROCESS OF CONSTRUCTION
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#243344] tracking-tight font-['Poppins']">
                How it works in construction?
              </h2>
              <p className="mt-4 text-sm text-gray-600 leading-relaxed max-w-xl">
                Slogan creation for your construction company is crucial for the overall branding. Here is our proven three-step blueprint for guaranteed success.
              </p>
            </div>

            {/* Steps list */}
            <div className="space-y-6">
              {PROCESS_STEPS.map((step) => (
                <div
                  key={step.step}
                  className="flex items-start gap-6 p-6 rounded-sm bg-[#f8f9fa] border-l-4 border-[#f4c03b] hover:bg-white hover:shadow-lg transition-all group"
                >
                  <div className="text-3xl sm:text-4xl font-black text-[#243344] group-hover:text-[#f4c03b] transition-colors font-['Poppins'] shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#243344] mb-1 font-['Poppins']">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed font-['Roboto']">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2020/01/process.jpg"
                alt="Process of Construction"
                className="w-full h-[460px] object-cover hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80';
                }}
              />
              <div className="absolute inset-0 bg-[#243344]/20 pointer-events-none" />
            </div>

            {/* Decorative bottom corner box */}
            <div className="absolute -bottom-6 -left-6 bg-[#243344] text-white p-6 rounded-sm shadow-xl hidden sm:block max-w-[200px]">
              <div className="text-xs uppercase tracking-widest text-[#f4c03b] font-bold">Guaranteed</div>
              <div className="text-xl font-bold mt-1">100% On-Time Delivery</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
