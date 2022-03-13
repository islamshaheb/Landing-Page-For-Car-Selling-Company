/** @format */

import React from 'react';
import logo from 'assets/logo.svg';

import professional from 'assets/Professional Website.svg';
import styles from './singlefeatures&benefits.module.css';
import useWindowDimensions from '../useWindowDimensions/useWindowDimensions';

interface props {
  title: string;
  des: string;
  imgLink: string;
}
function SingleFeatue(value: props) {
  const { Width } = useWindowDimensions();
  return (
    <div className={styles.eachItem}>
      <div className={styles.inneritems}>
        <img
          src={value.imgLink}
          height={Width >= 550 ? '106px' : '70px'}
          width={Width >= 550 ? (Width > 768 ? 'auto' : '90px') : '70px'}
          alt='imgLoading'
          className={styles.eachImages}
        />
        <p className={styles.featTitle}>{value.title}</p>
        <p className={styles.featPara}>{value.des}</p>
      </div>
    </div>
  );
}

export default SingleFeatue;
