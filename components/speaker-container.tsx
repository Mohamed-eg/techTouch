"use client"
import type { NextPage } from "next";
import Link from "next/link"
import { useMemo, type CSSProperties } from "react";
import { auth } from "../src/firebase/firebase";
import UnderLineIcon from "./under-line-icon";

type SpeakerContainerType = {
  productTitle?: string;
  productDescription?: string;
  productID?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
};

const SpeakerContainer: NextPage<SpeakerContainerType> = ({
  productTitle,
  productDescription,
  propWidth,
  productID,
}) => {
  const userId = auth.currentUser?.uid;
  const amazonWirelessSpeakersStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className="absolute top-[175px] w-full left-[24px] flex flex-col items-start justify-start gap-[8px] text-left text-5xl text-text font-heading-24px-semibold">
      <div className=" flex flex-col items-start w-full justify-start gap-[8px]">
        <div className="relative tracking-[0.03em] w-full leading-[24px] font-semibold">
          {productTitle}
        </div>
        <div
          className="relative text-sm leading-[21px] font-title-20px-semibold inline-block w-full"
          style={amazonWirelessSpeakersStyle}
        >
          {productDescription}
        </div>
      </div>
      <Link className=" cursor-pointer" href={userId ? `/productDeta/id?id=${productID}` : `./login`}>
        <div className=" flex flex-col items-start justify-start text-base text-secondary-colors-white font-title-20px-semibold">
          <div className="relative leading-[24px] cursor-pointer font-medium">Shop Now</div>
          <UnderLineIcon
            underLineIconWidth="81px"
            underLineIconPosition="relative"
            underLineIconTop="unset"
            underLineIconLeft="unset"
          />
        </div>
      </Link>
    </div>

  );
};

export default SpeakerContainer;
