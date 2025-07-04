"use client"

import type React from "react"
import Image from "next/image"

const TherapyHeroSection: React.FC = () => {
  return (
 <section className="relative p-6 md:p-12 bg-[#f5f2eb]">
  {/* Logo top-left */}
  <div className="absolute top-4 left-6 md:top-6 md:left-10 ">
    <Image src="/images/logo2.png" alt="Therapy Logo" width={250} height={250} priority />
  </div>

  {/* Video container with top margin to push it below logo */}
  <div className="relative w-full max-w-9xl mx-auto h-[550px] overflow-hidden rounded shadow-xl mt-16">
    {/* Background Video */}
    <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted playsInline>
      <source src="/images/bg.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    {/* Overlay */}
    <div className="absolute inset-0 bg-black/30 z-10" />

    {/* Text + Button */}
    <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center text-white space-y-6">
      <div>
        <h1 className="text-3xl md:text-5xl font-bold mt-2">Psychological Care for</h1>
        <h1 className="text-3xl md:text-5xl font-bold mt-2">Change, Insight, and Well-Being</h1>
<p className="mt-4 text-sm md:text-base font-light whitespace-nowrap overflow-x-auto">
  Offering individual psychotherapy for adults via telehealth in Michigan and{' '}
  <a
    href="https://psypact.gov/page/psypactmap"
    target="_blank"
    rel="noopener noreferrer"
    className="underline text-white hover:text-[#000000] transition"
  >
    most U.S. states
  </a>{' '}
  through PSYPACT participation
</p>


      </div>
<div className="flex justify-center items-center">
<button className="oval text-white text-xl font-semibold">
  SCHEDULE A CONSULTATION
</button>


</div>

    </div>
  </div>
</section>

  )
}

export default TherapyHeroSection
