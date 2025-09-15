import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import Review from "../components/Review";
import "./Contact.css";
import { FaGoogle, FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ContactButtons from "../components/ContactButtons";

function Contact() {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true, offset: 200 });
  }, []);

  return (
    <>
      <ContactButtons />
        <header className="contact-header">
            <Navigation />
            <div className="service-content">
                <h1>Contact Us</h1>
                <p>At Hassan Law Practice, your concerns are our priority. Whether you’re seeking legal guidance, 
                    scheduling a consultation, or simply have a question, we’re here to listen and respond promptly.
                     Reach out today and let our experience guide you toward the solutions you need</p>
            </div>
        </header>
        <main style={{gap: '2rem'}} className="contact">
            <div className="contact-info">
                <div className="heading" style={{margin: '2rem'}}>
                    <hr />
                        <h1>
                            Contact Info
                        </h1>
                    <hr />
                </div>
                <div className="contact-content">
                    <div className="contact-details" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300" data-aos-offset="300">
                        <FaPhone size={48} color="rgba(0, 123, 255, 1)"/>
                        <h2>Phone</h2>
                        <p>+92 324 4536417</p>
                        <p style={{textAlign: 'center', fontSize: 'clamp(0.7rem, 2vw, 0.9rem)'}}>Have any legal questions? Call Hassan Law Practice today and let our experienced team guide you every step of the way.</p>
                        <button onClick={() => window.open('tel:+923077811445', '_blank')}><FaPhone color="rgba(255, 255, 255, 1)"/><p>Call</p></button>
                    </div>
                    <div className="contact-details" data-aos="fade-up" data-aos-duration="800" data-aos-offset="300">
                        <FaEnvelope size={48} color="rgba(255, 203, 34, 1)" />
                        <h2>Email</h2>
                        <p>Hassanofficial512@gmail.com</p>
                        <p style={{textAlign: 'center', fontSize: 'clamp(0.7rem, 2vw, 0.9rem)'}}>Prefer email? Send your queries to Hassan Law Practice and receive clear, professional guidance directly to your inbox.</p>
                        <button onClick={() => window.location.href = 'mailto:Hassanofficial512@gmail.com'}><FaGoogle color="rgba(255, 255, 255, 1)"/><p>Mail</p></button>
                    </div>
                    <div className="contact-details" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400" data-aos-offset="300">
                        <FaWhatsapp size={48} color="rgba(43, 255, 0, 1)"/>
                        <h2>Whatsapp</h2>
                        <p>+92 324 4536417</p> 
                        <p style={{textAlign: 'center', fontSize: 'clamp(0.7rem, 2vw, 0.9rem)'}}>Need quick legal help? Message Hassan Law Practice instantly and get prompt support from our expert lawyers anytime.</p>
                        <button onClick={() => window.open('https://wa.me/923244536417', '_blank')}><FaWhatsapp color="rgba(255, 255, 255, 1)"/><p>Message</p></button>
                    </div>
                </div>
            </div>
            <div className="map-container">
                <div className="heading" style={{margin: '2rem'}}>
                    <hr style={{background: 'rgb(255, 255, 255)'}} />
                    <h1 style={{background: 'rgb(255, 255, 255)', color: 'rgb(0, 0, 0)'}}>Visit Us</h1>
                    <hr style={{background: 'rgb(255, 255, 255)'}} />
                </div>
                <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3399.6585447623083!2d74.30885147435859!3d31.560984245136538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sGillani%20Law%20chambers%205%20Mozang%20road%20lahore!5e0!3m2!1sen!2s!4v1755688824074!5m2!1sen!2s"
                        loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="contact-form-container">
                <div className="heading" style={{margin: '2rem'}}>
                    <hr />
                        <h1>
                            Get In Touch
                        </h1>
                    <hr />
                </div>
                <div className="form-container">
                    <ContactForm />
                </div>
            </div>
        </main>
        <Review />
        <Footer />
    </>
  );
}

export default Contact;
