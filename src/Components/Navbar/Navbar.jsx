import React, { useEffect, useRef } from 'react';
import './Navbar.css';
import Logo from "../../assets/logo.png";
import gsap from 'gsap';

const Navbar = () => {
    const spansRef = useRef([]);

    useEffect(() => {
        spansRef.current.forEach((span, index) => {
            span.addEventListener('mouseenter', () => {
                gsap.to(span, {
                    '--span-line-width': `${span.offsetWidth}px`,
                    duration: 0.2,
                    ease: 'power4.out'
                });
            });

            span.addEventListener('mouseleave', () => {
                gsap.to(span, {
                    '--span-line-width': '0px',
                    duration: 0.2,
                    ease: 'power4.out'
                });
            });
        });
    }, []);

    return (
        <nav className="main-navbar">
            <div className="navbar">
                <div className="leftNavbar">
                    <img style={{ height: "50px" }} src={Logo} alt="Logo" />
                    <h1>New India Software Solutions</h1>
                </div>
                <div className="rightNavbar">
                    <div className="navigation">
                        {['Home', 'About', 'Contact Us', 'Services'].map((text, index) => (
                            <span
                                key={index}
                                ref={el => spansRef.current[index] = el}
                                className="nav-item"
                                onClick={() => {
                                    if (text === 'Home') {
                                        window.location.replace('/');
                                    } else if (text === 'About') {
                                        window.location.replace('/about');
                                    } else if (text === 'Contact Us') {
                                        window.location.replace('/contact');
                                    } else if (text === 'Services') {
                                        window.location.replace('/services');
                                    }
                                }}
                            >
                                {text}
                            </span>
                        ))}
                    </div>

                </div>
                <div className="ham-menu">
                    <div className="topHamMenu">
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
