import type { NextPage } from "next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowDownWideShort} from '@fortawesome/free-solid-svg-icons'


const Header1: NextPage = () => {
  return (
    <header
      className="flex justify-center items-center bg-primary1 w-full h-12 overflow-hidden  text-center text-sm text-secondary-colors-white font-title-20px-semibold"
      id="topHeader"
    >
      <div className="w-full flex flex-row items-center justify-around">
        <div className=" flex flex-row items-center justify-start gap-[8px] m-auto">
          <p className="m-0 relative leading-[21px] inline-block h-[18px] max-md:hidden">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <a
            className="[text-decoration:underline] relative leading-[24px] font-semibold text-[inherit] text-center"
            href={'#prodects'}
          >
            ShopNow
          </a>
         <span className="w-[24px]"> <FontAwesomeIcon icon={faArrowDownWideShort} /></span>
        </div>
        <select className="bg-[transparent] [border:none] mr-[136px] max-md:mr-5 py-[1.5px] px-0 font-title-20px-semibold text-sm text-secondary-colors-white" >
          <option className="text-black">English</option>
          <option className="text-black">Arabic</option>
        </select>
      </div>
    </header>
  );
};

export default Header1;
