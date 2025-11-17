import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./horizontalscroll.css"

import About from "./pages/about/about.jsx"; 
// import Features from "./pages/features/features.jsx";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScroll({animate}) {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    
    const ctx = gsap.context(() => {
      
      // *** THE FIX ***
      // We use a delayedCall to wait for React to render the children
      // before we try to find them with GSAP.
      gsap.delayedCall(0, () => {
        const sections = gsap.utils.toArray(".panel", container);

        if (sections.length > 0) {
          gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
              trigger: container,
              pin: true,
              scrub: 1,
              anticipatePin: 1,
              start: "top top",
              end: () => "+=" + container.offsetWidth * (sections.length - 1),
              id: "horizontal-scroll", // <-- Correctly use 'id'
              // markers: true, // <-- Uncomment this to see debug markers
            }
          });
        } else {
          console.warn("HorizontalScroll: No .panel children found.");
        }
      });
      
    }, containerRef); 

    return () => ctx.revert(); 
    
  }, []);

  return (
    <div ref={containerRef} className="horizontal-wrapper">
      <About animate={animate} />
      {/* <Features animate={animate} /> */}
    </div>
  );
}