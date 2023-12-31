"use client"
import type { NextPage } from "next";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import {addToCart} from '../src/redux/slices/productsSlice';
import Image from 'next/image'
import cartIcon from '../public/Buy.svg'
import productImg from '../public/ideapadgaming3i01500x500-1@2x.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiper } from 'swiper/react';
import 'swiper/css';

const AllProducts:NextPage = () => {
  let i: number =0;
  const dispatch = useDispatch()
  const AllProducts = useSelector((state:any)=>state.categories.allproducts)
  return (
    <Swiper
    className="!flex justify-center items-cente mb-36"
    spaceBetween={50}
    slidesPerView={1}>
      {AllProducts.map((PageProducts:any)=>{
        i++;
      return(
        <SwiperSlide className="!w-[85vw]" key={i}>
      <div className="w-full flex flex-row items-center justify-center flex-wrap">
       {PageProducts.slice(0,8).map((product:any)=>{
            return (
              <div className="flex m-5 w-[270px] flex-row group items-center justify-start gap-[16px]"key={`${i}-${product.id}`}> 
                <div className="relative flex flex-col normal-border leading-[20px] font-semibold">
                  <div className="w-full relative hover: flex flex-col rounded-xl z-0 h-[250px] items-center bg-slate-100 overflow-hidden">
                    <Image alt="img" src={productImg} className="w-[230px] object-contain p-5 max-md:w-[25vw] max-sm:w-[50vw]"/>
                    <FontAwesomeIcon icon={faHeart} className="w-[18px] cursor-pointer h-[18px] absolute right-2 top-2 text-black bg-white p-2 rounded-full" />
                    <div className={`w-[51px] h-[26px] absolute top-2 left-2 rounded-lg text-white text-center leading-[26px] bg-scondry ${!product.isNew && "hidden"} `}>new</div>
                      <button  onClick={(id=product.id,name=product.name,url=product.url,prise=product.prise) => dispatch(addToCart({id, name, url, prise}))}
                      className="w-[270px] h-[40px] absolute text-white  bottom-[-40px] group-hover:bottom-[0px] z-10 text-xl duration-300 p-1 cursor-pointer bg-scondry border-none flex items-center justify-center flex-row"
                      ><Image alt="img" className="w-[24px] mr-[10px] h-[24px]" src={cartIcon}/><p className="m-0">add to cart</p></button>
                  </div>
                  <div>
                  <p className="text-black">{product.name}</p>
                  <span className="">{`${product.prise} EGP`}</span>
                  </div>
                  <div className="my-[10px] ml-[-10px]">
                    {product.colors.map((color:any)=>{
                      return (
                        <div className={`w-[16px] h-[18px] relative inline rounded-full m-2 px-2 text-[#2220] bg-black !bg-${color}`} key={`${Math.random()}`}>.</div>
                      )
                    })}
                  </div>
                </div>
              </div>
            )
          })}
    </div>
      </SwiperSlide>
      )
    })}
  </Swiper>
  
)};

export default AllProducts;
