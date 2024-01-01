"use client"
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from 'next/image'

type ColourChnageType = {
  group1000005935?: string |any;

  /** Style props */
  colourChnageFlexShrink?: CSSProperties["flexShrink"];
  ellipseDivBackgroundColor?: CSSProperties["backgroundColor"];
};

const ColourChnage: NextPage<ColourChnageType> = ({
  group1000005935,
  colourChnageFlexShrink,
  ellipseDivBackgroundColor,
}) => {
  const colourChnageStyle: CSSProperties = useMemo(() => {
    return {
      flexShrink: colourChnageFlexShrink,
    };
  }, [colourChnageFlexShrink]);

  const ellipseDivStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: ellipseDivBackgroundColor,
    };
  }, [ellipseDivBackgroundColor]);

  return (
    <div
      className="flex flex-row items-start justify-start gap-[8px]"
      style={colourChnageStyle}
    >
      <Image  width={5} height={5} alt="img"
        className="relative w-5 h-5 object-cover"
         
        src={group1000005935}
      />
      <div
        className="relative rounded-[50%] bg-hover-button w-5 h-5"
        style={ellipseDivStyle}
      />
    </div>
  );
};

export default ColourChnage;
