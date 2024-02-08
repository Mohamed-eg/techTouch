"use client"
import React, { useEffect } from 'react'
import MainHeader from '../main-header'
import FooterComp from '../footer'
import Image from 'next/image'
import cartIcon from '../../public/Buy.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../src/redux/slices/productsSlice';
import { addToList } from '../../src/redux/slices/wishListSlice';
import { toColor } from "../../functions"
import Link from 'next/link'
import axios from 'axios'
import { auth } from "../../src/firebase/firebase"
const WishList = () => {
  const dispatch = useDispatch()
  let List = useSelector((state: any) => state.wishList.List)
  const userId = auth.currentUser?.uid
  console.log(List)
  // const getList =async ()=>{
  //   try {
  //     const response = await axios.get(`http://129.146.110.127:3000/userGen?coll=wishlist&userId=${userId}`)
  //     return response.data.data;
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //     return null;
  //   }
  // } بترجع {id:productId,productId:productId,createdAt,userId}
  // useEffect(()=>{
  //   getList().then(data => { console.log(data)
  //   dispatch(addToList({ id, name, url, prise, colors })) });
  // })
  return (
    <>
      <MainHeader />
      <div className='mt-[200px]'>

        <div className="w-full flex flex-row items-center justify-center flex-wrap">
          {List.map((product: any) => {
            return (
              <div className="flex m-5 w-[240px] h-[450px] flex-row group items-stretch justify-start gap-[16px]" key={`prod-${product.id}`}>
                <div className="relative flex flex-col normal-border w-full leading-[20px] font-semibold">
                  <div className="w-full relative hover: flex flex-col rounded-xl z-0 h-[250px] items-center bg-slate-100 overflow-hidden">
                    <Link href={`/productDeta/${product.id}`} className="object-contain w-full"> <Image alt="img" width={240} height={250} src={product.colors[0].images[0]} className="w-full h-auto  object-contain p-5" /></Link>
                    <FontAwesomeIcon onClick={(mouse_event, id = product.id, name = product.title, url = product.url, prise = product.prise, colors = product.colors) => {
                      // handelHartClick(id)
                      dispatch(addToList({ id, name, url, prise, colors }))
                    }} icon={faHeart} className={`w-[18px] cursor-pointer ${List.find((p: any) => p.id === product.id) ? "loved" : "unloved"} h-[18px] absolute right-2 top-2 text-[#cfcfcf] bg-white p-2 rounded-full`} />
                    <div className={`w-[51px] h-[26px] absolute top-2 left-2 rounded-lg text-white text-center leading-[26px] bg-scondry ${!product.isNew && "hidden"} `}>new</div>
                    <button onClick={(mouse_event, categore = product.categories, id = product.id, name = product.name, url = product.url, prise = product.prise, colors = product.colors) => dispatch(addToCart({ id, name, url, prise, colors, categore }))}
                      className="w-[240px] h-[40px] absolute text-white  bottom-[-40px] group-hover:bottom-[0px] z-10 text-xl duration-300 p-1 cursor-pointer bg-scondry border-none flex items-center justify-center flex-row"
                    ><Image alt="img" className="w-[24px] mr-[10px] h-[24px]" src={cartIcon} /><p className="m-0">add to cart</p></button>
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

      </div>
      <FooterComp
        frameDivPosition="unset"
        frameDivBottom="unset"
        frameDivLeft="unset"
        iconsCurvedLocationObjectFit="unset"
      />
    </>
  )
}

export default WishList
