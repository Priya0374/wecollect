import React from 'react';
import NavBar from './NavBar';
import '../../src/Custome.css';

import { ArrowRightIcon } from '@heroicons/react/solid';


const MainHeader = () => {
  return (
    <>
    <div className="relative">
      {/* Background Image */}
      <div
        className="min-h-screen bg-cover bg-center"
       // style={{ backgroundImage: `url('http://codecompete.in/assets/img/hero-bg.jpg')` }}
      >



<video
  autoPlay
  loop
  muted
  className="absolute top-0 left-0 w-full h-full object-cover"
>
  <source
  src ="https://www.slashrtc.com/img/slashwebvideo.mp4" 
 // src="https://video.goldmansachs.com/gsvideo/delivery/bcs/X24-57686_8331_Ep24-003_Homepage_V19.mp4"
   type="video/mp4" />
  Your browser does not support the video tag.
</video>
        {/* Black Overlay */}
        <div className="absolute inset-0 wecollect_css opacity-[0.7]"></div>

        {/* Navbar */}
      <NavBar />

        {/* Hero Section */}
        <div className="relative flex items-center justify-start min-h-screen text-left px-6 md:px-20 lg:px-40 z-10 animate-slideUpSlow">
  <div className="text-white max-w-2xl mt-10">
    {/* Animated Heading with Zoom Effect */}
    {/* <h2 ">
      Powering debt recovery in over 800 cities of India
    </h2> */}


    <h1 className="wecollect_header" style={{ fontFamily: '"GS Serif", Times, "Times New Roman", serif' }}>
  Powering debt recovery in over 800 cities of India
</h1>
    {/* Animated Description with Typing and Running Effect */}
    <p className="wecollect_paragraph">
      Wecollect offers tailored debt collection services to Banks and NBFCs across 800+ cities in India. 
      With a team of 300+ experts, we provide customized strategies to meet specific needs.
    </p>

    <button className="bg-[#43baf9] text-white font-bold py-3 px-6 rounded hover:bg-[#43baf9] inline-flex items-center" id="businessSupportBtn">
    Get Action
    <ArrowRightIcon className="h-5 w-5 ml-2 mt-1" />
</button>

    {/* Button */}
    {/* <button className="nav-link text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition duration-200">
      Contact
    </button> */}
  </div>
</div>

</div>

      </div>

{/* <div className="relative w-full h-screen bg-black">

<div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
  <h1 className="text-4xl md:text-6xl font-bold mb-6">Relentless Focus.<br /> Exceptional Results.</h1>
  <p className="text-lg md:text-xl mb-8 max-w-xl">
    Every day, we convene the sharpest minds in finance to deliver the excellence of Goldman Sachs. Our sole focus is serving clients by harnessing the firm’s resources, insights, relationships, and competitive advantages to help solve the most complex challenges and drive superior results.
  </p>
  <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
    See Our Client Impact
  </button>
</div>
</div> */}
</>
    
  );
};

export default MainHeader;
