import React, { useRef, useLayoutEffect } from "react";
import "./about.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // <-- Make sure ScrollTrigger is imported

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const aboutRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      
      // *** THE FIX ***
      // We also delay this to make sure the parent's
      // delayedCall has finished and created the ID.
      gsap.delayedCall(0, () => {
        // 1. Use ScrollTrigger.getById()
        const horizontalScrollTrigger = ScrollTrigger.getById("horizontal-scroll");

        if (horizontalScrollTrigger) {
          
          // 2. Get the .animation (the tween) from the trigger
          const horizontalTween = horizontalScrollTrigger.animation; 

          gsap.from(
            aboutRef.current.querySelectorAll(".about-title, .about-desc, .card"),
            {
              scrollTrigger: {
                trigger: aboutRef.current,
                containerAnimation: horizontalTween, // <-- Pass the animation here
                start: "left 75%",
                // markers: true, // <-- Uncomment this to see debug markers
              },
              y: 50,
              opacity: 0,
              duration: 0.8,
              stagger: 0.2,
              ease: "power3.out",
            }
          );
        } else {
          console.warn("About: Could not find ScrollTrigger with id 'horizontal-scroll'");
        }
      });
    }, aboutRef); 

    return () => ctx.revert();
    
  }, []);

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