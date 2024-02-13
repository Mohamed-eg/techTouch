import React from "react";
import Image from "next/image";
import heroImg from "../public/hero-endframe--cvklg0xk3w6e-large-2@2x.png";
import rightArrow from "../public/icons-arrowright@2x.png";
import appelImg from "../public/1200pxapple-gray-logo-1.svg";

const Hero = () => {
  return (
    <section
      className="w-full mt-36 bg-text2 overflow-hidden flex flex-col items-center justify-center"
      id="hero">
      <section
        className="w-full bg-text2 flex flex-col items-center justify-around relative text-center text-[1.11vw] text-text font-title-20px-semibold"
        id="heroSec">
        <div className="w-full my-0 flex flex-row items-center justify-around z-[0]">
          <div className=" flex flex-col items-start justify-center gap-[80px] w-[40%] ">
            <div className=" flex flex-col items-start justify-start mt-5 w-full gap-[1.3vw]">
              <div className=" flex flex-row items-center justify-start gap-[1.6vw] max-sm:w-full">
                <Image
                  alt="img"
                  className="relative w-[3vw] max-sm:w-5"
                  src={appelImg}
                />
                <h2 className="m-0 relative text-inherit max-sm:text-[16px] leading-[24px] font-normal font-inherit inline-block">
                  iPhone 14 Series
                </h2>
              </div>
              <h1 className="m-0 relative text-[3.34vw] max-sm:text-[24px] tracking-[0.04em] leading-[60px] font-semibold font-heading-24px-semibold text-left inline-block">
                Up to 10% off Voucher
              </h1>
            </div>
            <a
              className="[text-decoration:none] mb-[20px] flex flex-row items-center justify-start gap-[8px] text-[11px] w-full text-white"
              href={`"#products"`}>
              <div className=" flex flex-col items-center justify-start gap-[4px]">
                <div className="flex flex-row items-center justify-start gap-[4px]">
                  <span className="relative leading-[24px] mr-2 text-center text-lg font-medium">
                    Shop Now
                  </span>
                  <Image
                    alt="img"
                    className="relative w-[1.7vw] max-sm:w-4 overflow-hidden  object-contain"
                    src={rightArrow}
                  />
                </div>
                <div className="relative box-border w-full h-px border-t-[1px] border-solid border-text" />
              </div>
            </a>
          </div>
          <div className="relative h-[50vw] max-sm:hidden">
            <Image
              alt="img"
              src={heroImg}
              className=" w-[47vw] object-contain"
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Hero;
