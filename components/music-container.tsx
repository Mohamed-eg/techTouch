import type { NextPage } from "next";
// import FlashSaleOfferSeconds from "./flash-sale-offer-seconds";
import Image from 'next/image'
import speakerImg from '../public/jbl-boombox-2-hero-020-x1-1-1@2x.png'

const MusicContainer: NextPage = () => {
  return (
    <section className="relative w-full overflow-hidden flex flex-col items-center m-auto justify-center text-left text-base text-scondry font-title-20px-semibold">
      <div className="w-[82vw] flex flex-col items-center justify-center">
        <div className="rounded-sm bg-primary1 w-full h-auto overflow-hidden flex flex-row items-center justify-center py-0 px-11 box-border gap-[27px]">
          <div className=" h-[362px]   flex flex-col items-start justify-start gap-[32px]">
            <div className=" h-[172px]  flex flex-col items-start justify-start gap-[32px]">
              <span className="absolute leading-[20px] pt-9 font-semibold">
                Categories
              </span>
              <h1 className="m-0 relative text-[3.3vw] tracking-[0.04em] leading-[60px] mt-16 font-semibold font-heading-24px-semibold text-wrap text-text  max-sm:hidden inline-block">
                Enhance Your Music Experience
              </h1>
            </div>
            {/* <div className=" h-[158px] flex flex-col items-start justify-start gap-[40px]">
              <div className="flex flex-row items-center justify-start flex-wrap gap-[24px]">
                <FlashSaleOfferSeconds
                  prop="23"
                  seconds="Hours"
                  flashSaleOfferSecondsPosition="relative"
                  ellipseDivBackgroundColor="#fff"
                  frameDivWidth="51.61%"
                  frameDivRight="24.19%"
                  frameDivLeft="24.19%"
                  divColor="#000"
                  secondsColor="#000"
                  secondsWidth="32px"
                />
                <FlashSaleOfferSeconds
                  prop="05"
                  seconds="Days"
                  flashSaleOfferSecondsPosition="relative"
                  ellipseDivBackgroundColor="#fff"
                  frameDivWidth="45.16%"
                  frameDivRight="27.42%"
                  frameDivLeft="27.42%"
                  divColor="#000"
                  secondsColor="#000"
                  secondsWidth="28px"
                />
                <FlashSaleOfferSeconds
                  prop="59"
                  seconds="Minutes"
                  flashSaleOfferSecondsPosition="relative"
                  ellipseDivBackgroundColor="#fff"
                  frameDivWidth="67.74%"
                  frameDivRight="16.13%"
                  frameDivLeft="16.13%"
                  divColor="#000"
                  secondsColor="#000"
                  secondsWidth="43px"
                />
                <FlashSaleOfferSeconds
                  prop="35"
                  seconds="Seconds"
                  flashSaleOfferSecondsPosition="relative"
                  ellipseDivBackgroundColor="#fff"
                  frameDivWidth="77.42%"
                  frameDivRight="11.29%"
                  frameDivLeft="11.29%"
                  divColor="#000"
                  secondsColor="#000"
                  secondsWidth="48px"
                />
              </div>
            </div> */}
          </div>
          <div className="w-[40vw]  max-sm:w-full flex flex-row items-center justify-center">
            <div className="w-full  flex flex-col items-center justify-center py-0 pr-0 box-border">
              <Image alt="img"
                className="relative w-[32vw] max-sm:w-full h-[22.7vw] z-30 mr-11 object-contain"
                 
                src={speakerImg}
              />
            <div className="absolute rounded-[50%] bg-gainsboro-200 [filter:blur(200px)] w-[35vw] h-[35vw]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicContainer;
