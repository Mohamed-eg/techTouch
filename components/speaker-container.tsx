"use client"
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import UnderLineIcon from "./under-line-icon";

type SpeakerContainerType = {
  productTitle?: string;
  productDescription?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
};

const SpeakerContainer: NextPage<SpeakerContainerType> = ({
  productTitle,
  productDescription,
  propWidth,
}) => {
  const amazonWirelessSpeakersStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className="absolute top-[175px] left-[24px] flex flex-col items-start justify-start gap-[8px] text-left text-5xl text-text font-heading-24px-semibold">
      <div className=" flex flex-col items-start justify-start gap-[8px]">
        <div className="relative tracking-[0.03em] leading-[24px] font-semibold">
          {productTitle}
        </div>
        <div
          className="relative text-sm leading-[21px] font-title-20px-semibold inline-block w-[191px]"
          style={amazonWirelessSpeakersStyle}
        >
          {productDescription}
        </div>
      </div>
      <div className=" flex flex-col items-start justify-start text-base text-secondary-colors-white font-title-20px-semibold">
        <div className="relative leading-[24px] font-medium">Shop Now</div>
        <UnderLineIcon
          underLineIconWidth="81px"
          underLineIconPosition="relative"
          underLineIconTop="unset"
          underLineIconLeft="unset"
        />
      </div>
    </div>
  );
};

export default SpeakerContainer;
