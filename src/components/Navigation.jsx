import './Navigation.css';
import { Link } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa'
import Hamburger from './Hamburger';
function Navigation() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [mobile, setMobile] = useState(false);
  const subRef1 = useRef(null);
  const [innerRef1, setInnerRef1] = useState(false);
  const subRef2 = useRef(null);
  const [innerRef2, setInnerRef2] = useState(false);
  const subRef3 = useRef(null);
  const [innerRef3, setInnerRef3] = useState(false);
  const subRef4 = useRef(null);
  const [innerRef4, setInnerRef4] = useState(false);
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
  useEffect(() => {
      function handleClickOutside(event) {
        if (subRef1.current && !subRef1.current.contains(event.target)) {
          subRef1.current.style.opacity = 0
          setTimeout(() => {
            setDropdownOpen(false);
          }, 500)
          setInnerRef1(false);
        }
        if (subRef2.current && !subRef2.current.contains(event.target)) {
          subRef2.current.style.opacity = 0
          setTimeout(() => {
            setDropdownOpen(false);
          }, 500)
          setInnerRef2(false);
        }
        if (subRef3.current && !subRef3.current.contains(event.target)) {
          subRef3.current.style.opacity = 0;
          setTimeout(() => {
            setDropdownOpen(false);
          }, 500)
          setInnerRef3(false);
        }
        if (subRef4.current && !subRef4.current.contains(event.target)) {
          subRef4.current.style.opacity = 0;
          setTimeout(() => {
            setDropdownOpen(false);
          }, 500)
          setInnerRef4(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

  const toggleDropdown = () => {
    subRef1.current.style.opacity = 0;
    subRef2.current.style.opacity = 0;
    subRef3.current.style.opacity = 0;
    subRef4.current.style.opacity = 0;
    setInnerRef1(false);
    setInnerRef2(false);
    setInnerRef3(false);
    setInnerRef4(false);
    setTimeout(() => {
      setDropdownOpen(!isDropdownOpen);
    }, 100);
  };


  return (
    mobile ? <Hamburger /> : (
    <nav className="navBar">
        <Link to="/"><img src="logo.avif" alt="Logo" className='logo'/></Link>
        <ul className="navList" style={{zIndex: isDropdownOpen ? 2000 : 500}}>
            <li>
                <Link to="/service" onMouseEnter={toggleDropdown} onBlur={toggleDropdown} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><p>Services</p> <FaChevronDown /> </Link>
                <div className="dropdown" style={{ opacity: isDropdownOpen ? 1 : 0, }}>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '1rem 0', }}>
                      <Link to="/" 
                        onMouseEnter={() => {
                          subRef1.current.style.opacity = 1; 
                          subRef2.current.style.opacity = 0; 
                          subRef3.current.style.opacity = 0; 
                          subRef4.current.style.opacity = 0; 
                          setInnerRef1(true); setInnerRef2(false); setInnerRef3(false); setInnerRef4(false);
                          subRef1.current.style.top = '3.5rem';
                          subRef1.current.style.zIndex = 1500;
                          subRef2.current.style.zIndex = 1499;
                          subRef3.current.style.zIndex = 1498;
                          subRef4.current.style.zIndex = 1497;
                        }} 
                        style={{color: '#000000', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', pointerEvents: isDropdownOpen ? 'all' :'none'}}> 
                        <p>Family Cases</p> <FaChevronDown />
                      </Link>
                      <Link to="/" 
                        onMouseEnter={() => {
                          subRef2.current.style.opacity = 1; 
                          subRef1.current.style.opacity = 0; 
                          subRef3.current.style.opacity = 0; 
                          subRef4.current.style.opacity = 0;
                          setInnerRef2(true); setInnerRef1(false); setInnerRef3(false); setInnerRef4(false);
                          subRef2.current.style.top = '6.5rem';
                          subRef2.current.style.zIndex = 1500;
                          subRef1.current.style.zIndex = 1499;
                          subRef3.current.style.zIndex = 1498;
                          subRef4.current.style.zIndex = 1497;
                        }} 
                        onBlur={() => subRef2.current.style.opacity = 0} 
                        style={{color: '#000000', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', pointerEvents: isDropdownOpen ? 'all' :'none'}}> 
                        <p>Divorce</p> <FaChevronDown />
                      </Link>
                      <Link to="/" 
                        onMouseEnter={() => {
                          subRef3.current.style.opacity = 1; 
                          subRef1.current.style.opacity = 0; 
                          subRef2.current.style.opacity = 0; 
                          subRef4.current.style.opacity = 0; 
                          setInnerRef3(true); setInnerRef1(false); setInnerRef2(false); setInnerRef4(false);
                          subRef3.current.style.top = '9.5rem';
                          subRef3.current.style.zIndex = 1500;
                          subRef2.current.style.zIndex = 1499;
                          subRef1.current.style.zIndex = 1498;
                          subRef4.current.style.zIndex = 1497;
                        }} 
                        onBlur={() => subRef2.current.style.opacity = 0} 
                        style={{color: '#000000', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', pointerEvents: isDropdownOpen ? 'all' :'none'}}> 
                        <p>Women Law</p> <FaChevronDown />
                      </Link>                    
                      <Link to="/" 
                        onMouseEnter={() => {
                          subRef4.current.style.opacity = 1; 
                          subRef1.current.style.opacity = 0; 
                          subRef2.current.style.opacity = 0; 
                          subRef3.current.style.opacity = 0;
                          setInnerRef4(true); setInnerRef1(false); setInnerRef2(false); setInnerRef3(false);
                          subRef4.current.style.top = '12.5rem';
                          subRef4.current.style.zIndex = 1500;
                          subRef2.current.style.zIndex = 1499;
                          subRef1.current.style.zIndex = 1498;
                          subRef3.current.style.zIndex = 1497;
                        }} 
                        onBlur={() => subRef2.current.style.opacity = 0} 
                        style={{color: '#000000', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', pointerEvents: isDropdownOpen ? 'all' :'none'}}> 
                        <p>Property & Tax</p> <FaChevronDown />
                      </Link>
                    </div>
                </div>
                <div className="subdropdown" ref={subRef1} >
                  <ul>
                    <li><Link style={{pointerEvents: innerRef1 ? 'all' : 'none'}} to="/child-maintenance">Child Maintenance Law</Link></li>
                    <li><Link style={{pointerEvents: innerRef1 ? 'all' : 'none'}} to="/wifemaintenance">Wife Maintenance Law</Link></li>
                    <li><Link style={{pointerEvents: innerRef1 ? 'all' : 'none'}} to="/marriage">Marriage Registration Certificate</Link></li>
                  </ul>
                </div>
                <div className="subdropdown" ref={subRef2} >
                  <ul>
                    <li><Link style={{pointerEvents: innerRef2 ? 'all' : 'none'}} to="/divorce">Divorce & Khula Lawyer</Link></li>
                    <li><Link style={{pointerEvents: innerRef2 ? 'all' : 'none'}} to="/oversea">Divorce Procedure For Overseas</Link></li>
                    <li><Link style={{pointerEvents: innerRef2 ? 'all' : 'none'}} to="/Khula">Khula Procedure For Overseas Pakistani</Link></li>
                    <li><Link style={{pointerEvents: innerRef2 ? 'all' : 'none'}} to="/nadra">Nadra Divorce Certificate Procedure</Link></li>
                  </ul>
                </div>
                <div className="subdropdown" ref={subRef3} >
                  <ul>
                    <li><Link style={{pointerEvents: innerRef3 ? 'all' : 'none'}} to="/harassment">Sexual Harassment Law</Link></li>
                    <li><Link style={{pointerEvents: innerRef3 ? 'all' : 'none'}} to="/rights">Women Rights</Link></li>
                    <li><Link style={{pointerEvents: innerRef3 ? 'all' : 'none'}} to="/womenright">Property Rights</Link></li>
                    <li><Link style={{pointerEvents: innerRef3 ? 'all' : 'none'}} to="/cyber">Cyber Bullying</Link></li>
                  </ul>
                </div>
                <div className="subdropdown" ref={subRef4} >
                  <ul>
                    <li><Link style={{pointerEvents: innerRef4 ? 'all' : 'none'}} to="/property">Property Disputes</Link></li>
                    <li><Link style={{pointerEvents: innerRef4 ? 'all' : 'none'}} to="/tax">Tax Return & NTN Registration</Link></li>
                  </ul>
                </div>
            </li>
            <li>
            <Link to="/about"><p>About</p></Link>
            </li>
            <li>
            <Link to="/blog"><p>Blog</p></Link>
            </li>
        </ul>
        <Link to="/consultation"><button className="navButton">Free Consultation</button></Link>
    </nav>)
    
  );
}

export default Navigation;