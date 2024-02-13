"use client"
import { useState , useEffect} from "react";
// import FlashSaleOfferSeconds from "./flash-sale-offer-seconds";
import Image from 'next/image'
import speakerImg from '../public/jbl-boombox-2-hero-020-x1-1-1@2x.png'
import axios from "axios";
import Link from "next/link";
import { auth } from "../src/firebase/firebase";

const MusicContainer = () => {
  const userId =auth.currentUser?.uid;
  const [data, setData] = useState({});
  const fetchHighlight = async () => {
    try {
      const response = await axios.get(`https://backend.touchtechco.com/highlight`);
      return response.data.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };
  useEffect(()=>{
    fetchHighlight().then(data => { console.log(data) 
    setData(data) });
  },[])
  return (
    <section className="relative w-full overflow-hidden flex flex-col items-center m-auto justify-center text-left text-base text-scondry font-title-20px-semibold">
      <div className="w-[82vw] flex flex-col items-center justify-center">
        <div className="rounded-sm bg-primary1 w-full h-auto overflow-hidden flex flex-row items-center justify-center py-0 px-11 box-border gap-[27px]">
          <div className=" h-[362px]   flex flex-col items-start justify-start gap-[32px]">
            <div className=" h-[172px]  flex flex-col items-start justify-start gap-[32px]">
              <span className="absolute leading-[20px] pt-9 font-semibold">
                Categories
              </span>
              <h1 className="m-0 relative text-[3.3vw] tracking-[0.04em] leading-[60px] mt-16 font-semibold font-heading-24px-semibold text-wrap text-text  max-sm:hidden inline-block">
                {data?data.title:"Enhance Your Music Experience"}
              </h1>
            </div>
          
            <div className="flex items-center justify-center rounded-full text-black bg-white w-[50px] h-[50px]">{data?data.days:"9"}days</div>
          </div>
          <div className="w-[40vw]  max-sm:w-full flex flex-row items-center justify-center">
            <Link href={userId ? `/productDeta/id?id=${data?.id}` : `./login`}>
            <div className="w-full rounded-lg  flex flex-col items-center justify-center py-0 pr-0 box-border">
              <Image alt="img"
                className="relative !rounded-lg w-[32vw] max-sm:w-full h-[22.7vw] z-30 mr-11 object-contain"
                 width={500}
                 height={250}
                src={data?data.imageLink:speakerImg}
              />
            <div className="absolute rounded-[50%] bg-gainsboro-200 [filter:blur(200px)] w-[35vw] h-[35vw]" />
            </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicContainer;
