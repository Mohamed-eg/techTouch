import type { NextPage } from "next";
import SubscribeForm from "./subscribe-form";
import MainHeader from "./main-header";
import CategoryFilterContainer1 from "./category-filter-container1";
import ExploreOurProducts from "./explore-our-products";
import MusicContainer from "./music-container";
import BestSelling from "./best-selling";
import NewArrival from "./new-arrival";
import Hero from "./hero";

const HOME: NextPage = () => {
  return (
    <main className="relative bg-secondary-colors-white w-full h-[5596px] overflow-hidden">
      <div className="absolute top-[0px] left-[0px] w-full overflow-hidden flex flex-col items-center justify-start">
        <MainHeader />
        <Hero/>
      </div>
      <div className="absolute top-[543px] left-[-295px] w-[2045px] overflow-hidden flex flex-col items-start justify-center">
        <img
          className="relative rounded-[50%] w-[417px] h-[410px] object-cover"
          alt=""
          src="/ellipse-3@2x.png"
        />
      </div>
      <div className="absolute top-[767px] left-[135px] w-[1185px] overflow-hidden flex flex-col items-start justify-center">
        <section className="flex flex-col items-start justify-start gap-[70px]">
          <CategoryFilterContainer1 />
          <div className="relative box-border w-[1170.5px] h-[0.5px] opacity-[0.3] border-t-[0.5px] border-solid border-text2" />
          <ExploreOurProducts />
        </section>
      </div>
      <div className="absolute top-[1087px] left-[-297px] w-[2049px] overflow-hidden flex flex-col items-end justify-center">
        <img
          className="relative rounded-[50%] w-[417px] h-[410px] object-cover"
          alt=""
          src="/ellipse-3@2x.png"
        />
      </div>
      <div className="absolute top-[2073px] left-[-282px] w-[2019px] overflow-hidden flex flex-col items-start justify-center">
        <img
          className="relative rounded-[50%] w-[417px] h-[410px] object-cover"
          alt=""
          src="/ellipse-3@2x.png"
        />
      </div>
      <MusicContainer />
      <div className="absolute top-[2798px] left-[-297px] w-[2049px] overflow-hidden flex flex-col items-end justify-center">
        <img
          className="relative rounded-[50%] w-[417px] h-[410px] object-cover"
          alt=""
          src="/ellipse-3@2x.png"
        />
      </div>
      <BestSelling />
      <div className="absolute top-[3398px] left-[-297px] w-[2049px] overflow-hidden flex flex-col items-start justify-center">
        <img
          className="relative rounded-[50%] w-[417px] h-[410px] object-cover"
          alt=""
          src="/ellipse-3@2x.png"
        />
      </div>
      <NewArrival />
      <div className="absolute top-[4359px] left-[-322px] w-[2049px] overflow-hidden flex flex-col items-end justify-center">
        <img
          className="relative rounded-[50%] w-[417px] h-[410px] object-cover"
          alt=""
          src="/ellipse-3@2x.png"
        />
      </div>
      <SubscribeForm />
    </main>
  );
};

export default HOME;
