"use client"
import Loveicon from "./love-icon"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useCallback } from "react";
import Sidebar from "./sidebar";


const Nav = () => {
  const [searchComponentSetValue, setSearchComponentSetValue] = useState("");
  const router = useRouter();

  const onIconsCurvedBuyClick = useCallback(() => {
    router.push("/cart");
  }, [router]);

  return (
    <header className="w-full h-[94px] flex flex-col items-center justify-center p-2.5 box-border">
      <nav
        className="m-0 w-full flex flex-row items-center  "
        id="mainNav">
        <nav className="m-auto p-2 flex flex-row items-center justify-center w-full max-lg:w-[75%] max-sm:m-0 max-sm:p-0 max-md:w-[25%]">
          <img
            className="relative w-[4.9vw] max-md:w-[20vw] max-w-[71px] object-cover"
            alt=""
            src="/touch tech logo.png"
          />
          <ul
            className="m-0  flex flex-row items-start justify-start gap-[48px] max-md:hidden text-center text-base text-darkslategray font-title-20px-semibold"
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
              href="/cart">
              Cart
            </Link>
            <Link
              className="cursor-pointer [text-decoration:none] relative leading-[24px] text-[inherit] hover:text-[#28a12e] focus:[text-decoration:underline]"
              href="/home">
              About
            </Link>
          </ul>
        </nav>
        <div className=" flex flex-row  items-center justify-around w-[50%] max-sm:w-[75%] m-auto">
          <input
            className="[border:none] [outline:none] font-title-20px-semibold text-xs bg-secondary rounded-xl max-md:w-[30vw] max-md:placeholder:text-[9px] py-[7px] pr-3 pl-5 text-text2"
            id="searchNav"
            placeholder="What are you looking for?"
            type="text"
            value={searchComponentSetValue}
            onChange={(event) => setSearchComponentSetValue(event.target.value)}
          />
          <div className=" flex flex-row items-center justify-center gap-[2vw]">
            <Loveicon />
            <img
              className="relative w-8 h-8 max-md:w-[5vw] max-md:h-[5vw] max-w-8 max-h-8 overflow-hidden object-cover max-sm:hidden cursor-pointer"
              alt=""
              src="/user@2x.png"
            />
            <img
              className="relative w-8 h-8  max-md:w-[5vw] max-md:h-[5vw] max-w-8 max-h-8 object-cover max-sm:hidden cursor-pointer"
              alt=""
              src="/iconscurvedbuy.png"
              onClick={onIconsCurvedBuyClick}
            />
            <div className="md:hidden"><Sidebar /></div>

          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
