
"use client"
import Image from "next/image"
import deliveryIcon from "../../public/productImg/icon-delivery.png"
import ReturnDelivery from "../../public/productImg/Icon-return.png"
import Link from "next/link"
import {addToCart} from '../../src/redux/slices/productsSlice';
import {addToList} from '../../src/redux/slices/wishListSlice';
import cartIcon from '../../public/Buy.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
const ProductDeltal = (producDeta:any) => {
    const myid = producDeta.producDeta.params.id
    const dispatch = useDispatch()
    const AllProducts = useSelector((state:any)=>state.categories.allproducts)
    const mypage =AllProducts.find((page:any)=>{return(page.find((product:any)=>{return(product.id == myid)}))});
    const myproduct =mypage.find((product:any)=>{return(product.id == myid)})
  return (
    <>
      <section className="relative w-full mt-[200px] mb-[50px] overflow-hidden flex flex-col items-center justify-center">
        <div><span>Home</span><span>{myproduct.categories}</span><span>{myproduct.name}</span></div>
       <div className="flex flex-row p-12 justify-center items-start ">
       <div className="flex w-[50%] flex-row">
            <div className="flex flex-col w-[25%]">
                <div className=" rounded-xl flex items-center justify-center mr-5 mb-[20px] bg-slate-100 p-4"><Image alt="product" width={120} height={120} src={myproduct.url}></Image></div>
                <div className=" rounded-xl flex items-center justify-center mr-5 mb-[20px] bg-slate-100 p-4"><Image alt="product" width={120} height={120} src={myproduct.url}></Image></div>
                <div className=" rounded-xl flex items-center justify-center mr-5 mb-[20px] bg-slate-100 p-4"><Image alt="product" width={120} height={120} src={myproduct.url}></Image></div>
                <div className=" rounded-xl flex items-center justify-center mr-5 bg-slate-100 p-4"><Image alt="product" width={120} height={120} src={myproduct.url}></Image></div>
            </div>
            <div className="w-[75%] rounded-xl flex justify-center items-center bg-slate-100">
                <Image alt="product" width={446} height={315} src={myproduct.url}></Image>
            </div>
        </div>
        <div className="flex flex-col items-start justify-start ml-16 w-[30%] text-black">
            <div className="">
                <h1>{myproduct.name}</h1>
                <h2 className="text-blue text-xl">{myproduct.prise}.00 EGP</h2>
                <p>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install and mess free removal Pressure sensitive.</p>
            </div>
            <div>
                <div>
                    <span>Colours</span>
                    <div className="my-[10px] ml-[-10px]">
                 {myproduct.colors.map((color:any)=>{
                   return (
                     <div className={`w-[16px] h-[18px] relative inline rounded-full m-2 px-2 border border-solid bg-${color}`} 
                     key={`page-${AllProducts.indexOf(mypage)}-product-${myproduct.id}`}>.</div>
                   )
                 })}
               </div>
                </div>
            </div>
            <div>
                <span>Size:</span>
                <span>xs</span>
                <span>S</span>
                <span>M</span>
                <span>L</span>
                <span>XL</span>
            </div>
            <div className="flex flex-row mt-4 items-center">
                <div>
                    <button className="bg-white p-1 border-[#eee] px-[5px] border text-lg rounded-l-[8px]">-</button>
                    <span className="border-y border-[#eee] px-5 ">{myproduct.quantity || 0}</span>
                    <button className="bg-white border-[#eee] p-1 text-lg border  rounded-r-[8px]">+</button>
                </div>
                <div>
                <button className="bg-blue text-white rounded-xl mx-2 px-10 py-3 border-none outline-none">Add to cart</button>
                <button className="rounded-lg bg-white border p-2 border-[#eee] outline-none"><FontAwesomeIcon icon={faHeart} className="" /></button>
                </div>
            </div>
            <div className="flex flex-col items-start justify-center p-5 mt-8 border border-solid border-[#b1b1b1] rounded-xl ">
                <div className="flex flex-row items-center">
                <Image className="m-3" alt="delivery icon" width={40} height={40} src={deliveryIcon} ></Image> 
                <div className="flex flex-col">
                    <h3 className="my-1">Free Delivery</h3>
                    <span className="text-[#aaa] text-[12px]"><Link className="text-[#aaa]" href={"/about"}>Enter your postal code for Delivery Availability</Link></span>
                </div>
                </div>
                <div className="flex flex-row items-center">
                <Image className="m-3" alt="delivery icon" width={40} height={40} src={ReturnDelivery} ></Image> 
                <div className="flex flex-col">
                    <h3 className="my-1">Return Delivery</h3>
                    <span className="text-[#aaa] text-[12px]">Free 30 Days Delivery Returns. <Link className="text-[#aaa]" href={"/about"}>Details</Link></span>
                </div>
                </div>
                
            </div>
        </div>
       </div>
      </section>
      <section className="relative w-full overflow-hidden flex flex-col items-center justify-center px-24">
        <div><span></span><h2 className="text-blue">Related item</h2></div>
        <div className="flex flex-row my-12">
            {AllProducts[0].slice(0,4).map((product:any)=>{
                  return (
                    <div className="flex m-5 w-[270px] flex-row group items-center justify-start gap-[16px]"key={`related-${product.id}`}> 
                      <div className="relative flex flex-col normal-border w-full leading-[20px] font-semibold">
                        <div className="w-full relative hover: flex flex-col rounded-xl z-0 h-[250px] items-center bg-slate-100 overflow-hidden">
                        <Link href={`/productDeta/${product.id}`} className="object-contain w-full"> <Image width={344} height={360} alt="img" src={product.url} className="w-full h-auto  object-contain p-10"/></Link>
                          <FontAwesomeIcon  onClick={(mouse_event, id=product.id,name=product.name,url=product.url,prise=product.prise,colors=product.colors) => dispatch(addToList({id, name, url, prise,colors}))} icon={faHeart} className="w-[18px] cursor-pointer h-[18px] absolute right-2 top-2 text-black bg-white p-2 rounded-full" />
                          <div className={`w-[51px] h-[26px] absolute top-2 left-2 rounded-lg text-white text-center leading-[26px] bg-scondry ${!product.isNew && "hidden"} `}>new</div>
                            <button  onClick={(mouse_event, categore=product.categories, id=product.id,name=product.name,url=product.url,prise=product.prise,colors=product.colors) => dispatch(addToCart({id, name, url, prise,colors,categore}))}
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
                              <div className={`w-[16px] h-[18px] relative inline rounded-full m-2 px-2 border border-solid bg-${color}`} 
                              key={`prodetal-product-${product.id}`}>.</div>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  )
            })}
        </div>
      </section>
    </>
  )
}

export default ProductDeltal
