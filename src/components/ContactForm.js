// src/ContactForm.js
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // Handle form submission (e.g., send to an API)
  };

  return (
    <>
       <div className="mx-auto p-4 mt-10 text-center">
      <h2 className="wecollect_header">Get In Touch</h2>
      <p className='wecollect_paragraph'>We'll create high-quality linkable content and build at least 40 high-authority 
        links to each assest, paving the way for you to grow your rankings, improve brand.</p>
        </div>

        <div className="flex flex-wrap">
    <div className="w-full md:w-1/2 p-4">
        {/* This column can be used for other content */}
        <div className="bg-gray-100 p-4 rounded-lg">
            {/* <h2 className="text-lg font-semibold">Other Content</h2>
            <p>Your other content goes here.</p> */}
            <img src='https://www.slashrtc.com/img/contact/banner-header.svg' alt='' />
        </div>
    </div>
    
    <div className="w-full md:w-1/2 p-4">
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email ID</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    rows="3"
                ></textarea>
            </div>

            <button type="submit" className="w-full bg-[#43baf9] text-white p-2 rounded-md hover:bg-blue-700 transition duration-200">
                Submit
            </button>
        </form>
    </div>
</div>

    </>
 
        
   
  );
};

export default ContactForm;
