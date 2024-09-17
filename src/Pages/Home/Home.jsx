import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css"; // Import the CSS for Locomotive Scroll
import "./Home.css";
import Navbar from "../../Components/Navbar/Navbar.jsx";

const Home = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    // Clean up the scroll instance on component unmount
    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <div ref={scrollRef} className="main-home-page">
      <div className="home-page" data-scroll-container>
        <div className="navbar">
          <Navbar></Navbar>
        </div>
      </div>
    </div>
  );
};

export default Home;
