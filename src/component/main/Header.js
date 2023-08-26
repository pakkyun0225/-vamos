import React from 'react';
import "../../styles/Header.css";


function Header({menus}) {  
  return (
    <header className="Header_Header">
      <div className="Header_content">
        <div className="Header_title">Pakkyun's Portfolio</div>
        <div className="Header_navigation-menus">
          {/* Render the navigation menus */}
          {menus.map((menu, index) => (
            <div key={index} className="Header_navigation-menu">
              {menu}
            </div>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Header;
