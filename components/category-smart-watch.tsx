"use client"
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type CategorySmartWatchType = {
  vector?: string;

  /** Style props */
  categorySmartWatchPosition?: CSSProperties["position"];
  categorySmartWatchTop?: CSSProperties["top"];
  categorySmartWatchLeft?: CSSProperties["left"];
};

const CategorySmartWatch: NextPage<CategorySmartWatchType> = ({
  vector,
  categorySmartWatchPosition,
  categorySmartWatchTop,
  categorySmartWatchLeft,
}) => {
  const categorySmartWatchStyle: CSSProperties = useMemo(() => {
    return {
      position: categorySmartWatchPosition,
      top: categorySmartWatchTop,
      left: categorySmartWatchLeft,
    };
  }, [
    categorySmartWatchPosition,
    categorySmartWatchTop,
    categorySmartWatchLeft,
  ]);

  return (
    <div className="w-14 h-14 overflow-hidden" style={categorySmartWatchStyle}>
      <img
        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={vector}
      />
      <img
        className="absolute h-3/6 w-6/12 top-[25%] right-[25%] bottom-[25%] left-[25%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/vector-1@2x.png"
      />
      <img
        className="absolute h-[12.5%] w-3/12 top-[75%] right-[37.5%] bottom-[12.5%] left-[37.5%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/vector-2@2x.png"
      />
      <img
        className="absolute h-[12.5%] w-3/12 top-[12.5%] right-[37.5%] bottom-[75%] left-[37.5%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/vector-3@2x.png"
      />
      <div className="absolute h-[23.21%] w-[17.86%] top-[39.29%] right-[41.07%] bottom-[37.5%] left-[41.07%] flex flex-row items-end justify-start gap-[4px]">
        <div className="relative box-border w-0.5 h-[15px] border-r-[2px] border-solid border-text2" />
        <div className="relative box-border w-0.5 h-2.5 border-r-[2px] border-solid border-text2" />
        <div className="relative box-border w-0.5 h-3 border-r-[2px] border-solid border-text2" />
      </div>
    </div>
  );
};

export default CategorySmartWatch;
