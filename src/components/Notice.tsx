// components/Notice.tsx
import React from 'react';

const Notice: React.FC = () => {
  return (
    <section className="bg-[#f8f5ef] text-[#2f2f2f] px-4 py-16 text-center">
      <h3
        className="text-2xl sm:text-3xl font-serif font-semibold"
        style={{ fontFamily: `'Playfair Display', serif` }}
      >
        Unable to accept new clients at this time.
      </h3>
    </section>
  );
};

export default Notice;
