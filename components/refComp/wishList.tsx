"use client"
import React, { useEffect, useState } from 'react'
import MainHeader from '../main-header'
import FooterComp from '../footer'
import Image from 'next/image'
import cartIcon from '../../public/Buy.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../src/redux/slices/productsSlice';
import { addToList, changAll } from '../../src/redux/slices/wishListSlice';
import { toColor } from "../../functions"
import Link from 'next/link'
import axios from 'axios'
import { auth } from "../../src/firebase/firebase"
const WishList = () => {
  const dispatch = useDispatch()
  const [myList, setMyList] = useState([])
  let List = useSelector((state: any) => state.wishList.List)
  const myuser = useSelector((state: any) => state.categories.currentUser)
  // const myuser = auth.currentUser?.uid;
  // const [myuser,setUser] =useState('')
  console.log(myuser)
  console.log(List);
  const getList = async (myuser: string | undefined) => {
    try {
      const response = await axios.get(`https://backend.touchtechco.com/wishlist?userId=${myuser}`)

      return response.data.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  }
  //  بترجع {id:randomeId,productId:productId,createdAt,myuser}
  useEffect(() => {

    // setUser(myuser)
    getList(myuser).then(data => {
      console.log(data)
      setMyList(data)
      dispatch(changAll(data))
      // data.map((p: any) => {
      //   (id = p.id, productId = p.productId, myuser = p.myuser) => {
      //     dispatch(addToList({ id, productId, myuser }))
      //   }
      // })
    });
  }, [myuser])
  //   useEffect(()=>{

  //     getList().then(data => {
  //       console.log(data)
  //       setMyList(data)
  //       dispatch(changAll(data))
  //   },[myuser])
  // })
  return (
    <>
      <MainHeader />
      <div className='mt-[200px]'>

        <div className="w-full flex flex-row items-center justify-center min-h-[50vh] flex-wrap">
          {(myuser === undefined || null) ? <div className='p-10 text-primary1 w-full text-[21px] text-center hover:text-[#199aeb]'><Link href="/login">please log in</Link> </div> : null}

          {List.lenght !== 0 ? List.map((product: any) => {
            return (
              <div className="flex m-5 w-[240px] h-[450px] flex-row group items-stretch justify-start gap-[16px]" key={`prod-${product.id}`}>
                <div className="relative flex flex-col normal-border w-full leading-[20px] font-semibold">
                  <div className="w-full relative hover: flex flex-col rounded-xl z-0 h-[250px] items-center bg-slate-100 overflow-hidden">
                    <FontAwesomeIcon onClick={(mouse_event, id = product.id, productId = product.productId, userId = product.userId) => {
                      // handelHartClick(id)
                      dispatch(addToList({ id, productId, userId }))
                    }} icon={faHeart} className={`w-[18px] cursor-pointer ${List.find((p: any) => p.id === product.id) ? "loved" : "unloved"} h-[18px] absolute right-2 top-2 text-[#cfcfcf] bg-white p-2 rounded-full`} />
                    <Link href={`/productDeta/${product?.id}`} className="object-contain w-full"> <Image alt="img" width={240} height={250} src={product.productData.colors[0].images[0]} className="w-full h-[250px]  object-cover rounded-t-lg" />
                      <div className={`w-[51px] h-[26px] absolute top-2 left-2 rounded-lg text-white text-center leading-[26px] bg-scondry ${!product.productData.isNew && "hidden"} `}>new</div>
                      <button className="w-[240px] h-[40px] absolute text-white  bottom-[-40px] group-hover:bottom-[0px] z-10 text-xl duration-300 p-1 cursor-pointer bg-scondry border-none flex items-center justify-center flex-row"
                      ><Image alt="img" className="w-[24px] mr-[10px] h-[24px]" src={cartIcon} /><p className="m-0">add to cart</p></button>
                    </Link>
                  </div>
                  <div>
                    <p className="text-black">{product.productData.title}</p>
                    <span className=" text-primary1">{`${parseFloat(product.productData.userPrice?.toFixed(2))} EGP`}</span>
                  </div>
                  <div className="my-[10px] flex flex-wrap w-full text-white ml-[-10px]">
                    {product.productData.colors?.map((e: any) => {
                      return (
                        <div style={{ background: toColor(parseInt(e.color)) }} className={`w-[18px] h-[18px] inline rounded-full m-2 !box-content border-[5px] border-solid`} key={`-product-${product.id}`}></div>
                      )
                    })}
                  </div>
                </div>
              </div>
            )
          }) : null}
          {List.length === 0 && myuser ? <div className='p-10 text-primary1 w-full text-[21px] text-center hover:text-[#199aeb]'><Link href="/login">{"you don't have any product here 🤷🏻‍♀️"}</Link> </div> : null}
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
