/** @format */

import React from 'react';
import logo from 'assets/logo.svg';

import styles from './howItWorks.module.css';
import useWindowDimensions from 'views/components/useWindowDimensions/useWindowDimensions';

function HowItWorks() {
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
        background: 'rgba(210, 182, 233,50%)',
        // background: 'rgba(56, 182, 233,.1)',
      }}
      className={styles.main}
    >
      <div style={{ textAlign: 'center' }}>
        <p className={styles.title}>How it works</p>
        <p
          style={{
            fontSize: Width >= 550 && Width <= 768 ? 34 : Width > 768 ? 30.5 : 16,
            fontWeight: 400,
            color: '#333333',
          }}
        >
          Easy, fast, convenient steps to start your car selling.
        </p>
      </div>
    </div>
  );
}

export default HowItWorks;
