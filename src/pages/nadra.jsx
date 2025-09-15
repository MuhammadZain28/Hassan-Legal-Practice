import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Review from "../components/Review";
import Footer from "../components/Footer";
import "./oversea.css";
import "./nadra.css";
import FAQs from "../components/FAQs";
import ContactButtons from "../components/ContactButtons";

function Nadra() {
  return (
    <>
      <ContactButtons />
      <header className="oversea">
        <Navigation />
        <div className="divorce-content">
          <h1 style={{ padding: "1rem 0" }}>
            NADRA Divorce Certificate Procedure in Pakistan
          </h1>
          <p style={{ lineHeight: "1.5", paddingBottom: "5rem" }}>
            A NADRA Divorce Certificate is an official computerized document
            issued by the Union Council, Arbitration Council, or TMA Office
            based on the registration of divorce. It is recognized throughout
            Pakistan and internationally for legal purposes, including
            immigration, remarriage, and court matters.
          </p>
        </div>
      </header>
      <Hero />
      <div className="nadra-container">
        <h1>NADRA Divorce Certificate Procedure in Pakistan</h1>

        <p>
          A <strong>NADRA Divorce Certificate</strong> is an official
          computerized document issued by the <strong>Union Council</strong>,{" "}
          <strong>Arbitration Council</strong>, or <strong>TMA Office</strong>{" "}
          based on the registration of divorce. It is recognized throughout
          Pakistan and internationally for legal purposes, including
          immigration, remarriage, and court matters.
        </p>

        <h2>Step-by-Step Procedure</h2>

        <h3>1. Initiation of Divorce</h3>
        <ul>
          <li>
            The process starts when the husband pronounces{" "}
            <strong>Talaq</strong> (divorce) or when the wife obtains{" "}
            <strong>Khula</strong> (court decree of dissolution of marriage).
          </li>
          <li>
            A written <strong>divorce notice</strong> must be sent to the{" "}
            <strong>Union Council</strong> or Arbitration Council where the
            marriage was registered.
          </li>
        </ul>

        <h3>2. Notice to Union Council</h3>
        <ul>
          <li>
            The husband (or his lawyer) must submit a written{" "}
            <strong>Notice of Divorce</strong> along with a copy of the{" "}
            <strong>Nikahnama</strong> (marriage certificate).
          </li>
          <li>
            In case of <strong>Khula</strong>, the <strong>Family Court</strong>{" "}
            sends confirmation of the dissolution of marriage to the Union
            Council.
          </li>
        </ul>

        <h3>3. Formation of Arbitration/Reconciliation Council</h3>
        <ul>
          <li>The Union Council issues a notice to the wife.</li>
          <li>
            A <strong>90-day reconciliation period</strong> is provided.
          </li>
          <li>If reconciliation fails, the divorce is confirmed.</li>
        </ul>

        <h3>4. Issuance of Divorce Certificate</h3>
        <ul>
          <li>
            After the 90-day period, the Union Council formally{" "}
            <strong>registers the divorce</strong>.
          </li>
          <li>
            A <strong>NADRA Divorce Certificate</strong> (computerized) is
            issued to the applicant.
          </li>
        </ul>

        <h2>Required Documents</h2>
        <ul>
          <li>Copy of CNIC/NICOP/Passport of husband and wife.</li>
          <li>
            Copy of <strong>Nikahnama</strong> (marriage certificate).
          </li>
          <li>Written Divorce Deed / Court Khula Decree.</li>
          <li>Two passport-size photographs of husband and wife.</li>
          <li>Copy of Union Council divorce registration.</li>
          <li>Application form for NADRA Divorce Certificate.</li>
        </ul>

        <h2>Time Frame</h2>
        <p>
          The process typically takes <span className="highlight">90 days</span>{" "}
          (due to the mandatory reconciliation period). After completion, the
          certificate is usually issued within{" "}
          <strong>7–10 working days</strong>.
        </p>

        <h2>Legal Recognition</h2>
        <ul>
          <li>The certificate is recognized throughout Pakistan.</li>
          <li>
            For overseas Pakistanis, the certificate may need attestation from:
            <ul>
              <li>Ministry of Foreign Affairs (MOFA) Pakistan</li>
              <li>Relevant Embassy/Consulate</li>
            </ul>
          </li>
        </ul>

        <h2>Important Notes</h2>
        <ul>
          <li>
            <strong>Verbal divorce alone is not valid</strong> unless registered
            with the Union Council.
          </li>
          <li>
            Without this certificate, the divorce is not recognized by law.
          </li>
          <li>
            Overseas Pakistanis can obtain it through a{" "}
            <strong>Special Power of Attorney</strong>.
          </li>
        </ul>

        <div className="tip">
          👉 <strong>Legal Tip:</strong> Always ensure that the divorce is
          properly registered with the Union Council to avoid future legal or
          immigration complications. Hiring a family lawyer can simplify the
          process, especially for overseas Pakistanis.
        </div>
      </div>

      <FAQs
        faqs={[
          {
            question: "What is Khula for Overseas Pakistanis?",
            answer:
              "Khula is the legal right of a Muslim wife to seek dissolution of marriage through a Family Court in Pakistan, even without the husband’s consent. It is governed by the Dissolution of Muslim Marriages Act, 1939. An overseas wife can obtain Khula by appointing a lawyer in Pakistan through a Special Power of Attorney.",
          },
          {
            question:
              "How can an overseas Pakistani wife start the Khula process?",
            answer:
              "The wife must appoint a family lawyer or a family member in Pakistan via a Special Power of Attorney (SPA). This SPA must be attested by the Pakistani Embassy/Consulate in the country of residence and verified by the Ministry of Foreign Affairs in Pakistan.",
          },
          {
            question: "Where is the Khula petition filed?",
            answer:
              "The Khula petition is filed in the Family Court where the husband resides or where the marriage was registered. The lawyer will prepare and submit the petition on behalf of the wife.",
          },
          {
            question: "Is the husband notified during the Khula process?",
            answer:
              "Yes. The Family Court issues a notice to the husband. If the husband is abroad, notices may be served at his last known address in Pakistan, through public notice in newspapers, or via international courier.",
          },
          {
            question: "What happens during reconciliation proceedings?",
            answer:
              "The Family Court is legally bound to attempt reconciliation between the spouses. If reconciliation fails, the court proceeds with the Khula case.",
          },
          {
            question: "Does the wife need to return Haq Mehr (dower)?",
            answer:
              "In most cases, the court may require the wife to return the Haq Mehr received at the time of marriage. If it was unpaid or symbolic, the court may still finalize Khula without repayment.",
          },
          {
            question: "How is the Khula decree issued?",
            answer:
              "If the court is satisfied, it issues a Khula Decree officially dissolving the marriage. The decree is then sent to the Union Council for registration.",
          },
          {
            question: "How does the NADRA Divorce Certificate get issued?",
            answer:
              "After the Khula Decree, the Family Court informs the Union Council/Arbitration Council. The Union Council registers the divorce and issues a NADRA Divorce Certificate, which is valid both in Pakistan and abroad.",
          },
          {
            question: "Does the wife need to travel to Pakistan for Khula?",
            answer:
              "No. The wife does not need to physically appear in Pakistan if she has executed a valid Special Power of Attorney in favor of her lawyer or trusted family member.",
          },
          {
            question:
              "How long does the Khula process take for overseas Pakistanis?",
            answer:
              "On average, the Khula process takes 3–6 months depending on court workload and the husband’s response.",
          },
          {
            question:
              "Is Khula recognized internationally for overseas Pakistanis?",
            answer:
              "Yes. Once the NADRA Divorce Certificate is issued, it is legally valid. For use abroad, it may need additional attestation or legalization depending on the foreign country’s requirements.",
          },
        ]}
      />
      <Review />

      <Footer />
    </>
  );
}
export default Nadra;
