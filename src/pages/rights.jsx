import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Review from "../components/Review";
import Footer from "../components/Footer";
import "./rights.css";
import ContactButtons from "../components/ContactButtons";
import FAQs from "../components/FAQs";

function Rights() {
  return (
    <>
      <ContactButtons />
      <div>
        <header className="rights">
          <Navigation />
          <div className="rights-content">
            <h1 style={{ padding: "1rem 0" }}>Women's Rights in Pakistan</h1>
            <p style={{ lineHeight: "1.5", paddingBottom: "5rem" }}>
              Women’s rights in Pakistan are guaranteed under the{" "}
              <strong>Constitution of Pakistan</strong>,{" "}
              <strong>Islamic law (Shariah)</strong>, and{" "}
              <strong>statutory legislation</strong>. These include rights to
              education, rights, employment, health, political participation,
              protection from violence, equality before law, and family rights.
            </p>
          </div>
        </header>
      </div>

      <Hero />

      <div className="rights-intro">
        <h1>Women’s Rights in Pakistan – Legal Overview</h1>

        <h2>1. Right to Education</h2>
        <p>
          The <strong>Constitution of Pakistan (Article 25-A)</strong> makes
          education free and compulsory for all children aged 5–16. Article
          37(b) directs the State to remove illiteracy. Women cannot be denied
          admission to schools or universities on the basis of gender.
        </p>

        <h2>2. Right to Independence & Equality</h2>
        <p>
          <strong>Article 25(1)</strong> ensures equality before law, while
          <strong> Article 25(2)</strong> prohibits discrimination based on sex.
          Women have independent rights to CNIC, passports, bank accounts, and
          free choice in marriage and profession.
        </p>

        <h2>3. Right to rights & Inheritance</h2>
        <p>
          Women inherit as daughters, wives, mothers, and sisters under Islamic
          law and Pakistani statutes:
        </p>
        <ul>
          <li>
            <strong>Constitution (Article 23):</strong> Every citizen has the
            right to acquire and dispose of rights.
          </li>
          <li>
            <strong>Daughters:</strong> Half the share of a son. If no sons,
            daughters get half (one) or two-thirds (two or more).
          </li>
          <li>
            <strong>Wife:</strong> 1/8 if children exist, 1/4 if no children.
          </li>
          <li>
            <strong>Enforcement of Women’s rights Rights Act, 2020:</strong>{" "}
            Provides speedy recovery of denied rights through Ombudsperson.
          </li>
        </ul>

        <h2>4. Right to Employment & Equal Pay</h2>
        <p>
          <strong>Article 18</strong> gives every citizen the right to enter a
          lawful profession. <strong>Article 27</strong> safeguards against
          discrimination in services. Labour laws guarantee maternity leave and
          the principle of equal pay for equal work.
        </p>

        <h2>5. Right to Health & Reproductive Care</h2>
        <p>
          <strong>Article 38(d)</strong> obligates the State to provide basic
          necessities including health. Women are entitled to maternal care,
          reproductive health, and family planning services. Abortion is
          regulated under Section 338 PPC (permitted to save the mother’s life
          or necessary treatment).
        </p>

        <h2>6. Right to Political Participation</h2>
        <p>
          <strong>Article 34</strong> guarantees women’s participation in all
          spheres of national life. Reserved seats exist in{" "}
          <strong>National Assembly (60 seats)</strong> and{" "}
          <strong>Senate (17 seats)</strong>. Women can vote, contest elections,
          and hold office.
        </p>

        <h2>7. Right to Protection from Violence</h2>
        <ul>
          <li>
            <strong>Protection Against Harassment at Workplace Act, 2010</strong>
          </li>
          <li>
            <strong>Domestic Violence Acts (2012 onwards)</strong> in different
            provinces
          </li>
          <li>
            <strong>Prevention of Anti-Women Practices Act, 2011</strong> –
            criminalizes forced marriages, depriving inheritance
          </li>
          <li>
            <strong>Acid Control & Acid Crime Prevention Act, 2011</strong>
          </li>
          <li>
            <strong>Criminal Law (Amendment), 2016</strong> – recognizes honor
            killings as murder
          </li>
        </ul>

        <h2>8. Right to Equality Before Law</h2>
        <p>
          <strong>Article 4</strong> gives every citizen inalienable rights to
          be treated according to law. Women can sue, be sued, own rights,
          testify in court, and enter contracts independently.
        </p>

        <h2>9. Right to Marriage & Family Life</h2>
        <ul>
          <li>
            <strong>Muslim Family Laws Ordinance, 1961:</strong> Marriage
            registration is mandatory, women can seek{" "}
            <strong>Khula (judicial divorce)</strong>, and are entitled to
            dower, maintenance, and child custody.
          </li>
          <li>
            <strong>Section 498A PPC:</strong> Declares forced marriage illegal.
          </li>
          <li>
            Christian and Hindu Marriage Acts protect minority women’s rights.
          </li>
        </ul>

        <h2>10. Right to Social & Economic Participation</h2>
        <p>
          Women can join unions, NGOs, and own businesses. Programs like{" "}
          <strong>BISP</strong> and <strong>Ehsaas</strong> focus on women’s
          economic empowerment. They can access loans, microfinance, and land
          ownership.
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
              question: "Do women have equal rights rights in Pakistan?",
              answer:
                "Yes. Women inherit as per Islamic law and statutory protections like the Women’s rights Rights Act 2020.",
            },
            {
              question: "Can women work in any profession?",
              answer:
                "Yes. Under Article 18 and 27, women have the right to work in any lawful profession and cannot be discriminated against.",
            },
            {
              question: "What laws protect women from violence?",
              answer:
                "Laws such as the Domestic Violence Acts, Workplace Harassment Act 2010, and Acid Control Act provide protection.",
            },
            {
              question: "Can a woman seek divorce in Pakistan?",
              answer:
                "Yes. Under the Muslim Family Laws Ordinance, a woman can seek Khula (judicial divorce) and claim maintenance and custody rights.",
            },
          ]}
        />

      <Review />
      <Footer />
    </>
  );
}

export default Rights;
