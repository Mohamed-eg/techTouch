import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type Property1Variant4Type = {
  wishlist?: string;

  /** Style props */
  property1Variant4FlexShrink?: CSSProperties["flexShrink"];
};

const Property1Variant4: NextPage<Property1Variant4Type> = ({
  wishlist,
  property1Variant4FlexShrink,
}) => {
  const property1Variant4Style: CSSProperties = useMemo(() => {
    return {
      flexShrink: property1Variant4FlexShrink,
    };
  }, [property1Variant4FlexShrink]);

  return (
    <div
      className="flex flex-col items-start justify-start gap-[16px] text-left text-base text-text2 font-title-20px-semibold"
      style={property1Variant4Style}
    >
      <div className="relative rounded-xl bg-secondary w-[270px] h-[250px] overflow-hidden shrink-0">
        <div className="absolute top-[8px] right-[8px] flex flex-col items-start justify-start">
          <img
            className="relative w-[34px] h-[34px] object-cover"
            alt=""
            src={wishlist}
          />
        </div>
        <div className="absolute top-[calc(50%_-_90px)] left-[calc(50%_-_95px)] w-[190px] h-[180px] overflow-hidden">
          <img
            className="absolute top-[0px] left-[9px] w-[172px] h-[180px] object-cover"
            alt=""
            src="/ideapadgaming3i01500x500-1@2x.png"
          />
        </div>
      </div>
      <div className="shrink-0 flex flex-col items-start justify-start gap-[8px]">
        <div className="relative leading-[24px] font-medium">
          ASUS FHD Gaming Laptop
        </div>
        <div className="shrink-0 flex flex-row items-center justify-start text-lg text-primary1">
          <div className="shrink-0 flex flex-row items-start justify-start">
            <div className="relative leading-[24px] font-semibold">700 EGP</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property1Variant4;
