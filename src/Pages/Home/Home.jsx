import React from "react";
import gsap from "gsap";
import "./Home.css";
import Navbar from "../../Components/Navbar/Navbar.jsx"

const Home = () => {
  return (
    <div className="main-home-page">
        <div className="home-page">
            <div className="navbar">
                <Navbar></Navbar>
            </div>
        </div>
    </div>
  );
};

export default Home;
