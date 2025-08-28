import React, { useEffect } from 'react';

// --- Helper Components & Data ---
// In a real application, these would be in separate files.
// For this self-contained example, they are included here.

// Placeholder for react-icons since the import can fail.
const FaCalendarAlt = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);
const FaUser = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>
  </svg>
);
const FaTags = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line>
  </svg>
);
const FaArrowLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline>
  </svg>
);


// Sample blog data with full content
const blogs = [
    { 
        id: 1, 
        title: 'The Power of Turmeric in Ayurveda', 
        excerpt: 'Discover the anti-inflammatory and healing properties of this golden spice.', 
        image: 'https://placehold.co/1200x600/305060/e0e8e8?text=Turmeric',
        date: 'August 22, 2025', 
        author: 'Dr. Alok Sharma',
        authorImage: 'https://placehold.co/100x100/a8c8d8/203840?text=AS',
        authorBio: 'A certified Ayurvedic practitioner with over 15 years of experience in holistic healing.',
        tags: ['Herbs', 'Wellness', 'Anti-inflammatory'],
        content: [
            "Turmeric, known as 'Haridra' in Sanskrit, is one of the most revered spices in Ayurvedic medicine. For thousands of years, it has been used not just as a culinary ingredient but as a potent medicinal herb. Its vibrant golden color comes from curcumin, the primary active compound responsible for most of its health benefits.",
            "The most well-researched property of curcumin is its powerful anti-inflammatory effect. It works at a molecular level to block NF-kB, a molecule that travels into the nuclei of cells and turns on genes related to inflammation. Chronic inflammation is a key driver of many modern diseases, and turmeric offers a natural way to combat it.",
            "Beyond its anti-inflammatory prowess, turmeric is a strong antioxidant. It can neutralize harmful free radicals and also boost the body's own antioxidant enzymes. This dual action provides significant protection against oxidative stress, which is implicated in aging and numerous diseases. Incorporating turmeric into your daily diet, whether in a warm milk latte, a curry, or as a supplement, is a simple step toward better health."
        ]
    },
    { 
        id: 2, 
        title: 'Balancing Your Doshas: A Beginner\'s Guide', 
        excerpt: 'Learn how to identify your dominant dosha and maintain balance for optimal health.', 
        image: 'https://placehold.co/1200x600/305060/e0e8e8?text=Doshas',
        date: 'August 15, 2025', 
        author: 'Dr. Priya Desai',
        tags: ['Doshas', 'Lifestyle', 'Beginner'],
        content: ["First paragraph about Doshas...", "Second paragraph..."]
    },
     { 
        id: 3, 
        title: 'Stress Management with Ashwagandha', 
        excerpt: 'Explore how this powerful adaptogen can help you manage stress and improve resilience.', 
        image: 'https://placehold.co/1200x600/305060/e0e8e8?text=Ashwagandha',
        date: 'August 5, 2025', 
        author: 'Dr. Alok Sharma',
        tags: ['Herbs', 'Stress Relief', 'Mental Health'],
        content: ["First paragraph about Ashwagandha...", "Second paragraph..."]
    },
];

// Mocking react-router-dom hooks for a self-contained example
const useParams = () => ({ id: '1' }); 
const Link = ({ to, children, className }) => <a href={to} className={className}>{children}</a>;


const BlogPost = () => {
  const { id } = useParams();
  const blog = blogs.find(blog => blog.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!blog) {
    return (
      <div className="py-20 text-center container">
        <h2 className="text-3xl font-bold mb-4 text-[#203840]">Article Not Found</h2>
        <p className="mb-6 text-[#406878]">The article you're looking for doesn't exist or has been removed.</p>
        <Link to="/blog" className="btn btn-primary">
          <FaArrowLeft className="inline mr-2" /> Back to Blog
        </Link>
      </div>
    );
  }

  const relatedPosts = blogs
    .filter(post => post.id !== blog.id && post.tags.some(tag => blog.tags.includes(tag)))
    .slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[50vh] flex items-end pb-12"
        style={{ backgroundImage: `url(${blog.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="container relative z-10 text-white">
          <Link to="/blog" className="inline-flex items-center text-white mb-4 opacity-80 hover:opacity-100 transition-opacity">
            <FaArrowLeft className="mr-2" /> Back to All Articles
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            {blog.title}
          </h1>
          <div className="flex items-center text-sm opacity-90">
            <FaCalendarAlt className="mr-2" />
            <span className="mr-4">{blog.date}</span>
            <FaUser className="mr-2" />
            <span>By {blog.author}</span>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none text-[#406878] leading-relaxed">
              {blog.content.map((paragraph, index) => (
                <p key={index} className="mb-6">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Tags */}
            <div className="mt-10 pt-6 border-t border-gray-200 flex items-center flex-wrap">
              <FaTags className="text-[#406878] mr-3" />
              {blog.tags.map((tag, index) => (
                <span key={index} className="chip mr-2 mb-2">
                  {tag}
                </span>
              ))}
            </div>

            {/* Author Bio */}
            <div className="mt-12 p-6 bg-[#f0f8f8] rounded-lg">
              <div className="flex items-center">
                <img
                  src={blog.authorImage}
                  alt={blog.author}
                  className="w-20 h-20 rounded-full object-cover mr-6 border-2 border-white shadow-md"
                />
                <div>
                  <h3 className="font-bold text-xl text-[#203840]">{blog.author}</h3>
                  <p className="text-[#406878]">{blog.authorBio}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-[#f0f8f8]">
          <div className="container">
            <h2 className="section-title">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {relatedPosts.map(post => (
                <div key={post.id} className="card overflow-hidden p-0">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-2 text-[#305060]">{post.title}</h3>
                    <p className="text-[#406878] mb-4 text-sm">{post.excerpt}</p>
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-[#406878] font-bold hover:text-[#203840] transition-colors duration-300 text-sm"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogPost;
