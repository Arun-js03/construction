import React from 'react';
import { CheckCircle2, Award } from 'lucide-react';
import { ABOUT_STATS, ABOUT_BULLETS } from '../data/content';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2020/01/about-company.jpg"
                  alt="About Jayam Construction"
                  className="w-full h-[450px] sm:h-[520px] object-cover hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1541888946425-d0fbb18615f3?auto=format&fit=crop&w=800&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>

              <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:right-6 bg-[#f4c03b] text-[#243344] p-6 sm:p-8 rounded-sm shadow-2xl max-w-[220px] border-4 border-white">
                <Award className="w-10 h-10 mb-2 text-[#243344]" />
                <div className="text-3xl sm:text-4xl font-extrabold font-['Poppins'] leading-none">
                  25+
                </div>
                <div className="text-xs uppercase font-bold tracking-wider mt-1">
                  Years of Construction Experience
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#f4c03b] bg-[#243344] px-3 py-1 rounded inline-block mb-3">
                ABOUT OUR COMPANY
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#243344] tracking-tight leading-tight font-['Poppins']">
                Always dedicated <br />
                <span className="text-[#6b829d] font-normal">and devoted.</span>
              </h2>
            </div>

            <p className="text-base text-gray-600 leading-relaxed font-['Roboto']">
              Slogan creation for your construction company is crucial for the overall branding. And branding in today’s world can’t be ignored. We deliver unmatched structural integrity, modern architectural engineering, and transparent project timelines from ground break to handover.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {ABOUT_BULLETS.map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#f4c03b] shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-[#243344]">{bullet}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-gray-200">
              {ABOUT_STATS.map((stat, idx) => (
                <div key={idx} className="text-center sm:text-left">
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#243344] font-['Poppins']">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-4">
              <a
                href="#services"
                className="bg-[#243344] hover:bg-[#1b2735] text-white font-bold text-xs uppercase tracking-wider px-7 py-4 rounded-sm shadow transition-colors"
              >
                Our Services
              </a>
              <a
                href="#quote"
                className="text-[#243344] hover:text-[#f4c03b] font-bold text-xs uppercase tracking-wider underline underline-offset-4 transition-colors"
              >
                Request Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
