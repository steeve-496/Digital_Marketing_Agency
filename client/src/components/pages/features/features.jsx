import React, { useEffect, useRef } from "react";
import "./features.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export default function Features() {
  const sectionRef = useRef(null);

  useEffect(() => {

    const anim = gsap.from(sectionRef.current.querySelectorAll(".feature-card"), {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
      y: 50,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
    });
    return () => {
      anim.kill();
    };
    
  }, []);

  return (
    <section className="features panel" ref={sectionRef}>
      <h2>Features</h2>

      <div className="features-grid">
        <div className="feature-card">UI/UX Friendly</div>
        <div className="feature-card">Focus on Target</div>
        <div className="feature-card">Secure App</div>
        <div className="feature-card">Awesome Graphics Design</div>
      </div>
    </section>
  );
}