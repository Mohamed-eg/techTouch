"use client"
import type { NextPage } from "next";
import { useState } from "react";
import DeliveryContainer from "./delivery-container";
import Property1Default1 from "./property1-default1";
import FooterComp from "./footer";
import deleveryImg1 from "../public/services.png";
import deleveryImg2 from "../public/services1.png";
import deleveryImg3 from "../public/services@2x.png";
import upArrow from "../public/frame@2x.png"
import Rectangle from "../public/rectangle-133@2x.png"
import Image from 'next/image'

const SubscribeForm: NextPage = () => {
  const [enterYourEmailValue, setEnterYourEmailValue] = useState("");
  return (
    <div className=" w-full h-[1005px] overflow-hidden flex flex-row items-start justify-between text-left text-xl text-text2 font-title-20px-semibold">
      <div className="w-full overflow-hidden  flex flex-col items-center justify-start">
        <div className="w-full overflow-hidden  flex flex-col items-center justify-end">
          <div className="flex flex-row items-center justify-around">
            <DeliveryContainer
              featureImageUrl={deleveryImg1}
              serviceDescription="FREE AND FAST DELIVERY"
              discreption="Free delivery for all orders over $140"
            />
            <DeliveryContainer
              featureImageUrl={deleveryImg2}
              serviceDescription="24/7 CUSTOMER SERVICE"
              discreption="Friendly 24/7 customer support"
            />
            <DeliveryContainer
              featureImageUrl={deleveryImg3}
              serviceDescription="MONEY BACK GUARANTEE"
              discreption="We reurn money within 30 days"
            />
          </div>
          <section
            className="w-full h-[713px] mt-12 flex flex-col items-start justify-start text-center text-26xl text-secondary-colors-white font-nunito-sans"
            id="footerSec"
          >
            <div className="flex w-full flex-col items-center justify-center relative gap-[10px]">
              <div className="w-full h-[337.5px] flex flex-col items-center justify-start z-[0]">
                <Image  alt="img"
                  className="relative w-full h-[337.5px] object-cover"
                  src={Rectangle}
                />
                <div className="relative bg-lead w-full h-[337.5px] opacity-[0.5] mix-blend-normal mt-[-337px]" />
              </div>
              <div className="my-0 mx-[!important] absolute top-[52.5px] left-[276px]  flex flex-col items-center justify-start gap-[26px] z-[1]">
                <h1 className="m-0 relative text-inherit leading-[140%] font-bold font-inherit">
                  Subscribe Now To Get Services Best Of Us
                </h1>
                <div className="relative text-lg leading-[140%] font-semibold inline-block w-[526.5px]">{`We recommended you to subscribe to our newspaper, enter your email below to get our daily update about us. `}</div>
                <form className="m-0 rounded-xl bg-secondary-colors-white w-[525px] h-[60px] flex flex-col items-end justify-end py-[5.000030517578125px] px-[9.5px] box-border">
                  <div className="w-[500.5px] h-[44.5px] flex flex-row items-center justify-start gap-[184px]">
                    <input
                      className="[border:none] [outline:none] font-semibold font-nunito-sans text-mini bg-[transparent] relative text-primary1 text-left"
                      placeholder="Enter your email address"
                      type="text"
                      value={enterYourEmailValue}
                      onChange={(event) =>
                        setEnterYourEmailValue(event.target.value)
                      }
                    />
                    <Property1Default1
                      shopNow="Subscribe"
                      property1DefaultBackgroundColor="#0a5c99"
                      property1DefaultPadding="9.75px 31.5px"
                      property1DefaultBoxSizing="border-box"
                      property1DefaultCursor="pointer"
                      property1DefaultBorder="none"
                      shopNowFontSize="18px"
                      shopNowDisplay="inline-block"
                      shopNowMargin="0"
                      shopNowFontWeight="700"
                    />
                  </div>
                </form>
              </div>
            </div>
            <FooterComp
              frameDivPosition="unset"
              frameDivBottom="unset"
              frameDivLeft="unset"
              iconsCurvedLocationObjectFit="unset"
            />
          <a href="#hero" className="fixed w-[46px] h-[46px] bottom-10 right-5">
            <Image alt="img"
            className="relative w-[46px] rounded-full h-[46px] overflow-hidden rounder object-cover"
            src={upArrow}
            />
            </a>
          </section>
        </div>
      </div>
    
    </div>
  );
};

export default SubscribeForm;
