'use client'
import { useEffect, useState } from "react";
import BestSellingProductsCard from "./best-selling-products-card";
// import CardContainer from "./card-container";
import SpeakerContainer from "./speaker-container";
import Image from 'next/image'
import newArrivalImg1 from '../public/ps5slimgoedkopeplaystation-large-1@2x.png'
import newArrivalImg2 from '../public/blender-juice-machine@2x.png'
import newArrivalImg3 from '../public/69694768-amazonechopngcliparttransparentamazonechopng-1@2x.png'
import newArrivalImg4 from '../public/headphones-audio-for-listen@2x.png'
// import circle from '../public/ellipse-24@2x.png'
import axios from "axios"

const NewArrival = () => {
const [data ,setData] =useState([])
const hostLink =process.env.my_host
  const fethcNewArrival = async (hostLink) => {
    try {
      const response = await axios.get(`https://backend.touchtechco.com/newArrival`);
      console.log(response.data.data)
      return response.data.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };
useEffect(()=>{
  fethcNewArrival(hostLink).then((res)=>{
    setData(res)
  })
},[])

  return (
    <div className="p-[8vw] relative flex flex-col items-start justify-start gap-[60px] text-left text-5xl text-text font-heading-24px-semibold">
      <BestSellingProductsCard
        sectionTitle="Featured"
        pageTitle="New Arrival"
        propBackgroundColor="#0a5c99"
        propColor="#0a5c99"
        propMargin="unset"
      />
      <div className=" flex flex-row items-start justify-center w-full  gap-[30px]">
        <div className= {`relative rounded-sm bg-primary1  h-[100%] overflow-hidden ${data[3]?"flex":"hidden"}`}>
          <Image width={190} height={190} alt="img"
            className=" top-[89px] left-[29px] w-[50%] h-[100%] object-cover"

            src={data[3]?data[3].imageLink:newArrivalImg1}
          />
          <div className=" relative mt-[250px]">
            <SpeakerContainer
              productTitle={data[3]?data[3].title:"play station 5"}
              productDescription={data[3]?data[3].description:"Black and White version of the PS5 coming out on sale."}
              productID={data[3]?.productId}
              propWidth={data[3]?"40%":"0px"}
            />
          </div>
        </div>
        <div className={` flex flex-col items-center justify-start ${data[3]?"w-[50%]":"w-full"}  gap-[32px]`}>
          <div className={`relative rounded-sm bg-primary1 w-full  h-[50%] overflow-hidden ${data[2]?"flex":"hidden"}  `}>
              <Image width={190} height={190} alt="img"
                className=" top-[69px] left-[294px] w-[50%] h-[50%] object-cover"
                src={data[2]?data[2].imageLink:newArrivalImg2}
              />
            <div className="relative mt-[-40px]">
              <SpeakerContainer
                productTitle={data[2]?data[2].title:"Kitchen's Collections"}
                productDescription={data[2]?data[2].description:"Featured woman collections that give you another vibe."}
                productID={data[2]?.productId}
                propWidth={data[2]?"191px":"0px"}
              />
            </div>
          </div>
          <div className={`${data[3]?"w-[50%]":"w-full"}  flex flex-row items-center justify-center gap-[30px]`}>
            <div className={`relative rounded-sm bg-primary1 ${data[0]?"w-[50%]":"w-full"}  h-max overflow-hidden  ${data[1]?"flex":"hidden"}  `}>
              <Image width={190} height={190} alt="img"
                className={` top-[calc(50%_-_98px)] left-[calc(50%_-_98px)]  ${data[0]?"w-[50%]":"w-[50%]"} h-max object-cover`}
                src={data[1]?data[1].imageLink:newArrivalImg3}
              />
              <SpeakerContainer
                productTitle={data[1]?data[1].title:"Kitchen's Collections"}
                productDescription={data[1]?data[1].description:"Featured woman collections that give you another vibe."}
                productID={data[1]?.productId}
                propWidth={data[1]?"191px":"0px"}
              />
            </div>
            <div className={`relative rounded-sm bg-primary1  ${data[1]?"w-[50%]":"w-full"} h-max overflow-hidden ${data[0]?"flex":"hidden"}   `}>
              <Image width={190} height={190} alt="img"
                className={` top-[-25px] left-[calc(50%_-_66px)]  ${data[1]?"w-[50%]":"w-[50%]"} h-max object-cover`}
                src={data[0]?data[0].imageLink:newArrivalImg4}
              />
              <SpeakerContainer
                productTitle={data[0]?data[0].title:"Kitchen's Collections"}
                productDescription={data[0]?data[0].description:"Featured woman collections that give you another vibe."}
                productID={data[0]?.productId}
                propWidth={data[0]?"191px":"0px"}
              />
              <div className="absolute top-[calc(50%_-_112px)] left-[calc(50%_-_105px)]  w-[25%] h-[50%] overflow-hidden" />
            </div>
                {/* <Image width={190} height={190} alt="img"
                  className="absolute top-[calc(50%_-_111px)] left-[calc(50%_-_95px)] w-[17vw] h-[18vw] object-cover"
                  src={circle}
                />
              <Image width={190} height={190} alt="img"
                className="absolute top-[calc(50%_-_119px)] left-[calc(50%_-_119px)] w-[19vw] h-[19vw] object-cover"
                src={circle}
              /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
