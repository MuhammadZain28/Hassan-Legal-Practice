import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Review from "../components/Review";
import Footer from "../components/Footer";
import "./wifemaintenance.css";
import FAQs from "../components/FAQs";
import ContactButtons from "../components/ContactButtons";

function Maintenance() {
  return (
    <>
      <ContactButtons />
      <div>
        <header className="maintenance">
          <Navigation />
          <div className="maintenance-content">
            <h1 style={{ padding: "1rem 0" }}>
              Wife Maintenance Law in Pakistan
            </h1>
            <p style={{ lineHeight: "1.5", paddingBottom: "5rem" }}>
              Under the <strong>Constitution of Pakistan</strong>,{" "}
              <strong>Islamic law (Shariah)</strong>, and{" "}
              <strong>statutory legislation</strong>, a husband is legally
              responsible for providing <strong>maintenance (Nafaqa)</strong> to
              his wife. This includes food, clothing, shelter, medical care, and
              other necessities according to his financial status.
            </p>
          </div>
        </header>
      </div>

      <Hero />

      <div className="maintenance-intro">
        <h1>Wife’s Right to Maintenance – Legal Overview</h1>

        <h2>1. Islamic Foundation</h2>
        <p>
          The Quran (Surah Al-Baqarah 2:233) and Hadiths establish that a
          husband must provide <strong>nafaqah</strong> to his wife. Even if the
          wife is wealthy, the obligation remains upon the husband.
        </p>

        <h2>2. Constitutional Protection</h2>
        <p>
          <strong>Article 9</strong> protects the right to life and dignity.
          <strong> Article 38(d)</strong> obligates the State to provide basic
          necessities. These reinforce a woman’s legal right to financial
          support from her husband.
        </p>
        <section
          style={{ padding: "1rem", display: "flex", justifyContent: "center" }}
        >
          <img
            src="/wifemain.webp"
            alt="Talaq Image"
            style={{ maxWidth: "80%", height: "70%", borderRadius: "8px" }}
          />
        </section>
        <h2>3. Statutory Laws</h2>
        <ul>
          <li>
            <strong>Muslim Family Laws Ordinance, 1961 (MFLO):</strong> A wife
            may claim maintenance through the Family Court if denied.
          </li>
          <li>
            <strong>Family Courts Act, 1964:</strong> Provides a legal procedure
            for wives to file suits for maintenance.
          </li>
          <li>
            <strong>Dissolution of Muslim Marriages Act, 1939:</strong> A wife
            may seek divorce if maintenance is consistently withheld.
          </li>
        </ul>

        <h2>4. Scope of Maintenance</h2>
        <p>
          Maintenance covers all basic needs including{" "}
          <strong>
            food, clothing, shelter, medical expenses, and household essentials
          </strong>
          . Courts decide the standard of maintenance based on the husband’s
          financial capacity.
        </p>

        <h2>5. Duration of Maintenance</h2>
        <ul>
          <li>
            During the <strong>subsistence of marriage</strong> – the husband is
            bound to maintain his wife.
          </li>
          <li>
            After <strong>divorce</strong> – maintenance is due for the{" "}
            <strong>iddat period</strong>.
          </li>
          <li>
            For <strong>children</strong> – the father remains responsible until
            sons become adults and daughters get married.
          </li>
        </ul>

        <h2>6. Wife’s Right to Claim</h2>
        <p>
          If the husband neglects or refuses, the wife can file a{" "}
          <strong>Suit for Maintenance</strong> in Family Court. Courts can fix
          the maintenance amount and order monthly payments enforceable through
          law.
        </p>

        <h2>7. Grounds for Wife’s Maintenance</h2>
        <ul>
          <li>Husband’s refusal or neglect despite having means.</li>
          <li>
            Husband’s cruelty, desertion, or second marriage without just cause.
          </li>
          <li>Maintenance of minor children is always recoverable.</li>
        </ul>

        <h2>8. Enforcement of Maintenance Orders</h2>
        <p>
          Courts can order{" "}
          <strong>attachment of husband’s salary, property, or assets</strong>{" "}
          if he fails to comply. Non-payment may also lead to imprisonment under
          Family Court decrees.
        </p>
      </div>

      <FAQs
        faqs={[
          {
            question: "What does wife maintenance include?",
            answer:
              "It includes food, clothing, shelter, medical expenses, and other essentials according to the husband’s financial status.",
          },
          {
            question: "Can a wife claim maintenance in Pakistan?",
            answer:
              "Yes. Under MFLO 1961 and Family Courts Act 1964, a wife can file a suit in Family Court to claim maintenance.",
          },
          {
            question: "Is maintenance due after divorce?",
            answer:
              "Yes, but only for the iddat period. For children, the father remains responsible until adulthood (sons) or marriage (daughters).",
          },
          {
            question: "What if the husband refuses to pay?",
            answer:
              "The court can enforce maintenance through salary attachment, property seizure, or imprisonment of the husband.",
          },
          {
            question: "Can a wife seek divorce for non-maintenance?",
            answer:
              "Yes. Under the Dissolution of Muslim Marriages Act 1939, consistent refusal of maintenance is a ground for divorce.",
          },
        ]}
      />

      <Review />
      <Footer />
    </>
  );
}

export default Maintenance;
