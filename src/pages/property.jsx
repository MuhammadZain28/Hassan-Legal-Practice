import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Review from "../components/Review";
import Footer from "../components/Footer";
import "./property.css";
import ContactButtons from "../components/ContactButtons";
import FAQs from "../components/FAQs";

function Property() {
  return (
    <>
      <ContactButtons />
      <div>
        <header className="property">
          <Navigation />
          <div className="property-content">
            <h1 style={{ padding: "1rem 0" }}>
              Property Disputes & Management in Pakistan & Overseas
            </h1>
            <p style={{ lineHeight: "1.5", paddingBottom: "5rem" }}>
              Property disputes are one of the most common legal issues in
              Pakistan and for overseas Pakistanis. Conflicts arise over{" "}
              <strong>inheritance, ownership, transfer, fraud, and tenancy</strong>. 
              Both residents and overseas Pakistanis often face challenges in 
              safeguarding their lawful property rights. These disputes are 
              governed by <strong>Islamic law (Shariah)</strong>,{" "}
              <strong>Pakistani statutes</strong>, and{" "}
              <strong>special overseas property protection mechanisms</strong>.
            </p>
          </div>
        </header>
      </div>

      <Hero />

      <div className="property-intro">
        <h1>Property Disputes & Management – Legal Overview</h1>

        <h2>1. Inheritance Disputes</h2>
        <p>
          In Pakistan, inheritance is governed by{" "}
          <strong>Islamic law and the Succession Act, 1925</strong>. Women and
          men are both entitled to inherit shares. Disputes arise when family
          members deny rightful shares, create fake documents, or delay
          distribution. Overseas Pakistanis often face added hurdles in proving
          identity and claims.
        </p>

        <h2>2. Property Transfer & Ownership</h2>
        <p>
          Property ownership and transfer require proper{" "}
          <strong>registered sale deeds, mutation in revenue records, and 
          registration with local authorities</strong>. Many fraud cases occur 
          due to fake power of attorney or illegal transfers. Overseas Pakistanis 
          can use <strong>NADRA’s Biometric Verification</strong> and{" "}
          <strong>Embassy-attested Power of Attorney</strong> for safe transfers.
        </p>

        <h2>3. Tenancy & Rent Issues</h2>
        <p>
          The <strong>Rent Restriction Ordinances</strong> regulate landlord and
          tenant relations. Common disputes include{" "}
          <strong>non-payment of rent, unlawful eviction, and misuse of property</strong>.
          Overseas landlords frequently face issues with tenants refusing to vacate 
          or pay rent. Cases can be filed in Rent Controllers’ courts.
        </p>

        <h2>4. Property Fraud & Illegal Possession</h2>
        <p>
          Land grabbing and illegal possession (qabza) are major problems in
          Pakistan. Criminals often target overseas Pakistanis’ properties due to 
          their absence. To counter this, the{" "}
          <strong>Punjab Overseas Pakistanis Commission (OPC)</strong> and{" "}
          <strong>Special Anti-Qabza Courts</strong> have been established for 
          speedy redressal.
        </p>

        <h2>5. Overseas Pakistanis Property Protection</h2>
        <ul>
          <li>
            <strong>Overseas Pakistanis Commission (OPC):</strong> Handles complaints of 
            land grabbing, fraud, and property disputes.
          </li>
          <li>
            <strong>Embassy/Consulate Services:</strong> Overseas Pakistanis can 
            attest Power of Attorney for managing property matters in Pakistan.
          </li>
          <li>
            <strong>NADRA & Biometric Verification:</strong> Helps prevent fraud 
            in transfers and registration.
          </li>
        </ul>

        <h2>6. Dispute Resolution & Remedies</h2>
        <ul>
          <li>
            <strong>Civil Courts:</strong> For inheritance, ownership, and transfer cases.
          </li>
          <li>
            <strong>Rent Controllers:</strong> For tenancy disputes.
          </li>
          <li>
            <strong>Criminal Courts:</strong> For fraud, forgery, or illegal occupation.
          </li>
          <li>
            <strong>Ombudsman / OPC:</strong> For overseas Pakistanis’ property protection.
          </li>
        </ul>
      </div>

      
        <FAQs
          faqs={[
            {
              question: "What should overseas Pakistanis do if their property is occupied illegally?",
              answer:
                "They can file a complaint with the Overseas Pakistanis Commission (OPC), approach local police, or initiate a civil suit. Special anti-qabza courts also handle such cases."
            },
            {
              question: "How can property transfer be secured for overseas Pakistanis?",
              answer:
                "Through embassy-attested Power of Attorney, NADRA biometric verification, and registered sale deeds."
            },
            {
              question: "Can women be denied inheritance in Pakistan?",
              answer:
                "No. Women inherit under Islamic law and the Succession Act, 1925. The Women’s Property Rights Act, 2020 ensures speedy recovery of denied shares."
            },
            {
              question: "What is the remedy for tenant eviction disputes?",
              answer:
                "Landlords can approach the Rent Controller under Rent Restriction Ordinances for eviction orders and recovery of rent."
            },
            {
              question: "Are there special protections for overseas Pakistanis?",
              answer:
                "Yes. The Overseas Pakistanis Commission (OPC) and embassy services assist in resolving property disputes and preventing fraud."
            }
          ]}
        />

      <Review />
      <Footer />
    </>
  );
}

export default Property;
