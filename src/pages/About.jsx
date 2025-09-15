import "./About.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Review from "../components/Review";
import Hero from "../components/Hero";
import FAQs from "../components/FAQs";
import { FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
import ContactButtons from "../components/ContactButtons";
import { useEffect } from "react";

function About() {
  useEffect(() => {
    Aos.init({ offset: 120, duration: 1000 });
  }, []);
  return (
    <>
      <ContactButtons />
      <header className="about-header">
        <Navigation />
        <div className="service-content" data-aos="fade">
          <h1>About Us</h1>
          <p>
            Hassan Law Practice is a trusted legal firm based in Lahore,
            Pakistan, dedicated to providing reliable, client-focused legal
            services. With a commitment to integrity, professionalism, and
            results, we specialize in a wide range of legal areas including
            civil, criminal, corporate, and family law. Our experienced team of
            lawyers works diligently to protect our clients’ rights, offering
            clear guidance and effective representation both in and out of
            court. At Hassan Law Practice, we believe in building lasting
            relationships through transparency, personalized solutions, and a
            deep understanding of Pakistan’s legal system.
          </p>
        </div>
      </header>
      <Hero />
      <main className="about-main">
        <div className="heading">
          <hr />
          <h1>Your Trusted Legal Partner</h1>
          <hr />
        </div>
        <div className="about-main-content">
          <div className="main-content" data-aos="fade">
            <h2>Hassan Legal Practice</h2>
            <p>
              At Hassan Legal Practice, we are dedicated to delivering the
              highest quality legal services with integrity, professionalism,
              and a deep commitment to justice. Led by Advocate Hassan, a
              licensed High Court lawyer, our firm provides expert
              representation in civil, criminal, family, corporate, and
              constitutional law. With years of experience and a proven track
              record, we offer comprehensive legal solutions including legal
              consultation, court representation, document drafting, contract
              review, dispute resolution, and case strategy development. Whether
              you are an individual seeking justice or a business in need of
              legal guidance, we tailor our services to meet your specific
              needs. Based in Lahore, Pakistan, we serve clients locally and
              nationally, ensuring client confidentiality, transparent
              communication, and ethical practice at every stage. Our dedicated
              team of attorneys takes the time to listen, understand, and
              strategize, ensuring you are informed and empowered throughout the
              legal process. At Hassan Legal Practice, we pride ourselves on our
              client-centered approach — combining in-depth legal knowledge with
              practical solutions to achieve the best possible outcomes. Our
              mission is to stand by your side, protect your rights, and fight
              for your interests with unwavering dedication.
            </p>
            <img src="About.jpg" alt="about image" style={{ padding: "3rem 0", width: "100%", borderRadius: "8px" }}/>
          </div>
          <div className="about-image-container">
          <figure>
            <img
              src="Attorney.avif"
              alt="Hassan Legal Practice"
              className="about-image"
            />
            <figcaption  data-aos="fade">
              <h2 style={{ textAlign: "center" }}>Our Values</h2>
                  <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem", padding: "0 1rem" }}>
                    <li><strong>Integrity</strong> : We uphold the highest ethical standards, ensuring honesty and transparency in every case.</li>
                    <li><strong>Confidentiality</strong> : Your privacy is our priority. Every detail you share is protected with the utmost discretion.</li>
                    <li><strong>Dedication</strong> : We commit fully to each client, giving your case the attention and focus it deserves.</li>
                    <li><strong>Empathy</strong> : We listen with compassion and understanding, because legal issues often come during challenging times.</li>
                    <li><strong>Excellence</strong> : We strive for the best possible outcome through meticulous preparation and strong advocacy.</li>
                  </ul>
            </figcaption>
            </figure>
            <ul className="contact-list" data-aos="fade-up">
              <li className="list-item">
                <div
                  style={{
                    fontSize: "clamp(0.9rem, 2vw, 1.2rem)",
                    display: "flex",
                    flexDirection: "column",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    gap: "0rem",
                    width: "60%",
                    paddingLeft: "1rem",
                    borderLeft: "4px solid #007bff",
                  }}
                >
                  <strong >Phone</strong><p style={{ fontSize: "clamp(0.7rem, 2vw, 1rem)"}}>+92 324 4536417</p>
                </div>
                <button 
                  onClick={() => window.open("tel:+923244536417")}
                  className="contact-button" 
                  style={{ color: "#007bff", }}>
                  <FaPhone /> <p>Phone</p>
                </button>
              </li>
              <li className="list-item">
                <div
                  style={{
                    fontSize: "clamp(0.9rem, 2vw, 1.2rem)",
                    display: "flex",
                    flexDirection: "column",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    gap: "0rem",
                    width: "60%",
                    paddingLeft: "1rem",
                    borderLeft: "4px solid #0ac900ff",
                  }}
                >
                  <strong >WhatsApp</strong><p style={{ fontSize: "clamp(0.7rem, 2vw, 1rem)"}}>+92 324 4536417</p>
                </div>
                <button
                  onClick={() => window.open("https://wa.me/923244536417")}
                  className="contact-button"
                  style={{ color: "#0ac900ff", }}
                >
                  <FaWhatsapp /> <p>Whatsapp</p>
                </button>
              </li>
              <li className="list-item">
                <div
                  style={{
                    fontSize: "clamp(0.9rem, 2vw, 1.2rem)",
                    display: "flex",
                    flexDirection: "column",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    gap: "0rem",
                    width: "60%",
                    paddingLeft: "1rem",
                    borderLeft: "4px solid #ffb700ff",
                  }}
                >
                  <strong >Email</strong><p style={{ fontSize: "clamp(0.7rem, 2vw, 1rem)"}}>Hassanofficial512@gmail.com</p>
                </div>
                <button
                  onClick={() => window.open("mailto:Hassanofficial512@gmail.com")}
                  className="contact-button"
                  style={{ color: "#ffb700ff", }}
                >
                  <FaEnvelope /> <p>Mail</p>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <FAQs
        faqs={[
          {
            question: "Where is Hassan Law Practice located?",
            answer:
              "We are based in Lahore, Pakistan, and serve clients across the city and surrounding regions.",
          },
          {
            question: "How can I contact you?",
            answer:
              "You can reach us by calling on +92 324 4536417, mailing us at info@hassanlaw.com, messaging us on WhatsApp at +92 324 4536417, or through the contact form on our website.",
          },
          {
            question: "What areas of law do you specialize in?",
            answer:
              "We specialize in civil, criminal, corporate, and family law, providing comprehensive legal services tailored to our clients' needs.",
          },
          {
            question: "What types of legal cases do you handle?",
            answer:
              "Our expertise includes civil, criminal, corporate, and family law matters, along with legal consultation and documentation services.",
          },
          {
            question: "How can I book a consultation?",
            answer:
              "You can schedule a consultation by calling our office, emailing us, or filling out the contact form on our website.",
          },
          {
            question: "Do you offer initial consultations for free?",
            answer:
              "We provide a brief initial discussion to understand your case and guide you on the next steps.",
          },
          {
            question: "How experienced is your legal team?",
            answer:
              "Our lawyers have years of experience in Pakistan’s legal system and are dedicated to providing effective and ethical representation.",
          },
          {
            question: "Can you represent clients outside Lahore?",
            answer:
              "Yes, we can represent clients in other cities of Pakistan, depending on the case requirements.",
          },
          {
            question: "Are my discussions with your lawyers confidential?",
            answer:
              "Absolutely. All client communications are strictly confidential in accordance with legal ethics and professional standards.",
          },
        ]}
      />
      <Review />
      <Footer />
    </>
  );
}

export default About;
