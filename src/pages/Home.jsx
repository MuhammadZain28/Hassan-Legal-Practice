import Navigation from "../components/Navigation";
import ContactForm from "../components/ContactForm";
import Review from "../components/Review";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import "./Home.css";
import { FaHouseDamage, FaHouseUser } from "react-icons/fa";
import { useContext } from "react";
import { ReviewContext } from "../utils/ReviewContext";
import { useEffect } from "react";
import Loading from "../components/Loading";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { FaHandsHoldingChild } from "react-icons/fa6";
import ContactButtons from "../components/ContactButtons";
import { Helmet } from "react-helmet";

function Home() {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true, offset: 100 });
  }, []);

  const { loading } = useContext(ReviewContext);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <Helmet>
        <title>Advocate Hassan | Expert Family & Civil Lawyer in Karachi</title>
        <meta
          name="description"
          content="Advocate Hassan provides expert legal services including divorce, child maintenance, property disputes, cyber law, and consultation for individuals and families in Karachi."
        />
        <meta
          name="keywords"
          content="Lawyer, Family Lawyer, Civil Lawyer, Divorce, Child Maintenance, Property Dispute, Cyber Law, Legal Consultation, Karachi"
        />
        <meta name="author" content="Advocate Hassan" />

        <meta
          property="og:title"
          content="Advocate Hassan | Expert Family & Civil Lawyer"
        />
        <meta
          property="og:description"
          content="Providing expert legal services including divorce, child maintenance, property disputes, cyber law, and consultations."
        />
        <meta property="og:url" content="https://www.advocatehassan.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.advocatehassan.com/logo.png"
        />

        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://www.advocatehassan.com/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://www.advocatehassan.com/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="https://www.advocatehassan.com/favicon-96x96.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://www.advocatehassan.com/apple-touch-icon.png"
        />
        <link
          rel="icon"
          href="https://www.advocatehassan.com/favicon.svg"
          type="image/svg+xml"
        />
        <link
          rel="mask-icon"
          href="https://www.advocatehassan.com/safari-pinned-tab.svg"
          color="#5bbad5"
        />

        <link
          rel="manifest"
          href="https://www.advocatehassan.com/site.webmanifest"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="https://www.advocatehassan.com/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="https://www.advocatehassan.com/android-chrome-512x512.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Advocate Hassan | Expert Family & Civil Lawyer"
        />
        <meta
          name="twitter:description"
          content="Providing expert legal services including divorce, child maintenance, property disputes, cyber law, and consultations."
        />
        <meta
          name="twitter:image"
          content="https://www.advocatehassan.com/logo.png"
        />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LegalService",
              "name": "Advocate Hassan",
              "image": "https://www.advocatehassan.com/logo.png",
              "url": "https://www.advocatehassan.com",
              "priceRange": "$$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Gillani Law chambers 5 Mozang Road, Lahore",
                "addressLocality": "Lahore",
                "addressRegion": "Punjab",
                "postalCode": "54500",
                "addressCountry": "PK"
              },
              "telephone": "+92-324-4536417",
              "areaServed": "Lahore",
              "description": "Providing expert legal services including divorce, child maintenance, property disputes, cyber law, and consultation."
            }
          `}
        </script>
      </Helmet>
      <ContactButtons />
      <header className="header">
        <Navigation />
        <div
          className="header-content"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          <div className="content-1">
            <h1 style={{ padding: "1rem 0" }}>
              FAMILY LAWYER & LAW FIRM IN LAHORE PAKISTAN
            </h1>
            <p style={{ lineHeight: "1.5", paddingBottom: "3rem" }}>
              Hassan Legal Practice is a leading family law firm in Lahore,
              specializing in marriage, divorce, Khula, child custody,
              guardianship, and inheritance matters in Pakistan
            </p>
          </div>
        </div>
      </header>
      <Hero />
      <section className="about">
        <div className="heading">
          <hr />
          <h1>Hassan Legal Practice</h1>
          <hr />
        </div>
        <div className="about-content-container">
          <div
            className="about-content"
            data-aos="fade"
            data-aos-offset="200"
            data-aos-duration="800"
          >
            <h2>Best Family Lawyer in Lahore Pakistan</h2>
            <p style={{ lineHeight: "1.2" }}>
              Welcome to Hassan Legal Practice, where dedication, expertise, and
              integrity define our approach to law. Led by Advocate Hassan, a
              licensed High Court lawyer in Pakistan, we specialize in civil
              law, criminal defense, family law, and constitutional matters. Our
              firm is committed to delivering effective legal solutions with a
              focus on protecting your rights and achieving the best possible
              outcome. With years of experience, we handle cases involving
              marriage, divorce, Khula, child custody, property disputes, bail
              matters, constitutional petitions, and more. We provide expert
              legal consultation, strong court representation, and precise legal
              documentation for both individuals and businesses in Lahore and
              across Pakistan. At Hassan Legal Practice, we value professional
              ethics, client confidentiality, and result-driven strategies. We
              understand the stress legal issues can bring, which is why we
              ensure clear communication, transparent advice, and personalized
              attention at every step. Whether you are facing a family dispute,
              a criminal charge, or a civil claim, we are here to guide you with
              compassion, skill, and determination. Choose Hassan Legal Practice
              — your trusted legal partner in Lahore.
            </p>
            <Link to="/about">
              <button className="secondary">Learn More</button>
            </Link>
          </div>
          <ContactForm />
        </div>
      </section>
      <main className="services">
        <div className="heading">
          <hr />
          <h1>Our Expertise in Law</h1>
          <hr />
        </div>
        <div className="service-cards">
          <Link
            to="/divorce"
            className="service-card"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
            data-aos-offset="200"
          >
            <div className="service-icon">
              <img src="/divorceIcon.webp" alt="" />
            </div>
            <h2 style={{ fontSize: "clamp(1rem, 3vw, 1.3rem)" }}>
              Divorce & Khula
            </h2>
            <p>
              Islam permits dissolution of marriage between Muslim spouses in
              three ways: &nbsp;
              <em>
                <em>i.e.&nbsp;</em>
              </em>{" "}
              Talaq, Khula, and Mubarat.
            </p>
          </Link>
          <Link
            to="/marriage"
            className="service-card"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-offset="200"
          >
            <div className="service-icon">
              <img src="/marriageIcon.webp" alt="" />
            </div>
            <h2 style={{ fontSize: "clamp(1rem, 3vw, 1.3rem)" }}>
              Marriage Registration
            </h2>
            <p>
              Marriage registration certificate is a legal document that serves
              as a proof of marriage between two individuals.
            </p>
          </Link>
          <Link
            to="/child-maintenance"
            className="service-card"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="400"
            data-aos-offset="200"
          >
            <div className="service-icon">
              <FaHandsHoldingChild size={100} color="#ffb24f" />
            </div>
            <h2 style={{ fontSize: "clamp(1rem, 3vw, 1.3rem)" }}>
              Child Maintenance
            </h2>
            <p>
              In Pakistan, child maintenance law requires that a parent,
              typically the father, is legally obligated to financially support.
            </p>
          </Link>
          <Link
            to="/wifemaintenance"
            className="service-card"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="400"
            data-aos-offset="200"
          >
            <div className="service-icon">
              <img src="/maintenanceIcon.webp" alt="" />
            </div>
            <h2 style={{ fontSize: "clamp(1rem, 3vw, 1.3rem)" }}>
              Wife Maintenance
            </h2>
            <p>
              Women facing financial and societal challenges during marital
              disputes often seek legal protection through the Wife Maintenance
              Law.
            </p>
          </Link>
          <Link
            to="/rights"
            className="service-card"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-offset="200"
          >
            <div className="service-icon">
              <FaHouseUser size={100} color="#ffb24f" />
            </div>
            <h2 style={{ fontSize: "clamp(1rem, 3vw, 1.3rem)" }}>
              Women Property Rights
            </h2>
            <p>
              Women Property Rights ensure that women have equal rights to own,
              inherit, and manage property. This includes land, real estate, and
              personal belongings.
            </p>
          </Link>
          <Link
            to="/property"
            className="service-card"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="400"
            data-aos-offset="200"
          >
            <div className="service-icon">
              <FaHouseDamage size={100} color="#ffb24f" />
            </div>
            <h2 style={{ fontSize: "clamp(1rem, 3vw, 1.3rem)" }}>
              Property Disputes
            </h2>
            <p>
              Property disputes involve conflicts over the ownership, use, or
              division of property. These disputes can arise between family
              members, neighbors, or business partners.
            </p>
          </Link>
        </div>
      </main>
      <article className="meet-attorney">
        <div className="heading">
          <hr />
          <h1>Meet Your Attorney</h1>
          <hr />
        </div>
        <div className="attorney-content">
          <img src="Attorney.avif" alt="Attorney" className="attorney-image" />
          <div className="attorney-details">
            <h2>Hassan Ali</h2>
            <p>
              Advocate Hassan is a licensed High Court lawyer offering expert
              legal services in civil, criminal, family, and constitutional law.
              With a strong commitment to justice, professional ethics, and
              client confidentiality, we provide legal consultation, court
              representation, and document drafting across various legal
              domains. Based in Lahore, Pakistan, we serve individuals and
              businesses with reliable, honest, and result-driven legal
              solutions
            </p>
            <Link to="/service">
              <button
                className="secondary"
                style={{ color: "rgba(255, 255, 255, 1)", borderColor: "#fff" }}
              >
                Services
              </button>
            </Link>
          </div>
        </div>
      </article>
      <Review />
      <Footer />
    </>
  );
}

export default Home;
