import React from 'react';
import Slider from 'react-slick'; // Import a slider library for the image carousel

const AboutUs = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <button className="slick-arrow">Next</button>,
    prevArrow: <button className="slick-arrow">Prev</button>,
  };

  return (
    <div className="box p-8 bg-gray-100">
      <div className="aboutus_area max-w-screen-xl mx-auto">
        <div className="aboutus_top_area text-center mb-8">
          <h2 className="text-4xl font-bold mb-4">About Us</h2>
          <p className="text-lg font-light leading-relaxed">
          Wecollect specializes in tailored debt collection solutions for BFSI lenders in India.
           In a dynamic lending landscape, our mission is to provide a comprehensive digital and traditional platform, 
           enabling lenders to focus on their core operations while Wecollect functions as their extended collections partner. 
           With a cumulative 75 years of management experience in write‑offs and NPAs, our adept leadership drives us. 
           Supported by a robust team of 300+ experts, we merge personalized strategies with nationwide reach, 
           underpinned by transparent practices and innovative technology.
            Join us in revolutionising debt recovery while upholding unwavering integrity and professionalism.
             Our aspiration is to emerge as a premier ARC for servicing NPA pools.

          </p>
        </div>
        
        <div className="aboutus_bottom_area flex flex-col md:flex-row">
          {/* Left Side: Image Slider */}
          <div className="aboutus_bottom_areaL md:w-1/2 w-full relative">
            <div className="aboutus_bottom_areaL_screen">
              <div className="swiftpizza_slider_area">
                <Slider {...sliderSettings}>
                  <div className="swift_slider_div">
                    <img src="https://wecollect.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwc_banner.d514cb23.png&w=828&q=75" alt="SwiftPizza Image 1" className="img-responsive" />
                  </div>
                  <div className="swift_slider_div">
                    <img src="https://wecollect.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabtus_banner.54dc8175.png&w=828&q=75" alt="SwiftPizza Image 2" className="img-responsive" />
                  </div>
                  <div className="swift_slider_div">
                    <img src="https://wecollect.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwc_banner.d514cb23.png&w=828&q=75" alt="SwiftPizza Image 3" className="img-responsive" />
                  </div>
                </Slider>
              </div>
              <div className="aboutus_bottom_areaL_screen_bg">
                <img src="https://apprication.com/images/bannerleftbg.svg" alt="Background" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Right Side: Information */}
          <div className="aboutus_bottom_areaR md:w-1/2 w-full p-6">
            <div className="aboutus_bottom_areaRinner">
              <h2 className="text-3xl font-semibold mb-4">Collection</h2>
              <p className="mb-4">
                With SwiftPizza, you can easily manage in-store and online orders. Our online and in-store ordering systems are completely customized for a pizzeria.
              </p>
              <ul className="list-disc pl-5 mb-6">
                <li className="mb-2">Manage your online and in-store ordering with delivery, pick-up, take out & dine-in.</li>
                <li className="mb-2">Set up your modifiers, included & additional items in seconds.</li>
                <li>Build a pizza with ease.</li>
              </ul>
              <div className="button_area">
                <a href="https://apprication.com/swiftpizza.html" className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition duration-300">
                  Know More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
