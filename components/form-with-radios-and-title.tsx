import type { NextPage } from "next";
import Image from 'next/image'
import FormWithRadios from "./form-with-radios";
import Img1 from "../public/wishlist@2x.png"
import Img2 from "../public/eos250d03500x500-1@2x.png"

const FormWithRadiosAndTitle: NextPage = () => {
  return (
    <div className=" flex flex-col items-start justify-start gap-[16px] text-left text-xs text-text font-title-20px-semibold">
      <div className="relative rounded-xl bg-secondary w-[270px] h-[250px] overflow-hidden   ">
        <div className="absolute top-[8px] right-[8px] flex flex-col items-start justify-start">
          <Image alt="img"
            className="relative w-[34px] h-[34px] object-cover"
             
            src={Img1}
          />
        </div>
        <div className="absolute top-[calc(50%_-_90px)] left-[calc(50%_-_95px)] w-[190px] h-[180px] overflow-hidden">
          <Image alt="img"
            className="absolute top-[17px] left-[22px] w-[146px] h-[163px] object-cover"
             
            src={Img2}
          />
        </div>
        <div className="absolute top-[12px] left-[12px] rounded-lg bg-scondry flex flex-row items-center justify-center py-1 px-3">
          <div className="relative leading-[18px]">NEW</div>
        </div>
      </div>
      <div className=" flex flex-col items-start justify-start gap-[8px] text-base text-text2">
        <div className="relative leading-[24px] font-medium">
          ASUS FHD Gaming Laptop
        </div>
        <div className=" flex flex-row items-center justify-start text-lg text-primary1">
          <div className=" flex flex-row items-start justify-start">
            <div className="relative leading-[24px] font-semibold">700 EGP</div>
          </div>
        </div>
        <FormWithRadios />
      </div>
    </div>
  );
};

export default FormWithRadiosAndTitle;
