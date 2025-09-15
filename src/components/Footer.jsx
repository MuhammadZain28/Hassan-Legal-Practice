import "./Footer.css";
import {
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
  FaLinkedin,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import FooterMobile from "./FooterMobile";

function Footer() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      {mobile ? (
        <FooterMobile />
      ) : (
        <footer className="footer">
          <figure className="footer-logo">
            <img className="logo" src="logo.avif" alt="Logo" />
            <figcaption className="caption">
              Hassan Legal Practice is a leading family law firm in Lahore,
              specializing in marriage, divorce, Khula, child custody,
              guardianship, and inheritance matters in Pakistan
            </figcaption>
          </figure>
          <ul className="footer-content" style={{ width: "10vw" }}>
            <li><Link to="/service">Services</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
          <ul className="footer-link">
            <li><Link to="/wifemaintenance">Wife Maintenance</Link></li>
            <li><Link to="/divorce">Divorce Lawyer</Link></li>
            <li><Link to="/child-maintenance">Child Maintenance</Link></li>
            <li><Link to="/marriage">Marriage Registration</Link></li>
            <li><Link to="/khula">Khula Procedure</Link></li>
          </ul>
          <ul
            className="footer-content"
            style={{ listStyle: "none", width: "25vw", }}
          >
            <li style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <FaEnvelope />
              <p style={{ fontSize: "clamp(0.8rem, 2vw, 1rem)" }}>Hassanofficial512@gmail.com</p>
            </li>
            <li style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <FaPhone />
              <p style={{ fontSize: "clamp(0.8rem, 2vw, 1rem)" }}>+92 324 4536417</p>
            </li>
            <li style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <FaMapMarkerAlt />
              <p style={{ fontSize: "clamp(0.8rem, 2vw, 1rem)" }}>Gillani Law chambers 5 Mozang road lahore</p>
            </li>
          </ul>
        </footer>
      )}
      <div className="trademark">
        <div className="trademark-content">
          <p style={{fontSize: "clamp(0.7rem, 2vw, 1rem)"}}>Powered by</p>
          <a href="https://www.example.com" rel="noopener">
            TwinTech Developer 
          </a>
          &copy;
        </div>
      </div>
    </>
  );
}

export default Footer;
