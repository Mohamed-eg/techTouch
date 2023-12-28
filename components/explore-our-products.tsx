import type { NextPage } from "next";
import Property1Variant4 from "./property1-variant4";
import Property1Variant2 from "./property1-variant2";
import FormWithRadiosAndTitle from "./form-with-radios-and-title";
import Property1Variant5 from "./property1-variant5";
import ButtonPrimaryHoverNo from "./button-primary-hover-no";

const ExploreOurProducts: NextPage = () => {
  return (
    <div className="shrink-0 flex flex-col items-center justify-start gap-[60px] text-left text-base text-primary1 font-title-20px-semibold">
      <div className="shrink-0 flex flex-row items-end justify-start gap-[672px]">
        <div className="shrink-0 flex flex-col items-start justify-start gap-[20px]">
          <div className="shrink-0 flex flex-row items-center justify-start gap-[16px]">
            <div className="relative w-5 h-10">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded bg-primary1" />
            </div>
            <div className="relative leading-[20px] font-semibold">
              Our Products
            </div>
          </div>
          <h1 className="m-0 relative text-17xl tracking-[0.04em] leading-[48px] font-semibold font-heading-24px-semibold text-text2">
            Explore Our Products
          </h1>
        </div>
        <div className="shrink-0 flex flex-row items-start justify-start gap-[8px]">
          <img
            className="relative w-[46px] h-[46px] object-cover"
            alt=""
            src="/fill-with-left-arrow2@2x.png"
          />
          <img
            className="relative w-[46px] h-[46px] object-cover"
            alt=""
            src="/fill-with-right-arrow2@2x.png"
          />
        </div>
      </div>
      <div className="shrink-0 flex flex-row items-start justify-start gap-[30px] text-xs text-text">
        <Property1Variant4
          wishlist="/wishlist@2x.png"
          property1Variant4FlexShrink="0"
        />
        <Property1Variant2
          wishlist="/wishlist1@2x.png"
          iconsCurvedBuy="/iconscurvedbuy1.svg"
          property1Variant2FlexShrink="0"
          iconsCurvedBuyObjectFit="unset"
        />
        <FormWithRadiosAndTitle />
        <Property1Variant5
          wishlist="/wishlist1@2x.png"
          property1Variant5FlexShrink="0"
        />
      </div>
      <div className="shrink-0 flex flex-row items-start justify-start gap-[30px]">
        <Property1Variant4
          wishlist="/wishlist@2x.png"
          property1Variant4FlexShrink="0"
        />
        <Property1Variant2
          wishlist="/wishlist1@2x.png"
          iconsCurvedBuy="/iconscurvedbuy3@2x.png"
          property1Variant2FlexShrink="0"
          iconsCurvedBuyObjectFit="cover"
        />
        <Property1Variant5
          wishlist="/wishlist1@2x.png"
          property1Variant5FlexShrink="0"
        />
        <Property1Variant5
          wishlist="/wishlist1@2x.png"
          property1Variant5FlexShrink="0"
        />
      </div>
      <ButtonPrimaryHoverNo
        viewAllProducts="View All Products"
        buttonPrimaryHoverNoBorderRadius="12px"
        buttonPrimaryHoverNoBackgroundColor="#0a5c99"
        buttonPrimaryHoverNoBoxSizing="border-box"
        buttonPrimaryHoverNoCursor="pointer"
        buttonPrimaryHoverNoBorder="none"
        buttonPrimaryHoverNoFlexShrink="0"
        buttonPrimaryHoverNoWidth="unset"
        viewAllProductsDisplay="inline-block"
        viewAllProductsColor="#fafafa"
      />
    </div>
  );
};

export default ExploreOurProducts;
