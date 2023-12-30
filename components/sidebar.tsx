import React, { useState } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faHome,faShop,faStream,faCog,faPerson,faHeart } from '@fortawesome/free-solid-svg-icons';

interface NavItemProps {
 text: string;
 icon: IconDefinition;
 href: string;
}

const NavItem: React.FC<NavItemProps> = ({ text, icon, href }) => {
 return (
    <a href={href} className="flex items-center px-4 py-2 text-black hover:bg-gray-200">
      <FontAwesomeIcon icon={icon} className="mr-4" />
      <span className="mx-4">{text}</span>
    </a>
 );
};

const Sidebar: React.FC = () => {
 const [sidebarOpen, setSidebarOpen] = useState(false);

 const toggleSidebar = () => {
   setSidebarOpen(!sidebarOpen);
 };

 return (
   <div className="relative w-8 h-8 max-md:w-5 max-md:h-5 object-cover cursor-pointer flex items-center justify-center">
     <button className="absolute right-0 text-xl font-bold text-black" onClick={toggleSidebar}>
       <FontAwesomeIcon icon={faBars} />
     </button>
     <div className={`fixed z-50 right-0 top-0 h-full w-64 overflow-y-auto bg-white shadow-md transition-all duration-300 transform ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
       <button className="absolute right-0 ml-6 mt-6 text-xl font-bold text-black" onClick={toggleSidebar}>&times;</button>
       <nav className="mt-10">
         <NavItem text="Home" icon={faHome} href="/" />
         <NavItem text="profile" icon={faPerson} href="/login" />
         <NavItem text="Categories" icon={faStream} href="/categories" />
         <NavItem text="Card" icon={faShop} href="/card" />
         <NavItem text="wish list" icon={faHeart} href="/wishList" />
         <NavItem text="About" icon={faCog} href="/about" />
       </nav>
     </div>
   </div>
 );
};

export default Sidebar;