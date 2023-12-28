import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type CategoryCameraType = {
  categoryCameraCategoryCam?: string;

  /** Style props */
  categoryCameraIconPosition?: CSSProperties["position"];
  categoryCameraIconTop?: CSSProperties["top"];
  categoryCameraIconLeft?: CSSProperties["left"];
};

const CategoryCamera: NextPage<CategoryCameraType> = ({
  categoryCameraCategoryCam,
  categoryCameraIconPosition,
  categoryCameraIconTop,
  categoryCameraIconLeft,
}) => {
  const categoryCameraIconStyle: CSSProperties = useMemo(() => {
    return {
      position: categoryCameraIconPosition,
      top: categoryCameraIconTop,
      left: categoryCameraIconLeft,
    };
  }, [
    categoryCameraIconPosition,
    categoryCameraIconTop,
    categoryCameraIconLeft,
  ]);

  return (
    <img
      className="w-14 h-14 overflow-hidden object-cover"
      alt=""
      src={categoryCameraCategoryCam}
      style={categoryCameraIconStyle}
    />
  );
};

export default CategoryCamera;
