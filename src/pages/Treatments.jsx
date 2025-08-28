import React, { useState, useEffect } from 'react';
import TreatmentCard from '../components/TreatmentCard';
import treatments from '../data/treatments';
import { FaFilter } from 'react-icons/fa';

const Treatments = () => {
  const [filteredTreatments, setFilteredTreatments] = useState(treatments);
  const [activeFilter, setActiveFilter] = useState('all');

  // Extract all unique ailments for filter
  const allAilments = [...new Set(treatments.flatMap(treatment => treatment.ailments))];

  // Handle filter change
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);

    if (filter === 'all') {
      setFilteredTreatments(treatments);
    } else {
      const filtered = treatments.filter(treatment =>
        treatment.ailments.includes(filter)
      );
      setFilteredTreatments(filtered);
    }
  };

  // Scroll to treatment if hash is present in URL
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-white pt-24 pb-16 text-center">
        <div className="container">
          <h1 className="text-5xl md:text-6xl font-bold text-[#203840]">Our Ayurvedic Treatments</h1>
          <p className="section-subtitle mt-4">
            Discover our range of authentic Ayurvedic treatments designed to address various health concerns and promote overall wellness.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-4 bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-40">
        <div className="container">
          <div className="flex items-center flex-wrap gap-x-3 gap-y-2">
            <div className="flex items-center mr-4">
              <FaFilter className="text-[#406878] mr-3" />
              <span className="font-semibold text-[#203840]">Filter by Concern:</span>
            </div>

            <button
              onClick={() => handleFilterChange('all')}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeFilter === 'all'
                  ? 'bg-[#305060] text-white shadow'
                  : 'bg-gray-200 text-[#406878] hover:bg-gray-300'
              }`}
            >
              All Treatments
            </button>

            {allAilments.map(ailment => (
              <button
                key={ailment}
                onClick={() => handleFilterChange(ailment)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-300 ${
                  activeFilter === ailment
                    ? 'bg-[#305060] text-white shadow'
                    : 'bg-gray-200 text-[#406878] hover:bg-gray-300'
                }`}
              >
                {ailment}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Cards Grid */}
      <section className="py-20 bg-[#f0f8f8]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTreatments.map(treatment => (
              <TreatmentCard key={treatment.id} treatment={treatment} />
            ))}
          </div>

          {filteredTreatments.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-[#406878]">No treatments found for the selected filter.</p>
              <button
                onClick={() => handleFilterChange('all')}
                className="btn btn-primary mt-6"
              >
                Show All Treatments
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Detailed Treatment Information */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="section-title">Treatment Details</h2>
          <div className="space-y-16">
            {treatments.map(treatment => (
              <div
                key={treatment.id}
                id={treatment.id}
                className="card p-8 flex flex-col md:flex-row gap-8 scroll-mt-24" // scroll-mt for sticky nav
              >
                <div className="md:w-1/3">
                  <img
                    src={treatment.image}
                    alt={treatment.name}
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-3xl font-bold text-[#305060] mb-4">{treatment.name}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {treatment.ailments.map((ailment, index) => (
                      <span key={index} className="chip">
                        {ailment}
                      </span>
                    ))}
                  </div>
                  <p className="text-[#406878] mb-4 leading-relaxed">{treatment.description}</p>

                  <h4 className="font-bold text-lg mb-2 text-[#203840]">Benefits:</h4>
                  <ul className="list-disc pl-5 mb-4 text-[#406878] space-y-1 leading-relaxed">
                    {treatment.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>

                  <h4 className="font-bold text-lg mb-2 text-[#203840]">Process:</h4>
                  <p className="text-[#406878] mb-4 leading-relaxed">{treatment.process}</p>

                  <div className="flex flex-wrap gap-4 mt-6">
                    <span className="inline-block bg-[#a8c8d8]/30 text-[#305060] font-semibold px-4 py-2 rounded-lg">
                      Duration: {treatment.duration}
                    </span>
                    <span className="inline-block bg-[#a8c8d8]/30 text-[#305060] font-semibold px-4 py-2 rounded-lg">
                      Price: ₹{treatment.price.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Treatments;