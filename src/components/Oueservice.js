
import React, { useEffect, useRef, useState } from 'react';

const Ourservice = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [zoom, setZoom] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.5, 
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const handleZoomToggle = () => {
    setZoom(!zoom);
  };
  return (
    <section className="bg-black text-white py-12"  style={{ backgroundImage: `url('https://www.slashrtc.com/img/counter-sec-bg.webp')` }}>
      <div className="container mx-auto text-center">
        <h2 className="wecollect_header mb-8">Solutions</h2>
        <p className="wecollect_paragraph">Integrated Solutions with 300+ experts</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-5">
          {/* Data Management Block */}
          <div
      ref={cardRef}
      className={`bg-custom-blue p-6 rounded-lg flex flex-col transform transition-transform duration-700 ease-in-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      } ${zoom ? 'scale-105' : 'scale-100'}`}
      onClick={handleZoomToggle}
      style={{ transition: 'transform 0.5s ease, opacity 0.7s ease' }}
    >
            <div className="flex mb-4">
            <span className="text-blue-500 text-2xl mr-4 w-7"><img src="https://wecollect.co.in/_next/static/media/ins_c1.5978a5e7.png" /></span>
              <h3 className="text-xl font-bold">Leveraging Technology</h3>
            </div>
            <p className="text-left">Recovery agents with access to a diverse range of technology, automated communication,
               and data-driven strategies that aids them in locating debtors..... <strong>Read More</strong></p>
          </div>

          {/* Cloud Adoption Block */}
          <div
      ref={cardRef}
      className={`bg-custom-blue p-6 rounded-lg flex flex-col transform transition-transform duration-700 ease-in-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      } ${zoom ? 'scale-105' : 'scale-100'}`}
      onClick={handleZoomToggle}
      style={{ transition: 'transform 0.5s ease, opacity 0.7s ease' }}
    >
            <div className="flex mb-4">
            <span className="text-blue-500 text-2xl mr-4 w-7">
              <img src="https://wecollect.co.in/_next/static/media/ins_c2.156ccf9c.png" /></span>
              <h3 className="text-xl font-bold">Trained Calling Unit</h3>
            </div>
            <p className="text-left">Centralized calling operations with a streamlined communication process,
               while ensuring consistent, professional service and query resolution..... <strong>Read More</strong></p>
          </div>

          {/* Digital Transformation Block */}
          <div
      ref={cardRef}
      className={`bg-custom-blue p-6 rounded-lg flex flex-col transform transition-transform duration-700 ease-in-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      } ${zoom ? 'scale-105' : 'scale-100'}`}
      onClick={handleZoomToggle}
      style={{ transition: 'transform 0.5s ease, opacity 0.7s ease' }}
    >
            <div className="flex mb-4">
            <span className="text-blue-500 text-2xl mr-4 w-7">
              <img src="https://wecollect.co.in/_next/static/media/ins_c3.d18537a3.png" /></span>
              <h3 className="text-xl font-bold">Trained Field Force</h3>
            </div>
            <p className="text-left">A group of trained individuals designed to enhance proficiency in executing assigned
               duties effectively and efficiently..... <strong>Read More</strong></p>
          </div>

          {/* Web & Mobile Applications Block */}
          <div
      ref={cardRef}
      className={`bg-custom-blue p-6 rounded-lg flex flex-col transform transition-transform duration-700 ease-in-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      } ${zoom ? 'scale-105' : 'scale-100'}`}
      onClick={handleZoomToggle}
      style={{ transition: 'transform 0.5s ease, opacity 0.7s ease' }}
    >
            <div className="flex mb-4">
            <span className="text-blue-500 text-2xl mr-4 w-7">
              <img src="https://wecollect.co.in/_next/static/media/ins_c4.64829d7d.png" /></span>
              <h3 className="text-xl font-bold">Analytics & Skip Tracing</h3>
            </div>
            <p className="text-left">Collecting, analyzing, and interpreting data while using the Skip Tracing process to
               locate potential defaulters..... <strong>Read More</strong></p>
          </div>
        </div>

        <div className='my-10'></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-5">
          {/* Data Management Block */}
          <div
      ref={cardRef}
      className={`bg-custom-blue p-6 rounded-lg flex flex-col transform transition-transform duration-700 ease-in-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      } ${zoom ? 'scale-105' : 'scale-100'}`}
      onClick={handleZoomToggle}
      style={{ transition: 'transform 0.5s ease, opacity 0.7s ease' }}
    >
            <div className="flex mb-4">
              <span className="text-blue-500 text-2xl mr-4 w-7">
                <img src="https://wecollect.co.in/_next/static/media/ins_c5.f2d89ad5.png" /></span>
              <h3 className="text-xl font-bold">Empowering Diversity</h3>
            </div>
            <p className="text-left">Digitally empowered group of multilingual debt counsellors who provide personalized
               solutions and services in multiple languages to cater to a diverse clientele..... <strong>Read More</strong></p>
          </div>

          {/* Cloud Adoption Block */}
          <div
      ref={cardRef}
      className={`bg-custom-blue p-6 rounded-lg flex flex-col transform transition-transform duration-700 ease-in-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      } ${zoom ? 'scale-105' : 'scale-100'}`}
      onClick={handleZoomToggle}
      style={{ transition: 'transform 0.5s ease, opacity 0.7s ease' }}
    >
            <div className="flex mb-4">
            <span className="text-blue-500 text-2xl mr-4 w-7">
              <img src="https://wecollect.co.in/_next/static/media/ins_c6.99577e4d.png" /></span>
              <h3 className="text-xl font-bold">Legally Compliant</h3>
            </div>
            <p className="text-left">Professional agents, who adhere to the laws and regulations laid out by the RBI for debt collection
               and recovery..... <strong className='text-black'>Read More</strong></p>
          </div>

          
          <div
      ref={cardRef}
      className={`bg-custom-blue p-6 rounded-lg flex flex-col transform transition-transform duration-700 ease-in-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      } ${zoom ? 'scale-105' : 'scale-100'}`}
      onClick={handleZoomToggle}
      style={{ transition: 'transform 0.5s ease, opacity 0.7s ease' }}
    >
            <div className="flex mb-4">
            <span className="text-blue-500 text-2xl mr-4 w-7">
              <img src="https://wecollect.co.in/_next/static/media/ins_c7.5f06ec07.png" /></span>
              <h3 className="text-xl font-bold">Unlock Possibilities with CRM</h3>
            </div>
            <p className="text-left">With customer relationship management (CRM) platform, we contact the consumer via different 
              communication channels to enable instant payment collection..... <strong>Read More</strong></p>
          </div>

          
          <div
      ref={cardRef}
      className={`bg-custom-blue p-6 rounded-lg flex flex-col transform transition-transform duration-700 ease-in-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      } ${zoom ? 'scale-105' : 'scale-100'}`}
      onClick={handleZoomToggle}
      style={{ transition: 'transform 0.5s ease, opacity 0.7s ease' }}
    >
            <div className="flex mb-4">
            <span className="text-blue-500 text-2xl mr-4 w-7"><img src="https://wecollect.co.in/_next/static/media/ins_c1.5978a5e7.png" /></span>
              <h3 className="text-xl font-bold">Analytics & Skip Tracing</h3>
            </div>
            <p className="text-left">Collecting, analyzing, and interpreting data while using the Skip Tracing process to locate
               potential defaulters..... <strong>Read More</strong></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ourservice;
