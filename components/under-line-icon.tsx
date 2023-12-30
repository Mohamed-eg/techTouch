"use client"
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type UnderLineIconType = {
  underLineIconUnderLine?: string;

  /** Style props */
  underLineIconWidth?: CSSProperties["width"];
  underLineIconPosition?: CSSProperties["position"];
  underLineIconTop?: CSSProperties["top"];
  underLineIconLeft?: CSSProperties["left"];
};

const UnderLineIcon: NextPage<UnderLineIconType> = ({
  underLineIconUnderLine,
  underLineIconWidth,
  underLineIconPosition,
  underLineIconTop,
  underLineIconLeft,
}) => {
  const underLineIconStyle: CSSProperties = useMemo(() => {
    return {
      width: underLineIconWidth,
      position: underLineIconPosition,
      top: underLineIconTop,
      left: underLineIconLeft,
    };
  }, [
    underLineIconWidth,
    underLineIconPosition,
    underLineIconTop,
    underLineIconLeft,
  ]);

  return (
    <img
      className="max-h-full w-12 object-cover opacity-[0.5]"
      alt=""
      src={underLineIconUnderLine}
      style={underLineIconStyle}
    />
  );
};

export default UnderLineIcon;
