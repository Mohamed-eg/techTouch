import type { NextPage } from "next";
import { useState } from "react";
import DeliveryContainer from "./delivery-container";
import Property1Default1 from "./property1-default1";
import FrameComponent from "./frame-component";

const SubscribeForm: NextPage = () => {
  const [enterYourEmailValue, setEnterYourEmailValue] = useState("");
  return (
    <div className="absolute top-[4591px] left-[2px] w-[1465px] h-[1005px] overflow-hidden flex flex-row items-start justify-between text-left text-xl text-text2 font-title-20px-semibold">
      <div className="w-[1440px] h-[1014.5px] overflow-hidden shrink-0 flex flex-col items-center justify-end">
        <div className="w-[1440px] h-[1014.5px] overflow-hidden shrink-0 flex flex-col items-center justify-end">
          <div className="flex flex-row items-center justify-center gap-[88px]">
            <DeliveryContainer
              featureImageUrl="/services@2x.png"
              serviceDescription="FREE AND FAST DELIVERY"
              promotionImageUrl="Free delivery for all orders over $140"
              propFlexShrink="0"
              propFlexShrink1="0"
              propTextAlign="center"
            />
            <DeliveryContainer
              featureImageUrl="/services1@2x.png"
              serviceDescription="24/7 CUSTOMER SERVICE"
              promotionImageUrl="Friendly 24/7 customer support"
              propFlexShrink="unset"
              propWidth="262px"
              propFlexShrink1="unset"
              propTextAlign="left"
            />
            <DeliveryContainer
              featureImageUrl="/services2@2x.png"
              serviceDescription="MONEY BACK GUARANTEE"
              promotionImageUrl="We reurn money within 30 days"
              propFlexShrink="0"
              propWidth="unset"
              propFlexShrink1="0"
              propTextAlign="left"
            />
          </div>
          <section
            className="w-[1440px] h-[713px] flex flex-col items-start justify-start text-center text-26xl text-secondary-colors-white font-nunito-sans"
            id="footerSec"
          >
            <div className="flex flex-col items-center justify-center relative gap-[10px]">
              <div className="w-[1440px] h-[337.5px] flex flex-col items-center justify-start z-[0]">
                <img
                  className="relative w-[1440px] h-[337.5px] object-cover"
                  alt=""
                  src="/rectangle-133@2x.png"
                />
                <div className="relative bg-lead w-[1440px] h-[337.5px] opacity-[0.5] mix-blend-normal mt-[-337px]" />
              </div>
              <div className="my-0 mx-[!important] absolute top-[52.5px] left-[276px] shrink-0 flex flex-col items-center justify-start gap-[26px] z-[1]">
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
            <FrameComponent
              touchTechLogoFinal2="/touch-tech-logo-final-2@2x.png"
              iconsCurvedLocation="/iconscurvedlocation.svg"
              iconsCurvedCall="/iconscurvedcall@2x.png"
              iconsCurvedMessage="/iconscurvedmessage@2x.png"
              qrcode1="/qrcode-1@2x.png"
              pngTransparentGooglePlayS="/pngtransparentgoogleplaystorelogogoogleplayappstoreandroidwalletstextlabellogo@2x.png"
              vector1="/vector-1@2x.png"
              vector2="/vector-2@2x.png"
              vector3="/vector-3@2x.png"
              vector4="/vector-4@2x.png"
              downloadAppstore="/downloadappstore@2x.png"
              facebook="/-facebook@2x.png"
              twitter="/twitter@2x.png"
              whatsApp="/whatsapp@2x.png"
              instagram="/instagram@2x.png"
              linkedIn="/linkedin@2x.png"
              frameDivPosition="unset"
              frameDivBottom="unset"
              frameDivLeft="unset"
              iconsCurvedLocationObjectFit="unset"
            />
          </section>
        </div>
      </div>
      <img
        className="relative w-[46px] h-[271px] overflow-hidden shrink-0 object-cover"
        alt=""
        src="/frame@2x.png"
      />
    </div>
  );
};

export default SubscribeForm;
