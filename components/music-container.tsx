import type { NextPage } from "next";
import FlashSaleOfferSeconds from "./flash-sale-offer-seconds";
import Property1Default from "./property1-default";

const MusicContainer: NextPage = () => {
  return (
    <section className="absolute top-[2404px] left-[135px] w-[1185px] overflow-hidden flex flex-col items-start justify-center text-left text-base text-scondry font-title-20px-semibold">
      <div className="w-[1170px] flex flex-col items-center justify-center">
        <div className="rounded-sm bg-primary1 w-[1170px] h-[500px] overflow-hidden  flex flex-row items-center justify-start py-0 px-11 box-border gap-[27px]">
          <div className="w-[443px] h-[362px] overflow-hidden  flex flex-col items-start justify-start gap-[32px]">
            <div className="w-[443px] h-[172px] overflow-hidden  flex flex-col items-start justify-start gap-[32px]">
              <span className="relative leading-[20px] font-semibold">
                Categories
              </span>
              <h1 className="m-0 relative text-29xl tracking-[0.04em] leading-[60px] font-semibold font-heading-24px-semibold text-text inline-block w-[443px]">
                Enhance Your Music Experience
              </h1>
            </div>
            <div className="w-80 h-[158px] overflow-hidden  flex flex-col items-start justify-start gap-[40px]">
              <div className="flex flex-row items-start justify-start gap-[24px]">
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
              <Property1Default
                property1DefaultCursor="pointer"
                property1DefaultBorder="none"
                property1DefaultPadding="0"
                property1DefaultBackgroundColor="transparent"
                viewAllProductsDisplay="inline-block"
              />
            </div>
          </div>
          <div className="w-[600px] h-[500px] overflow-hidden  flex flex-row items-center justify-end">
            <div className="w-[600px] h-[420px] overflow-hidden  flex flex-col items-end justify-center py-0 pr-0 pl-4 box-border">
              <img
                className="relative w-[568px] h-[330px] object-contain"
                alt=""
                src="/jbl-boombox-2-hero-020-x1-1-1@2x.png"
              />
            </div>
            <div className="relative rounded-[50%] bg-gainsboro-200 [filter:blur(200px)] w-[504px] h-[500px] opacity-[0.3] ml-[-574px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicContainer;
