import "./contactpage.css";
import Header_s from "../header_s/header_s.jsx";
import Footer from "../footer/footer.jsx";

function ContactPage() {
  return (
    <>
    <section className='contactPage' id="contactPage">
        <div className="contact_page_container">
          <h3 className="contact_page_title">Contact Us</h3>
          <form className="contact_form">
            <label htmlFor="name">Name</label>
            <input 
              type="text"
              id="name"
              name="name"
            />

            <label htmlFor="email">Email</label>
            <input
            type="email"
            id="email"
            name="email"
            />

            <label htmlFor="message">Message</label>
            <textarea 
            name="message" 
            id="message"></textarea>

            <button>Submit</button>
          </form>
      </div>
    </section>
    <Footer />
    </>

  )
}

export default ContactPage
