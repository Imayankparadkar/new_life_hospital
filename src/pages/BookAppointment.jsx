import React from 'react';
import AppointmentForm from '../components/AppointmentForm';
import { FaCalendarCheck, FaUserClock, FaSmile, FaClinicMedical } from 'react-icons/fa';

const BookAppointment = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-white pt-24 pb-16 text-center">
        <div className="container">
          <h1 className="text-5xl md:text-6xl font-bold text-[#203840]">Book an Appointment</h1>
          <p className="section-subtitle mt-4">
            Schedule your consultation or treatment with our expert Ayurvedic physicians.
            Fill out the form below and we'll get back to you to confirm your appointment.
          </p>
        </div>
      </section>

      {/* Appointment Process */}
      <section className="py-20 bg-[#f0f8f8]">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {/* Process Step 1 */}
            <div className="card p-6">
              <div className="bg-[#a8c8d8]/30 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCalendarCheck className="text-[#406878] text-3xl" />
              </div>
              <h3 className="font-bold text-xl mb-2 text-[#203840]">1. Book Online</h3>
              <p className="text-[#406878]">Fill out the appointment form with your details and preferences.</p>
            </div>

            {/* Process Step 2 */}
            <div className="card p-6">
              <div className="bg-[#a8c8d8]/30 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUserClock className="text-[#406878] text-3xl" />
              </div>
              <h3 className="font-bold text-xl mb-2 text-[#203840]">2. Confirmation</h3>
              <p className="text-[#406878]">Receive confirmation via email or phone within 24 hours.</p>
            </div>

            {/* Process Step 3 */}
            <div className="card p-6">
              <div className="bg-[#a8c8d8]/30 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaClinicMedical className="text-[#406878] text-3xl" />
              </div>
              <h3 className="font-bold text-xl mb-2 text-[#203840]">3. Consultation</h3>
              <p className="text-[#406878]">Meet our Ayurvedic physician for a thorough assessment.</p>
            </div>

            {/* Process Step 4 */}
            <div className="card p-6">
              <div className="bg-[#a8c8d8]/30 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaSmile className="text-[#406878] text-3xl" />
              </div>
              <h3 className="font-bold text-xl mb-2 text-[#203840]">4. Begin Treatment</h3>
              <p className="text-[#406878]">Start your personalized Ayurvedic treatment plan.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Form Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title">Schedule Your Visit</h2>
            <div className="card p-8 mt-12">
              <AppointmentForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-[#f0f8f8]">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto mt-12 space-y-6">
            {/* FAQ Item 1 */}
            <div className="border-b border-gray-300 pb-6">
              <h3 className="font-bold text-xl mb-2 text-[#305060]">How long will my first appointment take?</h3>
              <p className="text-[#406878] leading-relaxed">
                Your first consultation typically takes 45-60 minutes. This allows our physicians to thoroughly
                understand your health concerns and constitution (Prakriti).
              </p>
            </div>

            {/* FAQ Item 2 */}
            <div className="border-b border-gray-300 pb-6">
              <h3 className="font-bold text-xl mb-2 text-[#305060]">What should I bring to my appointment?</h3>
              <p className="text-[#406878] leading-relaxed">
                Please bring any recent medical reports, a list of medications you're currently taking,
                and a list of any questions you may have.
              </p>
            </div>

            {/* FAQ Item 3 */}
            <div className="border-b border-gray-300 pb-6">
              <h3 className="font-bold text-xl mb-2 text-[#305060]">Can I book an appointment for someone else?</h3>
              <p className="text-[#406878] leading-relaxed">
                Yes, you can book an appointment for a family member or friend. Just make sure to provide
                their details in the appointment form.
              </p>
            </div>

            {/* FAQ Item 4 */}
            <div className="border-b border-gray-300 pb-6">
              <h3 className="font-bold text-xl mb-2 text-[#305060]">How far in advance should I book?</h3>
              <p className="text-[#406878] leading-relaxed">
                We recommend booking at least 3-5 days in advance for regular consultations, and
                1-2 weeks in advance for specialized treatments like Panchakarma.
              </p>
            </div>

            {/* FAQ Item 5 */}
            <div className="pb-6">
              <h3 className="font-bold text-xl mb-2 text-[#305060]">What if I need to cancel my appointment?</h3>
              <p className="text-[#406878] leading-relaxed">
                We understand that plans change. Please give us at least 24 hours notice if you need to
                cancel or reschedule your appointment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookAppointment;
