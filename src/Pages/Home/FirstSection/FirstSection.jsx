import { React, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SlidingUpText from "../../../Components/SlidingUpText/SlidingUpText.jsx";
import starShape from "../../../assets/star.svg";

gsap.registerPlugin(ScrollTrigger);

const FirstSection = () => {
  useEffect(() => {
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
          gsap.to("#star", {
            rotation: 360,
            repeat: -1,
            ease: "linear",
            duration: 10,
          });
        },
      }
    );

    gsap.to("#star", {
      scrollTrigger: {
        trigger: "#star",
        start: "top center",
        scrub: true,
        markers: false,
      },
      rotation: "+=90",
      ease: "power1.inOut",
    });

    gsap.fromTo(
      ".firstSection h1 span, .firstSection h1 z",
      { filter: "blur(18px)" },
      {
        filter: "blur(0px)",
        duration: 0.6,
        ease: "power2.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".firstSection h1",
          start: "top 80%",
          end: "top 60%",
          toggleActions: "play none none none",
        },
      }
    );

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
    <div className="firstSection">
      <div className="firstSectionTop">
        <div className="textFirstSection">
          <h1>
            <span>We</span> <span>create</span> <span>websites</span>{" "}
            <span>that</span> <z>Inspire</z>
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
  );
};

export default FirstSection;
