import React from "react";
import facebook from "../../assetsSecondHalf/images/001-facebook.svg";
import instagram from "../../assetsSecondHalf/images/004-instagram.svg";
import twitter from "../../assetsSecondHalf/images/003-twitter.svg";
import foyob from "../../assetsSecondHalf/images/foyob.svg";
function Footer() {
  return (
    <div
      style={{
        backgroundColor: "#1E2833",
        paddingBlock: 20,
        paddingInline: "5vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        color: "white",
      }}
    >
      <div style={{display:"flex",alignItems:"center"}}>
        <img style={{width:42 , height:47, marginRight:10}} src={foyob} alt="foyob logo" />
        <h1 style={{fontSize:33, fontWeight:700}}>FOYOB</h1>
      </div>
      <h2 style={{marginBottom:14, textAlign:"center"}}>The Most Advanced Solution For Auto Company</h2>
      <h4 style={{textAlign:"center"}}>The Most Advanced Solution For Auto Company</h4>
      <div style={{ display: "flex", gap:"5vw" }}>
        <p>Privacy Policy</p>
        <p>Terms and Services</p>
        <p>Blog</p>
      </div>
      <div style={{ display: "flex", gap: 50, color: "white", marginBlock:25 }}>
        <img style={{ width: 32, height: 32 }} src={facebook} alt="fb" />
        <img style={{ width: 32, height: 32 }} src={twitter} alt="tw" />
        <img style={{ width: 32, height: 32 }} src={instagram} alt="ins" />
      </div>
      <p>&copy; Copyright FOYOB</p>
    </div>
  );
}

export default Footer;
