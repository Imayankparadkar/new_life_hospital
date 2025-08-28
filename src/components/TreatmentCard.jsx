import React from 'react';

// --- Helper Components & Data ---
// In a real application, these would be from a library and data files.
// For this self-contained example, they are included here.

const Link = ({ to, children, className }) => <a href={to} className={className}>{children}</a>;

// Sample treatment data for a single card
const sampleTreatment = {
  id: 1,
  name: 'Panchakarma Therapy',
  image: 'https://placehold.co/600x400/305060/e0e8e8?text=Panchakarma',
  shortDescription: 'A comprehensive detoxification and rejuvenation program for mind and body.',
  ailments: ['Detox', 'Chronic Fatigue', 'Stress Relief'],
};


const TreatmentCard = ({ treatment }) => {
  return (
    <div className="card h-full flex flex-col p-0 overflow-hidden">
      <img 
        src={treatment.image} 
        alt={treatment.name} 
        className="w-full h-60 object-cover"
      />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-bold text-xl mb-2 text-[#305060]">{treatment.name}</h3>
        <p className="text-[#406878] mb-4 flex-grow">{treatment.shortDescription}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {treatment.ailments.map((ailment, index) => (
            <span 
              key={index} 
              className="chip" // Using the themed chip class
            >
              {ailment}
            </span>
          ))}
        </div>
        <div className="mt-auto">
          <Link 
            to={`/treatments#${treatment.id}`}
            className="btn btn-outline text-sm py-2 px-5" // Using the themed btn-outline class
          >
            Know More
          </Link>
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
                 <TreatmentCard treatment={sampleTreatment} />
            </div>
        </div>
    )
}


export default TreatmentCard;
