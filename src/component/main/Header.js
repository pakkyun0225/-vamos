import React from 'react';
import "../../styles/Header.css";


function Header({menus}) {  
  return (
    <header className="Header_Header__bkfyR">
      <div className="Header_content__FPfsl">
        <div className="Header_title__u692O">Pakkyun's Portfolio</div>
        <div className="Header_navigation-menus__p_A9O">
          {/* Render the navigation menus */}
          {menus.map((menu, index) => (
            <div key={index} className="Header_navigation-menu__8vdQ1">
              {menu}
            </div>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Header;
