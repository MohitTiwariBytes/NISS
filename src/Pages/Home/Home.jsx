import React, { useEffect } from "react";
import gsap from "gsap";
import "./Home.css";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import FirstSection from "./FirstSection/FirstSection.jsx";
import SecondSection from "./SecondSection/SecondSection.jsx";

const Home = () => {
  return (
    <div className="main-home-page">
      <div className="home-page">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="firstSectionMain">
          <FirstSection></FirstSection>
        </div>

        <div className="secondSectionMain">
          <SecondSection></SecondSection>
        </div>
      </div>
    </div>
  );
};

export default Home;
