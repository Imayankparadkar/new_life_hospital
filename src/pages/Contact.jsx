import React from 'react';

// --- Helper Components ---
// In a real application, these would be in separate files.
// For this self-contained example, they are included here.

// Placeholder for react-icons since the import can fail.
const FaPhone = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);
const FaEnvelope = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);
const FaClock = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);
const FaMapMarkerAlt = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>
  </svg>
);

// A self-contained ContactForm component to resolve the import error.
const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! We will get back to you soon.');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-[#305060] mb-1">Full Name</label>
          <input type="text" id="fullName" name="fullName" required className="form-input" placeholder="John Doe" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#305060] mb-1">Email Address</label>
          <input type="email" id="email" name="email" required className="form-input" placeholder="you@example.com" />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-[#305060] mb-1">Subject</label>
        <input type="text" id="subject" name="subject" required className="form-input" placeholder="Question about treatments" />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[#305060] mb-1">Message</label>
        <textarea id="message" name="message" rows="5" required className="form-input" placeholder="Your message here..."></textarea>
      </div>
      <div className="text-left">
        <button type="submit" className="btn btn-primary">
          Send Message
        </button>
      </div>
    </form>
  );
};

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-white pt-24 pb-16 text-center">
        <div className="container">
          <h1 className="text-5xl md:text-6xl font-bold text-[#203840]">Contact Us</h1>
          <p className="section-subtitle mt-4">
            Have questions or need more information? We're here to help. Reach out to us via phone, email, or the contact form below.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-[#f0f8f8]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="section-title text-left relative pb-4 mb-8 after:left-0 after:-translate-x-0">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-[#406878] text-2xl mt-1 mr-5 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg text-[#203840] mb-1">Location</h3>
                    <p className="text-[#406878] leading-relaxed">
                      123 Ayurveda Way, Wellness City<br />
                      State, Country - 12345
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaPhone className="text-[#406878] text-2xl mt-1 mr-5 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg text-[#203840] mb-1">Phone</h3>
                    <p className="text-[#406878] leading-relaxed">
                      +1 (555) 123-4567<br />
                      +1 (555) 987-6543
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaEnvelope className="text-[#406878] text-2xl mt-1 mr-5 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg text-[#203840] mb-1">Email</h3>
                    <p className="text-[#406878] leading-relaxed">
                      info@prakritiayurveda.com<br />
                      appointments@newlifeayurveda.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaClock className="text-[#406878] text-2xl mt-1 mr-5 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg text-[#203840] mb-1">Working Hours</h3>
                    <p className="text-[#406878] leading-relaxed">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 3:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="section-title text-left relative pb-4 mb-8 after:left-0 after:-translate-x-0">Send Us a Message</h2>
              <div className="card p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="section-title">Find Us On The Map</h2>
          <div className="h-96 md:h-[500px] bg-gray-300 rounded-lg overflow-hidden mt-12 shadow-lg">
            {/* This would be a Google Maps embed in a real implementation */}
            <div className="w-full h-full flex items-center justify-center bg-gray-200">
              <p className="text-gray-500">Google Maps would be embedded here</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
