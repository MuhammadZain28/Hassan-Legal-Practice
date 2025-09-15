import Navigation from "../components/Navigation";
import Review from "../components/Review";
import Footer from "../components/Footer";
import "./oversea.css";
import FAQs from "../components/FAQs";
import ContactButtons from "../components/ContactButtons";
import Hero from "../components/Hero";

function Khula() {
  return (
    <>
      <ContactButtons />
      <header className="oversea">
        <Navigation />
        <div className="divorce-content">
          <h1 style={{ padding: "1rem 0" }}>
            KHULA PROCEDURE FOR OVERSEAS PAKISTANIS
          </h1>
          <p style={{ lineHeight: "1.5", paddingBottom: "5rem" }}>
            Overseas Pakistani women can file for Khula in Pakistan without
            being physically present, by appointing a legal representative
            through a Special Power of Attorney (SPA) attested by the Pakistani
            Embassy or Consulate. The lawyer then files a Khula petition in the
            Family Court. After reconciliation attempts fail, the court issues a
            decree, which is sent to the Union Council for the issuance of a
            NADRA Divorce Certificate after a 90-day waiting period.
          </p>
        </div>
      </header>

      <Hero />

      <section className="about">
        <div className="heading">
          <hr />
          <h1>Khula for Overseas Pakistanis</h1>
          <hr />
        </div>
        <div className="oversea-content-container">
          <div className="oversea-content">
            <h2>At Hassan Practice Law</h2>
            <p>
              If you are a Pakistani woman living abroad and wish to dissolve
              your marriage through Khula, you can do so legally under the
              Muslim Family Laws Ordinance 1961. The process allows you to
              appoint a lawyer in Pakistan who can file and manage your Khula
              petition without requiring your personal presence.
            </p>
          </div>
        </div>
      </section>

      <div className="body">
        <div className="content-container">
          <section>
            <div className="heading">
              <hr />
              <h1>Khula Procedure for Overseas Pakistanis</h1>
              <hr />
            </div>
            <ul style={{ padding: "1rem 0rem", margin: "0rem 0" }}>
              <li style={{ listStyle: "none" }}>
                <h2>Appointing a Lawyer in Pakistan</h2>
                <ul style={{ margin: "0rem 1rem" }}>
                  <li>
                    Prepare a Special Power of Attorney (SPA) authorizing a
                    lawyer to represent you.
                  </li>
                  <li>
                    The SPA must be attested by the Pakistani Embassy or
                    Consulate in your country of residence.
                  </li>
                  <li>
                    Send the original attested SPA to Pakistan for legal use.
                  </li>
                </ul>
              </li>

              <li style={{ listStyle: "none" }}>
                <h2>Filing the Khula Petition</h2>
                <ul style={{ margin: "0rem 1rem" }}>
                  <li>
                    Your lawyer files the Khula petition in the Family Court
                    where your husband resides or where the marriage was
                    registered.
                  </li>
                </ul>
              </li>

              <li style={{ listStyle: "none" }}>
                <h2>Notice to Husband & Reconciliation</h2>
                <ul style={{ margin: "0rem 1rem" }}>
                  <li>
                    The court issues notices to your husband and attempts
                    reconciliation.
                  </li>
                  <li>
                    If reconciliation fails, the court proceeds with Khula.
                  </li>
                </ul>
              </li>

              <li style={{ listStyle: "none" }}>
                <h2>Khula Decree & Union Council Process</h2>
                <ul style={{ margin: "0rem 1rem" }}>
                  <li>
                    Upon granting Khula, the court issues a decree of
                    dissolution.
                  </li>
                  <li>
                    The decree is sent to the Union Council for further legal
                    processing.
                  </li>
                </ul>
              </li>

              <li style={{ listStyle: "none" }}>
                <h2>Issuance of NADRA Divorce Certificate</h2>
                <ul style={{ margin: "0rem 1rem" }}>
                  <li>
                    After a 90-day waiting period, the Union Council issues a
                    NADRA Divorce Certificate.
                  </li>
                  <li>
                    This certificate is legally valid in Pakistan and abroad.
                  </li>
                </ul>
              </li>
            </ul>
          </section>

          <section
            style={{
              background: "#f0f7ff",
              borderLeft: "4px solid #000000ff",
              borderRadius: "10px",
              fontFamily: "system-ui,Segoe UI,Roboto,Arial",
              marginBottom: "20px",
            }}
          >
            <div className="heading" style={{ marginBottom: "8px" }}>
              <hr
                style={{
                  border: "none",
                  borderTop: "1px solid #0b63d6",
                  margin: "6px 0",
                }}
              />
              <h1
                style={{
                  margin: "0",
                  fontSize: "1.2rem",
                  color: "#ffffffff",
                }}
              >
                Important Notes
              </h1>
              <hr
                style={{
                  border: "none",
                  borderTop: "1px solid #0b63d6",
                  margin: "6px 0",
                }}
              />
            </div>
            <ul style={{ paddingLeft: "10px", margin: 0 }}>
              <li>
                All documents from abroad must be attested by the Pakistani
                Embassy/Consulate.
              </li>
              <li>
                An experienced family lawyer in Pakistan ensures smooth handling
                of legal steps and compliance with court procedures.
              </li>
            </ul>
          </section>

          <div
            style={{
              maxWidth: "900px",
              margin: "0 auto",
              padding: "12px",
            }}
          >
            <img
              src="khulacon.avif"
              alt="Khula legal process"
              loading="lazy"
              decoding="async"
              style={{
                display: "block",
                width: "100%",
                height: "auto",
                borderRadius: "12px",
              }}
            />
          </div>

          <section
            style={{
              background: "#f0f7ff",
              borderLeft: "4px solid #0b63d6",
              borderRadius: "10px",
              fontFamily: "system-ui,Segoe UI,Roboto,Arial",
            }}
          >
            <p
              style={{
                marginLeft: "6px",
                fontWeight: 600,
                color: "#0b63d6",
              }}
            >
              Legal Tip
            </p>
            <p
              style={{
                marginLeft: "6px",
                color: "#333",
              }}
            >
              Hiring a qualified family lawyer in Pakistan is highly recommended
              to avoid mistakes, speed up the process, and ensure full legal
              compliance.
            </p>
          </section>
        </div>
      </div>
          <FAQs
            faqs={[
              {
                question: "Can I file for Khula from abroad?",
                answer:
                  "Yes. You can appoint a lawyer in Pakistan through a Special Power of Attorney attested by the Pakistani Embassy or Consulate.",
              },
              {
                question: "Where will my Khula case be filed?",
                answer:
                  "In the Family Court where your husband resides or where the marriage was registered.",
              },
              {
                question: "What happens if my husband is abroad?",
                answer:
                  "The court will send notices through his last known address, the embassy, or newspaper publication.",
              },
              {
                question: "Do I have to return Haq Mehr?",
                answer:
                  "Usually, yes. In most Khula cases, the wife returns the Haq Mehr or agreed compensation.",
              },
              {
                question: "How long does the Khula process take?",
                answer:
                  "It depends on the court schedule, but typically 3–6 months including the 90-day Union Council period.",
              },
              {
                question: "Is the NADRA Divorce Certificate valid internationally?",
                answer:
                  "Yes. It is legally recognized abroad, but may require attestation for official use.",
              },
              {
                question: "Do overseas documents require attestation?",
                answer:
                  "Yes, all documents sent from abroad must be attested by the Pakistani Embassy or Consulate.",
              },
              {
                question: "Is hiring a lawyer necessary?",
                answer:
                  "While not mandatory, it is highly recommended for efficiency, compliance, and avoiding delays.",
              },
            ]}
          />

      <Review />
      <Footer />
    </>
  );
}

export default Khula;
