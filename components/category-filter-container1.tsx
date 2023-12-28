import type { NextPage } from "next";
import CategoryPhoneGamingHoverN from "./category-phone-gaming-hover-n";
import CategoryPhoneSmartWatchHov from "./category-phone-smart-watch-hov";

const CategoryFilterContainer1: NextPage = () => {
  return (
    <div className="shrink-0 flex flex-col items-start justify-start gap-[60px] text-left text-base text-primary1 font-title-20px-semibold">
      <div className="shrink-0 flex flex-row items-end justify-start gap-[691px]">
        <div className="shrink-0 flex flex-col items-start justify-start gap-[20px]">
          <div className="shrink-0 flex flex-row items-center justify-start gap-[16px]">
            <div className="relative w-5 h-10">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded bg-primary1" />
            </div>
            <div className="relative leading-[20px] font-semibold">
              Categories
            </div>
          </div>
          <h1 className="m-0 relative text-17xl tracking-[0.04em] leading-[48px] font-semibold font-heading-24px-semibold text-text2">
            Browse By Category
          </h1>
        </div>
        <div className="shrink-0 flex flex-row items-start justify-start gap-[8px]">
          <img
            className="relative w-[46px] h-[46px]"
            alt=""
            src="/fill-with-left-arrow.svg"
          />
          <img
            className="relative w-[46px] h-[46px]"
            alt=""
            src="/fill-with-right-arrow.svg"
          />
        </div>
      </div>
      <div className="shrink-0 flex flex-row items-start justify-start gap-[30px]">
        <CategoryPhoneGamingHoverN
          gaming="Phones"
          categoryGamepad="/categorycellphone@2x.png"
          categoryPhoneGamingHoverNBorderRadius="32px"
          categoryPhoneGamingHoverNPosition="relative"
          categoryPhoneGamingHoverNFlexShrink="0"
          categoryPhoneGamingHoverNBorder="1px solid rgba(0, 0, 0, 0.3)"
          categoryPhoneGamingHoverNBoxSizing="border-box"
          categoryPhoneGamingHoverNBackgroundColor="unset"
          categoryPhoneGamingHoverNBoxShadow="unset"
          gamingLeft="calc(50% - 30px)"
          gamingColor="#000"
          categoryGamepadIconLeft="calc(50% - 28px)"
        />
        <CategoryPhoneGamingHoverN
          gaming="Computers"
          categoryGamepad="/categorycomputer@2x.png"
          categoryPhoneGamingHoverNBorderRadius="32px"
          categoryPhoneGamingHoverNPosition="relative"
          categoryPhoneGamingHoverNFlexShrink="0"
          categoryPhoneGamingHoverNBorder="1px solid rgba(0, 0, 0, 0.3)"
          categoryPhoneGamingHoverNBoxSizing="border-box"
          categoryPhoneGamingHoverNBackgroundColor="unset"
          categoryPhoneGamingHoverNBoxShadow="unset"
          gamingLeft="calc(50% - 45px)"
          gamingColor="#000"
          categoryGamepadIconLeft="calc(50% - 27px)"
        />
        <CategoryPhoneSmartWatchHov
          vector="/vector@2x.png"
          categoryPhoneSmartWatchHoBorderRadius="32px"
          categoryPhoneSmartWatchHoPosition="relative"
          categoryPhoneSmartWatchHoFlexShrink="0"
        />
        <CategoryPhoneGamingHoverN
          gaming="Camera"
          categoryGamepad="/categorycamera@2x.png"
          categoryPhoneGamingHoverNBorderRadius="32px"
          categoryPhoneGamingHoverNPosition="relative"
          categoryPhoneGamingHoverNFlexShrink="0"
          categoryPhoneGamingHoverNBorder="unset"
          categoryPhoneGamingHoverNBoxSizing="unset"
          categoryPhoneGamingHoverNBackgroundColor="#79d70a"
          categoryPhoneGamingHoverNBoxShadow="0px 1px 13px rgba(0, 0, 0, 0.05)"
          gamingLeft="calc(50% - 34px)"
          gamingColor="#fafafa"
          categoryGamepadIconLeft="calc(50% - 28px)"
        />
        <CategoryPhoneGamingHoverN
          gaming="HeadPhones"
          categoryGamepad="/categoryheadphone@2x.png"
          categoryPhoneGamingHoverNBorderRadius="32px"
          categoryPhoneGamingHoverNPosition="relative"
          categoryPhoneGamingHoverNFlexShrink="0"
          categoryPhoneGamingHoverNBorder="1px solid rgba(0, 0, 0, 0.3)"
          categoryPhoneGamingHoverNBoxSizing="border-box"
          categoryPhoneGamingHoverNBackgroundColor="unset"
          categoryPhoneGamingHoverNBoxShadow="unset"
          gamingLeft="calc(50% - 51px)"
          gamingColor="#000"
          categoryGamepadIconLeft="calc(50% - 28px)"
        />
        <CategoryPhoneGamingHoverN
          gaming="Gaming"
          categoryGamepad="/categorygamepad@2x.png"
          categoryPhoneGamingHoverNBorderRadius="32px"
          categoryPhoneGamingHoverNPosition="relative"
          categoryPhoneGamingHoverNFlexShrink="0"
          categoryPhoneGamingHoverNBorder="1px solid rgba(0, 0, 0, 0.3)"
          categoryPhoneGamingHoverNBoxSizing="border-box"
          categoryPhoneGamingHoverNBackgroundColor="unset"
          categoryPhoneGamingHoverNBoxShadow="unset"
          gamingLeft="calc(50% - 32px)"
          gamingColor="#000"
          categoryGamepadIconLeft="calc(50% - 28px)"
        />
      </div>
    </div>
  );
};

export default CategoryFilterContainer1;
