"use client";
import React, { useEffect, useState } from "react";
import MainHeader from "./main-header";
import FooterComp from "./footer";
import { useSelector } from "react-redux";
import Link from "next/link";
import { addToCart } from '../src/redux/slices/productsSlice';
import { addToList } from '../src/redux/slices/wishListSlice';
import Image from 'next/image'
import cartIcon from '../public/Buy.svg'
import productImg from '../public/ideapadgaming3i01500x500-1@2x.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from 'react-redux';
import { toColor } from "../functions";
import { v4 as uuidv4 } from 'uuid';

const ProdactsHome = () => {
  const mydata = useSelector((state) => state.searchList.List);
  const dispatch = useDispatch()
  const List = useSelector((state) => state.wishList.List)
  const randomID = uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
  const userId = useSelector((state) => state.categories.currentUser)

  return (
    <div>
      <MainHeader />
      <div className=" h-[100vh] mt-[200px] px-6 overflow-y-auto">
        <div className=" flex flex-col items-start justify-start gap-[20px]">
          <div className=" flex flex-row items-center justify-start gap-[16px]">
            <div className="relative w-5 h-10">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded bg-primary1" />
            </div>
            <div className="relative leading-[20px] font-semibold">
              your search list
            </div>
          </div>
          <h1 className="m-0 relative text-17xl tracking-[0.04em] leading-[48px] font-semibold font-heading-24px-semibold text-text2">
            {mydata?"Explore Our Products✨":"no resalt fond 🔎"}
          </h1>
        </div>
        <div className=" flex items-center justify-start flex-wrap w-full">
          {mydata.map((product) => {
            return (
              <div
                className="flex m-5 w-[240px] h-[450px] flex-row group items-stretch justify-start gap-[16px]"
                key={`prod-${product.id}`}>
                <div className="relative flex flex-col normal-border w-full leading-[20px] font-semibold">
                  <div className="w-full relative hover: flex flex-col rounded-xl z-0 h-[250px] items-center bg-slate-100 overflow-hidden">
                    <Link
                      href={`/productDeta/${product.id}`}
                      className="object-contain w-full">
                      {" "}
                      <Image
                        alt="img"
                        width={240}
                        height={250}
                        src={product.colors[0].images[0]}
                        className="w-full h-[250px]  object-cover"
                      />
                    </Link>
                    <FontAwesomeIcon
                      onClick={(mouse_event, id = randomID, productId = product.id, productData = { title: product.title, userPrice: product.prise, colors: product.colors }) => {
                        userId && dispatch(addToList({ id, productId, productData, userId: userId }))
                      }}
                      icon={faHeart}
                      className={`w-[18px] cursor-pointer ${
                        List.find((p) => p.productId === product.id)
                          ? "loved"
                          : "unloved"
                      } h-[18px] absolute right-2 top-2 text-[#cfcfcf] cursor-pointer bg-white p-2 rounded-full`}
                    />
                    <div
                      className={`w-[51px] h-[26px] absolute top-2 left-2 rounded-lg text-white text-center leading-[26px] bg-scondry ${
                        !product.isNew && "hidden"
                      } `}>
                      new
                    </div>
                    <button
                      onClick={(
                        mouse_event,
                        categore = product.categories,
                        id = product.id,
                        name = product.name,
                        url = product.url,
                        prise = product.prise,
                        colors = product.colors
                      ) =>
                        dispatch(
                          addToCart({ id, name, url, prise, colors, categore })
                        )
                      }
                      className="w-[240px] h-[40px] absolute text-white  bottom-[-40px] group-hover:bottom-[0px] z-10 text-xl duration-300 p-1 cursor-pointer bg-scondry border-none flex items-center justify-center flex-row">
                      <Image
                        alt="img"
                        className="w-[24px] mr-[10px] h-[24px]"
                        src={cartIcon}
                      />
                      <p className="m-0">add to cart</p>
                    </button>
                  </div>
                  <div>
                    <p className="text-black">{product.title}</p>
                    <span className="">{`${parseFloat(
                      product.userPrice?.toFixed(2)
                    )} EGP`}</span>
                  </div>
                  <div className="my-[10px] flex flex-wrap w-full text-white ml-[-10px]">
                    {product.colors.map((e) => {
                      return (
                        <div
                          style={{ background: toColor(parseInt(e.color)) }}
                          className={`w-[18px] h-[18px] inline rounded-full m-2 !box-content border-[5px] border-solid`}
                          key={`-product-${product.id}`}></div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <footer>
        <FooterComp
          frameDivPosition="unset"
          frameDivBottom="unset"
          frameDivLeft="unset"
          iconsCurvedLocationObjectFit="unset"
        />
      </footer>
    </div>
  );
};

export default ProdactsHome;
