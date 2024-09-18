import React, { useEffect, useRef, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css"; // Locomotive Scroll CSS
import "./Contact.css";
import Navbar from "../../Components/Navbar/Navbar";

const Contact = () => {
  const scrollRef = useRef(null); // Reference to the scroll container
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };

    window.addEventListener("resize", handleResize);

    if (!isMobile) {
      const scroll = new LocomotiveScroll({
        el: scrollRef.current, // Attach to the scrollRef element
        smooth: true, // Enable smooth scrolling
      });

      // Clean up Locomotive Scroll when component unmounts
      return () => {
        scroll.destroy();
      };
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  return (
    <div className="main-contact-page">
      {/* Navbar outside of the scrollable container */}
      <div className="navbar">
        <Navbar />
      </div>

      {/* Scrollable container */}
      <div
        ref={scrollRef}
        className="main-contact-content"
        data-scroll-container={!isMobile ? true : undefined}
      >
        <div className="mainContactPage">
          <div className="topTextContact" data-scroll>
            <h1>
              Let's Work <z>Together!</z>
            </h1>
          </div>
          <div className="mainContactCard" data-scroll>
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
      </div>
    </div>
  );
};

export default Contact;
