import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f5f1e9] text-center py-12 px-4 font-serif text-[#2d2d2d]">
      <h1 className="text-5xl md:text-6xl mb-2 leading-snug">
        Dr. Serena Blake, PsyD 
      </h1>
        <h2 className='text-3xl md:text-4xl mb-6 leading-snug'>
            (Clinical Psychologist)
            </h2>

      <div className="space-y-2 text-lg md:text-xl mb-4">
        <p>
          <a href="mailto:jennifer@drjenniferhahm.com" className="underline">
            serena@blakepsychology.com
          </a>
        </p>
        <p>
          Phone: <a href="tel:2489398150" className="underline"> (323) 555-0192</a>{' '}
       
        </p>
        <p>1287 Maplewood Drive, Los Angeles, CA 90026</p>
      </div>

      <nav className="mt-6 flex justify-center flex-wrap gap-x-4 gap-y-2 text-base underline">
        <a href="/" className="hover:text-gray-700">Home</a>
        <a href="/privacy-policy" className="hover:text-gray-700">Privacy Policy</a>
        <a href="/good-faith-estimate" className="hover:text-gray-700">Good Faith Estimate</a>
      </nav>

      <div className="mt-6 text-xl underline">
        <a href="/client-portal" className="hover:text-gray-700">Client Portal</a>
      </div>

      <p className="mt-10 text-sm text-gray-700">
        © 2025  Dr. Serena Blake, PsyD ,  (Clinical Psychologist), PLLC. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
