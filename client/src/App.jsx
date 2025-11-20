import { useEffect, useState } from "react";
import Preloader from './components/pages/preloader/preloader.jsx';
import Header from './components/pages/header/header.jsx';
import Hero from './components/pages/hero/hero.jsx';
import Services from './components/pages/services/services.jsx';
import Footer from './components/pages/footer/footer.jsx';
import About from "./components/pages/about/about.jsx";

export default function App() {
  const [preloaderDone, setPreloaderDone] = useState(false);

  return (
    <>
      {!preloaderDone && <Preloader onFinish={() => setPreloaderDone(true)} />}
      <Header animate={preloaderDone} />
      <Hero animate={preloaderDone} />
      <About animate={preloaderDone} />
      <Services animate={preloaderDone} />
      <Footer />
    </>
  );
}
