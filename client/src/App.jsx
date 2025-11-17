import { useEffect, useState } from "react";
import Preloader from './components/pages/preloader/preloader.jsx';
import Header from './components/pages/header/header.jsx';
import Hero from './components/pages/hero/hero.jsx';
import Features from './components/pages/features/features.jsx';
import Footer from './components/pages/footer/footer.jsx';
import About from "./components/pages/about/about.jsx";

import Lenis from "@studio-freight/lenis";

export default function App() {
  const [preloaderDone, setPreloaderDone] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      smoothWheel: true,
      direction: "vertical",
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      {!preloaderDone && <Preloader onFinish={() => setPreloaderDone(true)} />}
      <Header animate={preloaderDone} />
      <Hero animate={preloaderDone} />
      <About animate={preloaderDone} />
      <Features animate={preloaderDone} />
      <Footer />
    </>
  );
}
