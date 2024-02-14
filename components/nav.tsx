"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useCallback } from "react";
import buyImg from "../public/iconscurvedbuy.png"
import userImg from "../public/user@2x.png"
import Sidebar from "./sidebar";
import Image from 'next/image';
import { useSelector } from "react-redux";
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import axios from "axios";
import { auth } from "../src/firebase/firebase";
import { useDispatch } from 'react-redux';
import { createList } from '../src/redux/slices/searchSlice';
import { list } from "@chakra-ui/react";

interface NavItemProps {
  text: string;
  icon: IconDefinition;
  href: string;
}

const NavItem: React.FC<NavItemProps> = ({ text, icon, href }) => {
  return (
    <Link href={href} className="flex items-center text-black">
      <FontAwesomeIcon icon={icon} className="" />
    </Link>
  );
};

const Nav = () => {
  // const uid = auth.currentUser?.uid
  const uid = useSelector((state: any) => state.categories.currentUser)
  const router = useRouter()
  const [searchComponentSetValue, setSearchComponentSetValue] = useState("");
  const dispatch = useDispatch()
  const fetchSearch = async () => {
    try {
      const response = await axios.get(`https://backend.touchtechco.com/searchProduct?searchQuery=${searchComponentSetValue}`);
      return response.data.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };
  const cart = useSelector((state: any) => state.products.cart)
  const List = useSelector((state: any) => state.wishList.List)
  const myredux = useSelector((state: any) => state.searchList.List)

  const handelSubmit = (e: any) => {
    e.preventDefault()
    fetchSearch().then((data: any) => {
      if (data != null) { dispatch(createList(data)) }
      console.log(myredux)
      router.push("/home")
    });
  }


  const onIconsCurvedBuyClick = useCallback(() => {
    router.push(`/cart/id?id=${uid}`);
  }, [router]);
  // const onIconsPersonClick = useCallback(() => {
  //   router.push("/login");
  // }, [router]);
  // const onIconsWishListClick = useCallback(() => {
  //   router.push("/wishList");
  // }, [router]);

  return (
    <header className="w-full h-[94px] flex flex-col bg-slate-50 items-center justify-center p-2.5 box-border">
      <nav
        className="m-0 w-full flex flex-row items-center  "
        id="mainNav">
        <nav className="m-auto p-2 flex flex-row items-center justify-center w-full max-lg:w-[75%] max-sm:m-0 max-sm:p-0 max-md:w-[25%]">
          <div className="relative w-[4.9vw] max-md:w-[20vw] max-w-[71px] object-cover"> <Image width={71} height={49} alt="img"
            src="/touch tech logo.png"
          /></div>
          <ul
            className="m-0  flex flex-row items-start justify-start gap-[48px] max-md:hidden text-center text-base max-lg:text-sm text-darkslategray font-title-20px-semibold"
            id="topNav">
            <Link
              className="cursor-pointer [text-decoration:none] relative leading-[24px] text-[inherit] hover:text-[#28a12e] focus:[text-decoration:underline]"
              href="/">
              Home
            </Link>
            <Link
              className="cursor-pointer [text-decoration:none] relative leading-[24px] text-[inherit] hover:text-[#28a12e] focus:[text-decoration:underline]"
              href="/categories">
              Categories
            </Link>
            <Link
              className="cursor-pointer [text-decoration:none] relative leading-[24px] text-[inherit] hover:text-[#28a12e] focus:[text-decoration:underline]"
              href={`/cart/id?id=${uid}`}>
              Cart
            </Link>
            <Link
              className="cursor-pointer [text-decoration:none] relative leading-[24px] text-[inherit] hover:text-[#28a12e] focus:[text-decoration:underline]"
              href="/about">
              About
            </Link>
          </ul>
        </nav>
        <div className=" flex flex-row  items-center justify-around w-[50%] max-sm:w-[75%] m-auto">
          <form onSubmit={handelSubmit} action="">
            <input
              className="[border:none] [outline:none] font-title-20px-semibold text-xs bg-secondary rounded-xl max-md:w-[30vw] max-md:placeholder:text-[9px] py-[7px] pr-3 pl-5 text-text2"
              id="searchNav"
              placeholder="What are you looking for?"
              type="text"
              onChange={(event) => setSearchComponentSetValue(event.target.value)}
            />
          </form>
          <div className="relative flex flex-row items-center justify-center gap-[2vw]">

            <div className="relative max-sm:hidden text-[21px]">
              <NavItem text="" icon={faHeart} href="/wishList" />
              {List.length ? <span className="bg-[#d61414] absolute top-[-12px] right-[-7px] px-1 text-sm text-white rounded-full ">{List.length || 0}</span> : null}
            </div>

            <div onClick={(e, id = uid) => { router.push(`/${id ? id : "login"}`) }}>
              <Image alt="img"
                className="relative w-[2.2vw] h-[2.2vw] max-md:w-[5vw] max-md:h-[5vw] max-w-8 max-h-8 overflow-hidden object-cover max-sm:hidden cursor-pointer"
                src={userImg}
              />
              {uid ? <span className=" absolute flex w-3 h-3 bg-[#00cc00] rounded-full top-[-8px] right-[60px]"></span> : <span className=" absolute flex w-3 h-3 bg-[#a7a7a7] rounded-full top-[-8px] right-[60px]"></span>}
            </div>
            <div className="relative max-sm:hidden">
              <Image alt="img"
                className="relative w-[2.2vw] h-[2.2vw]  max-md:w-[5vw] max-md:h-[5vw] max-w-8 max-h-8 object-cover cursor-pointer"
                src={buyImg}
                onClick={onIconsCurvedBuyClick}
              />
              {cart.length === 0 ? null : <span className="bg-[#d61414] absolute top-[-8px] right-[-5px] px-1 text-white rounded-full ">{cart.length || 0}</span>}
            </div>
            <div className="hidden max-sm:block"><Sidebar /></div>

          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;

