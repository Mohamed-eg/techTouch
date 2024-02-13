"use client"
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type Property1Default1Type = {
  shopNow?: string;

  /** Style props */
  property1DefaultBackgroundColor?: CSSProperties["backgroundColor"];
  property1DefaultPadding?: CSSProperties["padding"];
  property1DefaultBoxSizing?: CSSProperties["boxSizing"];
  property1DefaultCursor?: CSSProperties["cursor"];
  property1DefaultBorder?: CSSProperties["border"];
  shopNowFontSize?: CSSProperties["fontSize"];
  shopNowDisplay?: CSSProperties["display"];
  shopNowMargin?: CSSProperties["margin"];
  shopNowFontWeight?: CSSProperties["fontWeight"];
};

const Property1Default1: NextPage<Property1Default1Type> = ({
  shopNow,
  property1DefaultBackgroundColor,
  property1DefaultPadding,
  property1DefaultBoxSizing,
  property1DefaultCursor,
  property1DefaultBorder,
  shopNowFontSize,
  shopNowDisplay,
  shopNowMargin,
  shopNowFontWeight,
}) => {
  const property1DefaultStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: property1DefaultBackgroundColor,
      padding: property1DefaultPadding,
      boxSizing: property1DefaultBoxSizing,
      cursor: property1DefaultCursor,
      border: property1DefaultBorder,
    };
  }, [
    property1DefaultBackgroundColor,
    property1DefaultPadding,
    property1DefaultBoxSizing,
    property1DefaultCursor,
    property1DefaultBorder,
  ]);

  const shopNow1Style: CSSProperties = useMemo(() => {
    return {
      fontSize: shopNowFontSize,
      display: shopNowDisplay,
      margin: shopNowMargin,
      fontWeight: shopNowFontWeight,
    };
  }, [shopNowFontSize, shopNowDisplay, shopNowMargin, shopNowFontWeight]);

  return (
    <div
      className="rounded-3xs bg-lead overflow-hidden flex flex-row items-center justify-center py-[13px] px-[42px] text-center text-5xl text-secondary-colors-white font-nunito-sans"
      style={property1DefaultStyle}
    >
      <b className="relative" style={shopNow1Style}>
        {shopNow}
      </b>
    </div>
  );
};

export default Property1Default1;
