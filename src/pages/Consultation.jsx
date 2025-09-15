import Navigation from "../components/Navigation";
import ConsultationForm from "../components/ConsultationForm";
import Footer from "../components/Footer";
import Review from "../components/Review";
import ContactButtons from "../components/ContactButtons";
import "./Consultation.css";

function Consultation() {
  return (
    <>
      <ContactButtons />
      <header className="consultation-header">
        <div style={{padding: "20px 20px 20px 0"}}><Navigation /></div>
        <div className="consultation-content">
          <div>
            <h1>Free Consultation</h1>
            <p>
              Take the first step toward your goals with a free consultation.
              Our team will listen to your needs, understand your challenges,
              and provide tailored recommendations all at no cost. No
              commitments, just honest advice to help you make the best decision
              for your future.
            </p>
          </div>
          <ConsultationForm />
        </div>
      </header>
      <Review />
      <Footer />
    </>
  );
}
export default Consultation;
