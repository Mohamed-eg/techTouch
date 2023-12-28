import type { NextPage } from "next";
import BestSellingProductsCard from "./best-selling-products-card";
import CardContainer from "./card-container";
import SpeakerContainer from "./speaker-container";

const NewArrival: NextPage = () => {
  return (
    <div className="absolute top-[3760px] left-[135px] flex flex-col items-start justify-start gap-[60px] text-left text-5xl text-text font-heading-24px-semibold">
      <BestSellingProductsCard
        sectionTitle="Featured"
        pageTitle="New Arrival"
        propBackgroundColor="#0a5c99"
        propColor="#0a5c99"
        propMargin="unset"
      />
      <div className="shrink-0 flex flex-row items-start justify-start gap-[30px]">
        <div className="relative rounded-sm bg-primary1 w-[570px] h-[600px] overflow-hidden shrink-0">
          <img
            className="absolute top-[89px] left-[29px] w-[511px] h-[511px] object-cover"
            alt=""
            src="/ps5slimgoedkopeplaystation-large-1@2x.png"
          />
          <CardContainer
            productTitle="PlayStation 5"
            productDescription="Black and White version of the PS5 coming out on sale."
            propTop="446px"
            propLeft="32px"
            propWidth="242px"
          />
        </div>
        <div className="shrink-0 flex flex-col items-center justify-start gap-[32px]">
          <div className="relative rounded-sm bg-primary1 w-[570px] h-[284px] overflow-hidden shrink-0">
            <CardContainer
              productTitle="Kitchen's Collections"
              productDescription="Featured woman collections that give you another vibe."
              propTop="138px"
              propLeft="24px"
              propWidth="255px"
            />
            <img
              className="absolute top-[69px] left-[294px] w-[269px] h-[203px] object-cover"
              alt=""
              src="/blender-juice-machine@2x.png"
            />
          </div>
          <div className="shrink-0 flex flex-row items-center justify-center gap-[30px]">
            <div className="relative rounded-sm bg-primary1 w-[270px] h-[284px] overflow-hidden shrink-0">
              <img
                className="absolute top-[calc(50%_-_98px)] left-[calc(50%_-_98px)] w-[196px] h-[196px] object-cover"
                alt=""
                src="/ellipse-24@2x.png"
              />
              <div className="absolute top-[31px] left-[30px] w-[210px] h-[222px] overflow-hidden">
                <img
                  className="absolute top-[calc(50%_-_111px)] left-[calc(50%_-_95px)] w-[190px] h-[221px] object-cover"
                  alt=""
                  src="/69694768-amazonechopngcliparttransparentamazonechopng-1@2x.png"
                />
              </div>
              <SpeakerContainer
                productTitle="Speakers"
                productDescription="Amazon wireless speakers"
                propWidth="191px"
              />
            </div>
            <div className="relative rounded-sm bg-primary1 w-[270px] h-[284px] overflow-hidden shrink-0">
              <img
                className="absolute top-[calc(50%_-_119px)] left-[calc(50%_-_119px)] w-[238px] h-[238px] object-cover"
                alt=""
                src="/ellipse-241@2x.png"
              />
              <img
                className="absolute top-[-25px] left-[calc(50%_-_66px)] w-[154px] h-[232px] object-cover"
                alt=""
                src="/headphones-audio-for-listen@2x.png"
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
