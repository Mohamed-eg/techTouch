"use client"
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import QrCode from "./qr-code";
import Image from 'next/image'
import touchTechLogo from '../public/touch tech logo.png'
import iconsCurvedLocation from '../public/iconscurvedlocation.svg'
import iconsCurvedCall from '../public/iconscurvedcall@2x.png'
import iconsCurvedMessage from '../public/iconscurvedmessage@2x.png'
import pngTransparentGooglePlayS from '../public/pngtransparentgoogleplaystorelogogoogleplayappstoreandroidwalletstextlabellogo@2x.png'
import vector1 from '../public/vector-1@2x.png'
import vector2 from '../public/vector-2@2x.png'
import vector3 from '../public/vector-3@2x.png'
import vector4 from '../public/vector-4@2x.png'
import downloadAppstore from '../public/downloadappstore@2x.png'
import facebook from '../public/-facebook@2x.png'
import twitter from '../public/twitter@2x.png'
import whatsApp from '../public/whatsapp@2x.png'
import instagram from '../public/instagram@2x.png'
import linkedIn from '../public/linkedin@2x.png'


              // touchTechLogoFinal2="/touch tech logo.png"
              // iconsCurvedLocation="/iconscurvedlocation.svg"
              // iconsCurvedCall="/"
              // ="/"
              // ="/qrcode-1@2x.png"
              // pngTransparentGooglePlayS="/pngtransparentgoogleplaystorelogogoogleplayappstoreandroidwalletstextlabellogo@2x.png"
              // vector1="/"
              // vector2="/vector-2@2x.png"
              // vector3="/vector-3@2x.png"
              // vector4="/vector-4@2x.png"
              // downloadAppstore="/"
              // ="/"
              // twitter="/"
              // ="/"
              // ="/"
              // linkedIn="/"

type FrameComponentType = {

  /** Style props */
  frameDivPosition?: CSSProperties["position"];
  frameDivBottom?: CSSProperties["bottom"];
  frameDivLeft?: CSSProperties["left"];
  iconsCurvedLocationObjectFit?: CSSProperties["objectFit"];
};

const FooterComp: NextPage<FrameComponentType> = ({
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
      className="bg-foundation-blue-darker w-full h-[374px] flex flex-col items-center justify-center p-2.5 box-border text-left text-lg text-secondary-colors-white font-nunito-sans"
      style={frameDivStyle}
    >
      <div className="flex flex-col items-start justify-start gap-[42px]">
        <div className="w-[1170px]  flex flex-row items-start justify-between">
          <div className=" flex flex-col items-start justify-start gap-[24px] text-mini text-steam-color">
            <Image alt="img"
              className="relative w-[103px] h-[71px] object-cover"
              src={touchTechLogo}
            />
            <div className="relative leading-[150%] inline-block w-[307.5px]">
             Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy text
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
                  <Image alt="img"
                    className="relative w-[17px] h-[17px] object-cover"
                     
                    src={iconsCurvedLocation}
                    style={iconsCurvedLocationStyle}
                  />
                </div>
                <div className="relative leading-[150%]">Behira Egypt</div>
              </div>
              <div className=" flex flex-row items-center justify-start gap-[14px]">
                <div className="rounded-[38.25px] bg-secondary-colors-white  flex flex-row items-center justify-center p-[8.5px]">
                  <Image alt="img"
                    className="relative w-[17px] h-[17px] object-cover"
                     
                    src={iconsCurvedCall}
                  />
                </div>
                <div className="relative leading-[150%]">01288929611</div>
              </div>
              <div className=" flex flex-row items-center justify-start gap-[12px]">
                <div className="rounded-[38.25px] bg-secondary-colors-white  flex flex-row items-start justify-start p-[8.5px]">
                  <Image alt="img"
                    className="relative w-[17px] h-[17px] object-cover"
                     
                    src={iconsCurvedMessage}
                  />
                </div>
                <div className="relative leading-[150%]">
                  {"aliatwan002@gmail.com"}
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
                  qrCodePosition="relative"
                  qrCodeFlexShrink="0"
                />
                <div className="h-[82px]  flex flex-col items-start justify-start gap-[4px]">
                  <div className="flex-1 bg-foundation-blue-darker overflow-hidden flex flex-col items-start justify-start p-[3px] relative gap-[10px]">
                    <Image alt="img"
                      className="relative rounded w-[104px] h-[30px] object-cover z-[0]"
                       
                      src={pngTransparentGooglePlayS}
                    />
                    <Image alt="img"
                      className="absolute my-0 mx-[!important] top-[22.2px] left-[99.4px] w-[0.6px] h-px object-cover z-[1]"
                       
                      src={vector1}
                    />
                    <Image alt="img"
                      className="absolute my-0 mx-[!important] top-[22px] left-[98.2px] w-[1.3px] h-[3.9px] object-cover z-[2]"
                       
                      src={vector2}
                    />
                    <Image alt="img"
                      className="absolute my-0 mx-[!important] top-[22.2px] left-[94.9px] w-[0.3px] h-[0.1px] object-cover z-[3]"
                       
                      src={vector3}
                    />
                    <Image alt="img"
                      className="absolute my-0 mx-[!important] top-[22.7px] left-[98.4px] w-[1.2px] h-[2.2px] object-cover z-[4]"
                       
                      src={vector4}
                    />
                  </div>
                  <div className="relative rounded-lg bg-foundation-blue-darker w-[110px] h-10 overflow-hidden   ">
                    <Image alt="img"
                      className="absolute top-[3px] left-[3px] rounded w-[104px] h-[34px] object-cover"
                       
                      src={downloadAppstore}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col items-start justify-start gap-[20px] text-mini text-steam-color">
          <div className="relative box-border w-full h-[0.8px] border-t-[0.8px] border-solid border-steam-color" />
          <div className=" flex flex-row items-center justify-start gap-[687px]">
            <div className="relative font-semibold">
              {"@ 2023 DIVANO. All Rights Reserved Ali Atwan"}
            </div>
            <div className=" flex flex-row items-start justify-start gap-[15px]">
              <Image alt="img"
                className="relative w-[18px] h-[18px] overflow-hidden  object-cover"
                 
                src={facebook}
              />
              <Image alt="img"
                className="relative w-[18px] h-[18px] overflow-hidden  object-cover"
                 
                src={twitter}
              />
              <Image alt="img"
                className="relative w-[18px] h-[18px] overflow-hidden  object-cover"
                 
                src={whatsApp}
              />
              <Image alt="img"
                className="relative w-[18px] h-[18px] overflow-hidden  object-cover"
                 
                src={instagram}
              />
              <Image alt="img"
                className="relative w-[18px] h-[18px] overflow-hidden  object-cover"
                 
                src={linkedIn}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterComp;
