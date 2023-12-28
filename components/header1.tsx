import type { NextPage } from "next";

const Header1: NextPage = () => {
  return (
    <header
      className="relative bg-primary1 w-[1440px] h-12 overflow-hidden shrink-0 text-left text-sm text-secondary-colors-white font-title-20px-semibold"
      id="topHeader"
    >
      <div className="absolute top-[12px] right-[136px] flex flex-row items-start justify-start gap-[231px]">
        <div className="shrink-0 flex flex-row items-center justify-start gap-[8px]">
          <p className="m-0 relative leading-[21px] inline-block w-[474px] h-[18px] shrink-0">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <a
            className="[text-decoration:underline] relative leading-[24px] font-semibold text-[inherit] text-center"
            href={`"#prodects"`}
          >
            ShopNow
          </a>
        </div>
        <select className="bg-[transparent] [border:none] shrink-0 flex flex-row items-center justify-center py-[1.5px] px-0 font-title-20px-semibold text-sm text-secondary-colors-white" />
      </div>
    </header>
  );
};

export default Header1;
