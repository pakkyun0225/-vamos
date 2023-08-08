const menus = ['About me', 'Skills', 'Archiving', 'Project', 'Career'];
<header class="Header_Header__bkfyR">
            <div class="Header_content__FPfsl">
              <div class="Header_title__u692O">Pakkyun's Portfolio</div>
              <div class="Header_navigation-menus__p_A9O">
                {/* Render the navigation menus */}
                {menus.map((menu, index) => (
                  <div key={index} className="Header_navigation-menu__8vdQ1">
                    {menu}
                  </div>
                ))}
              </div>
            </div>
          </header>
export default Header_Header__bkfyR