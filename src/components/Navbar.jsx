import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Connbutton from './Connect';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (menu) => {
    setActiveMenu(menu === activeMenu ? null : menu);
  };

  return (
    <div className='bg-transparent top-0 z-50 w-full fixed backdrop-filter backdrop-blur-lg bg-opacity-20'>
      <div className="flex items-center p-3 text-xl justify-between grotesk-font">
        <a href='/'>Airdrop</a>
        <ul className='flex justify-center space-x-6'>
          <li className='hover:cursor-pointer transition-transform hover:scale-105 ease-in-out'>
            <NavLink
              to='/'
              className={`menu-item`}
              activeClassName="active"
              onMouseEnter={() => handleMenuClick('home')}
            >
              Home
            </NavLink>
          </li>
          <li className='hover:cursor-pointer transition-transform hover:scale-105 ease-in-out'>
            <NavLink
              to='/create'
              className={`menu-item`}
              activeClassName="active"
              onMouseEnter={() => handleMenuClick('Create')}
            >
              Create
            </NavLink>
          </li>
          <li className='hover:cursor-pointer transition-transform hover:scale-105 ease-in-out'>
            <NavLink
              to='/claim'
              className={`menu-item`}
              activeClassName="active"
              onMouseEnter={() => handleMenuClick('claim')}
            >
              Claim
            </NavLink>
          </li>
          <li className='hover:cursor-pointer transition-transform hover:scale-105 ease-in-out'>
            <NavLink
              to='/clawback'
              className={`menu-item`}
              activeClassName="active"
              onMouseEnter={() => handleMenuClick('clawback')}
            >
              Clawback
            </NavLink>
          </li>
        </ul>
        <div className="grotesk-font">
          <Connbutton />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
