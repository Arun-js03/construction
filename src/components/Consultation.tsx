import React from "react";
import { PhoneCall } from "lucide-react";

export const Consultation: React.FC = () => {
  return (
    <section
      className="relative py-20 lg:py-24 bg-cover bg-center text-white overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(36, 51, 68, 0.90), rgba(36, 51, 68, 0.90)), url('https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2020/01/row-bg.jpg')`,
      }}
    >
      {/* Skewed accent banner lines */}
      <div className="hidden lg:block absolute -top-12 -left-20 w-48 h-96 bg-[#f4c03b]/20 transform -skew-x-12 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#f4c03b]">
              FAST &amp; RELIABLE ARCHITECTURAL SOLUTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight font-['Poppins']">
              Building a dream{" "}
              <span className="text-[#f4c03b]">shouldn’t be a nightmare!</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-300 font-light max-w-2xl">
              We have transformed client ideas and visions into winning projects
              with superior engineering, zero safety compromises, and on-budget
              execution.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <a
              href="#quote"
              className="bg-[#f4c03b] hover:bg-[#e0ac28] text-[#243344] font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-sm shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Free Consultation
            </a>

            <a
              href="tel:+18182345678"
              className="flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white px-6 py-3.5 rounded-sm backdrop-blur-sm border border-white/20 transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-[#f4c03b]" />
              <div className="text-left text-xs font-semibold">
                <span className="text-gray-400 block text-[10px] uppercase">
                  Call Us Anytime
                </span>
                +91 1234567890
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
