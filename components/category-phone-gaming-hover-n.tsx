"use client"
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import CategoryGamepad from "./category-gamepad";

type CategoryPhoneGamingHoverNType = {
  gaming?: string;
  categoryGamepad?: string;

  /** Style props */
  categoryPhoneGamingHoverNBorderRadius?: CSSProperties["borderRadius"];
  categoryPhoneGamingHoverNPosition?: CSSProperties["position"];
  categoryPhoneGamingHoverNFlexShrink?: CSSProperties["flexShrink"];
  categoryPhoneGamingHoverNBorder?: CSSProperties["border"];
  categoryPhoneGamingHoverNBoxSizing?: CSSProperties["boxSizing"];
  categoryPhoneGamingHoverNBackgroundColor?: CSSProperties["backgroundColor"];
  categoryPhoneGamingHoverNBoxShadow?: CSSProperties["boxShadow"];
  gamingLeft?: CSSProperties["left"];
  gamingColor?: CSSProperties["color"];
  categoryGamepadIconLeft?: CSSProperties["left"];
};

const CategoryPhoneGamingHoverN: NextPage<CategoryPhoneGamingHoverNType> = ({
  gaming,
  categoryGamepad,
  categoryPhoneGamingHoverNBorderRadius,
  categoryPhoneGamingHoverNPosition,
  categoryPhoneGamingHoverNFlexShrink,
  categoryPhoneGamingHoverNBorder,
  categoryPhoneGamingHoverNBoxSizing,
  categoryPhoneGamingHoverNBackgroundColor,
  categoryPhoneGamingHoverNBoxShadow,
  gamingLeft,
  gamingColor,
  categoryGamepadIconLeft,
}) => {
  const categoryPhoneGamingHoverNStyle: CSSProperties = useMemo(() => {
    return {
      borderRadius: categoryPhoneGamingHoverNBorderRadius,
      position: categoryPhoneGamingHoverNPosition,
      flexShrink: categoryPhoneGamingHoverNFlexShrink,
      border: categoryPhoneGamingHoverNBorder,
      boxSizing: categoryPhoneGamingHoverNBoxSizing,
      backgroundColor: categoryPhoneGamingHoverNBackgroundColor,
      boxShadow: categoryPhoneGamingHoverNBoxShadow,
    };
  }, [
    categoryPhoneGamingHoverNBorderRadius,
    categoryPhoneGamingHoverNPosition,
    categoryPhoneGamingHoverNFlexShrink,
    categoryPhoneGamingHoverNBorder,
    categoryPhoneGamingHoverNBoxSizing,
    categoryPhoneGamingHoverNBackgroundColor,
    categoryPhoneGamingHoverNBoxShadow,
  ]);

  const gamingStyle: CSSProperties = useMemo(() => {
    return {
      left: gamingLeft,
      color: gamingColor,
    };
  }, [gamingLeft, gamingColor]);

  const categoryGamepadIconStyle: CSSProperties = useMemo(() => {
    return {
      left: categoryGamepadIconLeft,
    };
  }, [categoryGamepadIconLeft]);

  return (
    <div
      className="rounded box-border w-[170px] h-[145px] overflow-hidden text-left text-base text-text2 font-title-20px-semibold border-[1px] border-solid border-gray-500"
      style={categoryPhoneGamingHoverNStyle}
    >
      <div
        className="absolute bottom-[24px] left-[calc(50%_-_32px)] leading-[24px]"
        style={gamingStyle}
      >
        {gaming}
      </div>
      <CategoryGamepad
        categoryGamepadIconPosition="absolute"
        categoryGamepadIconTop="25px"
        categoryGamepadIconLeft="calc(50% - 28px)"
      />
    </div>
  );
};

export default CategoryPhoneGamingHoverN;
