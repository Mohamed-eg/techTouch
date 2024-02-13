"use client"
import type { NextPage } from "next";
import Image from "next/image";

type DeliveryContainerType = {
  featureImageUrl?: string | any;
  serviceDescription?: string;
  discreption?: string;
};

const DeliveryContainer: NextPage<DeliveryContainerType> = ({
  featureImageUrl,
  serviceDescription,
  discreption,
}) => {

  return (
    <div
      className=" flex flex-col items-center justify-start gap-[24px] m-5 text-xl text-text2 font-title-20px-semibold"
    >
      <Image alt="img"
        className="relative w-[5.5vw] h-[5.5vw] object-cover"
        src={featureImageUrl}
      ></Image>

      <h1 className="m-0 relative text-inherit leading-[140%] font-bold font-inherit">{serviceDescription}</h1>
      <p className="relative text-lg leading-[140%] font-semibold inline-block text-center
      ">{discreption}</p>
      
    </div>
  );
};

export default DeliveryContainer;
