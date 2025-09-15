import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Review from "../components/Review";
import Footer from "../components/Footer";
import "./marriage.css";
import ContactButtons from "../components/ContactButtons";
import FAQs from "../components/FAQs";

function Marriage() {
  return (
    <>
      <ContactButtons />
      <div>
        <header className="marriage">
          <Navigation />
          <div className="marriage-content">
            <h1 style={{ padding: "1rem 0" }}>
              Marriage Registration Law in Pakistan
            </h1>
            <p style={{ lineHeight: "1.5", paddingBottom: "5rem" }}>
              In Pakistan, marriage registration is both a legal and religious
              requirement. Under Islamic law (Shariah), marriage (Nikah) is a
              sacred contract, and under Pakistani statutory law, it must be
              registered with the Union Council or a government-authorized Nikah
              Registrar.
            </p>
          </div>
        </header>
      </div>

      <Hero />

      <section>
        <div className="marriage-intro">
          <h1>
            Marriage Registration Law in Pakistan Complete Guide (Online &
            Offline)
          </h1>

          <h2>1. Introduction</h2>
          <p>
            In Pakistan, marriage registration is both a legal and religious
            requirement. Under Islamic law (Shariah), marriage (Nikah) is a
            sacred contract, and under Pakistani statutory law, it must be
            registered with the Union Council or a government-authorized Nikah
            Registrar.
          </p>
          <p>
            A registered marriage ensures that the relationship is legally
            recognized, protects the rights of both husband and wife, and
            provides an official record for future legal, social, and financial
            matters. Without proper registration, couples may face serious
            complications in visa processing, property inheritance, divorce, and
            custody disputes.
          </p>

          <h2>2. Legal Basis of Marriage Registration</h2>
          <p>
            Marriage registration in Pakistan is primarily governed by the
            Muslim Family Laws Ordinance, 1961.
          </p>
          <ul>
            <li>
              Every Muslim marriage must be recorded in the{" "}
              <strong>Nikahnama</strong> and registered with the Union Council
              through a licensed Nikah Registrar.
            </li>
            <li>
              The Nikah Registrar has a legal duty to submit the marriage record
              to the Union Council.
            </li>
            <li>
              A fine (up to PKR 1,000) can be imposed if the marriage is not
              registered properly.
            </li>
            <li>
              The <strong>Nikahnama</strong> (Marriage Contract Form) is
              considered the primary legal proof of marriage in Pakistan,
              recognized by courts and government institutions.
            </li>
          </ul>

          <h2>3. Offline Marriage Registration Process</h2>
          <h3>Step 1 – Nikah Ceremony</h3>
          <p>
            Conducted by a Nikah Khawan (religious officiant). The Nikahnama is
            filled with personal details of the bride, groom, parents,
            witnesses, and mehr (dowry).
          </p>

          <h3>Step 2 – Signatures</h3>
          <p>
            Bride and groom must sign the Nikahnama along with two adult Muslim
            witnesses. Thumb impressions are also taken for authenticity.
          </p>

          <h3>Step 3 – Submission to Union Council</h3>
          <p>
            The Nikah Registrar submits the signed Nikahnama to the Union
            Council office.
          </p>

          <h3>Step 4 – Issuance of Marriage Certificate</h3>
          <p>
            The Union Council issues an official computerized marriage
            certificate (Urdu & English versions available). <br />{" "}
            <strong>Timeframe:</strong> 2–5 working days.
          </p>

          <h2>4. Online Marriage Registration in Pakistan</h2>
          <p>
            With digital services expanding, online registration is now possible
            in major cities like Lahore, Karachi, and Islamabad.
          </p>
          <ol>
            <li>
              <strong>Visit the Official Portal</strong> <br /> Lahore: Lahore
              City Government e-Services <br /> Karachi: Sindh Local Government
              Portal <br /> Islamabad: Capital Development Authority e-Services
            </li>
            <li>
              <strong>Fill Online Form</strong> – Enter CNIC numbers of bride,
              groom, and witnesses. Provide Nikahnama details.
            </li>
            <li>
              <strong>Upload Required Documents</strong> – Scanned copies of
              CNICs (bride, groom, witnesses), passport-size photos, signed
              Nikahnama scanned copy.
            </li>
            <li>
              <strong>Pay Fee Online</strong> – Payment through e-banking,
              mobile wallets, or bank challan.
            </li>
            <li>
              <strong>Verification & Certificate Issuance</strong> – After
              verification, a digital certificate is issued via email/download.
              A physical copy can be collected from the Union Council office.
            </li>
          </ol>

          <h2>5. Required Documents for Marriage Registration</h2>
          <ul>
            <li>CNIC (original + copies) of bride and groom</li>
            <li>CNIC copies of 2 witnesses</li>
            <li>Signed Nikahnama</li>
            <li>Passport-size photographs</li>
            <li>Power of Attorney (if groom or bride is abroad)</li>
          </ul>

          <h2>6. Importance of Marriage Registration</h2>
          <ul>
            <li>Provides legal proof of marriage in Pakistani courts.</li>
            <li>
              Required for immigration, visas, passports, and embassy
              verifications.
            </li>
            <li>
              Necessary for inheritance, property rights, and custody cases.
            </li>
            <li>Protects against fraudulent claims of marriage.</li>
            <li>
              Strengthens women’s legal rights in divorce, maintenance, and
              inheritance matters.
            </li>
          </ul>

          <h2>7. Penalties for Non-Registration</h2>
          <ul>
            <li>Fine up to PKR 1,000 for the Nikah Registrar.</li>
            <li>
              Marriage disputes may arise if the Nikahnama is not officially
              recorded.
            </li>
            <li>
              Immigration and legal processes (like divorce or custody) may be
              rejected due to lack of a registered certificate.
            </li>
          </ul>
        </div>
      </section>

      <FAQs
        faqs={[
          {
            question: "What is the marriage registration fee in Pakistan?",
            answer:
              "The fee varies by Union Council, usually between PKR 500 – 1,000.",
          },
          {
            question: "Can I register my Nikah online?",
            answer:
              "Yes. Online marriage registration is available in major cities like Lahore, Karachi, and Islamabad through official e-service portals.",
          },
          {
            question: "Is online marriage registration legal in Pakistan?",
            answer:
              "Yes. If the Nikah fulfills Islamic requirements and is recorded with the Union Council, online registration is legally valid.",
          },
          {
            question: "How long does it take to get a marriage certificate?",
            answer:
              "Normally 2–5 working days after submission of documents and verification.",
          },
          {
            question: "Can a marriage be registered without the groom present?",
            answer:
              "Yes, but only if a legally valid Power of Attorney is provided by the groom.",
          },
          {
            question: "Is a Nikah without registration valid in Islam?",
            answer:
              "Islamically, a Nikah with witnesses and consent is valid. However, without legal registration it has no official recognition in Pakistan’s statutory law.",
          },
        ]}
      />

      <Review />
      <Footer />
    </>
  );
}

export default Marriage;
