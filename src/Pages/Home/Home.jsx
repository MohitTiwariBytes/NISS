import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Home.css";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import SlidingUpText from "../../Components/SlidingUpText/SlidingUpText.jsx";

const Home = () => {
  return (
    <div className="main-home-page">
      <div className="home-page">
        <div className="navbar">
          <Navbar></Navbar>
        </div>
        <div className="firstSection">
          <div className="firstSectionTop">
            <div className="textFirstSection">
              <SlidingUpText
                text={
                  "we are niss™️, a digital web design agency based in india. we create stunning websites that drive action and elevate your brand."
                }
              ></SlidingUpText>
            </div>
          </div>
          <div className="firstSectionBottom"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
