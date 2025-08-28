import React from 'react';

// --- Helper Components & Data ---
// In a real application, these would be in separate files.
// For this self-contained example, they are included here.

const Link = ({ to, children, className }) => <a href={to} className={className}>{children}</a>;

// Placeholder for react-icons since the import can fail.
const FaFacebook = () => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>;
const FaTwitter = () => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>;
const FaInstagram = () => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
const FaYoutube = () => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>;
const FaPhone = () => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>;
const FaEnvelope = () => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>;
const FaMapMarkerAlt = () => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>;


const Footer = () => {
  return (
    <footer className="bg-[#101c20] text-[#b8d8e8] pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">New Life Ayurveda</h3>
            <p className="mb-4 text-sm leading-relaxed">Healing through nature's wisdom. Traditional Ayurvedic treatments for modern wellness.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#b8d8e8] hover:text-white transition"><FaFacebook size={20} /></a>
              <a href="#" className="text-[#b8d8e8] hover:text-white transition"><FaTwitter size={20} /></a>
              <a href="#" className="text-[#b8d8e8] hover:text-white transition"><FaInstagram size={20} /></a>
              <a href="#" className="text-[#b8d8e8] hover:text-white transition"><FaYoutube size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link to="/treatments" className="hover:text-white transition">Treatments</Link></li>
              <li><Link to="/blog" className="hover:text-white transition">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Popular Treatments</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/treatments" className="hover:text-white transition">Panchakarma</Link></li>
              <li><Link to="/treatments" className="hover:text-white transition">Abhyanga</Link></li>
              <li><Link to="/treatments" className="hover:text-white transition">Shirodhara</Link></li>
              <li><Link to="/treatments" className="hover:text-white transition">Nasyam</Link></li>
              <li><Link to="/treatments" className="hover:text-white transition">Pizhichil</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mr-3 mt-1 flex-shrink-0" /> 
                <span>123 Ayurveda Way, Wellness City, ST 12345</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3" /> 
                <a href="tel:+15551234567" className="hover:text-white transition">+1 (555) 123-4567</a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3" /> 
                <a href="mailto:info@prakritiayurveda.com" className="hover:text-white transition">info@newlifeiayurveda.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 text-center text-sm">
          <p>© {new Date().getFullYear()} New Life Ayurvedic Hospital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
