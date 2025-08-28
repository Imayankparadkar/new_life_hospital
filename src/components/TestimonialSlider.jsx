import React from 'react';

// --- Helper Components & Data ---
// In a real application, these would be from libraries and data files.
// For this self-contained example, they are included here.

// Mocking Swiper components
const Swiper = ({ children, ...props }) => <div className="swiper-mock" {...props}>{children}</div>;
const SwiperSlide = ({ children }) => <div className="swiper-slide-mock">{children}</div>;

// Mock data
const testimonials = [
  { id: 1, name: 'Sarah L.', condition: 'Treated for Joint Pain', content: 'The Panchakarma treatment was life-changing. My chronic joint pain has significantly reduced, and I feel rejuvenated. The staff is incredibly caring and professional.', avatar: 'https://placehold.co/100x100/a8c8d8/203840?text=SL' },
  { id: 2, name: 'Michael B.', condition: 'Treated for Stress & Anxiety', content: 'I came here feeling completely burnt out. The Shirodhara and meditation sessions helped me find a sense of calm I haven\'t felt in years. Highly recommend this hospital.', avatar: 'https://placehold.co/100x100/a8c8d8/203840?text=MB' },
  { id: 3, name: 'Jessica P.', condition: 'Treated for Digestive Issues', content: 'After years of struggling with digestive problems, the personalized diet and herbal treatments have made a world of difference. I am so grateful for their expertise.', avatar: 'https://placehold.co/100x100/a8c8d8/203840?text=JP' },
  { id: 4, name: 'David C.', condition: 'General Wellness Program', content: 'The wellness retreat was a fantastic experience. I learned so much about Ayurvedic lifestyle and feel more energetic and balanced than ever before. A truly authentic place.', avatar: 'https://placehold.co/100x100/a8c8d8/203840?text=DC' },
];

// Placeholder for react-icons
const FaQuoteLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor">
    <path d="M10 12.336C10 10.49 11.49 9 13.336 9H14.17L13.13 11.13C12.55 12.29 13.45 13.67 14.71 13.67C15.45 13.67 16.11 13.23 16.43 12.63L17.5 10.67L19.5 14.33L17.33 18.17C16.83 19.17 15.67 19.67 14.67 19.17L5.83 14.67C4.83 14.17 4.33 13 4.83 12L6.67 8.5C7.17 7.5 8.33 7 9.33 7.5L10 7.83V12.336M18 12.336C18 10.49 19.49 9 21.336 9H22V12.336C22 15.39 19.94 17.89 17.33 18.17L19.5 14.33L18 11.5V12.336Z" />
  </svg>
);


const TestimonialSlider = () => {
  // Note: The Swiper component is mocked above for display purposes.
  // In a real project, you would use the actual Swiper library.
  return (
    <section className="bg-white py-20">
      <div className="container">
        <h2 className="section-title">What Our Patients Say</h2>
        <p className="section-subtitle">
          Real stories from individuals who have experienced profound healing and rejuvenation at our hospital.
        </p>
        
        {/* This is a simplified representation of the slider for styling.
          The original Swiper props (breakpoints, autoplay, etc.) would be used
          with the actual library.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {testimonials.slice(0, 3).map((testimonial) => (
            <div key={testimonial.id} className="card h-full flex flex-col p-8">
              <FaQuoteLeft className="text-[#a8c8d8] text-5xl mb-4" />
              <p className="text-[#406878] mb-6 flex-grow leading-relaxed">"{testimonial.content}"</p>
              <div className="flex items-center mt-auto pt-4 border-t border-gray-200">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-white shadow-md"
                />
                <div>
                  <h4 className="font-bold text-[#203840]">{testimonial.name}</h4>
                  <p className="text-sm text-[#607880]">{testimonial.condition}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
