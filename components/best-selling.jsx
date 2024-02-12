"use client"
import BestSellingProductsCard from "./best-selling-products-card";
import CardWithLinksAndText from "./card-with-links-and-text";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {useState,useEffect} from "react"
import axios from "axios";
import Link from "next/link";
import { auth } from "../src/firebase/firebase"
const BestSelling = () => {
 const userId = auth.currentUser?.uid
  const [data, setData] = useState([]);
  const fetchBest = async () => {
    try {
      const response = await axios.get('https://backend.touchtechco.com/bestSelling');
      return response.data.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };
  useEffect(()=>{
    fetchBest().then(data => { console.log(data) 
    setData(data) });
  },[])
  return (
    <div className=" p-[8vw] relative w-full flex flex-col items-center justify-center">
      <section className="w-full overflow-hidden flex flex-col items-start justify-center text-left text-base text-primary1 font-title-20px-semibold">
        <div className="flex flex-col items-start justify-start gap-[60px]">
          <div className=" flex flex-row items-end justify-start gap-[611px]">
            <BestSellingProductsCard
              sectionTitle="This Month"
              pageTitle="Best Selling Products"
              propBackgroundColor="#0a5c99"
              propColor="#0a5c99"
              propMargin="0"
            />
          </div>
          <div className=" flex flex-row items-start overflow-hidden justify-start gap-[30px]">

        <Swiper
          className="!flex justify-center items-center w-[90vw]"
          spaceBetween={50}
          slidesPerView={4}
          breakpoints={{
            480: { slidesPerView: 2 },
            740: { slidesPerView: 3 },
            1020: { slidesPerView: 4 },
            1440: { slidesPerView: 5 },
          }}
        >   
        {data?null:<h1 className=" text-primary1">Loding....</h1>}
          {data?.map(p=>{
            return (
              <SwiperSlide key={`best-prode${p.id}`}>
                <Link href={userId ? `/productDeta/id?id=${p.id}` : `./login`}>
              <CardWithLinksAndText
                title={p.title}
                price={p.userPrice}
                imageLink={p.colors[0].images[0]}
                id={p.id}
                key={`best-${p.id}`}
              />
              </Link>
              </SwiperSlide>
            )
          })}
</Swiper>
        </div>
        </div>
      </section>
    </div>
  );
};

export default BestSelling;
