/** @format */

import React, { useRef } from 'react';

import Home from 'views/components/home/home';
import Header from 'views/components/header/header';
import FeaturesAndBenefits from 'views/components/features&benefits/features&benefits';
import HowItWorks from 'views/components/howItWorks/howItWorks';
import ContactUs from './Components/ContactUs/ContactUs';
import Footer from './Components/Footer/Footer';
import TemplatesScreen from './Components/TemplatesScreen/TemplatesScreen';

function App() {
  const scrollToDiv = (ref: any) =>
    window.scrollTo({ top: ref.current.offsetTop - 100, behavior: 'smooth' });
  const el1 = useRef();
  const el2 = useRef();

  const scrollToDemo = (ref: any) =>
    window.scrollTo({ top: ref.current.offsetTop - 100, behavior: 'auto' });
  const demo1 = useRef();
  const demo2 = useRef();
  return (
    <div>
      <Header reference={el1} click={() => scrollToDiv(el2)} />
      <Home reference={demo1} click={() => scrollToDemo(demo2)} />
      <FeaturesAndBenefits />
      <HowItWorks />
      <TemplatesScreen reference={demo2} />
      <ContactUs reference={el2} />
      <Footer />
    </div>
  );
}

export default App;
