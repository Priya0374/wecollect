import React from 'react';

const CoreStrengths = () => {
  return (
    <div className="bg-white py-12 wecollect_css">
     {/* style={{ backgroundImage: "url('https://findusonweb.com/files/banner/homeBanner/256.jpg')", 
     backgroundSize: 'cover', backgroundPosition: 'center' }}> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="wecollect_header text-white text-center mb-8">
          Managing write off book worth Rs. 2,100+ crores with our core strengths
        </h2>

        {/* Card Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="https://wecollect.co.in/_next/static/media/wc_mg1.f4ea9b13.png" alt="Hybrid Multi-channel Approach" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-800 text-center">Hybrid Multi-channel Approach</h3>
              <p className="wecollect_paragraph text-gray-600 text-center mt-2">
                Utilizing a mix of channels such as phone calls, WhatsApp, emails, SMS caters to the diverse preferences of customers. We use AI/ML technology to drive maximum efficiency and predictive dialing to ensure maximum reach.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="https://wecollect.co.in/_next/static/media/wc_mg2.bef97edb.png" alt="Super-fast Resolution" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-800 text-center">Super-fast Resolution</h3>
              <p className="wecollect_paragraph text-gray-600 text-center mt-2">
                Optimization of internal processes allows for a super-fast resolution. This involves minimizing hurdles, aligning the calling team, and leveraging technology to quickly assess, communicate, and resolve outstanding payments.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="https://wecollect.co.in/_next/static/media/wc_mg3.ca2d0a39.png" alt="Zero Tolerance on Non-compliance" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-800 text-center">Zero Tolerance on Non-compliance</h3>
              <p className="wecollect_paragraph text-gray-600 text-center mt-2">
                Maintaining a zero-tolerance policy on non-compliance involves strict adherence to debt collection laws, privacy regulations, and industry standards, safeguarding the reputation of the collections business.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default CoreStrengths;
