import React from 'react';

const Area: React.FC = () => {
  return (
    <section className="bg-[#f8f5ef] text-[#2f2f2f] px-6 py-24 text-center">
      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-4xl font-serif font-normal leading-snug tracking-wide">
        Therapy can be a space where you invest in<br className="hidden sm:block" />
        yourself—one of the highest forms of self-care.
      </h1>

      {/* Subtext */}
      <p className="mt-10 max-w-4xl mx-auto text-lg sm:text-xl leading-relaxed text-[#4a4a4a] font-light">
        You may be led to therapy by anxiety, depression, relationship stress, past or recent trauma, grief and loss,
        self-esteem issues, or challenges with family, parenting, or parental relationships.
        Whatever the source of your stress, you don’t have to face it alone. Therapy offers you the time and space to work toward
        <br /> wellness and peace.
      </p>

      {/* Divider */}
      <div className="border-t border-[#353535] mt-20 mb-16 w-full" />

      {/* Areas of Focus */}
      <h2 className="text-3xl font-serif text-[#2f2f2f] mb-12">Areas of Focus</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="text-center">
          <img
            src="/images/Health.jpg"
            alt="Healthcare Providers"
            className="w-64 h-64 object-cover rounded-full mx-auto mb-6"
          />
          <h3 className="text-xl font-serif font-medium mb-3">
            Therapy for Healthcare Providers and Students
          </h3>
          <p className="text-sm text-[#4a4a4a] px-4 leading-relaxed">
            The care you provide for others may be driving you to seek therapy, whether due to burnout, compassion fatigue,
            imposter syndrome, people-pleasing tendencies, or perfectionism. Whether you're in pre-professional school or reflecting
            on a long career, we can address the unique stressors of your professional life.
          </p>
        </div>

        {/* Card 2 */}
        <div className="text-center">
          <img
            src="/images/trauma.jpg"
            alt="Trauma and Grief"
            className="w-64 h-64 object-cover rounded-full mx-auto mb-6"
          />
          <h3 className="text-xl font-serif font-medium mb-3">
            Therapy for Trauma and Grief
          </h3>
          <p className="text-sm text-[#4a4a4a] px-4 leading-relaxed">
            Life’s challenges, whether a difficult childhood, a traumatic event, or the loss of someone meaningful, can lead
            to profound emotional impact. Therapy offers space to process these experiences and find grounding and meaning.
          </p>
        </div>

        {/* Card 3 */}
        <div className="text-center">
          <img
            src="/images/flag.jpg"
            alt="Immigrant Families"
            className="w-64 h-64 object-cover rounded-full mx-auto mb-6"
          />
          <h3 className="text-xl font-serif font-medium mb-3">
            Therapy for Second Generation Individuals In Immigrant Families
          </h3>
          <p className="text-sm text-[#4a4a4a] px-4 leading-relaxed">
            Second-generation individuals often face cultural identity conflicts and strained family expectations. Therapy
            helps explore and process this unique aspect of your identity in a supportive space.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Area;
