"use client"
import type { NextPage } from "next";
import {useSelector} from "react-redux";
import Image from 'next/image'

const CategoryFilterContainer1: NextPage = () => {
  const categories = useSelector((state:any)=>state.categories)
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
          <Image  width={40} height={40} alt="img"
            className="relative w-[46px] h-[46px] max-sm:w-8 max-sm:h-8"
             
            src="/fill-with-left-arrow.svg"
          />
          <Image  width={40} height={40} alt="img"
            className="relative w-[46px] h-[46px] max-sm:w-8 max-sm:h-8"
             
            src="/fill-with-right-arrow.svg"
          />
        </div>
      </div>
      <div className=" flex flex-row items-start justify-start gap-[30px]">
        {categories.allCategories.map((category:any)=>{
          return (
            <div className="relative flex flex-row items-center justify-start gap-[16px]"key={category.Name}> 
              <div className="relative leading-[20px] font-semibold">
                <Image  width={100} height={120} alt="img" src={category.url} className="w-[15vw] max-md:w-[25vw] max-sm:w-[50vw]"/>
                {category.Name}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default CategoryFilterContainer1;
