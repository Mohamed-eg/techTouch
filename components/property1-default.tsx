import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import ButtonPrimaryHoverNo from "./button-primary-hover-no";

type Property1DefaultType = {
  /** Style props */
  property1DefaultCursor?: CSSProperties["cursor"];
  property1DefaultBorder?: CSSProperties["border"];
  property1DefaultPadding?: CSSProperties["padding"];
  property1DefaultBackgroundColor?: CSSProperties["backgroundColor"];
  viewAllProductsDisplay?: CSSProperties["display"];
};

const Property1Default: NextPage<Property1DefaultType> = ({
  property1DefaultCursor,
  property1DefaultBorder,
  property1DefaultPadding,
  property1DefaultBackgroundColor,
  viewAllProductsDisplay,
}) => {
  const property1Default1Style: CSSProperties = useMemo(() => {
    return {
      cursor: property1DefaultCursor,
      border: property1DefaultBorder,
      padding: property1DefaultPadding,
      backgroundColor: property1DefaultBackgroundColor,
    };
  }, [
    property1DefaultCursor,
    property1DefaultBorder,
    property1DefaultPadding,
    property1DefaultBackgroundColor,
  ]);

  const viewAllProductsStyle: CSSProperties = useMemo(() => {
    return {
      display: viewAllProductsDisplay,
    };
  }, [viewAllProductsDisplay]);

  return (
    <div
      className="flex flex-row items-start justify-start"
      style={property1Default1Style}
    >
      <ButtonPrimaryHoverNo
        viewAllProducts="Buy Now!"
        buttonPrimaryHoverNoBorderRadius="12px"
        buttonPrimaryHoverNoBackgroundColor="#79d70a"
        buttonPrimaryHoverNoBoxSizing="border-box"
        buttonPrimaryHoverNoCursor="unset"
        buttonPrimaryHoverNoBorder="unset"
        buttonPrimaryHoverNoFlexShrink="0"
        buttonPrimaryHoverNoWidth="258px"
        viewAllProductsDisplay="inline-block"
        viewAllProductsColor="#fafafa"
      />
    </div>
  );
};

export default Property1Default;
