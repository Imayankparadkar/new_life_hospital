import React, { useState } from 'react';

// --- Helper Components & Data ---
// In a real application, these would be in separate files from a library like react-router-dom.
// For this self-contained example, they are included here.

const Link = ({ to, children, className }) => <a href={to} className={className}>{children}</a>;

const NavLink = ({ to, children, className }) => {
    // A simple mock of NavLink's "isActive" prop for styling the active link.
    // In a real app, this logic would be handled by the router.
    const isCurrentPage = window.location.pathname === to;
    const resolvedClassName = typeof className === 'function' ? className({ isActive: isCurrentPage }) : className;
    return <a href={to} className={resolvedClassName}>{children}</a>;
};

// Placeholder for react-icons since the import can fail.
const FaBars = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
);
const FaTimes = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
);


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinkClasses = ({ isActive }) =>
    `font-medium transition-colors duration-300 ${
      isActive ? 'text-[#305060]' : 'text-[#607880] hover:text-[#305060]'
    }`;

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src="https://placehold.co/100x100/305060/e0e8e8?text=P" alt="Prakriti Logo" className="h-10 mr-3 rounded-full" />
          <span className="text-xl font-sans font-bold text-[#203840]">New Life Ayurveda</span>
        </Link>

        {/* Mobile menu button */}
        <button className="md:hidden text-[#305060]" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-8">
          <li><NavLink to="/" className={navLinkClasses}>Home</NavLink></li>
          <li><NavLink to="/about" className={navLinkClasses}>About Us</NavLink></li>
          <li><NavLink to="/treatments" className={navLinkClasses}>Treatments</NavLink></li>
          <li><NavLink to="/blog" className={navLinkClasses}>Blog</NavLink></li>
          <li><NavLink to="/contact" className={navLinkClasses}>Contact</NavLink></li>
          <li>
            <Link to="/book-appointment" className="btn btn-primary text-sm py-2 px-6">
              Book Appointment
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col items-center space-y-4 p-6">
            <li><NavLink to="/" className={navLinkClasses} onClick={toggleMenu}>Home</NavLink></li>
            <li><NavLink to="/about" className={navLinkClasses} onClick={toggleMenu}>About Us</NavLink></li>
            <li><NavLink to="/treatments" className={navLinkClasses} onClick={toggleMenu}>Treatments</NavLink></li>
            <li><NavLink to="/blog" className={navLinkClasses} onClick={toggleMenu}>Blog</NavLink></li>
            <li><NavLink to="/contact" className={navLinkClasses} onClick={toggleMenu}>Contact</NavLink></li>
            <li className="pt-4 w-full">
              <Link to="/book-appointment" className="btn btn-primary w-full text-center" onClick={toggleMenu}>
                Book Appointment
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
