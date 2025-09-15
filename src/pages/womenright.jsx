import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Review from "../components/Review";
import Footer from "../components/Footer";
import "./womenright.css";
import FAQs from "../components/FAQs";
import ContactButtons from "../components/ContactButtons";

function WomenRight() {
  return (
    <>
      <ContactButtons />
      <div>
        <header className="property">
          <Navigation />
          <div className="property-content">
            <h1 style={{ padding: "1rem 0" }}>
              Women's property Rights in Pakistan
            </h1>
            <p style={{ lineHeight: "1.5", paddingBottom: "5rem" }}>
              Under Islamic law and Pakistani legislation, women are entitled to
              inherit property as daughters, wives, mothers, and sisters.
              Despite clear legal rights, many women are deprived due to social
              pressure and lack of awareness.
            </p>
          </div>
        </header>
      </div>

      <Hero />

      <div className="wproperty-intro">
        <h1>property Rights of Women in Pakistan</h1>

        <h2>1. Introduction</h2>
        <p>
          In Pakistan, women’s property rights are protected under both
          <strong> Islamic law (Shariah)</strong> and{" "}
          <strong>Pakistani statutory law</strong>. Islam ensures that women —
          whether as daughters, wives, mothers, or sisters — are entitled to a
          fixed share in inheritance. The Holy Qur’an explicitly prescribes
          inheritance shares, making these rights a matter of faith as well as
          law.
        </p>
        <p>
          Despite these protections, many women in Pakistan are denied their
          lawful rights due to social pressure, lack of awareness, or unlawful
          interference by male relatives. In many cases, women are forced to
          sign away their shares or are excluded from inheritance altogether.
        </p>
        <p>
          This guide explains in detail the legal framework, rights of daughters
          and wives, enforcement mechanisms, and practical steps women can take
          to claim their property in Pakistan.
        </p>
        <section
          style={{ padding: "1rem", display: "flex", justifyContent: "center" }}
        >
          <img
            src="/womenr.webp"
            alt="Talaq Image"
            style={{ maxWidth: "80%", height: "70%", borderRadius: "8px" }}
          />
        </section>
        <h2>2. Legal Framework for Women’s Property Rights</h2>
        <ul>
          <li>
            <strong>Islamic Inheritance Law (Shariah):</strong>
            <br /> The Qur’an (Surah An-Nisa, verses 7, 11, 12, and 176)
            explicitly defines inheritance shares for daughters, wives, mothers,
            and sisters. These rules form the foundation of Pakistan’s
            inheritance system.
          </li>
          <li>
            <strong>Constitution of Pakistan:</strong>
            <br /> Article 23: Every citizen has the right to acquire, hold, and
            dispose of property.
            <br /> Article 25: Ensures equality before law and prohibits
            discrimination on the basis of sex.
          </li>
          <li>
            <strong>Enforcement of Women’s property Rights Act, 2020:</strong>
            <br /> Protects women from illegal occupation and dispossession of
            their property. Provides a complaint mechanism through the
            Ombudsperson.
          </li>
          <li>
            <strong>Transfer of property Act, 1882:</strong>
            <br /> Governs property transfers, sales, gifts (hiba), and leases.
            Recognizes women as full owners of their property.
          </li>
          <li>
            <strong>Punjab Land Revenue Act & Other Provincial Laws:</strong>
            <br /> Deal with inheritance mutation, property partition, and land
            revenue procedures.
          </li>
        </ul>

        <h2>3. property Rights of Daughters</h2>
        <p>
          Under Islamic and Pakistani law, daughters are entitled to inherit
          from their parents:
        </p>
        <ul>
          <li>
            If both sons and daughters exist → Daughter gets half the share of a
            son.
          </li>
          <li>
            If only one daughter (no sons) → She gets half of the total estate.
          </li>
          <li>
            If two or more daughters (no sons) → They collectively receive
            two-thirds of the estate.
          </li>
          <li>
            If daughters and other relatives exist → Daughters receive their
            fixed share first.
          </li>
        </ul>
        <p>
          <strong>Key Protections:</strong>
        </p>
        <ul>
          <li>A daughter’s right cannot be waived by custom or tradition.</li>
          <li>Her share remains valid even after marriage.</li>
          <li>Any gift (hiba) during lifetime is separate from inheritance.</li>
          <li>Denying her share is un-Islamic and unlawful.</li>
        </ul>

        <h2>4. property Rights of Wives</h2>
        <p>
          A wife has rights both as an heir and as an independent property
          owner:
        </p>
        <ul>
          <li>
            <strong>Wife’s Share in Husband’s property:</strong>
            <br /> If husband leaves children → Wife inherits 1/8th (12.5%).
            <br /> If no children → Wife inherits 1/4th (25%).
          </li>
          <li>
            <strong>Wife’s Own property:</strong>
            <br /> She has full control over property gifted, inherited, or
            purchased in her own name. Husband cannot sell, mortgage, or
            transfer her property without consent.
          </li>
        </ul>

        <h2>5. Enforcement of Women’s property Rights Act, 2020</h2>
        <ul>
          <li>
            Women can file a complaint with the Ombudsperson of their province.
          </li>
          <li>Ombudsperson can order immediate recovery of property.</li>
          <li>Cases must be decided within 60 days.</li>
          <li>Illegal occupiers can face fines and imprisonment.</li>
          <li>
            The Act applies across Pakistan including ICT, Punjab, Sindh, KPK,
            and Balochistan.
          </li>
        </ul>

        <h2>6. How Women Can Claim property</h2>
        <p>
          <strong>Collect Required Documents:</strong>
        </p>
        <ul>
          <li>CNIC</li>
          <li>Death certificate of deceased</li>
          <li>property ownership documents (fard, registry, mutation)</li>
          <li>Family tree (issued by NADRA or Revenue Department)</li>
        </ul>
        <p>
          <strong>Legal Process:</strong>
        </p>
        <ul>
          <li>
            Apply for inheritance mutation (Intiqal) at Revenue Department /
            Land Record Office.
          </li>
          <li>File a Civil Court case if relatives deny share.</li>
          <li>
            File Ombudsperson complaint under 2020 Act for illegal
            dispossession.
          </li>
        </ul>

        <h2>7. Common Issues Faced by Women</h2>
        <ul>
          <li>Social pressure to surrender share to brothers.</li>
          <li>Fake documents or fraudulent transfers.</li>
          <li>Family disputes delaying property distribution for years.</li>
          <li>Being forced to sign blank papers during partition.</li>
          <li>Lack of awareness about the legal process.</li>
        </ul>

        <h2>8. Prevention & Legal Advice</h2>
        <ul>
          <li>Always register property in your own name.</li>
          <li>Never sign blank papers during distribution.</li>
          <li>Keep multiple certified copies of property documents.</li>
          <li>
            Consult a family/property lawyer before transfer or settlement.
          </li>
          <li>File legal proceedings immediately if denied rights.</li>
        </ul>

        <h2>10. How Our Law Firm Can Help</h2>
        <ul>
          <li>Legal advice on daughters’ and wives’ inheritance rights.</li>
          <li>Assistance with inheritance mutation (intiqal).</li>
          <li>Filing civil suits for recovery of property.</li>
          <li>
            Filing complaints under the 2020 Act against illegal dispossession.
          </li>
          <li>
            Drafting gift deeds, sale agreements, and property transfer
            documents.
          </li>
          <li>Representation in family and civil courts.</li>
        </ul>
      </div>

      <FAQs
        faqs={[
          {
            question: "Can women inherit property in Pakistan?",
            answer:
              "Yes. Under Islamic law and the Constitution of Pakistan, women have a clear and legally protected right to inherit property from parents, spouses, and children.",
          },
          {
            question: "What if a woman is denied her share of inheritance?",
            answer:
              "She can file a case in the civil courts or seek help from the Ombudsperson or Human Rights Ministry. The law provides legal remedies against denial.",
          },
          {
            question: "Do daughters inherit equally with sons?",
            answer:
              "Islamic law usually grants sons a larger share, but daughters must always receive their rightful portion as mandated by Shariah and Pakistani law.",
          },
          {
            question: "Can married women own property in Pakistan?",
            answer:
              "Yes. A married woman can independently buy, sell, and inherit property without her husband’s permission.",
          },
          {
            question:
              "What should I do if my family pressures me to give up my property rights?",
            answer:
              "Such coercion is illegal. Women can approach the court, Women Protection Centers, or consult a family lawyer for legal protection.",
          },
        ]}
      />
      <Review />
      <Footer />
    </>
  );
}
export default WomenRight;
