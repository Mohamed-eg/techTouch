"use client"
import FooterComp from "../footer";
import MainHeader  from "../main-header"
import Image from "next/image";
import {useSelector} from "react-redux";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import {  Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import slidesImg from "../../public/Photo.png";
import ExploreOurProducts from "../explore-our-products"
const Catagerypage = () => {

    const categories = useSelector((state:any)=>state.categories.allCategories);
    const ourProdutWidth = 60;

  return (
    <div>
    <MainHeader/>
      <div className="!flex flex-col w-full ">
        <div className="w-full !flex justify-center items-center">
            <Swiper 
            className="!flex justify-center items-center"
            modules={[ Pagination, A11y]}
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true }}>
                <SwiperSlide  className="!flex justify-center items-center">
                    <Image alt="img" className="w-[1170px] object-contain" src={slidesImg} />
                </SwiperSlide>
                <SwiperSlide  className="!flex justify-center items-center">
                    <Image alt="img" className="w-[1170px] object-contain" src={slidesImg} />
                </SwiperSlide>
                <SwiperSlide  className="!flex justify-center items-center">
                    <Image alt="img" className="w-[1170px] object-contain" src={slidesImg} />
                </SwiperSlide>
                <SwiperSlide  className="!flex justify-center items-center">
                    <Image alt="img" className="w-[1170px] object-contain" src={slidesImg} />
                </SwiperSlide>
                <SwiperSlide  className="!flex justify-center items-center">
                    <Image alt="img" className="w-[1170px] object-contain" src={slidesImg} />
                </SwiperSlide>
            </Swiper>
        </div>

        <div className="flex flex-row justify-start items-start">
            <div className="w-[100%] overflow-hidden p-24">
               <ExploreOurProducts/>
            </div>
            <div className="w-[20%] flex flex-col items-start p-10">
            <h1>All Catageres</h1>
            {categories.map((catagory:any)=>{
                return (
                    <div key={catagory.name}>
                        <p className="flex flex-row items-center justify-start gap-[16px]">
                                {catagory.Name}
                        </p>
                        <span>{catagory.quantety}</span>
                    </div>
                )
            })}
            </div>
        </div>
      </div>
      <FooterComp />
    </div>
  )
}

export default Catagerypage
