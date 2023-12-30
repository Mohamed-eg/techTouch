"use client"
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type FlashSaleOfferSecondsType = {
  prop?: string;
  seconds?: string;

  /** Style props */
  flashSaleOfferSecondsPosition?: CSSProperties["position"];
  ellipseDivBackgroundColor?: CSSProperties["backgroundColor"];
  frameDivWidth?: CSSProperties["width"];
  frameDivRight?: CSSProperties["right"];
  frameDivLeft?: CSSProperties["left"];
  divColor?: CSSProperties["color"];
  secondsColor?: CSSProperties["color"];
  secondsWidth?: CSSProperties["width"];
};

const FlashSaleOfferSeconds: NextPage<FlashSaleOfferSecondsType> = ({
  prop,
  seconds,
  flashSaleOfferSecondsPosition,
  ellipseDivBackgroundColor,
  frameDivWidth,
  frameDivRight,
  frameDivLeft,
  divColor,
  secondsColor,
  secondsWidth,
}) => {
  const flashSaleOfferSecondsStyle: CSSProperties = useMemo(() => {
    return {
      position: flashSaleOfferSecondsPosition,
    };
  }, [flashSaleOfferSecondsPosition]);

  const ellipseDiv1Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: ellipseDivBackgroundColor,
    };
  }, [ellipseDivBackgroundColor]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      width: frameDivWidth,
      right: frameDivRight,
      left: frameDivLeft,
    };
  }, [frameDivWidth, frameDivRight, frameDivLeft]);

  const divStyle: CSSProperties = useMemo(() => {
    return {
      color: divColor,
    };
  }, [divColor]);

  const secondsStyle: CSSProperties = useMemo(() => {
    return {
      color: secondsColor,
      width: secondsWidth,
    };
  }, [secondsColor, secondsWidth]);

  return (
    <div
      className="w-[62px] h-[62px] text-left text-base text-text font-title-20px-semibold"
      style={flashSaleOfferSecondsStyle}
    >
      <div
        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-text2"
        style={ellipseDiv1Style}
      />
      <div
        className="absolute h-[54.84%] w-[77.42%] top-[22.58%] right-[11.29%] bottom-[22.58%] left-[11.29%] flex flex-col items-center justify-start"
        style={frameDiv1Style}
      >
        <div className="relative leading-[20px] font-semibold" style={divStyle}>
          {prop}
        </div>
        <div
          className="relative text-2xs leading-[18px] inline-block w-12 mt-[-4px]"
          style={secondsStyle}
        >
          {seconds}
        </div>
      </div>
    </div>
  );
};

export default FlashSaleOfferSeconds;
