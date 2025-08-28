import React, { useState } from 'react';

// --- Helper Components & Data ---
// In a real application, these would be in separate files.
// For this self-contained example, they are included here.

// Placeholder for react-icons since the import can fail.
const FaSearch = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

// Sample blog data
const blogs = [
  { id: 1, title: 'The Power of Turmeric in Ayurveda', excerpt: 'Discover the anti-inflammatory and healing properties of this golden spice.', image: 'https://placehold.co/600x400/a8c8d8/203840?text=Blog+Post', date: 'August 22, 2025', readTime: '5 min read' },
  { id: 2, title: 'Balancing Your Doshas: A Beginner\'s Guide', excerpt: 'Learn how to identify your dominant dosha and maintain balance for optimal health.', image: 'https://placehold.co/600x400/a8c8d8/203840?text=Blog+Post', date: 'August 15, 2025', readTime: '8 min read' },
  { id: 3, title: 'Stress Management with Ashwagandha', excerpt: 'Explore how this powerful adaptogen can help you manage stress and improve resilience.', image: 'https://placehold.co/600x400/a8c8d8/203840?text=Blog+Post', date: 'August 5, 2025', readTime: '6 min read' },
];

// A self-contained BlogCard component to resolve the import error.
const BlogCard = ({ blog }) => (
  <div className="card overflow-hidden p-0 flex flex-col">
    <img src={blog.image} alt={blog.title} className="w-full h-56 object-cover" />
    <div className="p-6 flex flex-col flex-grow">
      <div className="flex justify-between items-center text-sm text-[#406878] mb-2">
        <span>{blog.date}</span>
        <span>{blog.readTime}</span>
      </div>
      <h3 className="font-bold text-xl mb-2 text-[#305060]">{blog.title}</h3>
      <p className="text-[#406878] mb-4 flex-grow">{blog.excerpt}</p>
      <a href="#" className="text-[#406878] font-bold hover:text-[#203840] transition-colors duration-300 mt-auto">
        Read More →
      </a>
    </div>
  </div>
);


const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBlogs, setFilteredBlogs] = useState(blogs);

  // Handle search
  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (term.trim() === '') {
      setFilteredBlogs(blogs);
    } else {
      const filtered = blogs.filter(blog =>
        blog.title.toLowerCase().includes(term.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredBlogs(filtered);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-white pt-24 pb-16 text-center">
        <div className="container">
          <h1 className="text-5xl md:text-6xl font-bold text-[#203840]">Blog & Articles</h1>
          <p className="section-subtitle mt-4">
            Explore our collection of articles on Ayurvedic remedies, health tips, and natural lifestyle practices.
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-6 bg-[#f0f8f8] border-y border-gray-200">
        <div className="container">
          <div className="max-w-xl mx-auto relative">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={handleSearch}
              className="form-input w-full p-3 pl-12"
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#607880]">
              <FaSearch />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-white">
        <div className="container">
          {filteredBlogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map(blog => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-[#406878]">No articles found matching "{searchTerm}"</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setFilteredBlogs(blogs);
                }}
                className="btn btn-primary mt-6"
              >
                Show All Articles
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-[#203840] text-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="mb-8 opacity-90">
              Stay updated with our latest articles, health tips, and special offers.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="form-input flex-grow text-[#203840]"
                required
              />
              <button type="submit" className="btn btn-secondary">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
