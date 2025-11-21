import './contact.css';
import { GoArrowRight } from "react-icons/go";
function Contact({onContactClick}) {
  return (
  <section className='contact' id="contact">
    <div className='contact-container'>
            <p className='contact-p1'>Get in Touch</p>
            <p className='contact-p2'>Let's get to it.<br /> 
            together.</p>
        <div className='contact-card'>
            <h3 className='contact-title'>Start a Project</h3>
            <button className='contact-us' onClick={onContactClick}>Contact Us &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<GoArrowRight /></button>
        </div>
    </div>
  </section>
  )
}

export default Contact;