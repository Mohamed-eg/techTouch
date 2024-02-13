"use client"
import React, { useEffect } from "react";
import { addToCart } from '../../src/redux/slices/productsSlice';
import { addToList } from '../../src/redux/slices/wishListSlice';
import Image from 'next/image'
import cartIcon from '../../public/Buy.svg'
import productImg from '../../public/ideapadgaming3i01500x500-1@2x.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { toColor } from "../../functions"
import Link from "next/link";
import axios from "axios";
import { auth } from "../../src/firebase/firebase";
import { v4 as uuidv4 } from 'uuid';

const OnePageProdac = (props: any) => {
  const randomID = uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
  const mypage = props.PageProducts;
  const milliseconds = Date.now();
  const isoDate = new Date(milliseconds).toISOString();
  console.log(props)
  const dispatch = useDispatch()
  const List = useSelector((state: any) => state.wishList.List)
  const userId = auth.currentUser?.uid
  return (
    <div className="w-full flex flex-row items-center justify-center flex-wrap">
      {mypage?.map((product: any) => {
        return (
          <div className="flex m-5 w-[240px] h-[450px] flex-row group items-stretch justify-start gap-[16px]" key={`prod-${product.id}`}>
            <div className="relative flex flex-col normal-border w-full leading-[20px] font-semibold">

              <div className="w-full relative hover: flex flex-col rounded-xl z-0 h-[250px] items-center bg-slate-100 overflow-hidden">

                <FontAwesomeIcon onClick={(mouse_event, id = randomID, productId = product.id, productData = { title: product.title, userPrice: product.prise, colors: product.colors }) => {
                  userId && dispatch(addToList({ id, productId, productData, userId: userId }))
                }} icon={faHeart} className={`w-[18px] cursor-pointer ${List.find((p: any) => p.productId === product.id) ? "loved" : "unloved"} h-[18px] absolute right-2 top-2 text-[#cfcfcf] bg-white p-2 rounded-full`} />
                <Link className=" h-auto w-full object-contain" href={userId ? `/productDeta/id?id=${product.id}` : `./login`}>
                  <div className="object-cover h-auto w-full">
                    <Image alt="img" width={240} height={250} src={product.colors[0].images[0]} className="w-full h-[250px] !rounded-t-lg object-cover " /></div>

                  <div className={`w-[51px] h-[26px] absolute top-2 left-2 !rounded-lg text-white text-center leading-[26px] bg-scondry ${!product.isNew && "hidden"} `}>new</div>

                  <button /*onClick={(mouse_event, categore = product.categories, id = product.id, name = product.name, url = product.url, prise = product.prise, colors = product.colors[0].color) => dispatch(addToCart({ id, name, url, prise, colors, categore }))}*/
                    className="w-[240px] h-[40px] absolute text-white  bottom-[-40px] group-hover:bottom-[0px] z-10 text-xl duration-300 p-1 cursor-pointer bg-scondry border-none flex items-center justify-center flex-row"
                  ><Image alt="img" className="w-[24px] mr-[10px] h-[24px]" src={cartIcon} /><p className="m-0">add to cart</p></button>
                </Link>
              </div>
              <div>
                <p className="text-black">{product.title}</p>
                <span className="">{`${parseFloat(product.userPrice.toFixed(2))} EGP`}</span>
              </div>
              <div className="my-[10px] flex flex-wrap w-full text-white ml-[-10px]">
                {product.colors.map((e: any) => {
                  return (
                    <div style={{ background: toColor(parseInt(e.color)) }} className={`w-[18px] h-[18px] inline rounded-full m-2 !box-content border-[5px] border-solid`} key={`-product-${product.id}`}></div>
                  )
                })}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  );


};

export default OnePageProdac;
