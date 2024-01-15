import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 
// import NavIcon1 from './assets/icon1.png';
import NavIcon2 from '../assets/icon.jpg';
// import NavIcon3 from './assets/icon3.png';

function Navbar() {
  
    const [dropdownOpen, setDropdownOpen] = useState(false);
  
    const toggleDropdown = () => {
      setDropdownOpen(!dropdownOpen);
    };

  return (
    <nav className="navbar">
      <div className="navbar-icons">
 
        <img src={NavIcon2} alt="Icon 2" /> 

      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/Overview" className="nav-item">Overview</Link>
        <div className="dropdown">
          <div className='dropdown-menu'> Forums
            <div className="dropdown-content">
              <Link to="/Forum" className="dropdown-item" onClick={() => setDropdownOpen(false)}>Forum</Link>
              <Link to="/Share" className="dropdown-item" onClick={() => setDropdownOpen(false)}>Share Your Experience</Link>
            </div>
          </div>
        </div>
        {/*<Link to="/Forum" className="nav-item">Forum</Link>*/}
        <Link to="/Profile" className="nav-item">Profile</Link>
        {/*<Link to="/Settings" className="nav-item">Settings</Link>*/}
        <Link to="/Login" className="login-button">Log in</Link>
      </div>
    </nav>
    
  );
}

export default Navbar;