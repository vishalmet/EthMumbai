import React, { useState } from 'react';
import Connbutton from './Connect';
// import { Link } from 'react-router-dom';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <div className='bg-transparent top-0 z-50 w-full fixed backdrop-filter backdrop-blur-lg bg-opacity-20 '>
      <div className="flex items-center p-3 text-xl justify-between grotesk-font">
        <a >Airdrop</a>
        <ul className='flex justify-center space-x-6'>
          <li>
            <a
              className={`menu-item ${activeMenu === 'home' ? 'active' : ''}`}
              onMouseEnter={() => handleMenuClick('home')}
            >
              Home
            </a>
          </li>
          <li>
            <a
              className={`menu-item ${activeMenu === 'search' ? 'active' : ''}`}
              onMouseEnter={() => handleMenuClick('search')}
            >
              Search
            </a>
          </li>
          <li>
            <a
              className={`menu-item ${activeMenu === 'take' ? 'active' : ''}`}
              onMouseEnter={() => handleMenuClick('take')}
            >
              News
            </a>
          </li>
        </ul>
        <div className=" grotesk-font">
        <Connbutton />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
