import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "./ChildMaintenance.css";
import Hero from "../components/Hero";
import FAQs from "../components/FAQs";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ContactButtons from "../components/ContactButtons";

function ChildMaintenance() {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true, offset: 200 });
  }, []);
  return (
    <>
      <ContactButtons />
      <header className="child-maintenance-header">
        <Navigation />
        <div className="service-content">
          <h1>Child Maintenance Services</h1>
          <p>
            Our firm specializes in child maintenance services, ensuring that
            children's financial needs are met during and after parental
            separation.
          </p>
        </div>
      </header>
      <Hero />
      <div className="article-content">
        <div className="heading">
          <hr />
          <h1>Child Maintenance</h1>
          <hr />
        </div>
        <article
          className="lawyer-article"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-offset="300"
        >
          <h2>1. Child Maintenance in Pakistan</h2>
          <p>
            Child Maintenance Amount in Pakistan: Child maintenance is one of
            the most important issues that arise after a divorce or separation
            in Pakistan. It refers to the financial support a parent (typically
            the father) is legally required to provide for the care and
            upbringing of their child.
          </p>
          <p>
            In this article, we’ll explain everything you need to know about
            child maintenance amount in Pakistan, including how it’s calculated,
            who pays it, and how to file a case if support is denied.
          </p>
        </article>
        <article
          className="lawyer-article"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-offset="300"
        >
          <h2>2. What is Child Maintenance?</h2>
          <p>
            Child maintenance (also called child support) is the money paid by
            one parent for the basic needs of a child, including:
          </p>

          <ul>
            <li>Food and clothing</li>
            <li>Education expenses (school fees, books, tuition)</li>
            <li>Medical care</li>
            <li>Shelter and housing</li>
            <li>Day-to-day living expenses</li>
          </ul>

          <p>
            In Pakistan, the father is primarily responsible for financially
            supporting his children, regardless of custody or visitation
            arrangements.
          </p>
        </article>
        <section
          style={{ padding: "1rem", display: "flex", justifyContent: "center" }}
        >
          <img
            src="/child.webp"
            alt="Talaq Image"
            style={{ width: "100%", maxWidth: "1100px", height: "auto", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
          />
        </section>
        <article
          className="lawyer-article"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-offset="300"
        >
          <h2>3. Legal Basis for Child Maintenance in Pakistan</h2>
          <p>Child maintenance laws in Pakistan are based on:</p>

          <ul>
            <li>Islamic principles (Shariah law)</li>
            <li>Family Courts Act, 1964</li>
            <li>Guardian and Wards Act, 1890</li>
          </ul>

          <p>
            According to Islamic law, the father is legally and religiously
            bound to maintain his children until they become independent
            (financially or by age). In the case of girls, some courts extend
            this period until marriage.
          </p>
        </article>
        <article
          className="lawyer-article"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-offset="300"
        >
          <h2>4. How is Child Maintenance Amount Determined in Pakistan?</h2>
          <p>
            There is no fixed amount for child maintenance under Pakistani law.
            Instead, the Family Court decides the amount based on the financial
            capacity of the father and the needs of the child.
          </p>

          <strong style={{ fontSize: "1.4rem", fontWeight: "bold" }}>
            Factors the Court Considers:
          </strong>
          <ul>
            <li>
              <h3>Father’s Monthly Income</h3>
              <p style={{ margin: "0.5rem", fontSize: "1rem" }}>
                Salary slips, tax records, business documents, and bank
                statements may be presented.
              </p>
            </li>
            <li>
              <h3>Child’s Age and Needs</h3>
              <p style={{ margin: "0.5rem", fontSize: "1rem" }}>
                Younger children may need less than school-going or teenage
                children.
              </p>
            </li>
            <li>
              <h3>Educational Costs</h3>
              <p style={{ margin: "0.5rem", fontSize: "1rem" }}>
                Private schooling, tuition, uniforms, and transport are
                considered.
              </p>
            </li>
            <li>
              <h3>Medical Expenses</h3>
              <p style={{ margin: "0.5rem", fontSize: "1rem" }}>
                Ongoing or special medical needs influence the amount.
              </p>
            </li>
            <li>
              <h3>Standard of Living</h3>
              <p style={{ margin: "0.5rem", fontSize: "1rem" }}>
                The child is entitled to the same standard of living they had
                before divorce.
              </p>
            </li>
            <li>
              <h3>Number of Children</h3>
              <p style={{ margin: "0.5rem", fontSize: "1rem" }}>
                Maintenance is calculated separately for each child.
              </p>
            </li>
          </ul>
        </article>
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-offset="300"
          style={{
            background: "#f0f7ff",
            borderLeft: "4px solid #0b63d6",
            padding: "12px 14px",
            borderRadius: "10px",
            fontFamily: "system-ui,Segoe UI,Roboto,Arial",
          }}
        >
          <strong style={{ fontSize: "1.4rem", fontWeight: "bold" }}>
            Example:
          </strong>
          <p>
            If a father earns Rs. 150,000 per month, the court might set child
            maintenance between Rs. 10,000 to Rs. 30,000 per child—depending on
            living costs, education, and other factors.
          </p>
        </div>
        <article
          className="lawyer-article"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-offset="300"
        >
          <h2>5. Minimum & Average Child Maintenance in Pakistan</h2>
          <p>
            While there is no official minimum, family courts typically award
            amounts ranging from Rs. 5,000 to Rs. 30,000 per child—and sometimes
            more for affluent families.
          </p>
        </article>

        <div
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-offset="300"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            background: "#f0f7ff",
            borderLeft: "4px solid #000000ff",
            padding: "12px 14px",
            borderRadius: "10px",
            fontFamily: "system-ui,Segoe UI,Roboto,Arial",
            marginBottom: "20px",
          }}
        >
          <div className="heading">
            <hr />
            <h1 style={{ fontSize: "1.5rem" }}>Important Note:</h1>
            <hr />
          </div>
          <p>
            Failing to pay maintenance can lead to contempt of court, arrest
            warrants, and seizure of assets.
          </p>
        </div>
      </div>

      <FAQs
        faqs={[
          {
            question: "What is Child Maintenance?",
            answer:
              "Child maintenance is the financial support provided by a parent to cover the basic needs of their child, including food, clothing, education, and medical care.",
          },
          {
            question: "How is Child Maintenance Calculated?",
            answer:
              "It is calculated based on the non-custodial parent's income and the needs of the child. Different countries have specific formulas to determine the exact amount.",
          },
          {
            question: "Who is Responsible for Paying Child Maintenance?",
            answer:
              "Typically, the parent who does not have primary custody of the child is responsible for paying child maintenance to the custodial parent.",
          },
          {
            question: "Can Child Maintenance Be Adjusted?",
            answer:
              "Yes. If there are significant changes in the parent's income, the child's needs, or custody arrangements, the maintenance amount can usually be reviewed and adjusted.",
          },
          {
            question: "What Happens if Child Maintenance is Not Paid?",
            answer:
              "If a parent fails to pay child maintenance, legal action may be taken. This can include deductions from wages, fines, or other enforcement measures depending on local laws.",
          },
          {
            question: "How Long Do I Have to Pay Child Maintenance?",
            answer:
              "Child maintenance is generally required until the child reaches the age of majority (usually 18) or until they complete their education, depending on the country's regulations.",
          },
        ]}
      />
      <Footer />
    </>
  );
}

export default ChildMaintenance;
