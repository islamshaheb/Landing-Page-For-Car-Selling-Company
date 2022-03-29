/** @format */

import React from 'react';
import logo from 'assets/logo.svg';
import useWindowDimensions from 'views/components/useWindowDimensions/useWindowDimensions';
import second from 'assets/Devices cover.png';
import play from 'assets/images/play.png';
import styles from './home.module.css';
function Home({ reference, click }: any) {
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
          className={styles.holder1}
          style={{
            // height: Width >= 550 ? '100vh' : 'auto',
            width: Width >= 550 ? '50%' : '100%',
            objectFit: 'cover',
            // background: 'red',
          }}
        >
          <div>
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
          <br />
          <br style={{ display: Width <= 768 ? 'none' : 'block' }} />

          <div ref={reference} style={{ display: 'inline-block' }}>
            <div
              style={{
                display: 'flex',
                flexWrap: 'nowrap',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 10,
                cursor: 'pointer',
              }}
              onClick={click}
              className={styles.button}
            >
              <img src={play} height='31.5px' width='31.5px' alt='play' />
              <button
                style={{
                  border: 'none',
                  fontSize: Width >= 550 && Width <= 768 ? 18 : Width > 768 ? 22 : 16,
                }}
                className={styles.buttonText}
              >
                {' '}
                View Demo
              </button>
            </div>
          </div>
        </div>
        <div
          className={styles.holder2}
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
