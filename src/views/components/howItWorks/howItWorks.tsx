/** @format */

import { useEffect, useState } from 'react';
import step1 from 'assets/image for step 1.png';
import step2 from 'assets/image for step 2.png';

import styles from './howItWorks.module.css';
import useWindowDimensions from 'views/components/useWindowDimensions/useWindowDimensions';

function HowItWorks() {
  const { Width } = useWindowDimensions();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [stopLoop, setStopLoop] = useState<boolean>(false);
  useEffect(() => {
    if (!stopLoop) {
      //console.log(dot.length, waitingForData);
      setTimeout(() => {
        setCurrentIndex(1 - currentIndex);
      }, 3000);
    }
  }, [currentIndex, stopLoop]);
  return (
    <div
      style={{
        marginTop: 30,
        marginBottom: 30,
        padding:
          Width >= 550 && Width <= 768
            ? '25px 30px 30px 0'
            : Width > 768
            ? '25px 8px 30px 20px'
            : '15px 8px 30px 20px',
        // background: 'rgba(210, 182, 233,50%)',
        // background: 'rgba(56, 182, 233,.1)',
      }}
      className={styles.main}
    >
      <div style={{ marginLeft: 30 }}>
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

      <div className={styles.holder}>
        <div style={{ display: Width >= 769 ? 'flex' : 'none' }} className={styles.step}>
          <div className={styles.eachStep}>
            <div
              style={{
                textAlign: 'center',
                height: 45,
                width: 45,
                borderRadius: '50%',
                background: currentIndex === 0 ? '#38B6E9' : '#BDBDBD',
                cursor: 'pointer',
              }}
              onClick={() => {
                setCurrentIndex(0);
                setStopLoop(true);
              }}
            >
              <p
                style={{
                  color: 'white',
                  fontSize: 24,
                  fontWeight: 500,
                  paddingTop: 6,
                }}
              >
                1
              </p>
            </div>
            <div className={styles.stepPara}>
              Log in to your client website and fill <br /> the details for your car
              <br /> or upload details also from our Android or iOS app
            </div>
          </div>

          <div className={styles.eachStep}>
            <div
              style={{
                textAlign: 'center',
                height: 45,
                width: 45,
                borderRadius: '50%',
                background: currentIndex === 1 ? '#38B6E9' : '#BDBDBD',
                cursor: 'pointer',
              }}
              onClick={() => {
                setCurrentIndex(1);
                setStopLoop(true);
              }}
            >
              <p
                style={{
                  color: 'white',
                  fontSize: 24,
                  fontWeight: 500,
                  paddingTop: 6,
                }}
              >
                2
              </p>
            </div>

            <div className={styles.stepPara}>
              That's it! we will update your website <br /> with new details within 24 hours and
              also <br /> post the details in social media
            </div>
          </div>
        </div>
        <div
          style={{ display: Width < 769 ? 'block' : 'none', textAlign: 'center' }}
          className={styles.step2}
        >
          <div
            className={styles.stepPara}
            style={{ display: currentIndex === 0 ? 'block' : 'none', textAlign: 'center' }}
          >
            Log in to your client website and fill the details for your car
            <br /> or upload details also from our Android or iOS app
          </div>
          <div
            className={styles.stepPara}
            style={{ display: currentIndex === 1 ? 'block' : 'none', textAlign: 'center' }}
          >
            That's it! we will update your website with new details within 24 hours and also post
            the details in social media
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 20,
              marginTop: 20,
            }}
          >
            <div
              style={{
                textAlign: 'center',
                height: 45,
                width: 45,
                borderRadius: '50%',
                background: currentIndex === 0 ? '#38B6E9' : '#BDBDBD',
                cursor: 'pointer',
              }}
              onClick={() => {
                setCurrentIndex(0);
                setStopLoop(true);
              }}
            >
              <p
                style={{
                  color: 'white',
                  fontSize: 24,
                  fontWeight: 500,
                  paddingTop: 6,
                }}
              >
                1
              </p>
            </div>{' '}
            <div
              style={{
                textAlign: 'center',
                height: 45,
                width: 45,
                borderRadius: '50%',
                background: currentIndex === 1 ? '#38B6E9' : '#BDBDBD',
                cursor: 'pointer',
              }}
              onClick={() => {
                setCurrentIndex(1);
                setStopLoop(true);
              }}
            >
              <p
                style={{
                  color: 'white',
                  fontSize: 24,
                  fontWeight: 500,
                  paddingTop: 6,
                }}
              >
                2
              </p>
            </div>
          </div>
        </div>
        <div></div>
        <div className={styles.imgHolder}>
          <img
            src={currentIndex === 0 ? step1 : step2}
            className={styles.stepImg}
            alt='loading..'
          />
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
