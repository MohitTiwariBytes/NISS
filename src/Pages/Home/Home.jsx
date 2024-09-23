import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./Home.css";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import SlidingUpText from "../../Components/SlidingUpText/SlidingUpText.jsx";
import starShape from "../../assets/star.svg";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useEffect(() => {
    // Initial scale-up animation
    gsap.fromTo(
      "#star",
      {
        scale: 0,
        duration: 1,
        ease: "power3.inOut",
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "power3.inOut",
        onComplete: () => {
          // Infinite rotation after scaling is complete
          gsap.to("#star", {
            rotation: 360,
            repeat: -1,
            ease: "linear",
            duration: 10, // Adjust for speed of infinite rotation
          });
        },
      }
    );

    // Scroll-triggered additional rotation
    gsap.to("#star", {
      scrollTrigger: {
        trigger: "#star",
        start: "top center", // Start when star is in the center of the viewport
        scrub: true, // Smooth scroll-based animation
        markers: false, // Debugging markers (set to true for testing)
      },
      rotation: "+=90", // Additional rotation during scroll
      ease: "power1.inOut", // Adjust for smooth easing
    });

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
    <div className="main-home-page">
      <div className="home-page">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="firstSection">
          <div className="firstSectionTop">
            <div className="textFirstSection">
              <h1>
                We create websites that <z>Inspire</z>
              </h1>
              <div className="line">
                <div
                  style={{ background: "var(--white)" }}
                  className="lineDividerHorizontal"
                ></div>
                <div className="textSmall">
                  <SlidingUpText text="We are a Web-Design agency based in Uttar-Pradesh, India! Known for creating visually stunning and impressive sites!" />
                </div>
              </div>
            </div>
            <div className="star-shape">
              <img id="star" src={starShape} alt="Star Shape" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
