import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import './header.css';

const Header = () => {
 
  const [toggle, setToggle] = useState(false);
  function toggleSideBar() {
    setToggle(!toggle);
  }

  // close sidebar on click outside
  document.body.onclick = function(e) {
    console.log(e.clientX);
    if (e.clientX > window.innerWidth * 0.8) {
      setToggle(false);
    }
  };

      
  return (
    <div>
     <header>
      <FaBars onClick={toggleSideBar} className="bar" />
      <div className="logo">
        <h1>Outdoor</h1>
        <h2>Adventure</h2>
      </div>
      <nav id='nav1' className={toggle ? "sidebar" : ""}>
        <ul>
          <Link to="/about" onClick={toggleSideBar}>
            <li>About</li>
          </Link>
          <Link to="/services" onClick={toggleSideBar}>
            <li>Services</li>
          </Link>
          <Link to="/projects" onClick={toggleSideBar}>
            <li>Projects</li>
          </Link>
          <Link to="/contact" onClick={toggleSideBar}>
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    </header>
     </div>
  )
}

export default Header
