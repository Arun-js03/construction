import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/content';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const active = TESTIMONIALS[currentIndex];

  return (
    <section className="py-20 lg:py-28 bg-[#f8f9fa] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#6b829d] mb-2 block">
            SEE WHAT SAYS OUR HAPPY CLIENTS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#243344] tracking-tight font-['Poppins']">
            Our happy customers
          </h2>
          <div className="w-16 h-1 bg-[#f4c03b] mx-auto mt-4" />
        </div>

        <div className="relative bg-white rounded-sm shadow-xl p-8 sm:p-14 border-t-4 border-[#f4c03b]">
          <div className="absolute top-8 right-8 text-[#f4c03b]/20">
            <Quote className="w-20 h-20 rotate-180" />
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
            <div className="relative shrink-0">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-[#f4c03b] shadow-md">
                <img
                  src={active.avatar}
                  alt={active.author}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80';
                  }}
                />
              </div>
            </div>

            <div className="space-y-4 text-center md:text-left flex-1">
              <div className="flex items-center justify-center md:justify-start space-x-1">
                {[...Array(active.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#f4c03b] text-[#f4c03b]" />
                ))}
              </div>

              <p className="text-base sm:text-lg text-gray-700 italic leading-relaxed font-['Roboto']">
                "{active.quote}"
              </p>

              <div>
                <h4 className="text-lg font-bold text-[#243344] font-['Poppins']">
                  {active.author}
                </h4>
                <p className="text-xs font-semibold text-[#6b829d] uppercase tracking-wider">
                  {active.role} — <span className="text-[#f4c03b]">{active.company}</span>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
            <div className="flex space-x-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentIndex === idx ? 'w-8 bg-[#f4c03b]' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex space-x-2">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded bg-gray-100 hover:bg-[#f4c03b] hover:text-[#243344] flex items-center justify-center transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded bg-gray-100 hover:bg-[#f4c03b] hover:text-[#243344] flex items-center justify-center transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
