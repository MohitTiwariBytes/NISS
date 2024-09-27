import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/logoWhite.png";
import gsap from "gsap";

const Navbar = () => {
  const spansRef = useRef([]);
  const topHamMenuRef = useRef(null);
  const [open, setIsOpen] = useState(false);

  const handleHamClick = () => {
    setIsOpen(!open);

    if (!open) {
      // Animate the opening of the menu
      gsap.to(topHamMenuRef.current, {
        height: "70%", // Set to 60% height
        duration: 0.5, // Animation duration
        ease: "power4.out",
      });

      // Animate the opacity of the text spans with a slight delay
      gsap.fromTo(
        spansRef.current,
        {
          opacity: 0, // Full opacity
          stagger: 0.1, // Delay between each span
          duration: 0.5, // Duration for opacity animation
          ease: "power4.out",
        },
        {
          opacity: 1, // Fade out
          stagger: 0.1, // Delay between each span
          duration: 0.5, // Duration for opacity animation
          ease: "power4.out",
        }
      );
    } else {
      // Animate the closing of the menu
      gsap.to(topHamMenuRef.current, {
        height: "0%", // Collapse the height
        duration: 0.5,
        ease: "power4.in",
      });

      // Fade out the text spans
      gsap.to(spansRef.current, {
        opacity: 0, // Fade out
        duration: 0.3,
        ease: "power4.in",
      });
    }
  };

  useEffect(() => {
    spansRef.current.forEach((span, index) => {
      span.addEventListener("mouseenter", () => {
        gsap.to(span, {
          "--span-line-width": `${span.offsetWidth}px`,
          duration: 0.2,
          ease: "power4.out",
        });
      });

      span.addEventListener("mouseleave", () => {
        gsap.to(span, {
          "--span-line-width": "0px",
          duration: 0.2,
          ease: "power4.out",
        });
      });
    });
  }, []);

  return (
    <nav className="main-navbar">
      <div className="navbar">
        <div
          onClick={() => {
            window.location.replace("/");
          }}
          className="leftNavbar"
        >
          <img style={{ height: "50px" }} src={Logo} alt="Logo" />
          <h1>New India Software Solutions PVT LTD </h1>
        </div>
        <div className="rightNavbar">
          <div className="navigation">
            {["Home", "About", "Contact Us", "Services"].map((text, index) => (
              <span
                key={index}
                ref={(el) => (spansRef.current[index] = el)}
                className="nav-item"
                onClick={() => {
                  if (text === "Home") {
                    window.location.replace("/");
                  } else if (text === "About") {
                    window.location.replace("/about");
                  } else if (text === "Contact Us") {
                    window.location.replace("/contact");
                  } else if (text === "Services") {
                    window.location.replace("/services");
                  }
                }}
              >
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="ham-menu">
        <div onClick={handleHamClick} className="menuButton">
          <div className={open ? "line1 active" : "line1"}></div>
          <div className={open ? "line2 active" : "line1"}></div>
        </div>
        <div className="topHamMenu" ref={topHamMenuRef}>
          <div className="texts">
            {["HOME", "ABOUT", "CONTACT US", "SERVICES"].map((text, index) => (
              <span
                key={index}
                ref={(el) => (spansRef.current[index + 4] = el)} // Add offset for these spans
                className="ham-menu-text"
                onClick={() => {
                  if (text === "HOME") {
                    window.location.replace("/");
                  } else if (text === "ABOUT") {
                    window.location.replace("/about");
                  } else if (text === "CONTACT US") {
                    window.location.replace("/contact");
                  } else if (text === "SERVICES") {
                    window.location.replace("/services");
                  }
                }}
              >
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
