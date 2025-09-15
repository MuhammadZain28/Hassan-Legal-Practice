import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Review from "../components/Review";
import Footer from "../components/Footer";
import "./harassment.css";
import FAQs from "../components/FAQs";
import ContactButtons from "../components/ContactButtons";


function Harassment() {
  return (
    <>
      <ContactButtons />
      <div>
        <header className="harassment">
          <Navigation />
          <div className="harassment-content">
            <h1 style={{ padding: "1rem 0" }}>
              Workplace Harassment Against Women
            </h1>
            <p style={{ lineHeight: "1.5", paddingBottom: "5rem" }}>
              Workplace harassment is a serious concern in Pakistan, especially
              for women working in both public and private organizations. To
              safeguard women’s rights and dignity, the Protection Against
              Harassment of Women at the Workplace Act, 2010 was introduced.
            </p>
          </div>
        </header>

        <Hero />

        <section className="harassment-intro">
          <h2>⚖️ Introduction</h2>
          <p>
            Workplace harassment is a serious concern in Pakistan. To address
            this, the{" "}
            <strong>
              Protection Against Harassment of Women at the Workplace Act, 2010
            </strong>{" "}
            was introduced, ensuring a safe and respectful environment for all
            employees.
          </p>
        </section>

        <section className="harassment-intro">
          <h2>⚖️ What is Harassment?</h2>
          <ul>
            <li>Unwelcome sexual advances (verbal, physical, or written)</li>
            <li>Requests for sexual favors in exchange for job benefits</li>
            <li>Abusive, offensive, or threatening language</li>
            <li>Gestures or actions creating a hostile environment</li>
            <li>Online harassment (WhatsApp, email, social media)</li>
          </ul>
        </section>

        <section className="harassment-intro">
          <h2>👩 Who is Protected?</h2>
          <ul>
            <li>
              All female employees (permanent, contractual, temporary, interns)
            </li>
            <li>Students, volunteers, and domestic workers</li>
            <li>
              Men can also file complaints under workplace misconduct policies
            </li>
          </ul>
        </section>


        <section className="harassment-intro">
          <h2>🏢 Employer’s Responsibility</h2>
          <ul>
            <li>Adopt and display a code of conduct</li>
            <li>Form a 3-member Inquiry Committee (at least 1 woman)</li>
            <li>Provide complaint submission channels</li>
            <li>Conduct workplace harassment awareness sessions</li>
          </ul>
        </section>
        <section style={{ padding: "1rem", display: "flex", justifyContent: "center" }}>
  <img
    src="/workplaceh.webp"
    alt="Talaq Image"
    style={{ maxWidth: "80%", height: "70%", borderRadius: "8px" }}
  />
</section>

        <section className="harassment-intro">
          <h2>📝 Complaint Procedure</h2>
          <p>
            <strong>Step 1 – File Complaint:</strong> Submit in writing within
            30 days.
          </p>
          <p>
            <strong>Step 2 – Inquiry Process:</strong> Committee investigates
            within 30 days.
          </p>
          <p>
            <strong>Step 3 – Decision:</strong> Penalties may include apology,
            fine, demotion, or dismissal.
          </p>
        </section>
        

        <section className="harassment-intro">
          <h2>👩‍⚖️ Appeal to Ombudsperson</h2>
          <p>
            If dissatisfied, file an appeal within 30 days to the Federal or
            Provincial Ombudsperson. They may modify penalties or award
            compensation.
          </p>
        </section>

        <section className="harassment-intro">
          <h2>🚫 Protection for Complainants</h2>
          <ul>
            <li>No retaliation is allowed</li>
            <li>No wrongful transfer or demotion</li>
            <li>Confidentiality is ensured</li>
          </ul>
        </section>

          
            <FAQs
              faqs={[
                {
                  question: "Is verbal harassment punishable?",
                  answer:
                    "Yes. Verbal harassment, offensive jokes, and abusive language are covered under the Protection Against Harassment of Women at the Workplace Act, 2010.",
                },
                {
                  question: "Can harassment via WhatsApp or email be reported?",
                  answer:
                    "Yes. Digital harassment, including emails, WhatsApp messages, and social media, is included under the law.",
                },
                {
                  question: "How long do I have to file a complaint?",
                  answer:
                    "You must file a complaint within 30 days of the incident, though extensions can be granted in special cases.",
                },
                {
                  question:
                    "Can men file harassment complaints under this law?",
                  answer:
                    "Yes. Although the Act primarily addresses women’s protection, men may also file complaints under workplace misconduct policies.",
                },
                {
                  question: "Is the inquiry process confidential?",
                  answer:
                    "Yes. All proceedings, names, and details are kept strictly confidential to protect both parties.",
                },
              ]}
            />

        <section className="harassment-intro">
          <h2>👨‍💼 How Our Law Firm Can Help</h2>
          <ul>
            <li>Free initial consultation</li>
            <li>Drafting and filing complaints</li>
            <li>Representation before committees & ombudsperson</li>
            <li>Evidence gathering & witness support</li>
            <li>Compliance training for employers</li>
          </ul>
        </section>
        <Review />
        <Footer />
      </div>
    </>
  );
}

export default Harassment;
