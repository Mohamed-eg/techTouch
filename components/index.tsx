import type { NextPage } from "next";
import SubscribeForm from "./subscribe-form";
import MainHeader from "./main-header";
import CategoryFilterContainer1 from "./category-filter-container1";
import ExploreOurProducts from "./explore-our-products";
import MusicContainer from "./music-container";
import BestSelling from "./best-selling";
import NewArrival from "./new-arrival";

const Desktop1: NextPage = () => {
  return (
    <main className="relative bg-secondary-colors-white w-full h-[5596px] overflow-hidden">
      <SubscribeForm />
      <div className="absolute top-[0px] left-[0px] w-[1455px] overflow-hidden flex flex-col items-center justify-start">
        <MainHeader />
        <section
          className="w-[1455px] overflow-hidden flex flex-col items-start justify-center"
          id="hero"
        >
          <section
            className="bg-text2 flex flex-col items-start justify-start relative text-center text-base text-text font-title-20px-semibold"
            id="heroSec"
          >
            <div className="my-0 mx-[!important] absolute top-[58px] left-[204px] shrink-0 flex flex-row items-center justify-start gap-[71px] z-[0]">
              <div className="shrink-0 flex flex-col items-start justify-start gap-[83px]">
                <div className="shrink-0 flex flex-col items-start justify-start gap-[20px]">
                  <div className="shrink-0 flex flex-row items-center justify-start gap-[24px]">
                    <img
                      className="relative w-10 h-[49px]"
                      alt=""
                      src="/1200pxapple-gray-logo-1.svg"
                    />
                    <h2 className="m-0 relative text-inherit leading-[24px] font-normal font-inherit inline-block w-[126px] h-5 shrink-0">
                      iPhone 14 Series
                    </h2>
                  </div>
                  <h1 className="m-0 relative text-29xl tracking-[0.04em] leading-[60px] font-semibold font-heading-24px-semibold text-left inline-block w-[294px]">
                    Up to 10% off Voucher
                  </h1>
                </div>
                <a
                  className="[text-decoration:none] shrink-0 flex flex-row items-center justify-start gap-[8px] text-[inherit]"
                  href={`"#products"`}
                >
                  <div className="shrink-0 flex flex-col items-start justify-start gap-[4px]">
                    <div className="relative leading-[24px] font-medium">
                      Shop Now
                    </div>
                    <div className="relative box-border w-[82px] h-px border-t-[1px] border-solid border-text" />
                  </div>
                  <img
                    className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/icons-arrowright@2x.png"
                  />
                </a>
              </div>
              <img
                className="relative w-[704px] h-[442px] object-cover"
                alt=""
                src="/hero-endframe--cvklg0xk3w6e-large-2@2x.png"
              />
            </div>
          </section>
        </section>
      </div>
      <div className="absolute top-[543px] left-[-295px] w-[2045px] overflow-hidden flex flex-col items-start justify-center">
        <img
          className="relative rounded-[50%] w-[417px] h-[410px] object-cover"
          alt=""
          src="/ellipse-3@2x.png"
        />
      </div>
      <div className="absolute top-[767px] left-[135px] w-[1185px] overflow-hidden flex flex-col items-start justify-center">
        <section className="flex flex-col items-start justify-start gap-[70px]">
          <CategoryFilterContainer1 />
          <div className="relative box-border w-[1170.5px] h-[0.5px] opacity-[0.3] border-t-[0.5px] border-solid border-text2" />
          <ExploreOurProducts />
        </section>
      </div>
      <div className="absolute top-[1087px] left-[-297px] w-[2049px] overflow-hidden flex flex-col items-end justify-center">
        <img
          className="relative rounded-[50%] w-[417px] h-[410px] object-cover"
          alt=""
          src="/ellipse-3@2x.png"
        />
      </div>
      <div className="absolute top-[2073px] left-[-282px] w-[2019px] overflow-hidden flex flex-col items-start justify-center">
        <img
          className="relative rounded-[50%] w-[417px] h-[410px] object-cover"
          alt=""
          src="/ellipse-3@2x.png"
        />
      </div>
      <MusicContainer />
      <div className="absolute top-[2798px] left-[-297px] w-[2049px] overflow-hidden flex flex-col items-end justify-center">
        <img
          className="relative rounded-[50%] w-[417px] h-[410px] object-cover"
          alt=""
          src="/ellipse-3@2x.png"
        />
      </div>
      <BestSelling />
      <div className="absolute top-[3398px] left-[-297px] w-[2049px] overflow-hidden flex flex-col items-start justify-center">
        <img
          className="relative rounded-[50%] w-[417px] h-[410px] object-cover"
          alt=""
          src="/ellipse-3@2x.png"
        />
      </div>
      <NewArrival />
      <div className="absolute top-[4359px] left-[-322px] w-[2049px] overflow-hidden flex flex-col items-end justify-center">
        <img
          className="relative rounded-[50%] w-[417px] h-[410px] object-cover"
          alt=""
          src="/ellipse-3@2x.png"
        />
      </div>
    </main>
  );
};

export default Desktop1;
