import React from 'react';

const QuoteBanner: React.FC = () => {
  return (
    <section
      className="w-full h-[500px] bg-cover bg-center flex flex-col items-center justify-center text-center px-6"
      style={{
        backgroundImage: "url('/images/bg.png')", // <-- adjust path as needed
        fontFamily: `'Playfair Display', serif`
      }}
    >
      <blockquote className="text-2xl sm:text-3xl md:text-4xl text-black max-w-5xl leading-relaxed">
        “I have come to believe that caring for myself is not self-indulgent. Caring for myself is an act of survival.”
      </blockquote>
      <cite className="mt-6 text-lg sm:text-xl text-[#444] font-light italic">— Audre Lorde</cite>
    </section>
  );
};

export default QuoteBanner;
