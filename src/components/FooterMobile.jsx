import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
function FooterMobile() {
  return (
    <footer className="footer-mobile">
        <figure className="footer-logo">
            <img className="logo" src="logo.avif" alt="Logo" />
              <figcaption> 
                      Hassan Legal Practice is a leading family law firm in Lahore,
                      specializing in marriage, divorce, Khula, child custody,
                      guardianship, and inheritance matters in Pakistan
              </figcaption>
        </figure>
        <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><FaEnvelope /><p>Hassanofficial512@gmail.com</p></li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><FaPhone /><p>+92 324 4536417</p></li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><FaMapMarkerAlt /><p>Gillani Law chambers 5 Mozang road lahore</p></li>
        </ul>
    </footer>
  );
}
export default FooterMobile;
