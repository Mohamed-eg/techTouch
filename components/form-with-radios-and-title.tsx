import type { NextPage } from "next";
import FormWithRadios from "./form-with-radios";

const FormWithRadiosAndTitle: NextPage = () => {
  return (
    <div className="shrink-0 flex flex-col items-start justify-start gap-[16px] text-left text-xs text-text font-title-20px-semibold">
      <div className="relative rounded-xl bg-secondary w-[270px] h-[250px] overflow-hidden shrink-0">
        <div className="absolute top-[8px] right-[8px] flex flex-col items-start justify-start">
          <img
            className="relative w-[34px] h-[34px] object-cover"
            alt=""
            src="/wishlist1@2x.png"
          />
        </div>
        <div className="absolute top-[calc(50%_-_90px)] left-[calc(50%_-_95px)] w-[190px] h-[180px] overflow-hidden">
          <img
            className="absolute top-[17px] left-[22px] w-[146px] h-[163px] object-cover"
            alt=""
            src="/eos250d03500x500-1@2x.png"
          />
        </div>
        <div className="absolute top-[12px] left-[12px] rounded-lg bg-scondry flex flex-row items-center justify-center py-1 px-3">
          <div className="relative leading-[18px]">NEW</div>
        </div>
      </div>
      <div className="shrink-0 flex flex-col items-start justify-start gap-[8px] text-base text-text2">
        <div className="relative leading-[24px] font-medium">
          ASUS FHD Gaming Laptop
        </div>
        <div className="shrink-0 flex flex-row items-center justify-start text-lg text-primary1">
          <div className="shrink-0 flex flex-row items-start justify-start">
            <div className="relative leading-[24px] font-semibold">700 EGP</div>
          </div>
        </div>
        <FormWithRadios />
      </div>
    </div>
  );
};

export default FormWithRadiosAndTitle;
