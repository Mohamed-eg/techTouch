import type { NextPage } from "next";
import {useSelector} from "react-redux";

const CategoryFilterContainer1: NextPage = () => {
  const categories = useSelector((state:any)=>state.categories)
  console.log(categories)
  return (
    <div className=" flex flex-col items-start justify-start gap-[60px] text-left text-base text-primary1 font-title-20px-semibold">
      <div className=" flex flex-row items-end justify-start gap-[691px]">
        <div className=" flex flex-col items-start justify-start gap-[20px]">
          <div className=" flex flex-row items-center justify-start gap-[16px]">
            <div className="relative w-5 h-10">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded bg-primary1" />
            </div>
            <div className="relative leading-[20px] font-semibold">
              Categories
            </div>
          </div>
          <h1 className="m-0 relative text-17xl tracking-[0.04em] leading-[48px] font-semibold font-heading-24px-semibold text-text2">
            Browse By Category
          </h1>
        </div>
        <div className=" flex flex-row items-start justify-start gap-[8px]">
          <img
            className="relative w-[46px] h-[46px]"
            alt=""
            src="/fill-with-left-arrow.svg"
          />
          <img
            className="relative w-[46px] h-[46px]"
            alt=""
            src="/fill-with-right-arrow.svg"
          />
        </div>
      </div>
      <div className=" flex flex-row items-start justify-start gap-[30px]">
        {categories.allCategories.map((category:any)=>{
          return (
            <div className="relative flex flex-row items-center justify-start gap-[16px]"key={category.Name}> 
              <div className="relative leading-[20px] font-semibold">
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
