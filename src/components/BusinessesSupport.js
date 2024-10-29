import React from "react";

const businesses = [
  { name: "Stashfin", logo: "https://wecollect.co.in/_next/static/media/bws1.d3a26c45.png" },
  { name: "OneCard", logo: "https://wecollect.co.in/_next/static/media/bws2.6ed88fc7.png" },
  { name: "Clix", logo: "https://wecollect.co.in/_next/static/media/bws3.8ffb617c.png" },
  { name: "LoanTap", logo: "https://wecollect.co.in/_next/static/media/bws7.73433252.png" },
  { name: "InCred", logo: "https://wecollect.co.in/_next/static/media/bws9.5855f358.png" },
  { name: "ICICI Bank", logo: "https://wecollect.co.in/_next/static/media/bws11.fe43556b.png" },
  { name: "Bajaj Finserv", logo: "https://wecollect.co.in/_next/static/media/bws12.5b814d7b.png" },
];

const BusinessesSupport = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-8 text-center" id="businessSupportBtn">
      <header className="mb-12">
        <h1 className="wecollect_header text-white">Businesses We Support</h1>
        <p className="wecollect_paragraph text-white mt-4">
          We possess the capability to deliver comprehensive debt collection services
          across diverse loan categories.
        </p>
      </header>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 partner_about">
        {businesses.map((business, index) => (
          <div
            key={index}
            className="partenr_logo transform transition-transform hover:scale-105"
          >
            <img 
              src={business.logo} 
              alt={business.name} 
              className="w-24 h-24 object-contain mx-auto" // fixed width and height with object-contain
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessesSupport;
