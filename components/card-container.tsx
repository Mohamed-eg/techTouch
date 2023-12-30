"use client"
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import UnderLineIcon from "./under-line-icon";

type CardContainerType = {
  productTitle?: string;
  productDescription?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
  propWidth?: CSSProperties["width"];
};

const CardContainer: NextPage<CardContainerType> = ({
  productTitle,
  productDescription,
  propTop,
  propLeft,
  propWidth,
}) => {
  const frameDiv4Style: CSSProperties = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  const blackAndWhiteStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className="absolute top-[446px] left-[32px] flex flex-col items-start justify-start gap-[16px] text-left text-5xl text-text font-heading-24px-semibold"
      style={frameDiv4Style}
    >
      <div className=" flex flex-col items-start justify-start gap-[16px]">
        <div className="relative tracking-[0.03em] leading-[24px] font-semibold">
          {productTitle}
        </div>
        <div
          className="relative text-sm leading-[21px] font-title-20px-semibold inline-block w-[242px]"
          style={blackAndWhiteStyle}
        >
          {productDescription}
        </div>
      </div>
      <div className=" flex flex-col items-start justify-start text-base text-secondary-colors-white font-title-20px-semibold">
        <div className="relative leading-[24px] font-medium">Shop Now</div>
        <UnderLineIcon
          underLineIconUnderLine="/underline@2x.png"
          underLineIconWidth="81px"
          underLineIconPosition="relative"
          underLineIconTop="unset"
          underLineIconLeft="unset"
        />
      </div>
    </div>
  );
};

export default CardContainer;
