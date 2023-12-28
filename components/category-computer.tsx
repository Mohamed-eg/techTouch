import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type CategoryComputerType = {
  /** Style props */
  categoryComputerIconPosition?: CSSProperties["position"];
  categoryComputerIconTop?: CSSProperties["top"];
  categoryComputerIconLeft?: CSSProperties["left"];
};

const CategoryComputer: NextPage<CategoryComputerType> = ({
  categoryComputerIconPosition,
  categoryComputerIconTop,
  categoryComputerIconLeft,
}) => {
  const categoryComputerIconStyle: CSSProperties = useMemo(() => {
    return {
      position: categoryComputerIconPosition,
      top: categoryComputerIconTop,
      left: categoryComputerIconLeft,
    };
  }, [
    categoryComputerIconPosition,
    categoryComputerIconTop,
    categoryComputerIconLeft,
  ]);

  return (
    <img
      className="w-14 h-14 overflow-hidden object-cover"
      alt=""
      src="/categorycomputer@2x.png"
      style={categoryComputerIconStyle}
    />
  );
};

export default CategoryComputer;
