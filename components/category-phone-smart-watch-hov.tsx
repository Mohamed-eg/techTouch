"use client"
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import CategorySmartWatch from "./category-smart-watch";

type CategoryPhoneSmartWatchHovType = {
  vector?: string;

  /** Style props */
  categoryPhoneSmartWatchHoBorderRadius?: CSSProperties["borderRadius"];
  categoryPhoneSmartWatchHoPosition?: CSSProperties["position"];
  categoryPhoneSmartWatchHoFlexShrink?: CSSProperties["flexShrink"];
};

const CategoryPhoneSmartWatchHov: NextPage<CategoryPhoneSmartWatchHovType> = ({
  vector,
  categoryPhoneSmartWatchHoBorderRadius,
  categoryPhoneSmartWatchHoPosition,
  categoryPhoneSmartWatchHoFlexShrink,
}) => {
  const categoryPhoneSmartWatchHovStyle: CSSProperties = useMemo(() => {
    return {
      borderRadius: categoryPhoneSmartWatchHoBorderRadius,
      position: categoryPhoneSmartWatchHoPosition,
      flexShrink: categoryPhoneSmartWatchHoFlexShrink,
    };
  }, [
    categoryPhoneSmartWatchHoBorderRadius,
    categoryPhoneSmartWatchHoPosition,
    categoryPhoneSmartWatchHoFlexShrink,
  ]);

  return (
    <div
      className="rounded box-border w-[170px] h-[145px] overflow-hidden text-left text-base text-text2 font-title-20px-semibold border-[1px] border-solid border-gray-500"
      style={categoryPhoneSmartWatchHovStyle}
    >
      <div className="absolute bottom-[24px] left-[calc(50%_-_51px)] leading-[24px]">
        SmartWatch
      </div>
      <CategorySmartWatch
        vector="/vector-4@2x.png"
        categorySmartWatchPosition="absolute"
        categorySmartWatchTop="25px"
        categorySmartWatchLeft="calc(50% - 28px)"
      />
    </div>
  );
};

export default CategoryPhoneSmartWatchHov;
