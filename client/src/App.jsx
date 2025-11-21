import { useEffect, useState } from "react";
import Preloader from './components/pages/preloader/preloader.jsx';
import Header from './components/pages/header/header.jsx';
import Hero from './components/pages/hero/hero.jsx';
import Services from './components/pages/services/services.jsx';
import Footer from './components/pages/footer/footer.jsx';
import About from "./components/pages/about/about.jsx";
import Feature from "./components/pages/feature/feature.jsx";
import Contact from "./components/pages/contact/contact.jsx";
import ContactPage from "./components/pages/contact/contactpage.jsx";
export default function App() {


  const [preloaderDone, setPreloaderDone] = useState(false);

  const [showContactPage, setShowContactPage] = useState(false);

  return (
  <>
    {showContactPage ? (
      <ContactPage />
    ) : (
      <>
        {!preloaderDone && (
          <Preloader onFinish={() => setPreloaderDone(true)} />
        )}
        <Header animate={preloaderDone} />
        <Hero animate={preloaderDone} />
        <About animate={preloaderDone} />
        <Services animate={preloaderDone} />
        <Feature animate={preloaderDone} />
        <Contact 
          animate={preloaderDone} 
          onContactClick={() => setShowContactPage(true)} 
        />
        <Footer animate={preloaderDone} />
      </>
    )}
  </>
);

}
