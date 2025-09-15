import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Review from "../components/Review";
import "./Service.css";
import { FaHouseDamage, FaHouseUser, FaImage } from "react-icons/fa";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import { FaFileCircleCheck, FaHouseFire } from "react-icons/fa6";
import ContactButtons from "../components/ContactButtons";

function Service() {
  return (
    <>
      <ContactButtons />
      <header className="service-header">
        <Navigation />
        <div className="service-content">
          <h1>Hassan Legal Practice Services</h1>
          <p>
            Hassan Legal Practice is the best Family Lawyer Service in Lahore
            Pakistan. We are dedicated to providing expert legal assistance for
            family law matters such as divorce, khula, child custody, and
            marriages.
          </p>
        </div>
      </header>
      <Hero />
      <section>
        <div className="heading">
          <hr />
          <h1>Our Services</h1>
          <hr />
        </div>
        <div className="service-cards">
          <Link to="/child-maintenance" className="service-card">
            <div className="service-icon">
              <img src="/maintenanceIcon.webp" alt="Child Maintenance" />
            </div>
            <h3>Child Maintenance</h3>
            <p>
              In Pakistan, child maintenance law requires that a parent,
              typically the father, is legally obligated to financially support.
            </p>
          </Link>
          <Link to="/wifemaintenance" className="service-card">
            <div className="service-icon">
              <img src="/maintenanceIcon.webp" alt="Wife Maintenance" />
            </div>
            <h3>Wife Maintenance</h3>
            <p>
              Women facing financial challenges during marital
              disputes often seek legal protection through the Wife Maintenance
              Law.
            </p>
          </Link>
          <Link to="/marriage" className="service-card">
            <div className="service-icon">
              <img src="/marriageIcon.webp" alt="Marriage Registration" />
            </div>
            <h3>Marriage Registration</h3>
            <p>
              Marriage registration certificate is a legal document that serves
              as a proof of marriage between two individuals.
            </p>
          </Link>
          <Link to="/divorce" className="service-card">
            <div className="service-icon">
              <FaHouseFire size={100} color="#ffb24f" />
            </div>
            <h3>Divorce & Khula</h3>
            <p>
              Islam permits dissolution of marriage between Muslim spouses in
              three ways: &nbsp;
              <em>
                <em>i.e.&nbsp;</em>
              </em>{" "}
              Talaq, Khula, and Mubarat.
            </p>
          </Link>
          <Link to="/oversea" className="service-card">
            <div className="service-icon">
              <img src="/divorceIcon.webp" alt="Divorce & Khula" />
            </div>
            <h3>Divorce Procedure For Overseas</h3>
            <p>
                The Divorce Procedure for Overseas Pakistanis involves legal
                representation and adherence to both Pakistani and international
                laws.
            </p>
          </Link>
          <Link to="/khula" className="service-card">
            <div className="service-icon">
              <img src="/divorceIcon.webp" alt="Divorce & Khula" />
            </div>
            <h3>Khula Procedure For Overseas</h3>
            <p>
              The Khula Procedure for Overseas Pakistanis involves legal
              representation and adherence to both Pakistani and international
              laws.
            </p>
          </Link>
          <Link to="/nadra" className="service-card">
            <div className="service-icon">
              <img src="/certificateIcon.png" />
            </div>
            <h3>Divorce Certificate Procedure</h3>
            <p>
              The Divorce Certificate Procedure for Overseas Pakistanis involves
              legal representation in accordance
              laws.
            </p>
          </Link>
          <Link to="/harassment" className="service-card">
            <div className="service-icon">
              <FaImage size={100} color="#ffb24f" />
            </div>
            <h3>Sexual Harassment Law</h3>
            <p>
              Sexual Harassment Law aims to protect individuals from
              unwanted sexual advances and behavior in various settings.
            </p>
          </Link>
          <Link to="/womenright" className="service-card">
            <div className="service-icon">
              <FaHouseUser size={100} color="#ffb24f" />
            </div>
            <h3>Women Property Rights</h3>
            <p>
              Women Property Rights ensure that women have equal rights to
              own, inherit, and manage property.
            </p>
          </Link>
          <Link to="/cyber" className="service-card">
            <div className="service-icon">
              <FaImage size={100} color="#ffb24f" />
            </div>
            <h3>Cyber Bullying</h3>
            <p>
              Cyber Bullying involves the use of digital platforms to harass,
              threaten, or intimidate individuals.
            </p>
          </Link>
          <Link to="/property" className="service-card">
            <div className="service-icon">
              <FaHouseDamage size={100} color="#ffb24f" />
            </div>
            <h3>Property Disputes</h3>
            <p>
              Property Disputes can arise over issues such as ownership,
              inheritance, and division of assets.
            </p>
          </Link>
          <Link to="/tax" className="service-card">
            <div className="service-icon">
              <FaFileCircleCheck size={100} color="#ffb24f" />
            </div>
            <h3>Tax Return & NTN Registration</h3>
            <p>
              Tax Return & NTN Registration services assist individuals and
              businesses in complying with tax laws.
            </p>
          </Link>
          <Link to="/rights" className="service-card">
            <div className="service-icon">
              <img src="/maintenanceIcon.webp" alt="Women Rights" />
            </div>
            <h3>Women Rights</h3>
            <p>
              Women Rights encompass a range of legal protections and
              entitlements aimed at ensuring gender equality and safeguarding
              the rights of women
            </p>
          </Link>
        </div>
      </section>
      <Review />
      <Footer />
    </>
  );
}
export default Service;
