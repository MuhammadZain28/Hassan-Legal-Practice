import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Review from "../components/Review";
import Footer from "../components/Footer";
import "./tax.css";
import FAQs from "../components/FAQs";
import ContactButtons from "../components/ContactButtons";

function Tax() {
  return (
    <>
      <ContactButtons />
      <div>
        <header className="tax">
          <Navigation />
          <div className="tax-content">
            <h1 style={{ padding: "1rem 0" }}>
              NTN Registration & Tax Return Filing for Overseas Pakistanis
            </h1>
            <p style={{ lineHeight: "1.5", paddingBottom: "5rem" }}>
              We assist Overseas Pakistanis in filing their Income Tax Returns
              and obtaining their National Tax Number (NTN) from anywhere in the
              world. Our team ensures complete compliance with FBR regulations,
              maximising tax benefits and avoiding penalties. Whether you need
              annual return filing, wealth statement preparation, or NTN
              registration, we provide a smooth, hassle-free process with 100%
              trust and transparency.
            </p>
          </div>
        </header>
      </div>

      <Hero />

      <section>
        <div className="tax-intro">
          <h1>
            NTN Registration & Tax Return Filing for Overseas Pakistanis – Complete Guide
          </h1>

          <h2>1. Introduction</h2>
          <p>
            Under Pakistan’s Income Tax Ordinance, every individual with taxable
            income or assets in Pakistan must obtain an NTN and file annual tax
            returns. For Overseas Pakistanis, filing ensures compliance, access
            to tax benefits, and inclusion in the Active Taxpayer List (ATL).
          </p>

          <h2>2. Residency Status & Taxability</h2>
          <ul>
            <li>
              Non-Resident status applies if you stay in Pakistan less than 183
              days (approx. 6 months) in a tax year.
            </li>
            <li>
              Only Pakistan-source income (property, dividends, capital gains,
              etc.) is taxable for non-residents.
            </li>
            <li>
              If you have no income in Pakistan, you can still file a{" "}
              <strong>nil return</strong> to maintain filer status.
            </li>
          </ul>

          <h2>3. NTN Registration Process</h2>
          <ol>
            <li>Go to the FBR IRIS Portal (iris.fbr.gov.pk).</li>
            <li>Select “Registration for Unregistered Person”.</li>
            <li>
              Provide CNIC, Pakistan mobile number, email, and residential
              address.
            </li>
            <li>Verify through SMS & email codes.</li>
            <li>
              After approval, your National Tax Number (NTN) is issued
              electronically.
            </li>
          </ol>

          <h2>4. Filing Tax Returns via IRIS Portal</h2>
          <ol>
            <li>Login to the IRIS portal with your NTN and password.</li>
            <li>Select the relevant Tax Year and form under “Declaration”.</li>
            <li>
              Declare only Pakistan-source income. Skip foreign income if you
              are a non-resident.
            </li>
            <li>
              File a <strong>nil return</strong> if no income is earned in
              Pakistan.
            </li>
            <li>Submit before the deadline (usually 30th September).</li>
          </ol>

          <h2>5. Benefits of Being on ATL (Active Taxpayer List)</h2>
          <ul>
            <li>Lower withholding tax on property, banking, and investments.</li>
            <li>Reduced tax on vehicle registration and property purchases.</li>
            <li>
              Exemption from restrictions on purchasing property above certain
              thresholds.
            </li>
            <li>Recognition as a filer in all financial transactions.</li>
          </ul>

          <h2>6. NICOP/POC Relief for Overseas Pakistanis</h2>
          <p>
            Overseas Pakistanis holding NICOP or POC can enjoy filer tax rates
            on property transactions under Sections 236C & 236K, even if they do
            not file returns. Verification is done by uploading NICOP/POC in the
            IRIS system during PSID creation.
          </p>

          <h2>7. Double Taxation Treaties (DTA)</h2>
          <p>
            Pakistan has tax treaties with over 60 countries. If you pay taxes
            abroad, you may claim relief in Pakistan under these agreements.
          </p>

          <h2>8. Required Documents</h2>
          <ul>
            <li>CNIC/NICOP/POC</li>
            <li>Active mobile number (preferably Pakistan-registered)</li>
            <li>Email address</li>
            <li>Bank account details (if applicable)</li>
            <li>Proof of Pakistan-source income (if any)</li>
          </ul>
        </div>
      </section>

      
        <FAQs
          faqs={[
            {
              question: "Do Overseas Pakistanis have to file tax returns?",
              answer:
                "Yes, if you earn Pakistan-source income. If you don’t, you can file a nil return to maintain filer status.",
            },
            {
              question: "How can I apply for NTN from abroad?",
              answer:
                "NTN can be applied online via FBR IRIS Portal using your CNIC, email, and Pakistan mobile number.",
            },
            {
              question: "What is the deadline for filing returns?",
              answer:
                "The usual deadline is 30th September each year, though extensions may be announced by FBR.",
            },
            {
              question: "Do I need to file a wealth statement?",
              answer:
                "Only resident Pakistanis are required to file wealth statements. Non-residents do not need to submit it unless they declare residency.",
            },
            {
              question: "What are the benefits of filer status?",
              answer:
                "Lower withholding taxes, reduced property/vehicle taxes, and smoother financial transactions in Pakistan.",
            },
            {
              question: "Can I claim relief under Double Taxation Treaty?",
              answer:
                "Yes, Overseas Pakistanis can claim exemption or tax credit if their resident country has a DTA with Pakistan.",
            },
          ]}
        />

      <Review />
      <Footer />
    </>
  );
}

export default Tax;
