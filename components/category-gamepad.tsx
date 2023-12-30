"use client"
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type CategoryGamepadType = {
  /** Style props */
  categoryGamepadIconPosition?: CSSProperties["position"];
  categoryGamepadIconTop?: CSSProperties["top"];
  categoryGamepadIconLeft?: CSSProperties["left"];
};

const CategoryGamepad: NextPage<CategoryGamepadType> = ({
  categoryGamepadIconPosition,
  categoryGamepadIconTop,
  categoryGamepadIconLeft,
}) => {
  const categoryGamepadIconStyle: CSSProperties = useMemo(() => {
    return {
      position: categoryGamepadIconPosition,
      top: categoryGamepadIconTop,
      left: categoryGamepadIconLeft,
    };
  }, [
    categoryGamepadIconPosition,
    categoryGamepadIconTop,
    categoryGamepadIconLeft,
  ]);

  return (
    <img
      className="w-14 h-14 overflow-hidden object-cover"
      alt=""
      src="/categorygamepad@2x.png"
      style={categoryGamepadIconStyle}
    />
  );
};

export default CategoryGamepad;
