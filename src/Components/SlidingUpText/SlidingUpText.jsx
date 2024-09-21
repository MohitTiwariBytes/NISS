import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const SlidingUpText = ({ text }) => {
  useEffect(() => {
    // Register ScrollTrigger plugin with GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Use GSAP to apply animation to the text
    gsap.fromTo(
      "#split-line",
      { y: 110 }, // Start from below
      {
        y: 0,
        duration: 1,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: ".wrapper", // Trigger when the wrapper comes into view
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  // Split the provided text into words
  const words = text.split(" ");

  return (
    <div className="wrapper">
      {words.map((word, index) => (
        <div key={index} className="split-line">
          <h1 id="split-line">{word}</h1>
        </div>
      ))}
    </div>
  );
};

export default SlidingUpText;
