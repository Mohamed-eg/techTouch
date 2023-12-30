import React from "react";

const Hero = () => {
  return (
    <section
      className="w-[1455px] bg-text2 overflow-hidden flex flex-col items-center justify-center"
      id="hero">
      <section
        className="bg-text2 flex flex-col items-start justify-start relative text-center text-[1.11vw] text-text font-title-20px-semibold"
        id="heroSec">
        <div className="my-0 flex flex-row items-center justify-between z-[0]">
          <div className=" flex flex-col items-start justify-start gap-[5.7vw]">
            <div className=" flex flex-col items-start justify-start gap-[1.3vw]">
              <div className=" flex flex-row items-center justify-start gap-[1.6vw] max-sm:w-full">
                <img
                  className="relative w-[3vw] max-sm:w-5"
                  alt=""
                  src="/1200pxapple-gray-logo-1.svg"
                />
                <h2 className="m-0 relative text-inherit max-sm:text-[16px] leading-[24px] font-normal font-inherit inline-block">
                  iPhone 14 Series
                </h2>
              </div>
              <h1 className="m-0 relative text-[3.34vw] max-sm:text-[24px] tracking-[0.04em] leading-[60px] font-semibold font-heading-24px-semibold text-left inline-block w-[294px]">
                Up to 10% off Voucher
              </h1>
            </div>
            <a
              className="[text-decoration:none]  flex flex-row items-center justify-start gap-[8px] text-[11px] w-[82px] text-white"
              href={`"#products"`}>
              <div className=" flex flex-col items-center justify-start gap-[4px]">
                <div className="flex flex-row items-center justify-start gap-[4px]">
                  <span className="relative leading-[24px] text-center font-medium">
                    Shop Now
                  </span>
                  <img
                    className="relative w-[1.7vw] max-sm:w-4 overflow-hidden  object-cover"
                    alt=""
                    src="/icons-arrowright@2x.png"
                  />
                </div>
                <div className="relative box-border w-[85px] h-px border-t-[1px] border-solid border-text" />
              </div>
            </a>
          </div>
          <div className="max-sm:hidden">
            <img
              className="relative w-[40vw] object-cover"
              alt=""
              src="/hero-endframe--cvklg0xk3w6e-large-2@2x.png"
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Hero;
