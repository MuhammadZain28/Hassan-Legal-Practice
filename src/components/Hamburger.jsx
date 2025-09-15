import './Hamburger.css';
import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import { FaChevronDown } from 'react-icons/fa'
function Hamburger() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const bar1Ref = useRef(null);
  const bar2Ref = useRef(null);
  const bar3Ref = useRef(null);
  const iconRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);

  };

  const handleChange = () => {
    setMenuOpen(!menuOpen);
    if (menuOpen) {
      bar1Ref.current.style.transform = 'rotate(0deg) translate(0px, 0px)';
      bar2Ref.current.style.opacity = '1';
      bar3Ref.current.style.transform = 'rotate(0deg) translate(0px, 0px)';
      buttonRef.current.style.background = 'rgb(161, 126, 54)';
      bar1Ref.current.style.background = 'rgba(255, 255, 255, 1)';
      bar3Ref.current.style.background = 'rgba(255, 255, 255, 1)';
    } else {
      bar1Ref.current.style.transform = 'rotate(-45deg) translate(-5px, 6px)';
      bar2Ref.current.style.opacity = '0';
      bar3Ref.current.style.transform = 'rotate(45deg) translate(-5px, -6px)';
      buttonRef.current.style.background = 'transparent'
      bar1Ref.current.style.background = 'rgba(161, 126, 54, 1)';
      bar3Ref.current.style.background = 'rgba(161, 126, 54, 1)';
    }
  };

  return (
    <nav className="hamBar">
        <Link to="/"><img src="logo.avif" alt="Logo" className='logo'/></Link>
        <button className='hamButton' aria-label='Open Menu' onClick={handleChange} ref={buttonRef}>
            <div className="bar1" ref={bar1Ref}></div>
            <div className="bar2" ref={bar2Ref}></div>
            <div className="bar3" ref={bar3Ref}></div>
        </button>
        <ul className="hamList" style={{ width: menuOpen ? '80vw' : '0px', transition: 'width 0.3s ease' }}>
            <li style={{justifyContent: 'flex-start'}}><h1 style={{ margin: '1rem 1.5rem', color: 'rgba(0, 0, 0, 1)' }}>Menu</h1></li>
            <li style={{ flexDirection: 'column', }}>
              <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', transition: 'all 0.3s ease', fontSize: '1.2rem', width: '70vw', borderBottom: '2px solid rgb(161, 126, 54)' }}>
                <Link to="/service" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', transition: 'all 0.3s ease',fontSize: '1.2rem', border: 'none', borderRight: '2px solid rgb(161, 126, 54)'}}>Services</Link>
                <FaChevronDown onClick={() => {toggleDropdown(); iconRef.current.style.transform = isDropdownOpen ? 'rotate(0deg)' : 'rotate(180deg)';}} className='icon' ref={iconRef} />
              </p>

                <div className="Hamdroplist" style={{ height: !isDropdownOpen ? '0' : 'auto' }}>
                  <details style={{color: '#000000', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',  padding: '0.5rem', width: '65vw', }}>
                    <summary style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '2px solid rgb(161, 126, 54)'}}>
                      <Link to="/" style={{border: 'none', fontWeight: 'normal'}}>Family Cases</Link> 
                      <FaChevronDown style={{borderLeft: '2px solid rgb(161, 126, 54)', padding: '0.5rem'}}/>
                    </summary>
                    <div>
                      <ul style={{ padding: 0, margin: 0 }}>
                        <li><Link to="/child-maintenance" style={{ fontSize: 'clamp(0.9rem, 2vw, 1.2rem)'}}>Child Maintenance Law</Link></li>
                        <li><Link to="/wifemaintenance" style={{ fontSize: 'clamp(0.9rem, 2vw, 1.2rem)'}}>Wife Maintenance Law</Link></li>
                        <li><Link to="/marriage" style={{ fontSize: 'clamp(0.9rem, 2vw, 1.2rem)'}}>Marriage Registration Certificate</Link></li>
                      </ul>
                    </div>
                  </details>
                  <details style={{color: '#000000', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',  padding: '0.5rem', borderBottom: '2px solid rgb(161, 126, 54)', width: '65vw', border: 'none'}}>
                    <summary style={{ display: 'flex', alignItems: 'center', borderBottom: '2px solid rgb(161, 126, 54)'}}>
                      <Link to="/" style={{border: 'none', fontWeight: 'normal'}}>Divorce</Link> 
                      <FaChevronDown style={{borderLeft: '2px solid rgb(161, 126, 54)', padding: '0.5rem'}}/>
                    </summary>
                    <div>
                      <ul style={{ padding: 0, margin: 0 }}>
                        <li><Link style={{ fontSize: 'clamp(0.9rem, 2vw, 1.2rem)'}} to="/divorce">Divorce & Khula Lawyer</Link></li>
                        <li><Link style={{ fontSize: 'clamp(0.9rem, 2vw, 1.2rem)'}} to="/oversea">Divorce Procedure For Overseas</Link></li>
                        <li><Link style={{ fontSize: 'clamp(0.9rem, 2vw, 1.2rem)'}} to="/khula">Khula Procedure For Overseas Pakistani</Link></li>
                        <li><Link style={{ fontSize: 'clamp(0.9rem, 2vw, 1.2rem)'}} to="/nadra">Nadra Divorce Certificate Procedure</Link></li>
                      </ul>
                    </div>
                  </details>
                  <details style={{color: '#000000', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',  padding: '0.5rem', borderBottom: '2px solid rgb(161, 126, 54)', width: '65vw', border: 'none'}}>
                    <summary style={{ display: 'flex', alignItems: 'center', borderBottom: '2px solid rgb(161, 126, 54)'}}>
                      <Link to="/" style={{border: 'none', fontWeight: 'normal'}}>Women Law</Link> 
                      <FaChevronDown style={{borderLeft: '2px solid rgb(161, 126, 54)', padding: '0.5rem'}}/>
                    </summary>
                    <div>
                      <ul style={{ padding: 0, margin: 0 }}>
                        <li><Link style={{ fontSize: 'clamp(0.9rem, 2vw, 1.2rem)'}} to="/harassment">Sexual Harassment Law</Link></li>
                        <li><Link style={{ fontSize: 'clamp(0.9rem, 2vw, 1.2rem)'}} to="/rights">Women Rights</Link></li>
                        <li><Link style={{ fontSize: 'clamp(0.9rem, 2vw, 1.2rem)'}} to="/womenright">Property Rights</Link></li>
                        <li><Link style={{ fontSize: 'clamp(0.9rem, 2vw, 1.2rem)'}} to="/cyber">Cyber Bullying</Link></li>
                      </ul>
                    </div>
                  </details>
                  <details style={{color: '#000000', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',  padding: '0.5rem', borderBottom: '2px solid rgb(161, 126, 54)', width: '65vw', border: 'none'}}>
                    <summary style={{ display: 'flex', alignItems: 'center', borderBottom: '2px solid rgb(161, 126, 54)'}}>
                      <Link to="/" style={{border: 'none', fontWeight: 'normal'}}>Property & Tax</Link> 
                      <FaChevronDown style={{borderLeft: '2px solid rgb(161, 126, 54)', padding: '0.5rem'}}/>
                    </summary>
                    <div>
                      <ul style={{ padding: 0, margin: 0 }}>
                        <li><Link style={{ fontSize: 'clamp(0.9rem, 2vw, 1.2rem)'}} to="/property">Property Disputes</Link></li>
                        <li><Link style={{ fontSize: 'clamp(0.9rem, 2vw, 1.2rem)'}} to="/tax">Tax Return & NTN Registration</Link></li>
                      </ul>
                    </div>
                  </details>
                </div>
            </li>
            <li style={{display: "flex", alignItems: 'flex-start'}}>
                <Link style={{ textAlign: 'left' }} to="/about">About</Link>
            </li>
            <li style={{display: "flex", alignItems: 'flex-start'}}>
                <Link style={{ textAlign: 'left' }} to="/blog">Blog</Link>
            </li>
            <li>
                <Link to="/consultation" style={{ border: 'none' }}><button className="navButton">Free Consultation</button></Link>
            </li>
        </ul>
    </nav>
  );
}

export default Hamburger;
