"use client"
import type { NextPage } from "next";
import MainHeader from "../main-header";
import Link from "next/link";
import FooterComp from "../footer";
import Image from "next/image";
import { useSelector } from "react-redux";
import { auth } from "../../src/firebase/firebase";
import { getAuth, onAuthStateChanged, User } from "@firebase/auth";
import axios from "axios";
import { useEffect, useState } from "react";
import { toColor } from "../../functions"
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { removeItem } from "../../src/redux/slices/productsSlice";
import { setCart } from "../../src/redux/slices/productsSlice";
import { setUserId } from "firebase/analytics";
const Cart: NextPage = () => {

  const [userID, setUid] = useState<string | any>(null)
  let shipping = 0
  const cart = useSelector((state: any) => state.products.cart)
  const [mycart, setMyCart] = useState(cart)
  const getTotalPrise = () => {
    let totalPrise = 0;
    mycart.map((product: any) => {
      totalPrise += parseInt(product.currentPrice?.toFixed(2)) * parseInt(product.quantity)
    })
    return totalPrise
  }
  const getmycart = async (userID: string | null) => {
    console.log(userID)
    try {
      const response = await axios.get(`https://backend.touchtechco.com/userGen?coll=cart&userId=${userID}`);
      return response.data.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };
  const deleteOne = async (id: any) => {
    console.log(id)
    try {
      const response = await axios.delete(`https://backend.touchtechco.com/gen?coll=cart`, { data: id })
      return response.data
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  }
  const handelDelete = (id: string) => {
    deleteOne(id).then((res) => {
      removeItem(id)
      console.log(res)
    })
  }
  const userId = useSelector((state: any) => state.categories.currentUser);
  useEffect(() => {
    // const url = window.location.href;
    // const parts = url.split('/');
    // const userID = parts[parts.length - 1];
    setUid(userId)
    getmycart(userId).then((res) => {
      setMyCart(res)
      setCart(res)
      console.log(res)
    }) // Call the getmycart function only if cart is truthy
    console.log(cart)
  }, [])
  return (
    <main className="bg-bg w-full mt-12 overflow-hidden flex flex-col items-center justify-start gap-[140px] text-left text-sm text-bg font-title-20px-medium">
      <div className="w-full overflow-hidden  flex flex-col items-center justify-center gap-[80px]">
        <MainHeader />
        <div className="w-[1170px] flex flex-col items-center justify-start gap-[80px] text-button font-rubik">
          <div className="w-[1170px] overflow-hidden flex flex-col items-start justify-center">
            <div className="flex flex-col items-start justify-start">
              <div className=" flex flex-row items-center justify-start gap-[12px]">
                <div className="relative leading-[21px] opacity-[0.5]">
                  Home /
                </div>
                <div className="relative leading-[21px]">Cart</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[80px] text-base font-title-20px-medium">
            <div className=" flex flex-col items-start justify-start gap-[24px]">
              <div className=" flex flex-col items-start justify-start gap-[40px]">
                <div className="rounded-lg bg-bg shadow-[0px_1px_13px_rgba(0,_0,_0,_0.05)] w-[80vw] overflow-hidden flex flex-col items-start justify-start py-6 px-[39px] box-border">
                  <div className="flex flex-row items-center justify-between w-full">
                    <div className="relative text-center w-[20%] leading-[24px] font-medium">
                      Product
                    </div>
                    <div className="relative text-center w-[20%] leading-[24px] font-medium">
                      Price
                    </div>
                    <div className="relative text-center w-[20%] leading-[24px] font-medium">
                      Quantity
                    </div>
                    <div className="relative text-center w-[20%] leading-[24px] font-medium">
                      color
                    </div>
                    <div className="relative text-center w-[20%] leading-[24px] font-medium">
                      Subtotal
                    </div>
                  </div>
                </div>
                {userID === null ? <div><Link href="./login">blease sign in</Link> </div> : null}
                {mycart?.map((product: any) => {
                  return (
                    <div key={`${product.id}-cart`} className="relative rounded-lg bg-bg shadow-[0px_1px_13px_rgba(0,_0,_0,_0.05)] w-full flex flex-row items-center justify-between overflow-hidden ">
                      <div className="w-[20%] overflow-hidden flex flex-row items-start justify-start">
                        <div className="overflow-hidden flex flex-row items-start justify-start p-[3px] relative gap-[10px]">
                          <div className="relative rounded-[50%] bg-secondary-2 w-[18px] h-[18px] z-[0]" />
                        </div>
                        <div className="flex flex-row items-center justify-start gap-[20px] ml-[-15px]">
                          <Image
                            className="relative rounded-2xl w-[54px] h-[54px] overflow-hidden  object-cover"
                            alt="img"
                            width={54}
                            height={54}
                            src={product.imageLink}
                          />
                          <div className="relative leading-[24px]">
                            {product.productName}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-center w-[20%] leading-[24px]">
                        {`${product.currentPrice?.toFixed(2)} EGP`}
                      </div>
                      <div className="flex items-center justify-center w-[20%] overflow-hidden ">
                        <div className="py-1.5 px-3 border-[1.5px] border-solid rounded-lg border-gray-200 relative leading-[24px]">{parseInt(product.quantity)}</div>
                      </div>
                      <div className="flex items-center justify-center w-[20%] overflow-hidden ">
                        <div className="py-1.5 px-3 border-[1.5px] border-solid rounded-lg border-gray-200 relative leading-[24px]"><div style={{ background: toColor(parseInt(product.color)) }} className="flex w-4 h-4 rounded-full" ></div>
                        </div>
                      </div>
                      <div className="flex items-center justify-center w-[20%] leading-[24px] font-semibold text-primary">
                        <span className=" flex justify-center w-[50%]">{`${parseInt(product.currentPrice?.toFixed(2)) * parseInt(product.quantity)}`}</span>
                        <button onClick={(e, id = product.id) => handelDelete(id)} type="button" className="flex justify-start hover:text-red bg-transparent cursor-pointer border-none w-[50%]" ><FontAwesomeIcon icon={faTrash} /></button>
                      </div>
                    </div>)
                })}
              </div>
              <Link href={"../"} className="self-stretch  flex flex-row no-underline items-center justify-start cursor-pointer text-primary font-rubik">
                <div className="rounded-lg  flex flex-row items-center justify-center py-4 px-12 border-[1px] border-solid border-primary">
                  <div className="relative leading-[24px]">Return To Shop</div>
                </div>
              </Link>
            </div>
            <div className="self-stretch  flex flex-row items-start justify-start gap-[173px]">
              <div className=" flex flex-row items-end justify-start gap-[16px]">
                <input type="text" placeholder="Coupon code" className="rounded-lg outline-none text-[18px] bg-text w-[300px] overflow-hidden py-4 px-6 border-[1px] border-solid border-text">
                </input>
                <div className="rounded-lg cursor-pointer bg-primary text-[18px] py-4 px-12 text-bg">
                  Apply Coupon
                </div>
              </div>
              <div className="flex-1 rounded-2xl shadow-[0px_0px_5px_rgba(12,_26,_75,_0.04),_0px_4px_20px_-2px_rgba(50,_50,_71,_0.02)] overflow-hidden flex flex-col items-start justify-start py-8 px-6 gap-[32px] border-[1.5px] border-solid border-gray-200">
                <div className="flex flex-col items-start justify-start gap-[24px]">
                  <div className="relative text-xl leading-[28px] font-medium">
                    Cart Total
                  </div>
                  <div className="w-[422px]  flex flex-row items-start justify-between">
                    <div className="relative leading-[24px]">Subtotal:</div>
                    <div className="relative leading-[24px]">{`${getTotalPrise()}`}</div>
                  </div>
                  <div className=" flex flex-col items-start justify-start opacity-[0.4]">
                    <div className="relative box-border w-[423px] h-px border-t-[1px] border-solid border-gray-100" />
                  </div>
                  <div className=" flex flex-row items-start justify-start gap-[314px]">
                    <div className="relative leading-[24px]">Shipping:</div>
                    <div className="relative leading-[24px]">Free</div>
                  </div>
                  <div className=" flex flex-col items-start justify-start opacity-[0.4]">
                    <div className="relative box-border w-[423px] h-px border-t-[1px] border-solid border-gray-100" />
                  </div>
                  <div className="w-[422px]  flex flex-row items-start justify-between">
                    <div className="relative leading-[24px]">Total:</div>
                    <div className="relative leading-[24px]">{`${getTotalPrise() + shipping}`}</div>
                  </div>
                </div>
                <button className="rounded-2xl bg-primary font-medium text-[18px] cursor-pointer py-4 px-12 text-bg">
                  Procees to checkout
                </button>
              </div>
            </div>
          </div>
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
    </main>
  );
};

export default Cart;
