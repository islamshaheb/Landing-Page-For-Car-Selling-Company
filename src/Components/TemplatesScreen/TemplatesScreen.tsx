import React, { useRef } from "react";
import template1 from "../../assetsSecondHalf/images/template1.png";
import template2 from "../../assetsSecondHalf/images/template2.png";
import viewDemo from "../../assetsSecondHalf/images/viewDemo.svg";

function TemplatesScreen() {
  const imgRef = useRef<any>();
  const imgRef2 = useRef<any>();

  function MouseOver(event: any) {
    imgRef.current.style.filter = "brightness(0.65)";
  }
  function MouseOut(event: any) {
    imgRef.current.style.filter = "none";
  }
  function MouseOver2(event: any) {
    imgRef2.current.style.filter = "brightness(0.65)";
  }
  function MouseOut2(event: any) {
    imgRef2.current.style.filter = "none";
  }
  return (
    <div>
      <h1 style={{ marginBlock: 30, textAlign: "center", color: "#2F77AD", fontSize: "calc( 14px + 3vw)" }}>
        Fully Customizable Templates
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          marginBlock: 25,
          boxSizing: "border-box",
          paddingInline:"1vw"
        }}
      >
        <div className="TemplateContainer">
          <img
            ref={imgRef}
            onMouseOver={MouseOver}
            onMouseOut={MouseOut}
            className="imageTemplate"
            src={template1}
            alt="template 1"
          />
          <div
            onMouseOver={MouseOver}
            onMouseOut={MouseOut}
            onClick={() =>
              window.open(
                "http://ec2-54-89-220-133.compute-1.amazonaws.com/",
                "_blank"
              )
            }
            className="link"
          >
            <div
              style={{
                backgroundColor: "white",
                padding: "10px 12px",
                borderRadius: 5,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={viewDemo} alt="" />
            </div>
            <h5 style={{ color: "white", marginLeft: 20 }}>
              Click to View Demo
            </h5>
          </div>
        </div>

        <div className="TemplateContainer">
          <img
            ref={imgRef2}
            onMouseOver={MouseOver2}
            onMouseOut={MouseOut2}
            className="imageTemplate"
            src={template2}
            alt="template2"
          />
          <div
            onMouseOver={MouseOver2}
            onMouseOut={MouseOut2}
            onClick={() =>
              window.open(
                "http://ec2-3-83-111-66.compute-1.amazonaws.com/",
                "_blank"
              )
            }
            className="link"
          >
            <div
              style={{
                backgroundColor: "white",
                padding: "10px 12px",
                borderRadius: 5,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={viewDemo} alt="" />
            </div>
            <h5 style={{ color: "white", marginLeft: 20 }}>
              Click to View Demo
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TemplatesScreen;
