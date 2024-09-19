import React, { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./Footer.css";
import logo from "../../assets/logoBlack.png";

const Footer = () => {
  const [lines, setLines] = useState([]);

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

    // Split the text into words dynamically
    const text = "We are a Web-Design agency based in India!";
    const splitText = text.split(" ");
    setLines(splitText); // Store the split lines in state

    // Use GSAP after ensuring DOM elements are rendered
    setTimeout(() => {
      // Apply animation to all lines within the wrapper
      gsap.fromTo(
        "#split-line",
        { y: 50 }, // Start from below with 0 opacity
        {
          y: 0,
          duration: 1,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: ".wrapper", // Trigger when .wrapper comes into view
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, 100); // Delay to ensure DOM elements are present
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
            <div className="wrapper">
              {lines.map((line, index) => (
                <div key={index} className={"split-line"}>
                  <h1 id="split-line">{line}</h1>
                </div>
              ))}
            </div>
          </div>

          <div className="footerSocials">
            <a href="instagram.com">Instagram</a>
            <a href="facebook.com">Facebook</a>
            <a href="youtube.com">Youtube</a>
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
