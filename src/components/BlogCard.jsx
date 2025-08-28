import React from 'react';

// --- Helper Components & Data ---
// In a real application, these would be from a library and data files.
// For this self-contained example, they are included here.

const Link = ({ to, children, className }) => <a href={to} className={className}>{children}</a>;

// Placeholder for react-icons
const FaCalendarAlt = () => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>;
const FaUser = () => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>;

// Sample blog data for a single card
const sampleBlog = {
  id: 1,
  title: 'The Power of Turmeric in Ayurveda',
  image: 'https://placehold.co/600x400/305060/e0e8e8?text=Blog+Post',
  excerpt: 'Discover the anti-inflammatory and healing properties of this golden spice in traditional Ayurvedic medicine.',
  date: 'August 22, 2025',
  author: 'Dr. Alok Sharma',
};


const BlogCard = ({ blog }) => {
  return (
    <div className="card h-full flex flex-col p-0 overflow-hidden">
      <img 
        src={blog.image} 
        alt={blog.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center text-sm text-[#607880] mb-3">
          <FaCalendarAlt className="mr-2" />
          <span className="mr-4">{blog.date}</span>
          <FaUser className="mr-2" />
          <span>{blog.author}</span>
        </div>
        <h3 className="font-bold text-xl mb-2 text-[#305060]">{blog.title}</h3>
        <p className="text-[#406878] mb-4 text-sm flex-grow leading-relaxed">{blog.excerpt}</p>
        <div className="mt-auto">
            <Link 
            to={`/blog/${blog.id}`}
            className="text-[#406878] font-bold hover:text-[#203840] transition-colors duration-300 text-sm"
            >
            Read More →
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
                 <BlogCard blog={sampleBlog} />
            </div>
        </div>
    )
}


export default BlogCard;
