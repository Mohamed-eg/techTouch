"use client"
import type { NextPage } from "next";
import { useSelector } from "react-redux";
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect } from "react"
import 'swiper/css';
import Link from "next/link";

const CategoryFilterContainer1: NextPage = () => {

  const categories = useSelector((state: any) => state.categories.allCategories)
  return (
    <div className=" flex flex-col items-start w-full justify-start gap-[60px] text-center text-base text-primary1 font-title-20px-semibold">
      <div className=" flex flex-row items-end justify-start max-sm:gap-[0] max-sm:w-full gap-[47vw]">
        <div className=" flex flex-col items-start justify-start max-sm:w-full gap-[20px]">
          <div className=" flex flex-row items-center justify-start gap-[16px]">
            <div className="relative w-5 h-10">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded bg-primary1" />
            </div>
            <div className="relative leading-[20px] max-sm:text-[14px] font-semibold">
              Categories
            </div>
          </div>
          <h1 className="m-0 relative text-[2.5vw] max-sm:hidden tracking-[0.04em] leading-[48px] font-semibold font-heading-24px-semibold text-text2">
            Browse By Category
          </h1>
        </div>
        <div className=" flex flex-row items-start justify-start max-sm:w-[50%] max-sm:m-auto gap-[8px]">
          <Image width={40} height={40} alt="img"
            className="relative w-[46px] h-[46px] cursor-poniter max-sm:w-8 max-sm:h-8"

            src="/fill-with-left-arrow.svg"
          />
          <Image width={40} height={40} alt="img"
            className="relative w-[46px] h-[46px] cursor-poniter max-sm:w-8 max-sm:h-8"

            src="/fill-with-right-arrow.svg"
          />
        </div>
      </div>
      <div className=" flex flex-row items-start overflow-hidden justify-start gap-[30px]">
        <Swiper
          className="!flex justify-center items-center"
          spaceBetween={50}
          slidesPerView={1}
          breakpoints={{
            480: { slidesPerView: 2 },
            740: { slidesPerView: 3 },
            1020: { slidesPerView: 4 },
            1440: { slidesPerView: 5 },
          }}
        >
          {categories.map((category: any) => {
            return (
              <SwiperSlide className=" !w-[170px]" key={category.title}>
                <Link href={`./home`}>
                  <div className="relative flex flex-col w-[170px] h-[145px] !p-0 items-center cursor-poniter justify-center peer border hover:bg-scondry border-[#0000004d] border-solid rounded-3xl overflow-hidden">
                    <div className="relative w-full leading-[20px] mt-0 hover:text-white font-semibold">
                      <Image width={140} height={80} alt="img" src={category.imageLink} className="text-white w-full m-0 h-auto mt-0 rounded-t-lg bg-cover" />
                    </div>
                  </div>
                  <p className="text-[#000] m-0 pb-3 peer-hover:text-scondry">{category.title}</p>
                </Link>
              </SwiperSlide>
            )
          })}
        </Swiper>

      </div>
    </div>
  );
};

export default CategoryFilterContainer1;
