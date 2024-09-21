import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SlidingUpText from "../SlidingUpText/SlidingUpText"; // Import the SlidingUpText component
import "./Footer.css";
import logo from "../../assets/logoBlack.png";

const Footer = () => {
  useEffect(() => {
    // Register ScrollTrigger plugin with GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Line divider animation
    gsap.fromTo(
      ".lineDividerHorizontal",
      { width: "0%" },
      {
        width: "100%",
        duration: 1.5,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".lineDividerHorizontal",
          start: "top 80%",
          end: "top 60%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div className="main-footer">
      <div className="footer">
        <div className="leftFooter">
          <div className="logo">
            <div className="logoTexts">
              <img
                style={{ height: "50px", width: "50px" }}
                src={logo}
                alt="Logo"
              />
              <h1>New India Software Solutions PVT LTD</h1>
            </div>
            <div className="lineDividerHorizontal"></div>
          </div>

          <div className="textFooter">
            <SlidingUpText text="We are a Web-Design agency based in India!" />
          </div>

          <div className="footerSocials">
            <a href="instagram.com">Instagram</a>
            <a href="facebook.com">Facebook</a>
            <a href="youtube.com">Youtube</a>
          </div>
          <div className="footerAddress">
            <SlidingUpText
              text={
                "Near Jagannath Mandir, Street No.15, Sector 121, Noida,Uttar-Pradesh, India - 201301"
              }
            ></SlidingUpText>
            <span>
              +91 1234567890,{" "}
              <a href="mailto:newindiasoftwaresolutions@gmail.com">
                newindiasoftwaresolutions@gmail.com
              </a>
            </span>
          </div>
        </div>
        <div className="rightFooter">
          <div className="navigationFooter">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/services">Services</a>
            <a href="/contact">Contact Us</a>
          </div>
        </div>
        <div className="bottomFooter">
          <span>
            © 2023 New India Software Solutions PVT LTD. All rights reserved.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
