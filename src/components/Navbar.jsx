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
        <a href='/' >Airdrop</a>
        <ul className='flex justify-center space-x-6'>
          <li className=' hover:cursor-pointer transition-transform hover:scale-105 ease-in-out'>
            <a href='/'
              className={`menu-item ${activeMenu === 'home' ? 'active' : ''}`}
              onMouseEnter={() => handleMenuClick('home')}
            >
              Home
            </a>
          </li>
          <li className=' hover:cursor-pointer transition-transform hover:scale-105 ease-in-out'>
            <a href='/create'
              className={`menu-item ${activeMenu === 'Create' ? 'active' : ''}`}
              onMouseEnter={() => handleMenuClick('Create')}
            >
              Create Airdrop
            </a>
          </li>
          <li className=' hover:cursor-pointer transition-transform hover:scale-105 ease-in-out'>
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
