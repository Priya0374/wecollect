import React from 'react';

const IntegratedSolutions = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Integrated Solutions with 300+ experts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="flex items-center justify-center">
              <img src="/path-to-your-icon-1.png" alt="Leveraging Technology Icon" className="w-12 h-12" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 text-center mt-4">Leveraging Technology</h3>
            <p className="text-sm text-gray-600 text-center mt-2">
              Recovery agents with access to a diverse range of technology, automated communication, and data-driven strategies that aid in locating debtors.
            </p>
          </div>
          
          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="flex items-center justify-center">
              <img src="/path-to-your-icon-2.png" alt="Trained Calling Unit Icon" className="w-12 h-12" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 text-center mt-4">Trained Calling Unit</h3>
            <p className="text-sm text-gray-600 text-center mt-2">
              Centralized calling operations with a streamlined communication process, ensuring consistent, professional service and query resolution.
            </p>
          </div>
          
          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="flex items-center justify-center">
              <img src="/path-to-your-icon-3.png" alt="Trained Field Force Icon" className="w-12 h-12" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 text-center mt-4">Trained Field Force</h3>
            <p className="text-sm text-gray-600 text-center mt-2">
              A group of trained individuals designed to enhance proficiency in executing assigned duties effectively and efficiently.
            </p>
          </div>
          
          {/* Card 4 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="flex items-center justify-center">
              <img src="/path-to-your-icon-4.png" alt="Analytics & Skip Tracing Icon" className="w-12 h-12" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 text-center mt-4">Analytics & Skip Tracing</h3>
            <p className="text-sm text-gray-600 text-center mt-2">
              Collecting, analyzing, and interpreting data while using the Skip Tracing process to locate potential defaulters.
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default IntegratedSolutions;
