
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Review from "../components/Review";
import Footer from "../components/Footer";
import "./oversea.css";
import ContactButtons from "../components/ContactButtons";


function Oversea() {
  return (
    <>
      <ContactButtons />
      <header className="oversea">
        <Navigation />
        <div className="divorce-content">
          <h1 style={{ padding: "1rem 0" }}>
            DIVORCE PROCEDURE FOR OVERSEAS PAKISTANIS
          </h1>
          <p style={{ lineHeight: "1.5", paddingBottom: "5rem" }}>
            The divorce procedure for overseas Pakistanis requires filing a
            divorce notice with the relevant Union Council or arbitration court
            in Pakistan, either in person or through a legal representative. The
            Union Council issues notices to both parties and proceeds with
            arbitration, and if reconciliation fails, a divorce certificate is
            issued after a mandatory waiting period of 90 days.
          </p>
        </div>
      </header>
      <Hero />
      <section className="about">
        <div className="heading">
          <hr />
          <h1>Divorce for Overseas Pakistanis</h1>
          <hr />
        </div>
        <div className="oversea-content-container">
          <div className="oversea-content">
            <h2>At Hassan Practice Law</h2>
            <p>
              If you are a Pakistani citizen living abroad and wish to initiate
              a divorce in Pakistan, the law allows you to do so without being
              physically present in the country. Under the Muslim Family Laws
              Ordinance 1961, the process can be completed through a legal
              representative by granting a Special Power of Attorney.
            </p>
          </div>
        </div>
      </section>
      <div className="body">
        <div className="content-container">
          <section>
            <div className="heading">
              <hr />
              <h1>How Overseas Pakistanis Can Get a Divorce in Pakistan?</h1>
              <hr />
            </div>
            <ul style={{ padding: "0rem 0rem", margin: "0rem 0" }}>
              <li style={{ listStyle: "none" }}>
                <h2 style={{ whiteSpace: "nowrap" }}>
                  Appointing a Representative
                </h2>{" "}
                <ul style={{ margin: "0rem 0.5rem" }}>
                  <li>
                    The husband must authorize a representative in Pakistan
                    using a Special Power of Attorney.
                  </li>
                  <li>
                    This document must be attested by the Pakistani Embassy or
                    Consulate in the country of residence.
                  </li>
                  <li>
                    The authorized representative will act on your behalf to
                    initiate the divorce process.
                  </li>
                </ul>
              </li>
              <li>
                <h2 style={{ whiteSpace: "nowrap" }}>
                  Submitting Divorce Notice
                </h2>
                <ul style={{ margin: "0rem 0.5rem" }}>
                  <li>
                    The representative will submit a written notice of divorce
                    to the Chairman Union Council or Arbitration Council in the
                    area where the marriage was registered.
                  </li>
                </ul>
              </li>
              <li style={{ listStyle: "none" }}>
                <h2 style={{ whiteSpace: "nowrap" }}>
                  Summons and Reconciliation Attempts
                </h2>
                <ul style={{ margin: "0rem 0.5rem" }}>
                  <li>
                    After receiving the notice, the Union Council will send
                    summons to both parties.
                  </li>
                  <li>
                    Reconciliation proceedings will be conducted in accordance
                    with the law.
                  </li>
                </ul>
              </li>
              <li style={{ listStyle: "none" }}>
                <h2 style={{ whiteSpace: "nowrap" }}>90-Day Waiting Period</h2>
                <ul style={{ margin: "0rem 0.5rem" }}>
                  <li>
                    The divorce process includes a mandatory 90-day waiting
                    period from the date of notice.
                  </li>
                  <li>
                    If reconciliation fails within this period, the divorce will
                    be considered final and effective.
                  </li>
                </ul>
              </li>

              <li style={{ listStyle: "none" }}>
                <h2 style={{ whiteSpace: "nowrap" }}>
                  Issuance of NADRA Divorce Certificate
                </h2>
                <ul style={{ margin: "0rem 0.5rem" }}>
                  <li>
                    After the 90 days, the Union Council will issue a NADRA
                    Divorce Certificate.
                  </li>
                  <li>
                    This certificate is legally valid for official use both in
                    Pakistan and abroad.
                  </li>
                </ul>
              </li>
            </ul>
          </section>
          <section
            style={{
              background: "#f0f7ff",
              borderLeft: "4px solid #000000ff",
              padding: "12px 14px",
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
                  margin: "6px",
                }}
              />
              <h1
                style={{ margin: "0", fontSize: "1.2rem", color: "#ffffffff" }}
              >
                Important Notes
              </h1>
              <hr
                style={{
                  border: "none",
                  borderTop: "1px solid #0b63d6",
                  margin: "6px",
                }}
              />
            </div>

            <ul style={{ paddingLeft: "20px", margin: 0 }}>
              <li>
                All documents sent from abroad must be properly attested by the
                Pakistani Embassy/Consulate.
              </li>
              <li>
                A family lawyer experienced in overseas divorce cases can ensure
                smooth handling of legal paperwork and communication with the
                Union Council.
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
              src="lawoversea.avif"
              alt="Describe the image"
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

          <section>
            <div
              style={{
                background: "#f0f7ff",
                borderLeft: "4px solid #0b63d6",
                padding: "12px 14px",
                borderRadius: "10px",
                fontFamily: "system-ui,Segoe UI,Roboto,Arial",
              }}
            >
              <p
                style={{
                  margin: "6px",
                  fontWeight: 600,
                  color: "#0b63d6",
                }}
              >
                Legal Tip
              </p>
              <p
                style={{
                  margin: "6px",
                  color: "#333",
                }}
              >
                Hiring a qualified family lawyer in Pakistan is highly
                recommended to avoid procedural mistakes, speed up the process,
                and ensure compliance with all legal requirements.
              </p>
            </div>
          </section>
        </div>
      </div>

      <Review />
      <Footer />
    </>
  );
}

export default Oversea;
