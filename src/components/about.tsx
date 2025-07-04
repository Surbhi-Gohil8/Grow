'use client';
import React from 'react';
import Image from 'next/image';

const About: React.FC = () => {
  return (
    <section className="bg-[#ffffff] py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
            About Dr. Serena Blake
          </h2>
    <div className="text-gray-700 leading-relaxed mb-6">
  <p>
    <strong>Experience:</strong> 8 years of practice, 500+ sessions
  </p>
  <p>
    <strong>About:</strong> Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions. She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma. Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive.
  </p>
  <p>
    <strong>Services & Specialties:</strong>
  </p>
  <ol className="list-decimal list-inside ml-5">
    <li>Anxiety & Stress Management</li>
    <li>Relationship Counseling</li>
    <li>Trauma Recovery</li>
  </ol>
</div>

        
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <Image
            src="/images/lady2.png" // <-- Replace with your actual image path
            alt="Dr. Jennifer Hahm"
            width={400}
            height={500}
            className="rounded-lg object-cover shadow-lg"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default About;
