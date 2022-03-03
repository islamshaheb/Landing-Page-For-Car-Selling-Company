/** @format */

import React from 'react';

import Home from 'views/components/home/home';
import Header from 'views/components/header/header';
import FeaturesAndBenefits from 'views/components/features&benefits/features&benefits';
import HowItWorks from 'views/components/howItWorks/howItWorks';
import ContactUs from './Components/ContactUs/ContactUs';
import Footer from './Components/Footer/Footer';
import TemplatesScreen from './Components/TemplatesScreen/TemplatesScreen';


function App() {
  return (
    <div>
      <Header />
      <Home />
      <FeaturesAndBenefits />
      <HowItWorks />
        <TemplatesScreen/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}

export default App;
