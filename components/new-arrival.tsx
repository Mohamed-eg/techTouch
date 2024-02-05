import type { NextPage } from "next";
import BestSellingProductsCard from "./best-selling-products-card";
// import CardContainer from "./card-container";
import SpeakerContainer from "./speaker-container";
import Image from 'next/image'
import newArrivalImg1 from '../public/ps5slimgoedkopeplaystation-large-1@2x.png'
import newArrivalImg2 from '../public/blender-juice-machine@2x.png'
import newArrivalImg3 from '../public/69694768-amazonechopngcliparttransparentamazonechopng-1@2x.png'
import newArrivalImg4 from '../public/headphones-audio-for-listen@2x.png'
import circle from '../public/ellipse-24@2x.png'


const NewArrival: NextPage = () => {
  return (
    <div className="p-[8vw] relative flex flex-col items-start justify-start gap-[60px] text-left text-5xl text-text font-heading-24px-semibold">
      <BestSellingProductsCard
        sectionTitle="Featured"
        pageTitle="New Arrival"
        propBackgroundColor="#0a5c99"
        propColor="#0a5c99"
        propMargin="unset"
      />
      <div className=" flex flex-row items-start justify-start gap-[30px]">
        <div className="relative rounded-sm bg-primary1 w-[570px] h-[600px] overflow-hidden   ">
          <Image alt="img"
            className="absolute top-[89px] left-[29px] w-[511px] h-[511px] object-cover"

            src={newArrivalImg1}
          />
          <div className=" relative mt-[250px]">
            <SpeakerContainer
              productTitle="play station 5"
              productDescription="Black and White version of the PS5 coming out on sale."
              propWidth="511px"
            />
          </div>
        </div>
        <div className=" flex flex-col items-center justify-start gap-[32px]">
          <div className="relative rounded-sm bg-primary1 w-[570px] h-[284px] overflow-hidden   ">
            <div className="relative mt-[-40px]">
              <SpeakerContainer
                productTitle="Kitchen's Collections"
                productDescription="Featured woman collections that give you another vibe."
                propWidth="191px"
              />
            </div>
            <Image alt="img"
              className="absolute top-[69px] left-[294px] w-[269px] h-[203px] object-cover"
              src={newArrivalImg2}
            />
          </div>
          <div className=" flex flex-row items-center justify-center gap-[30px]">
            <div className="relative rounded-sm bg-primary1 w-[270px] h-[284px] overflow-hidden   ">
              <Image alt="img"
                className="absolute top-[calc(50%_-_98px)] left-[calc(50%_-_98px)] w-[196px] h-[196px] object-cover"
                src={newArrivalImg3}
              />
              <div className="absolute top-[31px] left-[30px] w-[210px] h-[222px] overflow-hidden">
                <Image alt="img"
                  className="absolute top-[calc(50%_-_111px)] left-[calc(50%_-_95px)] w-[190px] h-[221px] object-cover"
                  src={circle}
                />
              </div>
              <SpeakerContainer
                productTitle="Speakers"
                productDescription="Amazon wireless speakers"
                propWidth="191px"
              />
            </div>
            <div className="relative rounded-sm bg-primary1 w-[270px] h-[284px] overflow-hidden   ">
              <Image alt="img"
                className="absolute top-[calc(50%_-_119px)] left-[calc(50%_-_119px)] w-[238px] h-[238px] object-cover"
                src={circle}
              />
              <Image alt="img"
                className="absolute top-[-25px] left-[calc(50%_-_66px)] w-[154px] h-[232px] object-cover"
                src={newArrivalImg4}
              />
              <div className="absolute top-[calc(50%_-_112px)] left-[calc(50%_-_105px)] w-[210px] h-[222px] overflow-hidden" />
              <SpeakerContainer
                productTitle="Headphone"
                productDescription="Amazon wireless Headphones"
                propWidth="unset"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
