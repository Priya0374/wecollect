import React from 'react';
import Oueservice from './Oueservice';
import MainHeader from './MainHeader';
import Ourservice from './Oueservice';
import BusinessesSupport from './BusinessesSupport';
import IntegratedSolutions from './IntegratedSolutions';
import CoreStrengths from './CoreStrengths';
import AboutUs from './AboutUs';
import ContactForm from './ContactForm';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
  
  

<MainHeader />
<div className='bg-white mt-10'>
  <AboutUs />
</div>

<div className='bg-white mt-10'>
  <Ourservice />
</div>

<div 
  className="bg-cover bg-center h-64vh mt-10" 
  style={{ backgroundImage: "url('https://findusonweb.com/files/banner/homeBanner/256.jpg')" }}
>
  <BusinessesSupport />
</div>

<div className='bg-cover bg-center  mt-10'
 style={{ backgroundImage: "url('https://findusonweb.com/files/banner/homeBanner/256.jpg')" }}
>
<CoreStrengths />
</div>

<div className=''>
  <ContactForm />
</div>


     {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 WeCollect. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
