import React, { useRef, useLayoutEffect } from "react";
import "./about.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About({ scrollTween }) {
  const aboutRef = useRef(null);

  useLayoutEffect(() => {
    
    const ctx = gsap.context(() => {
      
      const elementsToAnimate = aboutRef.current.querySelectorAll(".about-title, .about-desc, .card");

      // *** THIS IS THE FIX ***
      // Check if the parent scroll animation exists
      if (scrollTween) {
        // More than 1 panel: Use the horizontal scroll
        gsap.from(elementsToAnimate, {
          scrollTrigger: {
            trigger: aboutRef.current,
            containerAnimation: scrollTween, 
            start: "left 75%",
          },
          y: 50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
        });
      } else {
        // Only 1 panel: Use a normal vertical scroll
        gsap.from(elementsToAnimate, {
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 80%", // Original vertical trigger
          },
          y: 50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
        });
      }
    }, aboutRef); 

    return () => ctx.revert();
    
  }, [scrollTween]); // Dependency array is still correct

  return (
    <section className="about panel" ref={aboutRef} id="about">
      <div className="about-text">
        <h2 className="about-title">ABOUT SYSDEVCODE</h2>
        <p className="about-desc">
          We are creative developers that transforms innovative ideas into powerful digital experiences.
          Out team combines artistic vision with technical expertise to deliver solutions that captivate and convert
        </p>

        <div className="cards">
          <div className="card">
            <p className="card-number1 card-number" style={{color:"red"}}>500+</p>
            <p className="card-name">Projects Completed</p>
          </div>
          
          <div className="card">
            <p className="card-number2 card-number" style={{color:"green"}}>50+</p>
            <p className="card-name">Happy Clients</p>
          </div>

          <div className="card">
            <p className="card-number3 card-number" style={{color:"purple"}}>3+</p>
            <p className="card-name">Years of Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}