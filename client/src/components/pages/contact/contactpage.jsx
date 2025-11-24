import "./contactpage.css";
import Header_s from "../header_s/header_s.jsx";
import Footer from "../footer/footer.jsx";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useEffect } from "react";
import { GoArrowLeft } from "react-icons/go";

function ContactPage({onGoBack}) {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const textRef = useRef(null);

  useGSAP(() => {
    const title = textRef.current;

    title.innerHTML = title.textContent
      .split("")
      .map(char =>
        char === " "
          ? `<span class="letter">&nbsp;</span>`
          : `<span class="letter">${char}</span>`
      )
      .join("");

    gsap.from(".letter", {
      opacity: 0,
      y: 200,
      duration: 0.8,
      stagger: 0.05,
      ease: "power3.out",
    });
  });

  return (
    <section className="contactPage" id="contactPage">
      <Header_s />
      <div className="contact_page_container">
        <button className="goback" onClick={onGoBack}> <GoArrowLeft />&nbsp;Back</button>
        <h3 ref={textRef} className="contact_page_title">
          GET IN TOUCH
        </h3>
      </div>

      <div className="contact_page_form">
        <div className="contact_faq">
          <h4>Have a question?</h4>
          <p>letchat@sysdevcode.com</p>
          <h4>Speak to Someone</h4>
          <p>+91 92382 91821</p>
        </div>

        <div className="contact_card">
          <p className="contact_card_title">Let’s Create Radical. <span  style={{color: 'rgba(141, 141, 141, 0.66)'}}>Please fill in the form below. We'll aim to reply within 1 business day.</span></p>
          <form className="contact_form">
            
            <div className="form_data">
            <label>Name</label>
            <input type="name" id="name" placeholder="Enter your Name"/>
            </div>

            <div className="form_data">
            <label>Email</label>
            <input type="email" id ="email"placeholder="Enter your Email Id"/> 
            </div>
            <div className="form_data">
            <label>Phone Number</label>
            <input type="text" placeholder="Enter you number"/>
            </div>
            <div className="form_data full">
              <label htmlFor="message">Message</label>
              <textarea type="text" id="message" placeholder="Leave a Message"/>
            </div>
            <div className="form_data full">
              <button className="form_button">Submit</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default ContactPage;
