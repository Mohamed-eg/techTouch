"use client"
import type { NextPage } from "next";
import { useSelector } from "react-redux";
import Image from 'next/image'
import productImg from '../public/ideapadgaming3i01500x500-1@2x.png'
const AllProducts:NextPage = () => {
  const AllProducts = useSelector((state:any)=>state.categories.allproducts)
  return <div className="w-full flex flex-row items-center justify-center flex-wrap">
     {AllProducts.map((product:any)=>{
          return (
            <div className="flex m-5 flex-row group items-center justify-start gap-[16px]"key={product.id}> 
              <div className="relative flex flex-col normal-border leading-[20px] font-semibold">
                <div className="w-full relative hover: flex flex-col rounded-xl items-center bg-slate-100 overflow-hidden">
                  <Image alt="img" src={productImg} className="w-[230px] object-contain p-5 max-md:w-[25vw] max-sm:w-[50vw]"/>
                <button className="w-full mb-[-31px] group-hover:mb-0 text-xl duration-300 p-1 cursor-pointer bg-greenyellow border-none">add to cart</button></div>
                <p>{product.name}</p>
                <span className="">{`${product.prise} EGP`}</span>
              </div>
            </div>
          )
        })}
  </div>;
};

export default AllProducts;
