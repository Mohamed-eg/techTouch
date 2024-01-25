"use client"
import type { NextPage } from "next";
import { useSelector } from "react-redux";
import { useSwiper } from 'swiper/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation'; // Navigation module
import 'swiper/css/pagination'; // Pagination module
import OnePageProdac from "./refComp/onePageProdac";


const AllProducts:NextPage = () => {
  const swiper =useSwiper();
  let i: number =-1;
  const AllProducts = useSelector((state:any)=>state.categories.allproducts)
  return (
    <Swiper
    className="!flex justify-center items-cente mb-36 w-[85vw]"
    modules={[Navigation, Pagination]}
    navigation
      // {nextEl: '.swiper-button-next',
      // prevEl: '.swiper-button-prev'}
    pagination={{ type: 'fraction' }}
    slidesPerView={1}
    loop={true}
    watchSlidesProgress={true}>
      {AllProducts.map((PageProducts:any)=>{
        i++;
      return(
        <SwiperSlide className="!w-[85vw]" key={i}>
          {({ isVisible }) => (
      isVisible ? <OnePageProdac pageNum={i}/> : null
    )}
        </SwiperSlide>
      )
    })}
  </Swiper>
  
)};

export default AllProducts;
