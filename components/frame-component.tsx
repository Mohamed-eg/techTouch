"use client"
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import QrCode from "./qr-code";

type FrameComponentType = {
  touchTechLogoFinal2?: string;
  iconsCurvedLocation?: string;
  iconsCurvedCall?: string;
  iconsCurvedMessage?: string;
  qrcode1?: string;
  pngTransparentGooglePlayS?: string;
  vector1?: string;
  vector2?: string;
  vector3?: string;
  vector4?: string;
  downloadAppstore?: string;
  facebook?: string;
  twitter?: string;
  whatsApp?: string;
  instagram?: string;
  linkedIn?: string;

  /** Style props */
  frameDivPosition?: CSSProperties["position"];
  frameDivBottom?: CSSProperties["bottom"];
  frameDivLeft?: CSSProperties["left"];
  iconsCurvedLocationObjectFit?: CSSProperties["objectFit"];
};

const FrameComponent: NextPage<FrameComponentType> = ({
  touchTechLogoFinal2,
  iconsCurvedLocation,
  iconsCurvedCall,
  iconsCurvedMessage,
  qrcode1,
  pngTransparentGooglePlayS,
  vector1,
  vector2,
  vector3,
  vector4,
  downloadAppstore,
  facebook,
  twitter,
  whatsApp,
  instagram,
  linkedIn,
  frameDivPosition,
  frameDivBottom,
  frameDivLeft,
  iconsCurvedLocationObjectFit,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      position: frameDivPosition,
      bottom: frameDivBottom,
      left: frameDivLeft,
    };
  }, [frameDivPosition, frameDivBottom, frameDivLeft]);

  const iconsCurvedLocationStyle: CSSProperties = useMemo(() => {
    return {
      objectFit: iconsCurvedLocationObjectFit,
    };
  }, [iconsCurvedLocationObjectFit]);

  return (
    <div
      className="bg-foundation-blue-darker w-[1440px] h-[374px] flex flex-col items-center justify-center p-2.5 box-border text-left text-lg text-secondary-colors-white font-nunito-sans"
      style={frameDivStyle}
    >
      <div className="flex flex-col items-start justify-start gap-[42px]">
        <div className="w-[1170px]  flex flex-row items-start justify-between">
          <div className=" flex flex-col items-start justify-start gap-[24px] text-mini text-steam-color">
            <img
              className="relative w-[103px] h-[71px] object-cover"
              alt=""
              src={touchTechLogoFinal2}
            />
            <div className="relative leading-[150%] inline-block w-[307.5px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since.
            </div>
          </div>
          <div className=" flex flex-col items-start justify-start gap-[24px]">
            <b className="relative leading-[140%]">Customer</b>
            <div className=" flex flex-col items-start justify-start gap-[12px] text-mini text-steam-color">
              <div className="relative leading-[150%]">About us</div>
              <div className="relative leading-[150%]">Shop</div>
              <div className="relative leading-[150%]">Blog</div>
            </div>
          </div>
          <div className=" flex flex-col items-start justify-start gap-[24px]">
            <b className="relative leading-[140%]">Information</b>
            <div className=" flex flex-col items-start justify-start gap-[12px] text-mini text-steam-color">
              <div className="relative leading-[150%]">Contact</div>
              <div className="relative leading-[150%]">FAQ</div>
              <div className="relative leading-[150%]">Service</div>
            </div>
          </div>
          <div className=" flex flex-col items-start justify-start gap-[24px]">
            <b className="relative leading-[140%]">Contact Info</b>
            <div className=" flex flex-col items-start justify-start gap-[12px] text-mini text-steam-color">
              <div className=" flex flex-row items-center justify-start gap-[16px]">
                <div className="rounded-[38.25px] bg-secondary-colors-white  flex flex-row items-start justify-start p-[8.5px]">
                  <img
                    className="relative w-[17px] h-[17px] object-cover"
                    alt=""
                    src={iconsCurvedLocation}
                    style={iconsCurvedLocationStyle}
                  />
                </div>
                <div className="relative leading-[150%]">Behira Egypt</div>
              </div>
              <div className=" flex flex-row items-center justify-start gap-[14px]">
                <div className="rounded-[38.25px] bg-secondary-colors-white  flex flex-row items-center justify-center p-[8.5px]">
                  <img
                    className="relative w-[17px] h-[17px] object-cover"
                    alt=""
                    src={iconsCurvedCall}
                  />
                </div>
                <div className="relative leading-[150%]">01288929611</div>
              </div>
              <div className=" flex flex-row items-center justify-start gap-[12px]">
                <div className="rounded-[38.25px] bg-secondary-colors-white  flex flex-row items-start justify-start p-[8.5px]">
                  <img
                    className="relative w-[17px] h-[17px] object-cover"
                    alt=""
                    src={iconsCurvedMessage}
                  />
                </div>
                <div className="relative leading-[150%]">
                  aliatwan002@gmail.com
                </div>
              </div>
            </div>
          </div>
          <div className=" flex flex-col items-start justify-start gap-[24px] text-xl text-text font-title-20px-semibold">
            <div className="relative leading-[28px] font-medium">
              Download App
            </div>
            <div className=" flex flex-col items-start justify-start">
              <div className=" flex flex-row items-center justify-start gap-[8px]">
                <QrCode
                  qrcode1="/qrcode.png"
                  qrCodePosition="relative"
                  qrCodeFlexShrink="0"
                />
                <div className="h-[82px]  flex flex-col items-start justify-start gap-[4px]">
                  <div className="flex-1 bg-foundation-blue-darker overflow-hidden flex flex-col items-start justify-start p-[3px] relative gap-[10px]">
                    <img
                      className="relative rounded w-[104px] h-[30px] object-cover z-[0]"
                      alt=""
                      src={pngTransparentGooglePlayS}
                    />
                    <img
                      className="absolute my-0 mx-[!important] top-[22.2px] left-[99.4px] w-[0.6px] h-px object-cover z-[1]"
                      alt=""
                      src={vector1}
                    />
                    <img
                      className="absolute my-0 mx-[!important] top-[22px] left-[98.2px] w-[1.3px] h-[3.9px] object-cover z-[2]"
                      alt=""
                      src={vector2}
                    />
                    <img
                      className="absolute my-0 mx-[!important] top-[22.2px] left-[94.9px] w-[0.3px] h-[0.1px] object-cover z-[3]"
                      alt=""
                      src={vector3}
                    />
                    <img
                      className="absolute my-0 mx-[!important] top-[22.7px] left-[98.4px] w-[1.2px] h-[2.2px] object-cover z-[4]"
                      alt=""
                      src={vector4}
                    />
                  </div>
                  <div className="relative rounded-lg bg-foundation-blue-darker w-[110px] h-10 overflow-hidden   ">
                    <img
                      className="absolute top-[3px] left-[3px] rounded w-[104px] h-[34px] object-cover"
                      alt=""
                      src={downloadAppstore}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col items-start justify-start gap-[20px] text-mini text-steam-color">
          <div className="relative box-border w-[1170.8px] h-[0.8px] border-t-[0.8px] border-solid border-steam-color" />
          <div className=" flex flex-row items-center justify-start gap-[687px]">
            <div className="relative font-semibold">
              @ 2023 DIVANO. All Rights Reserved Ali Atwan
            </div>
            <div className=" flex flex-row items-start justify-start gap-[15px]">
              <img
                className="relative w-[18px] h-[18px] overflow-hidden  object-cover"
                alt=""
                src={facebook}
              />
              <img
                className="relative w-[18px] h-[18px] overflow-hidden  object-cover"
                alt=""
                src={twitter}
              />
              <img
                className="relative w-[18px] h-[18px] overflow-hidden  object-cover"
                alt=""
                src={whatsApp}
              />
              <img
                className="relative w-[18px] h-[18px] overflow-hidden  object-cover"
                alt=""
                src={instagram}
              />
              <img
                className="relative w-[18px] h-[18px] overflow-hidden  object-cover"
                alt=""
                src={linkedIn}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
