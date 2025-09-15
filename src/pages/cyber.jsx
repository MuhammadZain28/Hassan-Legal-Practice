import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Review from "../components/Review";
import Footer from "../components/Footer";
import "./cyber.css";
import FAQs from "../components/FAQs";
import ContactButtons from "../components/ContactButtons";

function Cyber() {
  return (
    <>
      <ContactButtons />
      <div>
        <header className="cyber">
          <Navigation />
          <div className="cyber-content">
            <h1 style={{ padding: "1rem 0" }}>Women's cyber in Pakistan</h1>
            <p style={{ lineHeight: "1.5", paddingBottom: "5rem" }}>
              Women’s cyber in Pakistan are safeguarded under the{" "}
              <strong>Constitution of Pakistan</strong>,{" "}
              <strong>Islamic law (Shariah)</strong>, and{" "}
              <strong>statutory legislation</strong>. These include cyber to
              education, property and inheritance, employment, health, political
              participation, equality before law, protection from violence, and
              family cyber.
            </p>
          </div>
        </header>
      </div>

      <Hero />

      <div className="cyber-intro">
        <h1>Women’s cyber in Pakistan – Legal Overview</h1>

        <h2>1. Right to Education</h2>
        <p>
          The <strong>Constitution of Pakistan (Article 25-A)</strong> makes
          education free and compulsory for all children aged 5–16 years.
          <strong> Article 37(b)</strong> directs the State to remove illiteracy
          and provide equal access to higher education. Women cannot legally be
          denied admission to schools, colleges, or universities because of
          gender.
        </p>

        <h2>2. Right to Independence & Equality</h2>
        <p>
          <strong>Article 25(1)</strong> guarantees equality of all citizens
          before the law. <strong>Article 25(2)</strong> prohibits any
          discrimination based on sex. Women are entitled to their own{" "}
          <strong>CNICs, passports, bank accounts</strong>, property ownership,
          choice in marriage, freedom of profession, and participation in public
          life.
        </p>
        <section style={{ padding: "1rem", display: "flex", justifyContent: "center" }}>
  <img
    src="/cyberc.webp"
    alt="Talaq Image"
    style={{ maxWidth: "80%", height: "70%", borderRadius: "8px" }}
  />
</section>
        <h2>3. Right to Property & Inheritance</h2>
        <p>
          Women inherit as daughters, wives, mothers, and sisters under{" "}
          <strong>Islamic law</strong> and <strong>Pakistani statutes</strong>:
        </p>
        <ul>
          <li>
            <strong>Constitution (Article 23):</strong> Every citizen has the
            right to acquire, own, and dispose of property.
          </li>
          <li>
            <strong>Daughters:</strong> Receive half the share of a son. If no
            son exists, one daughter inherits half, and two or more inherit
            two-thirds collectively.
          </li>
          <li>
            <strong>Wife:</strong> Inherits 1/8 if children exist, 1/4 if no
            children.
          </li>
          <li>
            <strong>Enforcement of Women’s Property cyber Act, 2020:</strong>{" "}
            Provides speedy recovery of denied inheritance through Ombudsperson.
          </li>
        </ul>

        <h2>4. Right to Employment & Equal Pay</h2>
        <p>
          <strong>Article 18</strong> grants every citizen the right to enter
          any lawful profession. <strong>Article 27</strong> protects women from
          discrimination in services. Labour laws ensure{" "}
          <strong>equal pay for equal work</strong>, paid maternity leave, and
          workplace protection.
        </p>

        <h2>5. Right to Health & Reproductive Care</h2>
        <p>
          <strong>Article 38(d)</strong> obligates the State to provide basic
          necessities including medical care. Women have cyber to maternal and
          reproductive health, family planning services, and hospital treatment.
          <strong> Section 338 PPC</strong> regulates abortion—allowed when
          necessary to save the woman’s life or for essential treatment.
        </p>

        <h2>6. Right to Political Participation</h2>
        <p>
          <strong>Article 34</strong> ensures women’s participation in national
          life. Reserved seats are allocated in{" "}
          <strong>National Assembly (60 seats)</strong> and{" "}
          <strong>Senate (17 seats)</strong>. Women have full cyber to{" "}
          <strong>vote, contest elections, and hold office</strong>.
        </p>

        <h2>7. Right to Protection from Violence</h2>
        <ul>
          <li>
            <strong>
              Protection Against Harassment at Workplace Act, 2010
            </strong>
          </li>
          <li>
            <strong>Domestic Violence Acts (2012 onwards)</strong> – in all
            provinces
          </li>
          <li>
            <strong>Prevention of Anti-Women Practices Act, 2011</strong> –
            criminalizes forced marriages, denying inheritance, and exchange
            marriages (Vani/Swara)
          </li>
          <li>
            <strong>Acid Control & Acid Crime Prevention Act, 2011</strong>
          </li>
          <li>
            <strong>Criminal Law (Amendment), 2016</strong> – treats honor
            killings as murder
          </li>
        </ul>

        <h2>8. Right to Equality Before Law</h2>
        <p>
          <strong>Article 4</strong> guarantees every citizen the right to be
          treated in accordance with law. Women can{" "}
          <strong>
            sue, be sued, own property, sign contracts, and testify in courts
          </strong>{" "}
          without needing male guardianship.
        </p>

        <h2>9. Right to Marriage & Family Life</h2>
        <ul>
          <li>
            <strong>Muslim Family Laws Ordinance, 1961:</strong> Marriage
            registration is mandatory. Women can seek{" "}
            <strong>Khula (judicial divorce)</strong>, and claim{" "}
            <strong>dower, maintenance, and custody of children</strong>.
          </li>
          <li>
            <strong>Section 498A PPC:</strong> Declares forced marriage a crime.
          </li>
          <li>
            <strong>Christian & Hindu Marriage Acts:</strong> Protect minority
            women’s marriage cyber.
          </li>
        </ul>

        <h2>10. Right to Social & Economic Participation</h2>
        <p>
          Women can own businesses, join trade unions, and participate in NGOs
          and civil society. Programs like <strong>BISP</strong> and{" "}
          <strong>Ehsaas</strong> empower women financially by providing
          stipends, loans, and microfinance opportunities.
        </p>
      </div>

      <FAQs
        faqs={[
          {
            question: "Can girls be denied education in Pakistan?",
            answer:
              "No. Under Article 25-A, education is a fundamental right for all children, including girls, from ages 5–16.",
          },
          {
            question: "Do women have equal inheritance cyber in Pakistan?",
            answer:
              "Yes. Women inherit under Islamic law as daughters, wives, mothers, and sisters. The Women’s Property cyber Act 2020 enforces speedy recovery of denied shares.",
          },
          {
            question: "Can women work in any profession?",
            answer:
              "Yes. Articles 18 and 27 allow women to work in any lawful profession. Discrimination is prohibited, and equal pay is legally required.",
          },
          {
            question: "What laws protect women from violence?",
            answer:
              "Laws such as the Domestic Violence Acts, Workplace Harassment Act 2010, Acid Control Act 2011, and Criminal Law Amendments protect women from abuse.",
          },
          {
            question: "Can a woman seek divorce in Pakistan?",
            answer:
              "Yes. Under the Muslim Family Laws Ordinance 1961, a woman can seek Khula (judicial divorce) and claim maintenance, custody cyber, and dower.",
          },
        ]}
      />

      <Review />
      <Footer />
    </>
  );
}

export default Cyber;
