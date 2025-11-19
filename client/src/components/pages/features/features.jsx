import React, { useEffect, useRef } from "react";
import "./features.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagicBento from "../effects/MagicBento.jsx";
gsap.registerPlugin(ScrollTrigger);


export default function Features() {

  return (
    <section className="features">
      <h2 className="feature-title">FEATURES</h2>
      <MagicBento className="magicbento"
        textAutoHide={true}
        enableStars={true}
        enableSpotlight={true}
        enableBorderGlow={true}
        enableTilt={true}
        enableMagnetism={true}
        clickEffect={true}
        spotlightRadius={300}
        particleCount={12}
        glowColor="68, 31, 255"
      />
    </section>
  );
}