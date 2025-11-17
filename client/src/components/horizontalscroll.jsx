import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./horizontalscroll.css"

import About from "./pages/about/about.jsx"; 
// import Features from "./pages/features/features.jsx";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScroll({animate}) {
  const containerRef = useRef(null);
  const [scrollTween, setScrollTween] = useState(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    
    const ctx = gsap.context(() => {
      
      gsap.delayedCall(0, () => {
        const sections = gsap.utils.toArray(".panel", container);

        // *** THIS IS THE FIX ***
        // Only create the horizontal scroll if there's more than one panel
        if (sections.length > 1) {
          const tween = gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
              trigger: container,
              pin: true,
              scrub: 1,
              anticipatePin: 1,
              start: "top top",
              end: () => "+=" + container.offsetWidth * (sections.length - 1),
            }
          });
          
          setScrollTween(tween);
        } else {
          // If there's only one panel, we don't create a scroll tween.
          // setScrollTween remains null.
        }
      });
      
    }, containerRef); 

    return () => ctx.revert(); 
    
  }, []);

  return (
    <div ref={containerRef} className="horizontal-wrapper">
      <About animate={animate} scrollTween={scrollTween} />
      {/* <Features animate={animate} scrollTween={scrollTween} /> */}
    </div>
  );
}