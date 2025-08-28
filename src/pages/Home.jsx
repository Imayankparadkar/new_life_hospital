import React from 'react';
import { Link } from 'react-router-dom';
import { FaLeaf, FaUserMd, FaCalendarCheck, FaBookMedical } from 'react-icons/fa';
import TestimonialSlider from '../components/TestimonialSlider';
import treatments from '../data/treatments';

const Home = () => {
  // Get featured treatments (first 3)
  const featuredTreatments = treatments.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[80vh] flex items-center"
        style={{ backgroundImage: 'url(/assets/banner.jpg)' }}
      >
        {/* Using a theme-aligned overlay color */}
        <div className="absolute inset-0 bg-[#305060]/70"></div>
        <div className="container relative z-10 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-sans">
            Healing through Nature
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Experience the ancient wisdom of Ayurveda at Prakriti Ayurvedic Hospital,
            where we blend traditional healing with modern comfort.
          </p>
          <div className="flex flex-wrap gap-4">
            {/* Using the new btn classes */}
            <Link to="/book-appointment" className="btn btn-primary">
              Book Appointment
            </Link>
            <Link to="/treatments" className="btn bg-transparent border-2 border-white hover:bg-white hover:text-[#305060]">
              Explore Treatments
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Replaced custom styling with the new 'card' component class */}
            <div className="card text-center">
              <FaLeaf className="text-[#607880] text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-[#305060]">Natural Healing</h3>
              <p className="text-[#607880]">Harness the power of nature with our authentic Ayurvedic treatments.</p>
            </div>
            
            <div className="card text-center">
              <FaUserMd className="text-[#607880] text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-[#305060]">Expert Physicians</h3>
              <p className="text-[#607880]">Our experienced Ayurvedic doctors provide personalized care.</p>
            </div>
            
            <div className="card text-center">
              <FaCalendarCheck className="text-[#607880] text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-[#305060]">Holistic Approach</h3>
              <p className="text-[#607880]">We treat the root cause, not just the symptoms.</p>
            </div>
            
            <div className="card text-center">
              <FaBookMedical className="text-[#607880] text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-[#305060]">Modern Facilities</h3>
              <p className="text-[#607880]">Traditional healing in a clean, comfortable environment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img
                src="/assets/about.jpg"
                alt="About Prakriti Ayurvedic Hospital"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="md:w-1/2 md:text-left text-center">
              {/* Using the new section-title and subtitle classes */}
              <h2 className="section-title text-left relative pb-4 mb-6 after:left-0 after:-translate-x-0">
                Welcome to New Life
              </h2>
              <p className="mb-4 text-[#607880] text-lg">
                Founded on the principles of Ayurveda, New Life Ayurvedic Hospital is dedicated to providing holistic healing and promoting wellness through natural methods.
              </p>
              <p className="mb-6 text-[#607880] text-lg">
                Our team of experienced Ayurvedic physicians blends ancient wisdom with modern approaches to address a wide range of health concerns. We focus on treating the root cause of illnesses, not just the symptoms.
              </p>
              <Link to="/about" className="btn btn-primary">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Treatments */}
      <section className="py-20">
        <div className="container">
          <h2 className="section-title">Our Specialized Treatments</h2>
          <p className="section-subtitle">
            Discover our range of authentic Ayurvedic therapies designed to rejuvenate your mind, body, and spirit.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredTreatments.map(treatment => (
              // Using the 'card' class for treatment items
              <div key={treatment.id} className="card overflow-hidden p-0">
                <img
                  src={treatment.image}
                  alt={treatment.name}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2 text-[#305060]">{treatment.name}</h3>
                  <p className="text-[#607880] mb-4">{treatment.shortDescription}</p>
                  <Link
                    to={`/treatments#${treatment.id}`}
                    className="text-[#607880] font-bold hover:text-[#305060] transition-colors duration-300"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/treatments" className="btn btn-primary">
              View All Treatments
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <TestimonialSlider />

      {/* CTA Section */}
      <section className="py-20 bg-[#305060] text-white text-center">
        <div className="container">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Healing Journey?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Book an appointment today and take the first step towards natural wellness with New Life Ayurvedic Hospital.
          </p>
          <Link to="/book-appointment" className="btn bg-white text-[#305060] hover:bg-[#e8e0e0] hover:-translate-y-1 shadow-lg">
            Book Your Appointment Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;