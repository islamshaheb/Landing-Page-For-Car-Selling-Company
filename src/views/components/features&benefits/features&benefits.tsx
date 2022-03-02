/** @format */

import React from 'react';
import logo from 'assets/logo.svg';
import useWindowDimensions from 'views/components/useWindowDimensions/useWindowDimensions';
import professional from 'assets/Professional Website.svg';
import carDet from 'assets/Car Details Upload.svg';
import s247 from 'assets/247 Support.svg';
import adva from 'assets/Advance Application.svg';
import socail from 'assets/Social media marketing.svg';
import styles from './features&benefits.module.css';
import SingleFeatue from '../singleFeature/singleFeature';
function FeaturesAndBenefits() {
  const { Width } = useWindowDimensions();
  return (
    <div
      style={{
        marginTop: 30,
        padding:
          Width >= 550 && Width <= 768
            ? '25px 30px 30px 0'
            : Width > 768
            ? '25px 8px 30px 20px'
            : '15px 8px 30px 20px',
        background: 'rgba(56, 182, 233,5%)',
        // background: 'rgba(56, 182, 233,.1)',
      }}
    >
      <div style={{ textAlign: 'center', marginLeft: 20 }}>
        <p className={styles.title}>Features {'&'} Benefits</p>
        <p
          style={{
            fontSize: Width >= 550 && Width <= 768 ? 34 : Width > 768 ? 30.5 : 16,
            fontWeight: 400,
            color: '#333333',
          }}
        >
          Spend less time explaining and more time doing.
        </p>
      </div>
      <div className={styles.holder}>
        <SingleFeatue
          title='Professional Website'
          des='We will create customized and optimized your own website.
'
          imgLink={professional}
        />
        <SingleFeatue
          title='Car Details Upload'
          des='We will update your website within 24 hours
'
          imgLink={carDet}
        />
        <SingleFeatue
          title='Social Media Marketing'
          des='We will do social media marketing for you.'
          imgLink={socail}
        />
        <SingleFeatue
          title='Advance Application'
          des='Responsive website where you can manage your car inventory and details'
          imgLink={adva}
        />
        <SingleFeatue
          title='24/7 Support'
          imgLink={s247}
          des='Questions? Our support team is available to help anytime, anywhere.'
        />
      </div>
    </div>
  );
}

export default FeaturesAndBenefits;
