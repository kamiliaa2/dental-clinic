import React from 'react';
import './navbar.css';
import { FaHome ,FaInstagram,FaFacebook, FaTwitter,} from 'react-icons/fa';
import { MdAddCall } from "react-icons/md";

const Navbar = () => {
  return (
    
    <header>
      <nav className="navbar">
        <div className="TOP-section">
        <div className='icon-container'>
        <li> <FaInstagram color='white'  /></li>
        <li> <FaFacebook color='white'/></li>
        <li> <FaTwitter color='white' /></li>
        <li><MdAddCall color='white'/></li>
       
        </div>
        </div>
        <div className='MED-section'>
        <img className="logo" src="#" alt="logo" />
          <div className='line'></div>
          
        </div>
      </nav>
      <nav className='nav'>
        <div>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Doctors</a></li>
            <li><a href="#">Witnesses</a></li>
            <li><a href="#">Contact us</a></li>
                      
            <div class="container">
  <div>
    <button class="log">Login</button>
    <button class="reg">Sign up</button>
    
  </div>
</div>

          
          </ul>
        </div>
      </nav>
    </header>
      
    
   
  );
};

export default Navbar