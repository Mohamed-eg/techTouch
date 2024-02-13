"use client"
import type { NextPage } from "next";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image'
import leftArrow from "../public/fill-with-left-arrow@2x.png"
import rightArrow from "../public/fill-with-right-arrow.svg"
import 'swiper/css';
import 'swiper/css/navigation'; // Navigation module
import 'swiper/css/pagination'; // Pagination module
import OnePageProdac from "./refComp/onePageProdac";

const AllProducts: NextPage = (props: any) => {
  const AllProducts = useSelector((state: any) => state.categories.allproducts);
  return (<>
    {AllProducts ? null : <div><h1>Loding.....</h1></div>}
    <Swiper
      // ref={swiperRef}
      className="!flex justify-center items-cente mb-36 !w-[80vw]"
      modules={[Navigation, Pagination]}
      spaceBetween={200}
      slidesPerView={1}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      pagination={{ type: 'fraction' }}
      loop={true}
      watchSlidesProgress={true}>
      <Image alt="img"
        className="relative w-[46px] h-[46px] object-cover swiper-button-prev"
        // onClick={() => swiper.slideNext()}
        src={leftArrow}
      />
      <Image alt="img"
        className="relative w-[46px] h-[46px] object-cover swiper-button-next"
        // onClick={() => swiper.slidePrev()}
        src={rightArrow}
      />
      {AllProducts?.map((PageProducts: any) => {
        return (
          <SwiperSlide className="!w-[100%]" key={`id${Math.random() * 10}`}>
            {({ isVisible }) => (
              isVisible ? <OnePageProdac PageProducts={PageProducts} /> : null
            )}
          </SwiperSlide>
        )
      })}
    </Swiper>
  </>
  )
};

export default AllProducts;
