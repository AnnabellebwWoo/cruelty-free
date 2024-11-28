import React from 'react';
import '../styles/styles.css';

const Menu = () => {
    return (
      <nav className="menu-bar">
      <div className="menu-title">Cruelty-Free Project</div>
        <ul className="menu-items">
          <li><a href="#Intro">What Is This?</a></li>
          <li><a href="#Filter">Try It Out</a></li>
          <li><a href="#About">Project Details</a></li>
          <li><a href="#Footer">Contact</a></li>
        </ul>
      </nav>
    );
  };
  
  export default Menu;