"use client"
import React from "react";
import {addToCart} from '../../src/redux/slices/productsSlice';
import {addToList} from '../../src/redux/slices/wishListSlice';
import productImg from '../../public/ideapadgaming3i01500x500-1@2x.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import FooterComp from "../footer";
import MainHeader  from "../main-header"
import Image from "next/image";
// import ColorFilter from "./colorfilter";
import cartIcon from '../../public/Buy.svg'
import {useState,useEffect} from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import {  Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import slidesImg from "../../public/Photo.png";
import Link from "next/link";
import ExploreOurProducts from "../explore-our-products"

const sortOptions = [
    { name: "Most Popular", href: "#", current: true },
    { name: "Best Rating", href: "#", current: false },
    { name: "Newest", href: "#", current: false },
    { name: "Price: Low to High", href: "#", current: false },
    { name: "Price: High to Low", href: "#", current: false },
  ];
  const filters = [
    {
      id: "color",
      name: "Color",
      options: [
        { value: "white", label: "White", checked: false },
        { value: "beige", label: "Beige", checked: false },
        { value: "blue", label: "Blue", checked: true },
        { value: "brown", label: "Brown", checked: false },
        { value: "green", label: "Green", checked: false },
        { value: "purple", label: "Purple", checked: false },
      ],
    },
    {
      id: "category",
      name: "Category",
      options: [
        { value: "new-arrivals", label: "New Arrivals", checked: false },
        { value: "sale", label: "Sale", checked: false },
        { value: "travel", label: "Travel", checked: true },
        { value: "organization", label: "Organization", checked: false },
        { value: "accessories", label: "Accessories", checked: false },
      ],
    },
    {
      id: "size",
      name: "Size",
      options: [
        { value: "2l", label: "2L", checked: false },
        { value: "6l", label: "6L", checked: false },
        { value: "12l", label: "12L", checked: false },
        { value: "18l", label: "18L", checked: false },
        { value: "20l", label: "20L", checked: false },
        { value: "40l", label: "40L", checked: true },
      ],
    },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  
const Catagerypage = () => {

    const categories = useSelector((state:any)=>state.categories.allCategories);
    const AllProducts = useSelector((state:any)=>state.categories.allproducts);
    const List = useSelector((state:any) => state.wishList.List)
    const dispatch = useDispatch()
    console.log(AllProducts.flat())
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
            <div className="w-full flex flex-row items-center justify-center flex-wrap">
    {AllProducts.flat().map((product:any)=>{
         return (
           <div className="flex m-5 w-[240px] flex-row group items-center justify-start gap-[16px]"key={`prod-${product.id}`}> 
             <div className="relative flex flex-col normal-border w-full leading-[20px] font-semibold">
               <div className="w-full relative hover: flex flex-col rounded-xl z-0 h-[250px] items-center bg-slate-100 overflow-hidden">
                <Link href={`/productDeta/${product.id}`} className="object-contain w-full"> <Image alt="img" src={productImg} className="w-full h-auto  object-contain p-10"/></Link>
                 <FontAwesomeIcon  onClick={(mouse_event, id=product.id,name=product.name,url=product.url,prise=product.prise,colors=product.colors) => dispatch(addToList({id, name, url, prise,colors}))} icon={faHeart} className={`w-[18px] cursor-pointer ${List.find((p:any)=>p.id===product.id)?"loved":"unloved"} h-[18px] absolute right-2 top-2 text-black bg-white p-2 rounded-full`} />
                 <div className={`w-[51px] h-[26px] absolute top-2 left-2 rounded-lg text-white text-center leading-[26px] bg-scondry ${!product.isNew && "hidden"} `}>new</div>
                   <button  onClick={(mouse_event, categore=product.categories, id=product.id,name=product.name,url=product.url,prise=product.prise,colors=product.colors) => dispatch(addToCart({id, name, url, prise,colors,categore}))}
                   className="w-[240px] h-[40px] absolute text-white  bottom-[-40px] group-hover:bottom-[0px] z-10 text-xl duration-300 p-1 cursor-pointer bg-scondry border-none flex items-center justify-center flex-row"
                   ><Image alt="img" className="w-[24px] mr-[10px] h-[24px]" src={cartIcon}/><p className="m-0">add to cart</p></button>
               </div>
               <div>
               <p className="text-black">{product.name}</p>
               <span className="">{`${product.prise} EGP`}</span>
               </div>
               <div className="my-[10px] text-white ml-[-10px]">
                 {product.colors.map((color:any)=>{
                   return (
                     <div className={`w-[18px] h-[18px] px-3 inline rounded-full m-2 !box-content border border-solid border-black  bg-${color}`} 
                     key={`-product-${product.id}`}></div>
                   )
                 })}
               </div>
             </div>
           </div>
         )
       })}
 </div>
            </div>
            <div className="w-[20%] flex flex-col items-start p-10">
            <h1>All Catageres</h1>
            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95">
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <a
                              href={option.href}
                              className={classNames(
                                option.current
                                  ? "font-medium text-gray-900"
                                  : "text-gray-500",
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm"
                              )}>
                              {option.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              <button
                type="button"
                className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                <span className="sr-only">View grid</span>
                <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}>
                <span className="sr-only">Filters</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
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
            <div className="color">
            <form action="">
                {/* <ColorFilter/> */}
            </form>
            </div>
        </div>
      </div>
      <FooterComp />
    </div>
  )
}

export default Catagerypage
