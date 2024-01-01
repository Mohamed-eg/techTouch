"use client"
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";
import underLineIcone from  "../public/underline@2x.png"

type UnderLineIconType = {
  underLineIconUnderLine?: string | any;

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
    <Image alt="img"
      className="max-h-full w-12 object-cover opacity-[0.5]"
      src={underLineIcone}
      style={underLineIconStyle}
    />
  );
};

export default UnderLineIcon;
