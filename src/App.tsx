/** @format */

import React from 'react';
import Home from 'views/components/home/home';
import Header from 'views/components/header/header';
import FeaturesAndBenefits from 'views/components/features&benefits/features&benefits';
import HowItWorks from 'views/components/howItWorks/howItWorks';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <FeaturesAndBenefits />
      <HowItWorks />
    </div>
  );
}

export default App;
