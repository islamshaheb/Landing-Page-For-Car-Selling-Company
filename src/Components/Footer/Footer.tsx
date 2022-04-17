import React from "react";
import facebook from "../../assetsSecondHalf/images/001-facebook.svg";
import instagram from "../../assetsSecondHalf/images/004-instagram.svg";
import twitter from "../../assetsSecondHalf/images/003-twitter.svg";
import foyob from "../../assetsSecondHalf/images/foyob.svg";
import phone from "../../assetsSecondHalf/images/phone.svg";
import mail from "../../assetsSecondHalf/images/mail.svg";
import location from "../../assetsSecondHalf/images/location.svg";
import playstore from "../../assetsSecondHalf/images/playstore.svg";
import appstore from "../../assetsSecondHalf/images/appstore.svg";
import styles from "./Footer.module.css"
function Footer() {
  const year = new Date().getFullYear()
  return (
    <div className={styles.footerBg}>
      <div className={styles.mainSection}>
        <div className={styles.heading}>
          <div className={styles.imgHolder}>
            <img
              style={{ width: 42, height: 47, marginRight: 10 }}
              src={foyob}
              alt="foyob logo"
            />
            <h1 style={{ fontSize: 33, fontWeight: 700, letterSpacing: 1.3 }}>
              FOYOB
            </h1>
          </div>
          <div>
          <h2 >
            The Most Advanced Solution
          </h2>
          <h2>For Auto Company</h2>
          </div>
          <h4
            style={{
              fontWeight: 300,
            }}
          >
            The Most Advanced Solution For Auto Company
          </h4>
        </div>

        <div className={styles.contactInfo}>
          <div style={{display:"flex", gap:10}}>
            <img src={phone} alt="phone number" />
            <p>+1 2345 6789 000</p>
          </div>
          <div style={{display:"flex", gap:10}}>
            <img src={mail} alt="mail" />
            <p>Info@foyob.com</p>
          </div>
          <div style={{display:"flex", gap:10}}>
            <img src={location} alt="location" />
            <p>3857 Hamilton Drive, Easton, Maryland, 21601</p>
          </div>
        </div>

        <div className={styles.links}>
          <p>Home</p>
          <p>Privacy Policy</p>
          <p>Terms of Servies</p>
          <p>Blog</p>
        </div>

        <div className={styles.mobileApp}>
            <p>Download our app</p>
            <img style={{cursor:"pointer"}} onClick={()=>window.open("https://play.google.com/store/apps/details?id=com.girmairi.foyob")} src={playstore} alt="" />
            <img src={appstore} alt="" />
        </div>
      </div>

      <div className={styles.copyrightSection}>
        <div style={{ display: "flex", gap: 20 }}>
          <img
            style={{ width: 26, height: 26, fontWeight: 200 }}
            src={facebook}
            alt="fb"
          />
          <img
            style={{ width: 26, height: 26, fontWeight: 200 }}
            src={twitter}
            alt="tw"
          />
          <img
            style={{ width: 26, height: 26, fontWeight: 200 }}
            src={instagram}
            alt="ins"
          />
        </div>

        <p>&copy; {year} Copyright Girmairi. All rights reserved.</p>
      </div>
    </div>
  );
}


export default Footer;
