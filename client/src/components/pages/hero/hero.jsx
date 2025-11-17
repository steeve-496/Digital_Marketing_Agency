import React, { useRef, useEffect } from "react";
import "./hero.css";
import { gsap } from "gsap";
import Beams from "../effects/beams.jsx"

export default function Hero({ animate }) {
  const heroRef = useRef(null);

  useEffect(() => {
    if (!animate) return;

    gsap.fromTo(
      heroRef.current.querySelectorAll(".hero-title, .hero-subtext, .hero-role"),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        markers: true,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
      }
    );
  }, [animate]);

  return (
    <section className="hero panel" ref={heroRef} id="hero">
      <div style={{ width: '100%', height: '100%', overflow: 'hidden',position: 'absolute',zIndex: -1 }}>
        <Beams
          beamWidth={2}
          beamHeight={25}
          beamNumber={12}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={1.75}
          scale={0.25}
          rotation={40}
        />
      </div>

      <div className="hero-title-container">
        <h2 className="hero-title span1" data-text="DIGITAL">DIGITAL</h2>
        <h2 className="hero-title span2" data-text="VISION">VISION</h2>

        
      </div>


      <div className="hero-role-container">
          <div className="hero-role">Where Ideas</div>
          <div className="hero-role">Meets Impact</div>
      </div>

      <div className="hero-subtext-container">
      <p className="hero-subtext">We help <br />brands scale <br />using technology.</p>
      </div>
    </section>
  );
}
