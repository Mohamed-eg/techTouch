"use client"
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type BestSellingProductsCardType = {
  sectionTitle?: string;
  pageTitle?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propColor?: CSSProperties["color"];
  propMargin?: CSSProperties["margin"];
};

const BestSellingProductsCard: NextPage<BestSellingProductsCardType> = ({
  sectionTitle,
  pageTitle,
  propBackgroundColor,
  propColor,
  propMargin,
}) => {
  const rectangleDivStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const thisMonthStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const bestSellingProductsStyle: CSSProperties = useMemo(() => {
    return {
      margin: propMargin,
    };
  }, [propMargin]);

  return (
    <div className=" flex flex-col items-start justify-start mx-5 gap-[20px] text-left text-base text-primary1 font-title-20px-semibold">
      <div className=" flex flex-row items-center justify-start gap-[16px]">
        <div className="relative w-5 h-10">
          <div
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded bg-primary1"
            style={rectangleDivStyle}
          />
        </div>
        <span
          className="relative leading-[20px] font-semibold"
          style={thisMonthStyle}
        >
          {sectionTitle}
        </span>
      </div>
      <h2
        className="m-0 relative text-17xl tracking-[0.04em] leading-[48px] font-semibold font-heading-24px-semibold text-text2"
        style={bestSellingProductsStyle}
      >
        {pageTitle}
      </h2>
    </div>
  );
};

export default BestSellingProductsCard;
