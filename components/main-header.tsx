import type { NextPage } from "next";
import { useState, useCallback } from "react";
import Link from "next/link";
import Header1 from "./header1";
import HomeDiv from "./home-div";
import FormLink from "./form-link";
import { useRouter } from "next/router";

const MainHeader: NextPage = () => {
  const [searchComponentSetValue, setSearchComponentSetValue] = useState("");
  const router = useRouter();

  const onIconsCurvedBuyClick = useCallback(() => {
    router.push("/cart");
  }, [router]);

  return (
    <header className="w-[1455px] overflow-hidden flex flex-col items-start justify-center">
      <section className="flex flex-col items-start justify-start" id="navSec">
        <Header1 />
        <header className="w-[1440px] h-[94px] flex flex-col items-center justify-center p-2.5 box-border">
          <nav
            className="m-0 w-[1170px] flex flex-row items-center justify-between"
            id="mainNav"
          >
            <nav className="m-0 shrink-0 flex flex-row items-center justify-center gap-[190px]">
              <img
                className="relative w-[71px] h-[49px] object-cover"
                alt=""
                src="/touch-tech-logo-final-21@2x.png"
              />
              <nav
                className="m-0 shrink-0 flex flex-row items-start justify-start gap-[48px] text-center text-base text-darkslategray font-title-20px-semibold"
                id="topNav"
              >
                <Link
                  className="cursor-pointer [text-decoration:none] shrink-0 flex flex-col items-center justify-start gap-[4px] text-text2"
                  href="/home"
                >
                  <div className="relative leading-[24px]">Home</div>
                  <HomeDiv />
                </Link>
                <Link
                  className="cursor-pointer [text-decoration:none] relative leading-[24px] text-[inherit]"
                  href="/categories"
                >
                  Categories
                </Link>
                <Link
                  className="cursor-pointer [text-decoration:none] relative leading-[24px] text-[inherit]"
                  href="/cart"
                >
                  Cart
                </Link>
                <Link
                  className="cursor-pointer [text-decoration:none] relative leading-[24px] text-[inherit]"
                  href="/home"
                >
                  About
                </Link>
              </nav>
            </nav>
            <div className="shrink-0 flex flex-row items-center justify-start gap-[24px]">
              <input
                className="[border:none] [outline:none] font-title-20px-semibold text-xs bg-secondary rounded-xl shrink-0 flex flex-col items-center justify-center py-[7px] pr-3 pl-5 text-text2"
                id="searchNav"
                placeholder="What are you looking for?"
                type="text"
                value={searchComponentSetValue}
                onChange={(event) =>
                  setSearchComponentSetValue(event.target.value)
                }
              />
              <div className="shrink-0 flex flex-row items-center justify-center gap-[16px]">
                <FormLink />
                <img
                  className="relative w-8 h-8 overflow-hidden shrink-0 object-cover hidden"
                  alt=""
                  src="/user@2x.png"
                />
                <img
                  className="relative w-8 h-8 object-cover cursor-pointer"
                  alt=""
                  src="/iconscurvedbuy@2x.png"
                  onClick={onIconsCurvedBuyClick}
                />
              </div>
            </div>
          </nav>
        </header>
      </section>
    </header>
  );
};

export default MainHeader;
