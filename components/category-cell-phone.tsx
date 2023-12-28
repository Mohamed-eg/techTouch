import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type CategoryCellPhoneType = {
  /** Style props */
  categoryCellPhoneIconPosition?: CSSProperties["position"];
  categoryCellPhoneIconTop?: CSSProperties["top"];
  categoryCellPhoneIconLeft?: CSSProperties["left"];
};

const CategoryCellPhone: NextPage<CategoryCellPhoneType> = ({
  categoryCellPhoneIconPosition,
  categoryCellPhoneIconTop,
  categoryCellPhoneIconLeft,
}) => {
  const categoryCellPhoneIconStyle: CSSProperties = useMemo(() => {
    return {
      position: categoryCellPhoneIconPosition,
      top: categoryCellPhoneIconTop,
      left: categoryCellPhoneIconLeft,
    };
  }, [
    categoryCellPhoneIconPosition,
    categoryCellPhoneIconTop,
    categoryCellPhoneIconLeft,
  ]);

  return (
    <img
      className="w-14 h-14 overflow-hidden object-cover"
      alt=""
      src="/categorycellphone@2x.png"
      style={categoryCellPhoneIconStyle}
    />
  );
};

export default CategoryCellPhone;
