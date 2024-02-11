"use client"
import React, { useState } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from "react-redux";
import { faBars, faHome, faShop, faStream, faCog, faPerson } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Link from 'next/link';

interface NavItemProps {
  text: string;
  icon: IconDefinition;
  href: string;
}

const NavItem: React.FC<NavItemProps> = ({ text, icon, href }) => {
  return (
    <Link href={href} className="flex items-center px-4 py-2 text-black hover:bg-gray-200">
      <FontAwesomeIcon icon={icon} className="mr-4" />
      <span className="mx-4">{text}</span>
    </Link>
  );
};

const Sidebar: React.FC = () => {

  const cart = useSelector((state: any) => state.products.cart)

  // const getTotalQuantity = () => {
  //   let total = 0
  //   cart?.forEach((item: any) => {
  //     total += item.quantity
  //   })
  //   return total
  // }
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
          <span className="bg-[#d61414] absolute top-[140px] right-[210px] px-1 text-white rounded-full ">0</span>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;