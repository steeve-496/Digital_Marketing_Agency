import React, { useEffect, useRef } from "react";
import "./header.css";
import { gsap } from "gsap";

export default function Header({ animate }) {
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const btnRef = useRef(null);
  const linksRef = useRef([]);

  linksRef.current = [];

  const addLink = (el) => {
    if (el && !linksRef.current.includes(el)) {
      linksRef.current.push(el);
    }
  };

  useEffect(() => {
    if (!animate) return; // WAIT for preloader to finish

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      navRef.current,
      { y: -40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    )
      .fromTo(
        logoRef.current,
        { y: -40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "-=0.5"
      )
      .fromTo(
        linksRef.current,
        { y: -40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.2 },
        "-=0.4"
      )
      .fromTo(
        btnRef.current,
        { y: -40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        "-=0.4"
      );
  }, [animate]);

  return (
    <header className="navbar" ref={navRef}>
      <div className="logo" ref={logoRef}>SysDevCode</div>

      <ul className="nav-links">
        <li><a ref={addLink} href="#hero">Home</a></li>
        <li><a ref={addLink} href="#services">Services</a></li>
        <li><a ref={addLink} href="#about">About</a></li>
        <li><a ref={addLink} href="#footer">Contact</a></li>
      </ul>
    </header>
  );
}
