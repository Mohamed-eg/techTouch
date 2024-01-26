import type { NextPage } from "next";
import SubscribeForm from "./subscribe-form";
import MainHeader from "./main-header";
import CategoryFilterContainer1 from "./category-filter-container1";
import ExploreOurProducts from "./explore-our-products";
import MusicContainer from "./music-container";
import BestSelling from "./best-selling";
import NewArrival from "./new-arrival";
import Hero from "./hero";

import circle from '../public/ellipse-3@2x.png'

const HOME: NextPage = () => {
  return (
    <main className="relative bg-secondary-colors-white w-full overflow-hidden">
      <div className="relative top-[0px] left-[0px] w-full overflow-hidden flex flex-col items-center justify-start">
        <MainHeader />
        <Hero/>
      </div>
      <div className="absolute top-[543px] left-[-297px]  z-0 w-[500px] overflow-hidden ">
        <div 
          className="relative rounded-[50%] w-[417px]  h-[410px] bg-[#00ff0060] "
        />
      </div>
      <div className="relative mt-12 mb-12 pl-[9.3vw] w-full overflow-hidden flex flex-col items-start justify-center">
        <section className="flex flex-col items-start justify-start w-full gap-[70px] pr-10">
          <CategoryFilterContainer1 />
          <div className="relative box-border w-[85%] h-[0.5px] opacity-[0.3] border-t-[0.5px] border-solid border-text2" />
          <ExploreOurProducts />
        </section>
      </div>
      <div className="absolute top-[1087px] right-[-297px] z-0 w-[500px] overflow-hidden ">
        <div 
          className="relative rounded-[50%] w-[417px]  h-[410px] bg-[#00ff0060] "
        />
      </div>
      <div className="absolute top-[2073px] left-[-282px] z-0 w-[500px] overflow-hidden ">
        <div 
          className="relative rounded-[50%] w-[417px]  h-[410px] bg-[#00ff0060] "
        />
      </div>
      <MusicContainer />
      <div className="absolute top-[2798px] right-[-297px] z-0 w-[500px] overflow-hidden ">
        <div 
          className="relative rounded-[50%] w-[417px]  h-[410px] bg-[#00ff0060] "
        />
      </div>
      <BestSelling />
      <div className="absolute top-[3398px] left-[-297px] z-0 w-[500px] overflow-hidden ">
        <div 
          className="relative rounded-[50%] w-[417px]  h-[410px] bg-[#00ff0060] "
        />
      </div>
      <NewArrival />
      <div className="absolute top-[4359px] right-[-322px] z-0 w-[500px] overflow-hidden ">
        <div 
          className="relative rounded-[50%] w-[417px]  h-[410px] bg-[#00ff0060] "
        />
      </div>
      <SubscribeForm />
    </main>
  );
};

export default HOME;
