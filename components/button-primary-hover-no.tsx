"use client"
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type ButtonPrimaryHoverNoType = {
  viewAllProducts?: string;

  /** Style props */
  buttonPrimaryHoverNoBorderRadius?: CSSProperties["borderRadius"];
  buttonPrimaryHoverNoBackgroundColor?: CSSProperties["backgroundColor"];
  buttonPrimaryHoverNoBoxSizing?: CSSProperties["boxSizing"];
  buttonPrimaryHoverNoCursor?: CSSProperties["cursor"];
  buttonPrimaryHoverNoBorder?: CSSProperties["border"];
  buttonPrimaryHoverNoFlexShrink?: CSSProperties["flexShrink"];
  buttonPrimaryHoverNoWidth?: CSSProperties["width"];
  viewAllProductsDisplay?: CSSProperties["display"];
  viewAllProductsColor?: CSSProperties["color"];
};

const ButtonPrimaryHoverNo: NextPage<ButtonPrimaryHoverNoType> = ({
  viewAllProducts,
  buttonPrimaryHoverNoBorderRadius,
  buttonPrimaryHoverNoBackgroundColor,
  buttonPrimaryHoverNoBoxSizing,
  buttonPrimaryHoverNoCursor,
  buttonPrimaryHoverNoBorder,
  buttonPrimaryHoverNoFlexShrink,
  buttonPrimaryHoverNoWidth,
  viewAllProductsDisplay,
  viewAllProductsColor,
}) => {
  const buttonPrimaryHoverNoStyle: CSSProperties = useMemo(() => {
    return {
      borderRadius: buttonPrimaryHoverNoBorderRadius,
      backgroundColor: buttonPrimaryHoverNoBackgroundColor,
      boxSizing: buttonPrimaryHoverNoBoxSizing,
      cursor: buttonPrimaryHoverNoCursor,
      border: buttonPrimaryHoverNoBorder,
      flexShrink: buttonPrimaryHoverNoFlexShrink,
      width: buttonPrimaryHoverNoWidth,
    };
  }, [
    buttonPrimaryHoverNoBorderRadius,
    buttonPrimaryHoverNoBackgroundColor,
    buttonPrimaryHoverNoBoxSizing,
    buttonPrimaryHoverNoCursor,
    buttonPrimaryHoverNoBorder,
    buttonPrimaryHoverNoFlexShrink,
    buttonPrimaryHoverNoWidth,
  ]);

  const viewAllProductsStyle: CSSProperties = useMemo(() => {
    return {
      display: viewAllProductsDisplay,
      color: viewAllProductsColor,
    };
  }, [viewAllProductsDisplay, viewAllProductsColor]);

  return (
    <div
      className="rounded bg-button2 flex flex-row items-center justify-center py-4 px-12 text-left text-base text-text font-title-20px-semibold"
      style={buttonPrimaryHoverNoStyle}
    >
      <div
        className="relative leading-[24px] font-medium"
        style={viewAllProductsStyle}
      >
        {viewAllProducts}
      </div>
    </div>
  );
};

export default ButtonPrimaryHoverNo;
