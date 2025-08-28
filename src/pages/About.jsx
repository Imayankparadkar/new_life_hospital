import React from 'react';
import { FaLeaf, FaHeart, FaUserMd } from 'react-icons/fa';
import DoctorCard from '../components/DoctorCard';
import doctors from '../data/doctors';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-white pt-24 pb-16 text-center">
        <div className="container">
          <h1 className="text-5xl md:text-6xl font-bold text-[#203840]">About Our Hospital</h1>
          <p className="section-subtitle mt-4">
          New Life Ayurvedic Hospital is dedicated to healing through the ancient wisdom of Ayurveda,
            providing personalized care to restore balance and promote overall wellness.
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-[#f0f8f8]">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="section-title text-left relative pb-4 mb-6 after:left-0 after:-translate-x-0">
                Our History
              </h2>
              <p className="mb-4 text-[#406878] leading-relaxed">
              New Life Ayurvedic Hospital was founded in 2010 by Dr. Anand Sharma, a renowned Ayurvedic physician with a vision to integrate traditional Ayurvedic practices with modern healthcare standards.
              </p>
              <p className="mb-4 text-[#406878] leading-relaxed">
                What began as a small clinic has now grown into a full-fledged Ayurvedic hospital, serving thousands of patients from around the world. Our commitment to authentic Ayurvedic treatments and personalized care has established us as a trusted name in holistic healthcare.
              </p>
              <p className="text-[#406878] leading-relaxed">
                Over the years, we have expanded our facilities, brought on board experienced physicians, and continued to refine our treatments while staying true to the core principles of Ayurveda.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="/assets/history.jpg"
                alt="New Life Ayurvedic Hospital History"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <div className="flex items-center mb-4">
                <FaLeaf className="text-[#406878] text-3xl mr-4" />
                <h2 className="text-2xl font-bold text-[#203840]">Our Vision</h2>
              </div>
              <p className="text-[#406878] leading-relaxed">
                To be the leading center for authentic Ayurvedic healing, recognized globally for our commitment to holistic wellness and the preservation of ancient Ayurvedic wisdom.
              </p>
              <p className="text-[#406878] mt-4 leading-relaxed">
                We envision a world where Ayurveda is embraced as a complement to modern medicine, providing natural solutions for optimal health and longevity.
              </p>
            </div>
            
            <div className="card">
              <div className="flex items-center mb-4">
                <FaHeart className="text-[#406878] text-3xl mr-4" />
                <h2 className="text-2xl font-bold text-[#203840]">Our Mission</h2>
              </div>
              <ul className="text-[#406878] space-y-3 list-disc list-inside">
                <li>To provide authentic and effective Ayurvedic treatments tailored to individual needs</li>
                <li>To educate people about the benefits of Ayurvedic lifestyle and preventive care</li>
                <li>To conduct research and document the efficacy of Ayurvedic treatments</li>
                <li>To train the next generation of Ayurvedic practitioners</li>
                <li>To make Ayurvedic healing accessible to people from all walks of life</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-[#f0f8f8]">
        <div className="container">
          <h2 className="section-title">Meet Our Expert Team</h2>
          <p className="section-subtitle">
            Our compassionate and knowledgeable doctors are the heart of our hospital, dedicated to your complete well-being.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map(doctor => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[#203840] text-white">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center leading-tight">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <FaUserMd className="text-5xl mx-auto mb-4 text-[#a8c8d8]" />
              <h3 className="text-2xl font-bold mb-3">Authenticity</h3>
              <p className="opacity-90 leading-relaxed">
                We are committed to providing genuine Ayurvedic treatments as prescribed in classical texts,
                using authentic herbs and traditional methods.
              </p>
            </div>
            
            <div className="text-center">
              <FaLeaf className="text-5xl mx-auto mb-4 text-[#a8c8d8]" />
              <h3 className="text-2xl font-bold mb-3">Holistic Approach</h3>
              <p className="opacity-90 leading-relaxed">
                We treat the whole person – body, mind, and spirit – not just isolated symptoms,
                addressing the root cause of health issues.
              </p>
            </div>
            
            <div className="text-center">
              <FaHeart className="text-5xl mx-auto mb-4 text-[#a8c8d8]" />
              <h3 className="text-2xl font-bold mb-3">Compassionate Care</h3>
              <p className="opacity-90 leading-relaxed">
                We believe in treating our patients with respect, empathy, and care,
                making their healing journey comfortable and positive.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;