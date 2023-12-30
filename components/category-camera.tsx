"use client"
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type CategoryCameraType = {
  category?: string ;

  /** Style props */
  IconPosition?: CSSProperties["position"];
  IconTop?: CSSProperties["top"];
  IconLeft?: CSSProperties["left"];
};

const CategoryCamera: NextPage<CategoryCameraType> = ({
  category,
  IconPosition,
  IconTop,
  IconLeft,
}) => {
  const categoryCameraIconStyle: CSSProperties = useMemo(() => {
    return {
      position: IconPosition,
      top: IconTop,
      left: IconLeft,
    };
  }, [
    IconPosition,
    IconTop,
    IconLeft,
  ]);

  return (
    <img
      className="w-14 h-14 overflow-hidden object-cover"
      alt=""
      src={category}
      style={categoryCameraIconStyle}
    />
  );
};

export default CategoryCamera;
