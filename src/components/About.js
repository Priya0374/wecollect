import React, { useState } from 'react';

const a = () => {
  const [showFullText, setShowFullText] = useState(false);

  const handleReadMore = () => {
    setShowFullText(true);
  };

  return (
    <div className="aboutus-area p-8 max-w-screen-md mx-auto">
      <h2 className="text-3xl font-bold mb-4">About Us</h2>

      {/* Conditionally render the content */}
      <p className="text-left">
        Recovery agents with access to a diverse range of technology, automated communication...
        {!showFullText && (
          <button onClick={handleReadMore} className="text-blue-500 hover:underline ml-1">
            Read More
          </button>
        )}
      </p>

      {/* Full content appears in a new section when "Read More" is clicked */}
      {showFullText && (
        <div className="mt-4">
          <p className="text-left">
            Recovery agents with access to a diverse range of technology, automated communication, and
            AI-driven insights are able to provide solutions that maximize recovery rates efficiently.
            Our team specializes in delivering seamless experiences through technology-enabled processes
            designed for customer-centric recovery.
          </p>
        </div>
      )}
    </div>
  );
};

export default a;
