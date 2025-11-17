import React, { useRef, useEffect } from "react";
import "./services.css";
import { gsap } from "gsap";


export default function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    // --- MODIFIED ---
    const anim = gsap.from(sectionRef.current.querySelectorAll(".service-box"), {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 85%",
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.15,
    });

    // Return a cleanup function
    return () => {
      anim.kill();
    };
    // --- END ---
  }, []);

  return (
    <section className="services" ref={sectionRef}>
      <h2>Unlock Astonishing Results in 3 Easy Steps</h2>

      <div className="service-container">
        <div className="service-box">
          <h3>Free Consultation</h3>
          <p>Aliquet quis metus penatibus euismod.</p>
        </div>

        <div className="service-box">
          <h3>Discover the Product</h3>
          <p>Aliquet quis metus penatibus euismod.</p>
        </div>

        <div className="service-box">
          <h3>Production & Wireframe</h3>
          <p>Aliquet quis metus penatibus euismod.</p>
        </div>
      </div>
    </section>
  );
}