import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TLBCWEBLOGO from '../assets/Images/TLBCWEBLOGO.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="bg-yellow-500 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center">
              <button
                className="md:hidden text-white focus:outline-none mr-4"
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              </button>
              <Link to="/" className="text-white text-[13px] font-bold">
                <img src={TLBCWEBLOGO} className='md:w-60 h-12 ml-[3rem] md:ml-[-6rem]'/>
              </Link>
            </div>
            <div className="hidden md:flex md:items-center mb-[-27px]">
              <NavItems />
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
          <NavItems mobile />
        </div>
      </nav>
      
    </div>
  );
};

const NavItems = ({ mobile }) => (
  <ul className={`${mobile ? 'flex flex-col' : 'flex'} w-full`}>
    <NavItem to="/home" label="Home" mobile={mobile} />
    <NavItem to="/gallery" label="Gallery" mobile={mobile} />
    <NavItem to="/register" label="Register" mobile={mobile} />
    <NavItem to="/partners" label="Partner with us" mobile={mobile} />
    <NavItem to="/paystatus" label="PayStatus" mobile={mobile} hidden />
  </ul>
);

const NavItem = ({ to, label, mobile, hidden }) => (
  <li className={`nav-item ${hidden ? 'hidden' : ''} ${mobile ? 'border-b border-yellow-400' : ''}`}>
    <Link 
      to={to} 
      className={`block text-white px-3 py-2 rounded-md text-sm font-bold hover:bg-yellow-600 transition duration-300
                  ${mobile ? 'hover:pl-4' : ''}`}
    >
      {label}
    </Link>
  </li>
);

export default Navbar;