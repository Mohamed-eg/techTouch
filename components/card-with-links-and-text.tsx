import type { NextPage } from "next";
import Link from "next/link";

const CardWithLinksAndText: NextPage = () => {
  return (
    <div className="shrink-0 flex flex-col items-start justify-start gap-[16px] text-left text-base text-text2 font-title-20px-semibold">
      <Link
        className="cursor-pointer [text-decoration:none] relative rounded-xl bg-secondary w-[270px] h-[250px] overflow-hidden shrink-0"
        href="/product-details-page"
      >
        <img
          className="absolute top-[8px] right-[8px] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/wishlist@2x.png"
        />
        <img
          className="absolute top-[calc(50%_-_90px)] left-[calc(50%_-_95px)] w-[190px] h-[180px] overflow-hidden object-cover"
          alt=""
          src="/frame-604@2x.png"
        />
      </Link>
      <div className="shrink-0 flex flex-col items-start justify-start gap-[8px]">
        <p className="m-0 relative leading-[24px] font-medium">
          ASUS FHD Gaming Laptop
        </p>
        <div className="shrink-0 flex flex-row items-center justify-start text-lg text-primary1">
          <span className="shrink-0 flex flex-row items-start justify-start">
            <div className="relative leading-[24px] font-semibold">700 EGP</div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardWithLinksAndText;
