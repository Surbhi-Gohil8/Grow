// components/Rates.tsx
import React from 'react';

const Rates: React.FC = () => {
  return (
    <section className="bg-[#8eb1b3] text-[#1f1f1f] px-6 py-24 text-center font-light">
      <h2
        className="text-3xl sm:text-3xl font-serif mb-8"
        style={{ fontFamily: `'Playfair Display', serif` }}
      >
        Rates and Insurance
      </h2>

      <div className="space-y-4 text-lg sm:text-xl">
        <p className="font-medium">Individual Session Fee - $200</p>
        <p className="font-medium">Couples Session Fess - $240</p>
      </div>

      <p className="mt-10 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
        I accept both private pay and insurance. I am in-network with BCBS and Aetna.
      </p>

      <p className="mt-6 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
        For out-of-network plans, I’ve partnered with Mentaya using{' '}
        <a
          href="https://www.mentaya.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[#1f1f1f] hover:text-black font-medium"
        >
          this tool
        </a>{' '}
        to help you check your eligibility for reimbursement for my services.
      </p>
    </section>
  );
};

export default Rates;
