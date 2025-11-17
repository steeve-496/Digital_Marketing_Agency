import { useState, useEffect } from "react";
import "./preloader.css";
import RotatingText from "../effects/rotatingtext.jsx";

export default function Preloader({ onFinish }) {
  const [hide, setHide] = useState(false);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFade(true), 3000); // fade early
    const hideTimer = setTimeout(() => {
      setHide(true);
      onFinish();
    }, 3800); 

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (hide) return null;

  return (
    <div className={`preloader-wrapper ${fade ? "fade-out" : ""}`}>
      <div className="pre-title">
        <h1>
          Unforgettable{" "}
          <span><br />
            <RotatingText
              texts={["Brands", "Built", "Identity"]}
              mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
              staggerFrom={"last"}
              initial={{ y: "70%" }}
              animate={{ y: 0 }}
              exit={{ y: "0%" }}
              staggerDuration={0.03}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={1000}
            />
          </span>
        </h1>
      </div>
    </div>
  );
}
