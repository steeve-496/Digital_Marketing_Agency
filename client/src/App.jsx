import { useEffect, useState } from "react";
import { BrowserRouter as Router , Route, Routes} from "react-router-dom";
import axios from "axios";
import Preloader from './components/pages/preloader/preloader.jsx';
import Header from './components/pages/header/header.jsx';
import Hero from './components/pages/hero/hero.jsx';
import Services from './components/pages/services/services.jsx';
import Footer from './components/pages/footer/footer.jsx';
import About from "./components/pages/about/about.jsx";
import Feature from "./components/pages/feature/feature.jsx";
import Contact from "./components/pages/contact/contact.jsx";
import ContactPage from "./components/pages/contact/contactpage.jsx";
import Admin from "./Admin.jsx";

export default function App() {
  const [preloaderDone, setPreloaderDone] = useState(false);
  const [showContactPage, setShowContactPage] = useState(false);

  //Backend logic
  const [content, setContent] = useState(null);

  useEffect(()=>{
    axios.get("https://digital-marketing-agency-nt47.onrender.com/api/content")
    .then(res => setContent(res.data))
    .catch(err => console.log(err));
  },[content]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {!preloaderDone && (
                <Preloader onFinish={() => setPreloaderDone(true)} />
              )}

              {showContactPage ? (
                <ContactPage
                  onGoBack={() => {
                    setShowContactPage(false);
                    requestAnimationFrame(() => {
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                    });
                  }}
                />
              ) : (
                <>
                  <Header animate={preloaderDone} headerTitle={content?.headerTitle} />
                  <Hero
                    animate={preloaderDone}
                    title1={content?.title1}
                    title2={content?.title2}
                    rightcnt={content?.rightcnt}
                    leftcnt={content?.leftcnt}
                  />

                  <About
                    animate={preloaderDone}
                    aboutTitle={content?.aboutTitle}
                    aboutDesc={content?.aboutDesc}
                  />

                  <Services
                    animate={preloaderDone}
                    serviceTitle={content?.serviceTitle}
                    services={content?.services}
                  />

                  <Feature
                    animate={preloaderDone}
                    featureTitle={content?.featureTitle}
                    featureData_1={content?.featureData_1}
                    featureData_2={content?.featureData_2}
                    featureUrl={content?.featureUrl}
                  />

                  <Contact animate={preloaderDone} onContactClick={() => setShowContactPage(true)} />

                  <Footer
                    animate={preloaderDone}
                    footerTitle={content?.footerTitle}
                    footerDesc={content?.footerDesc}
                  />
                </>
              )}
            </>
          }
        />

        <Route path="/admin" element={<Admin />} />

      </Routes>
    </Router>
  );
}







