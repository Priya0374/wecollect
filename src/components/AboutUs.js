import React from "react";
import Slider from "react-slick"; // Import slider library

const AboutUs = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
  };

  return (
    <section className="bg-gradient-to-b from-blue-50 to-gray-100 py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Top Section */}
        <div className="text-center mb-12">
          <h2 className="wecollect_header">
            Who We Are
          </h2>
          <p className="wecollect_paragraph">
            WeCollect is redefining debt recovery with an exceptional blend of
            expertise, transparency, and technology. Our mission is to empower
            lenders with innovative collection solutions, ensuring integrity and
            professionalism at every step.
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Side: Slider */}
          <div className="md:w-6/12 w-full mb-8 md:mb-0">
            <div className="relative shadow-xl rounded-lg overflow-hidden">
              <Slider {...sliderSettings}>
                <div>
                  <img
                    src="https://media.istockphoto.com/id/1331748980/photo/businessman-pressing-recovery-on-virtual-screen-internet-and-networking-concept.jpg?s=612x612&w=0&k=20&c=Ye0oBZXRrLc6QBIH5thJuWkpd9Y6dr7I9ERPV0lgWN8="
                    alt="About Us Slide 1"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg6G4PlPBOkYWIIkQJ162Yx18SiOO2Bp73g9oJX93mDZwd7UcZaYmv2Cys8Rg_GLYkPnE&usqp=CAU"
                    alt="About Us Slide 2"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7ONsgG5Hwl5CVsSRiIM7oHeRqp1C4-ys3Bg&s"
                    alt="About Us Slide 3"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </Slider>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="md:w-5/12 w-full text-gray-700">
            <h3 className="text-3xl font-semibold mb-4 text-gray-800">
              Our Vision
            </h3>
            <p className="text-lg mb-6 leading-relaxed">
              With over 75 years of cumulative management experience, WeCollect
              aims to be a trusted collections partner for BFSI lenders across
              India. Supported by 300+ experts, we blend personalized strategies
              with innovative technology to achieve exceptional results.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 text-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="ml-3">
                  Comprehensive digital and traditional platforms for lenders.
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 text-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="ml-3">
                  Nation wide reach with transparent and innovative practices.
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 text-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="ml-3">
                  Commitment to revolutionizing debt recovery processes.
                </p>
              </li>
            </ul>
            <a
              href="#"
              className="mt-8 inline-block bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
