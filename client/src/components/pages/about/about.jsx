import React, { useRef, useLayoutEffect } from "react";
import "./about.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// 1. Removed 'scrollTween' prop
export default function About() {
  const aboutRef = useRef(null);

  // 2. Dependency array is now empty
  useLayoutEffect(() => {
    
    const ctx = gsap.context(() => {
      
      const elementsToAnimate = aboutRef.current.querySelectorAll(
        ".about-title, .about-desc, .card"
      );

      // 3. Removed all 'if/else' logic
      // This is now the only animation, with scrub: true
      gsap.from(elementsToAnimate, {
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",   // Animation starts when the top of the component is 80% down the screen
          end: "bottom 80%",  // Animation finishes when the bottom of the component is 80% down the screen
          scrub: true,        // 4. Animation progress is tied to scrollbar
          // markers: true,    // Uncomment this line to see the start/end markers for debugging
        },
        y: 50,
        opacity: 0,
        stagger: 0.2,
        ease: "none", // Set to "none" for a linear scrub tied directly to scroll
      });

    }, aboutRef); // Scope context to the component

    return () => ctx.revert(); // Cleanup
    
  }, []); // <-- Runs once on mount

  return (
    <section className="about panel" ref={aboutRef} id="about">
      <div className="about-text">
        <h2 className="about-title">ABOUT SYSDEVCODE</h2>
        <p className="about-desc">
          We are creative developers that transforms innovative ideas into
          powerful digital experiences. Out team combines artistic vision with
          technical expertise to deliver solutions that captivate and convert
        </p>

        <div className="cards">
          <div className="card">
            <p className="card-number1 card-number" style={{ color: "red" }}>
              500+
            </p>
            <p className="card-name">Projects Completed</p>
          </div>

          <div className="card">
            <p className="card-number2 card-number" style={{ color: "green" }}>
              50+
            </p>
            <p className="card-name">Happy Clients</p>
          </div>

          <div className="card">
            <p className="card-number3 card-number" style={{ color: "purple" }}>
              3+
            </p>
            <p className="card-name">Years of Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}