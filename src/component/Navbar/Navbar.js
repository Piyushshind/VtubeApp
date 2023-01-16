import React, { useState ,useEffect } from 'react'
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  const [isMobile, setMobile] = useState(false);
  const [file, setFile] = useState();
  
  return (
    <nav className='navbar'>
   
      <Link className='logo' to="/home"><h3 > Portfolio</h3> </Link>
      <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setMobile(false)}
      >

        <Link to="/home" className="home" >
          <li>Home</li>
        </Link>
        <Link to="/about" className="about" >
          <li>About</li>
        </Link>
        <Link to="/signup" className="signup" >
          <li>Signup</li>
        </Link>
        <Link to="/login" className="login" >
          <li>Login</li>
        </Link>
        
      </ul>
      <h2></h2>
    
    
      
      <button className='mobile-menu-icon'
        onClick={() => setMobile(!isMobile)}
      >
        {isMobile ? (<i className="fas fa-times"></i>) : (<i className="fas fa-bars"></i>)}
      </button>

    </nav>
  )
}
export default Navbar