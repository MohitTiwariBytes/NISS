import React, { useEffect, useRef, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css"; // Locomotive Scroll CSS
import "./Contact.css";
import Navbar from "../../Components/Navbar/Navbar";
import gsap from "gsap";
import Footer from "../../Components/Footer/Footer";

const Contact = () => {
  const topTextRef = useRef(null); // Reference to the text element
  const cardRef = useRef(null); // Reference to the contact card container

  useEffect(() => {
    // GSAP animations
    gsap.fromTo(
      topTextRef.current,
      { y: 50, opacity: 0 }, // Initial state
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
      }
    );

    gsap.fromTo(
      cardRef.current.children,
      { y: 50, opacity: 0 }, // Initial state for staggered elements
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.3, // Delay after the text animation
      }
    );
  }, []);

  return (
    <div className="main-contact-page">
      {/* Navbar outside of the scrollable container */}
      <div className="navbar">
        <Navbar />
      </div>

      {/* Scrollable container */}
      <div className="main-contact-content">
        <div className="mainContactPage">
          <div className="topTextContact" ref={topTextRef}>
            <h1>
              Let's Work <z>Together!</z>
            </h1>
          </div>
          <div className="mainContactCard" ref={cardRef}>
            <div className="contactCardOuter">
              <div className="contactCardInner">
                <input id="name" type="text" placeholder="Name" />
                <input id="email" type="email" placeholder="Email" />
                <input id="services" type="text" placeholder="Services" />
                <input id="budget" type="text" placeholder="Budget" />
                <textarea name="message" placeholder="Message" />
              </div>
              <button>Send</button>
            </div>
          </div>
        </div>

        <div style={{ position: "relative", top: "0" }} className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Contact;
