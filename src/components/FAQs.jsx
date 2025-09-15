import FAQ from "./FAQ";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function FAQs({faqs}) {
    useEffect(() => {
        Aos.init({ duration: 1000, once: true, offset: 200 });
    }, []);
    if (!faqs || faqs.length === 0) {
        faqs = [{ question: "No FAQs available", answer: "Please check back later." }];
    }
    return (
        <div className="faqs" data-aos="fade" data-aos-duration="800" data-aos-offset="300">
            <div className="heading">
                <hr />
                <h1>FAQS</h1>
                <hr />
            </div>
            <div className="faq-list">
                {faqs.map((faq, index) => (
                    <FAQ key={index} question={faq.question} answer={faq.answer} />
                ))}
            </div>
        </div>
    );
}

export default FAQs;
