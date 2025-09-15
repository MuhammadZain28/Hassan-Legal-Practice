import { Link } from "react-router";
import "./Hero.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Hero() {
  useEffect(() => {
    Aos.init({ once: true, duration: 500 });
  }, []);

  return (
    <section className="heros-section" data-aos="slide-up" data-aos-duration="1000">
      <div className="heros-content">
        <div className="heros-text">
          <h2>Schedule a Consultation with Family Lawyer</h2>
          <p>
            Contact us today for a consultation – we’re here to help find a solution that is as unique as your family.
          </p>
        </div>
        <Link style={{ textDecoration: 'none', display: 'grid', placeSelf: 'center' }} to="/contact"><button className="ctas">Contact Now</button></Link>
      </div>
    </section>
  );
}

export default Hero;
