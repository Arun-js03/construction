import React, { useState, useEffect } from 'react';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { HERO_SLIDES } from '../data/content';

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section id="home" className="relative w-full bg-[#f8f9fa] overflow-hidden min-h-[580px] lg:min-h-[720px] flex items-center">
      {/* Slide 1 View */}
      {currentSlide === 0 && (
        <div className="relative w-full h-full py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hidden lg:block absolute -top-12 right-24 w-[500px] h-[750px] bg-[#f4c03b]/25 transform -skew-x-[28deg] pointer-events-none z-0" />
          <div className="hidden lg:block absolute -top-12 right-0 w-[420px] h-[750px] bg-[#f4c03b]/35 transform -skew-x-[28deg] pointer-events-none z-0" />
          <div className="hidden lg:block absolute -top-12 -right-24 w-[360px] h-[750px] bg-[#f4c03b] transform -skew-x-[28deg] pointer-events-none z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="bg-[#243344] text-white text-xs font-semibold px-4 py-1.5 rounded uppercase tracking-wider">
                  {slide.badge}
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-[#243344] leading-[0.95] tracking-tight font-['Poppins']">
                {slide.titleLine1} <br />
                {slide.titleLine2} <br />
                <span className="text-[#f4c03b]">{slide.titleHighlight}</span>
              </h1>

              <p className="text-lg sm:text-xl text-[#243344]/80 max-w-xl font-medium leading-relaxed font-['Roboto']">
                {slide.description}
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-6">
                <button
                  onClick={() => setIsVideoModalOpen(true)}
                  className="flex items-center gap-4 group cursor-pointer focus:outline-none"
                  aria-label="Watch video presentation"
                >
                  <span className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#384043] group-hover:bg-[#f4c03b] transition-all flex items-center justify-center text-[#f4c03b] group-hover:text-[#243344] shadow-lg transform group-hover:scale-105">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </span>
                  <div className="text-left">
                    <span className="text-xs uppercase tracking-wider text-[#6b829d] font-bold block">
                      Watch Video
                    </span>
                    <span className="text-base sm:text-lg font-bold text-[#243344] group-hover:text-[#f4c03b] transition-colors">
                      Why choose us?
                    </span>
                  </div>
                </button>

                <a
                  href="#services"
                  className="bg-[#243344] hover:bg-[#1b2735] text-white text-xs font-bold uppercase tracking-wider px-7 py-4 rounded-sm shadow-md transition-all hover:-translate-y-0.5"
                >
                  Explore Services
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md lg:max-w-none">
                <img
                  src={slide.modelImage}
                  alt="Construction Engineer Model"
                  className="w-full max-h-[580px] object-contain drop-shadow-2xl relative z-10 transition-transform duration-700 hover:scale-[1.02]"
                  onError={(e) => {
                    // Fallback to high quality unsplash construction engineer
                    (e.target as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Slide 2 View */}
      {currentSlide === 1 && (
        <div
          className="relative w-full h-full py-24 lg:py-36 bg-cover bg-center flex items-center"
          style={{
            backgroundImage: `linear-gradient(rgba(36, 51, 68, 0.75), rgba(36, 51, 68, 0.75)), url(${slide.bgImage})`,
          }}
        >
          <div className="max-w-5xl mx-auto px-4 text-center relative z-10 space-y-6">
            <span className="bg-[#f4c03b] text-[#243344] font-bold text-xs uppercase px-4 py-1 rounded tracking-widest inline-block">
              {slide.badge}
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight uppercase leading-tight font-['Poppins']">
              {slide.titleLine1} {slide.titleLine2} <br />
              <span className="text-[#f4c03b]">{slide.titleHighlight}</span>
            </h1>
            <p className="text-lg sm:text-2xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed">
              {slide.description}
            </p>
            <div className="pt-6 flex flex-wrap justify-center gap-4">
              <a
                href="#quote"
                className="bg-[#f4c03b] hover:bg-[#e0ac28] text-[#243344] font-bold text-sm uppercase px-8 py-4 rounded-sm shadow-lg transition-transform hover:-translate-y-0.5"
              >
                Request a Free Quote
              </a>
              <a
                href="#projects"
                className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-bold text-sm uppercase px-8 py-4 rounded-sm transition-colors"
              >
                View Latest Projects
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Slider Navigation Arrows */}
      <div className="absolute bottom-6 right-6 lg:bottom-12 lg:right-12 z-20 flex items-center space-x-2">
        <button
          onClick={() => setCurrentSlide(currentSlide === 0 ? 1 : 0)}
          className="w-11 h-11 bg-white hover:bg-[#f4c03b] text-[#243344] rounded flex items-center justify-center shadow-md transition-colors"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => setCurrentSlide(currentSlide === 0 ? 1 : 0)}
          className="w-11 h-11 bg-white hover:bg-[#f4c03b] text-[#243344] rounded flex items-center justify-center shadow-md transition-colors"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden shadow-2xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-[#f4c03b] text-xl font-bold z-10 bg-black/50 w-8 h-8 rounded-full flex items-center justify-center"
            >
              ✕
            </button>
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/FyS_zcvmUr4?autoplay=1"
              title="Construction Presentation"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
};
