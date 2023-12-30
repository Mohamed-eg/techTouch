"use client"
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import ServicesMoneyBack from "./services-money-back";

type DeliveryContainerType = {
  featureImageUrl?: string;
  serviceDescription?: string;
  promotionImageUrl?: string;

  /** Style props */
  propFlexShrink?: CSSProperties["flexShrink"];
  propWidth?: CSSProperties["width"];
  propFlexShrink1?: CSSProperties["flexShrink"];
  propTextAlign?: CSSProperties["textAlign"];
};

const DeliveryContainer: NextPage<DeliveryContainerType> = ({
  featureImageUrl,
  serviceDescription,
  promotionImageUrl,
  propFlexShrink,
  propWidth,
  propFlexShrink1,
  propTextAlign,
}) => {
  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      flexShrink: propFlexShrink,
      width: propWidth,
    };
  }, [propFlexShrink, propWidth]);

  const frameDiv3Style: CSSProperties = useMemo(() => {
    return {
      flexShrink: propFlexShrink1,
    };
  }, [propFlexShrink1]);

  const freeDeliveryForStyle: CSSProperties = useMemo(() => {
    return {
      textAlign: propTextAlign,
    };
  }, [propTextAlign]);

  return (
    <div
      className=" flex flex-col items-center justify-start gap-[24px] text-left text-xl text-text2 font-title-20px-semibold"
      style={frameDiv2Style}
    >
      <ServicesMoneyBack
        servicesMoneyBackServices="/services@2x.png"
        servicesMoneyBackIconPosition="relative"
      />
      <div
        className=" flex flex-col items-center justify-start gap-[8px]"
        style={frameDiv3Style}
      >
        <div className="relative leading-[28px] font-semibold">
          {serviceDescription}
        </div>
        <div
          className="relative text-sm leading-[21px] text-center"
          style={freeDeliveryForStyle}
        >
          {promotionImageUrl}
        </div>
      </div>
    </div>
  );
};

export default DeliveryContainer;
