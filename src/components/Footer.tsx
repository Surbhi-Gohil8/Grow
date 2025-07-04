'use client';

import React from 'react';
import Link from 'next/link';

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
          <a href="mailto:serena@blakepsychology.com" className="underline">
            serena@blakepsychology.com
          </a>
        </p>
        <p>
          Phone: <a href="tel:3235550192" className="underline">(323) 555-0192</a>{' '}
        </p>
        <p>1287 Maplewood Drive, Los Angeles, CA 90026</p>
      </div>

      <nav className="mt-6 flex justify-center flex-wrap gap-x-4 gap-y-2 text-base underline">
        <Link href="/" className="hover:text-gray-700">
          Home
        </Link>
        <Link href="/privacy-policy" className="hover:text-gray-700">
          Privacy Policy
        </Link>
        <Link href="/good-faith-estimate" className="hover:text-gray-700">
          Good Faith Estimate
        </Link>
      </nav>

      <div className="mt-6 text-xl underline">
        <Link href="/client-portal" className="hover:text-gray-700">
          Client Portal
        </Link>
      </div>

      <p className="mt-10 text-sm text-gray-700">
        © 2025 Dr. Serena Blake, PsyD, (Clinical Psychologist), PLLC. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
