import React from 'react';

const Navbar = () => {
  return (
    <div className='container-fluid container-xl'>
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center py-4 px-6 bg-white shadow-md">
        {/* Logo Section */}
        <div className="logo-container flex items-center">
          <img
            src="https://wecollect.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwecollect_logo.8a7761c7.png&w=256&q=75"
            alt="Wecollect Logo"
            className="h-10 w-auto"  /* Adjust logo size as needed */
          />
        </div>

        {/* Links Section */}
        <ul className="flex space-x-6 text-black-800 font-bold">
          <li><a href="#home" className="hover:text-blue-600 transition-colors wecollect_paragraph hover:underline">Home</a></li>
          <li><a href="#about" className="hover:text-blue-600 transition-colors wecollect_paragraph hover:underline">About</a></li>
          {/* Uncomment to add more links */}
          {/* <li><a href="#services" className="hover:text-blue-600 transition-colors">Services</a></li> */}
        </ul>

        {/* Contact Button (Commented Out) */}
        {/* <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Contact Us</a> */}
      </nav>
    </div>
  );
};

export default Navbar;
