import React from 'react';
import { CLIENT_LOGOS } from '../data/content';

export const ClientLogos: React.FC = () => {
  return (
    <section className="py-14 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-items-center opacity-70 hover:opacity-100 transition-opacity">
          {CLIENT_LOGOS.map((client) => (
            <div
              key={client.id}
              className="grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-105 flex items-center justify-center h-16 w-36"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-12 max-w-full object-contain"
                onError={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent && !parent.querySelector('.fallback-partner')) {
                    const d = document.createElement('div');
                    d.className = 'fallback-partner font-black text-lg text-gray-400 tracking-wider';
                    d.textContent = `PARTNER ${client.id}`;
                    parent.appendChild(d);
                  }
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
