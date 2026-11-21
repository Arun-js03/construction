import React from "react";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
} from "./SocialIcons";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#243344] text-gray-300 pt-16 pb-8 border-t-4 border-[#f4c03b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="space-y-4">
            <img
              src="https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2020/01/footer-logo-construction.png"
              alt="Construction 2 Footer Logo"
              className="h-10 w-auto object-contain"
              onError={(e) => {
                const target = e.target as HTMLElement;
                target.style.display = "none";
                const parent = target.parentElement;
                if (parent && !parent.querySelector(".footer-fallback-logo")) {
                  const span = document.createElement("div");
                  span.className =
                    "footer-fallback-logo font-black text-2xl tracking-tighter text-white";
                  span.innerHTML = `<span class="bg-[#f4c03b] text-[#243344] px-2 py-0.5 rounded font-extrabold text-xl">XTRA</span> CONSTRUCT`;
                  parent.appendChild(span);
                }
              }}
            />
            <p className="text-xs text-gray-400 leading-relaxed font-['Roboto']">
              A company is any entity that engages in business. Companies can be
              structured in different ways. For example, your company can be a
              sole proprietorship, a partnership, or a corporation.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="w-8 h-8 rounded bg-[#1b2735] hover:bg-[#f4c03b] hover:text-[#243344] flex items-center justify-center text-white transition-colors"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                aria-label="Twitter"
                className="w-8 h-8 rounded bg-[#1b2735] hover:bg-[#f4c03b] hover:text-[#243344] flex items-center justify-center text-white transition-colors"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="w-8 h-8 rounded bg-[#1b2735] hover:bg-[#f4c03b] hover:text-[#243344] flex items-center justify-center text-white transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded bg-[#1b2735] hover:bg-[#f4c03b] hover:text-[#243344] flex items-center justify-center text-white transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white text-base font-bold font-['Poppins'] mb-4 border-b border-gray-700 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              {[
                "About Our Company",
                "Construction Services",
                "Our Latest Projects",
                "How It Works",
                "Request Free Quote",
                "Terms & Conditions",
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href="#about"
                    className="hover:text-[#f4c03b] transition-colors flex items-center gap-1.5"
                  >
                    <ArrowRight className="w-3 h-3 text-[#f4c03b]" /> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-base font-bold font-['Poppins'] mb-4 border-b border-gray-700 pb-2">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              {[
                "Civil Engineering",
                "Road Construction & Paving",
                "Industrial Facilities",
                "High-Rise Building",
                "Architecture & Design",
                "General Renovation",
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href="#services"
                    className="hover:text-[#f4c03b] transition-colors flex items-center gap-1.5"
                  >
                    <ArrowRight className="w-3 h-3 text-[#f4c03b]" /> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-white text-base font-bold font-['Poppins'] mb-4 border-b border-gray-700 pb-2">
              Get In Touch
            </h4>
            <div className="flex items-start gap-3 text-xs">
              <MapPin className="w-4 h-4 text-[#f4c03b] shrink-0 mt-0.5" />
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                possimus, Tamil Nadu, India
              </span>
            </div>
            <a href="tel:+911234567890" className="mb-4! block">
              <div className="flex items-center gap-3 text-xs">
                <Phone className="w-4 h-4 text-[#f4c03b] shrink-0" />
                <span>+91 1234567890</span>
              </div>
            </a>
            <div className="flex items-center gap-3 text-xs">
              <Mail className="w-4 h-4 text-[#f4c03b] shrink-0" />
              <span>info@construction-xtra.com</span>
            </div>
            <div className="pt-2">
              <div className="text-[11px] text-gray-400">Working Hours:</div>
              <div className="text-xs text-white font-medium">
                Mon - Sat: 8:00 AM - 6:00 PM
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#2d3e52] flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <div>
            © 2026{" "}
            <span className="text-white font-semibold">XTRA Construction</span>,
            Powered by Arun.
          </div>
          <div className="flex items-center space-x-6">
            <a href="#about" className="hover:text-[#f4c03b] transition-colors">
              About
            </a>
            <a
              href="#services"
              className="hover:text-[#f4c03b] transition-colors"
            >
              Services
            </a>
            <a href="#quote" className="hover:text-[#f4c03b] transition-colors">
              Contact Us
            </a>
            <a href="#home" className="hover:text-[#f4c03b] transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
