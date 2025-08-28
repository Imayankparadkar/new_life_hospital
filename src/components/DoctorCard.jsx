import React from 'react';

// --- Helper Components & Data ---
// In a real application, these would be from a library and data files.
// For this self-contained example, they are included here.

const Link = ({ to, children, className }) => <a href={to} className={className}>{children}</a>;

// Placeholder for react-icons
const FaLinkedin = () => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
const FaEnvelope = () => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>;

// Sample doctor data for a single card
const sampleDoctor = {
  id: 1,
  name: 'Dr. Alok Sharma',
  specialization: 'Panchakarma Specialist',
  image: 'https://placehold.co/600x400/305060/e0e8e8?text=Dr.+Sharma',
  description: 'With over 15 years of experience, Dr. Sharma is a leading expert in detoxification and rejuvenation therapies.',
  linkedin: '#',
  email: 'alok.sharma@prakritiayurveda.com',
};


const DoctorCard = ({ doctor }) => {
  return (
    <div className="card h-full flex flex-col p-0 overflow-hidden text-center">
      <img 
        src={doctor.image} 
        alt={doctor.name} 
        className="w-full h-64 object-cover"
      />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-bold text-xl mb-1 text-[#203840]">{doctor.name}</h3>
        <p className="text-[#406878] font-medium mb-3">{doctor.specialization}</p>
        <p className="text-[#607880] mb-4 text-sm flex-grow">{doctor.description}</p>
        <div className="flex justify-center space-x-4 mt-auto pt-4 border-t border-gray-200">
          <a href={doctor.linkedin} className="text-[#607880] hover:text-[#203840] transition">
            <FaLinkedin size={22} />
          </a>
          <a href={`mailto:${doctor.email}`} className="text-[#607880] hover:text-[#203840] transition">
            <FaEnvelope size={22} />
          </a>
        </div>
      </div>
    </div>
  );
};

// Example of how to use the card
const App = () => {
    return (
        <div className="p-8 bg-[#f0f8f8]">
            <div className="max-w-sm mx-auto">
                 <DoctorCard doctor={sampleDoctor} />
            </div>
        </div>
    )
}


export default DoctorCard;
