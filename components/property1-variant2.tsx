import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type Property1Variant2Type = {
  wishlist?: string;
  iconsCurvedBuy?: string;

  /** Style props */
  property1Variant2FlexShrink?: CSSProperties["flexShrink"];
  iconsCurvedBuyObjectFit?: CSSProperties["objectFit"];
};

const Property1Variant2: NextPage<Property1Variant2Type> = ({
  wishlist,
  iconsCurvedBuy,
  property1Variant2FlexShrink,
  iconsCurvedBuyObjectFit,
}) => {
  const property1Variant2Style: CSSProperties = useMemo(() => {
    return {
      flexShrink: property1Variant2FlexShrink,
    };
  }, [property1Variant2FlexShrink]);

  const iconsCurvedBuyStyle: CSSProperties = useMemo(() => {
    return {
      objectFit: iconsCurvedBuyObjectFit,
    };
  }, [iconsCurvedBuyObjectFit]);

  return (
    <div
      className="flex flex-col items-start justify-start gap-[16px] text-left text-base text-secondary-colors-white font-title-20px-semibold"
      style={property1Variant2Style}
    >
      <div className="relative rounded-xl bg-secondary w-[270px] h-[250px] overflow-hidden shrink-0">
        <div className="absolute top-[8px] right-[8px] flex flex-col items-start justify-start">
          <img
            className="relative w-[34px] h-[34px] object-cover"
            alt=""
            src={wishlist}
          />
        </div>
        <div className="absolute top-[calc(50%_-_103px)] left-[calc(50%_-_97px)] w-[190px] h-[180px] overflow-hidden">
          <img
            className="absolute top-[0px] left-[9px] w-[172px] h-[180px] object-cover"
            alt=""
            src="/ideapadgaming3i01500x500-1@2x.png"
          />
        </div>
        <div className="absolute bottom-[0px] left-[0px] rounded-t-none rounded-b bg-scondry w-[270px] overflow-hidden flex flex-row items-center justify-center py-2 px-[87px] box-border gap-[10px]">
          <img
            className="relative w-6 h-6 object-cover"
            alt=""
            src={iconsCurvedBuy}
            style={iconsCurvedBuyStyle}
          />
          <div className="relative leading-[24px] font-medium">Add To Cart</div>
        </div>
      </div>
      <div className="shrink-0 flex flex-col items-start justify-start gap-[8px] text-text2">
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

export default Property1Variant2;
