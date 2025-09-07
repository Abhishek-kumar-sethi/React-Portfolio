import './navbar.css';
import portfolioimage from '/image/portfolio-image.jpg';
import { useState, useEffect } from 'react';

export default function Navhead() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  // Toggle menu and add/remove overflow hidden
  const toggleMenu = () => {
    setIsMenuVisible((prevState) => !prevState);
  };

  // Use effect to handle overflow hidden on body
  useEffect(() => {
    if (isMenuVisible) {
      // Add overflow hidden when the menu is open
      document.body.style.overflow = 'hidden';
    } else {
      // Remove overflow hidden when the menu is closed
      document.body.style.overflow = '';
    }

    // Cleanup when the component is unmounted or menu state changes
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuVisible]);

  return (
    <>
      <div className="navhead">
        <div className="profile">
          <img src={portfolioimage} alt="Profile" />
        </div>
        <h2>aks codes</h2>
        <h5>"Every day comes with a new beginning work until your day comes."</h5>
      </div>

      {/* Main navigation menu */}
      <div className={`navmain ${isMenuVisible ? 'show' : ''}`}>
        <ul id="menuList">
          <li>
            <a href="#home" onClick={toggleMenu}>
              <i className="fa-solid fa-house" style={{ margin: '10px' }}></i>
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#about" onClick={toggleMenu}>
              <i className="fa-solid fa-user" style={{ margin: '10px' }}></i>
              <span>About</span>
            </a>
          </li>
          <li>
            <a href="#projects" onClick={toggleMenu}>
              <i className="fa-solid fa-folder" style={{ margin: '10px' }}></i>
              <span>Work</span>
            </a>
          </li>
          <li>
            <a href="#skills" onClick={toggleMenu}>
              <i className="fa-solid fa-laptop-code" style={{ margin: '10px' }}></i>
              <span>Skills</span>
            </a>
          </li>
          <li>
            <a href="#contact" onClick={toggleMenu}>
              <i className="fa-solid fa-envelope" style={{ margin: '10px' }}></i>
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </div>

      {/* Menu toggle button */}
      <div
        id="menu"
        className={isMenuVisible ? 'open' : ''}
        onClick={toggleMenu}
        style={{ cursor: 'pointer' }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Footer with social icons */}
      <div className="navfooter">
  <a href="https://wa.me/9315293300" target="_blank" rel="noopener noreferrer">
    <i className="fa-brands fa-whatsapp"></i>
  </a>
  <a href="https://www.instagram.com/a_k_seti/" target="_blank" rel="noopener noreferrer">
    <i className="fa-brands fa-instagram"></i>
  </a>
  <a href="https://github.com/Abhishek-kumar-sethi" target="_blank" rel="noopener noreferrer">
    <i className="fa-brands fa-github"></i>
  </a>
  <a href="https://www.linkedin.com/in/abhishek-sethi-42a661289/" target="_blank" rel="noopener noreferrer">
    <i className="fa-brands fa-linkedin"></i>
  </a>
  <a 
  href="https://mail.google.com/mail/?view=cm&fs=1&to=abhisheksethi216@gmail.com" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <i className="fa-solid fa-envelope"></i>
</a>

</div>

    </>
  );
}
