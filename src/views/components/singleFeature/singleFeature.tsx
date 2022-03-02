/** @format */

import React from 'react';
import logo from 'assets/logo.svg';

import professional from 'assets/Professional Website.svg';
import styles from './singlefeatures&benefits.module.css';

interface props {
  title: string;
  des: string;
  imgLink: string;
}
function SingleFeatue(value: props) {
  return (
    <div className={styles.eachItem}>
      <div className={styles.inneritems}>
        <img src={value.imgLink} alt='imgLoading' className={styles.eachImages} />
        <p className={styles.featTitle}>{value.title}</p>
        <p className={styles.featPara}>{value.des}</p>
      </div>
    </div>
  );
}

export default SingleFeatue;
