import React, { useState, useEffect } from 'react';
import {
  Phone,
  Clock,
  Menu,
  X,
  ChevronDown,
  Search,
} from 'lucide-react';
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from './SocialIcons';
import { NAV_ITEMS } from '../data/content';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 45);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      setIsMobileMenuOpen(false);
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="w-full relative z-50">
      <div className="bg-[#243344] text-[#a0aab5] text-xs font-normal border-b border-[#2d3e52]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-10 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <span className="text-gray-400">Have any questions?</span>
              <a
                href="tel:+18182345678"
                className="text-white hover:text-[#f4c03b] transition-colors flex items-center gap-1 font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-[#f4c03b]" />
                +91 1234567890
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-1.5 text-gray-400">
              <Clock className="w-3.5 h-3.5 text-[#f4c03b]" />
              <span>Mon - Fri: 8:00 AM - 6:00 PM</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="hover:text-[#f4c03b] transition-colors"
              >
                <FacebookIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="hover:text-[#f4c03b] transition-colors"
              >
                <TwitterIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="hover:text-[#f4c03b] transition-colors"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="hover:text-[#f4c03b] transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
              </a>
            </div>
            <div className="h-4 w-px bg-gray-600 hidden sm:block"></div>
            <a
              href="#quote"
              onClick={(e) => handleNavClick(e, '#quote')}
              className="hidden sm:inline-block text-[#f4c03b] font-semibold hover:text-white transition-colors"
            >
              Free Consultation
            </a>
          </div>
        </div>
      </div>
      
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'fixed top-0 left-0 bg-white/95 backdrop-blur-md shadow-lg py-3 z-50'
            : 'relative bg-white py-5 shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a href="#home" className="flex items-center">
            <img
              src="https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2020/01/logo-construction.png"
              alt="Construction 2 Logo"
              className="h-10 sm:h-12 w-auto object-contain"
              onError={(e) => {
                // Fallback to stylized brand text if image fails
                const target = e.target as HTMLElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent && !parent.querySelector('.fallback-logo')) {
                  const span = document.createElement('div');
                  span.className = 'fallback-logo flex items-center gap-2 font-black text-2xl tracking-tighter text-[#243344]';
                  span.innerHTML = `<span class="bg-[#f4c03b] text-[#243344] px-2 py-0.5 rounded font-extrabold text-xl">XTRA</span> CONSTRUCT`;
                  parent.appendChild(span);
                }
              }}
            />
          </a>

          <nav className="hidden lg:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => item.children && setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="flex items-center gap-1 text-[15px] font-medium text-[#243344] hover:text-[#f4c03b] transition-colors py-2 tracking-wide font-['Poppins']"
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-3.5 h-3.5 opacity-70" />}
                </a>

                {item.children && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 w-48 bg-white shadow-xl rounded-md py-2 border-t-2 border-[#f4c03b] transition-all animate-fadeIn">
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        onClick={(e) => handleNavClick(e, child.href)}
                        className="block px-4 py-2 text-sm text-[#243344] hover:bg-gray-50 hover:text-[#f4c03b] font-medium transition-colors"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-5">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-[#243344] hover:text-[#f4c03b] transition-colors rounded-full"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <a
              href="#quote"
              onClick={(e) => handleNavClick(e, '#quote')}
              className="bg-[#f4c03b] hover:bg-[#e0ac28] text-[#243344] font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-sm shadow-sm transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Get a Quote
            </a>
          </div>

          <div className="flex items-center space-x-3 lg:hidden">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-[#243344] hover:text-[#f4c03b]"
              aria-label="Toggle Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#243344] hover:text-[#f4c03b] focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isSearchOpen && (
          <div className="border-t border-gray-100 bg-[#f8f9fa] py-3 px-4 sm:px-8">
            <div className="max-w-3xl mx-auto flex items-center gap-2">
              <input
                type="text"
                placeholder="Type keyword to search (e.g. building, road, renovation)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-gray-300 rounded px-4 py-2 text-sm text-[#243344] focus:outline-none focus:border-[#f4c03b]"
              />
              <button
                onClick={() => {
                  if (searchQuery.trim()) {
                    const el = document.querySelector('#projects');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                  setIsSearchOpen(false);
                }}
                className="bg-[#243344] hover:bg-[#f4c03b] hover:text-[#243344] text-white px-5 py-2 text-sm font-semibold rounded transition-colors"
              >
                Search
              </button>
              <button
                onClick={() => setIsSearchOpen(false)}
                className="p-2 text-gray-500 hover:text-black"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 px-4 pt-4 pb-6 shadow-xl animate-fadeIn">
            <div className="flex flex-col space-y-3">
              {NAV_ITEMS.map((item) => (
                <div key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="block py-2 text-base font-medium text-[#243344] hover:text-[#f4c03b] transition-colors"
                  >
                    {item.label}
                  </a>
                  {item.children && (
                    <div className="pl-4 py-1 flex flex-col space-y-2 border-l-2 border-gray-100 my-1">
                      {item.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          onClick={(e) => handleNavClick(e, child.href)}
                          className="text-sm text-gray-600 hover:text-[#f4c03b]"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
                <a
                  href="#quote"
                  onClick={(e) => handleNavClick(e, '#quote')}
                  className="w-full text-center bg-[#f4c03b] hover:bg-[#e0ac28] text-[#243344] font-bold text-xs uppercase tracking-wider py-3.5 rounded shadow"
                >
                  Get a Free Quote
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
