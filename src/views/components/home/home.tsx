/** @format */

import React from 'react';
import logo from 'assets/logo.svg';
import useWindowDimensions from 'views/components/useWindowDimensions/useWindowDimensions';
import second from 'assets/Devices cover.png';
import styles from './home.module.css';
function Home() {
  const { Width } = useWindowDimensions();
  return (
    <div
      style={{
        padding:
          Width >= 550 && Width <= 768
            ? '25px 30px 30px 0'
            : Width > 768
            ? '11px 8px 0 20px'
            : '15px 8px 0 20px',
      }}
    >
      <div className={styles.holder}>
        <div
          style={{
            // height: Width >= 550 ? '100vh' : 'auto',
            width: Width >= 550 ? '50%' : '100%',
            objectFit: 'cover',
            // background: 'red',
          }}
        >
          <p className={styles.title}>The Most Advanced Solution For Auto Company</p>
          <br />

          <p
            style={{
              fontSize: Width >= 550 && Width <= 768 ? 22 : Width > 768 ? 30.5 : 16,
              fontWeight: 400,
              color: '#333333',
              whiteSpace: 'nowrap',
            }}
          >
            Quick and secure way to sell <br /> your car with great profit.
          </p>
        </div>
        <div
          style={{
            width: Width >= 550 ? '50%' : '100%',
            // background: 'yellow',
            // height: Width >= 550 ? '100vh' : 'auto',
          }}
        >
          <img
            src={second}
            style={{
              height: Width >= 550 ? 'auto' : 'auto',
              width: '100%',
              objectFit: 'contain',
            }}
            alt='loading'
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
