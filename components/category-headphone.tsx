"use client"
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type CategoryHeadphoneType = {
  /** Style props */
  categoryHeadphoneIconPosition?: CSSProperties["position"];
  categoryHeadphoneIconTop?: CSSProperties["top"];
  categoryHeadphoneIconLeft?: CSSProperties["left"];
};

const CategoryHeadphone: NextPage<CategoryHeadphoneType> = ({
  categoryHeadphoneIconPosition,
  categoryHeadphoneIconTop,
  categoryHeadphoneIconLeft,
}) => {
  const categoryHeadphoneIconStyle: CSSProperties = useMemo(() => {
    return {
      position: categoryHeadphoneIconPosition,
      top: categoryHeadphoneIconTop,
      left: categoryHeadphoneIconLeft,
    };
  }, [
    categoryHeadphoneIconPosition,
    categoryHeadphoneIconTop,
    categoryHeadphoneIconLeft,
  ]);

  return (
    <img
      className="w-14 h-14 overflow-hidden object-cover"
      alt=""
      src="/categoryheadphone@2x.png"
      style={categoryHeadphoneIconStyle}
    />
  );
};

export default CategoryHeadphone;
