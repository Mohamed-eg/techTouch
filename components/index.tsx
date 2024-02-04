"use client"
import type { NextPage } from "next";
import SubscribeForm from "./subscribe-form";
import MainHeader from "./main-header";
import CategoryFilterContainer1 from "./category-filter-container1";
import ExploreOurProducts from "./explore-our-products";
import MusicContainer from "./music-container";
import BestSelling from "./best-selling";
import NewArrival from "./new-arrival";
import Hero from "./hero";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../src/firebase/firebase";
import axios from 'axios';

const HOME: NextPage = () => {
  const fetchData = async () => {
    try {
      const response = await axios.get('http://129.146.110.127:3000/homeProducts');
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };
  const router = useRouter();
  useEffect(() => {
    // axios.get('http://129.146.110.127:3000/homeProducts')
    //   .then(response => {
    //     console.log(response.data);
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log("uid", uid);
      } else {
        router.push("/login")
        console.log("user is logged out");
      }
    });
    // fetchData().then(data => { console.log(data.data) });
    // console.log(fetchData())
  }, []);

  return (
    <main className="relative bg-secondary-colors-white w-full overflow-hidden">
      <div className="relative top-[0px] left-[0px] w-full overflow-hidden flex flex-col items-center justify-start">
        <MainHeader />
        <Hero />
      </div>
      <div className="absolute top-[543px] left-[-297px]  z-0 w-[500px] overflow-hidden ">
        <div
          className="relative rounded-[50%] w-[417px]  h-[410px] bg-scondry opacity-30 "
        />
      </div>
      <div className="relative mt-12 mb-12 pl-[7vw] w-full overflow-hidden flex flex-col items-center justify-center">
        <section className="flex flex-col items-start justify-start w-full gap-[70px] pr-10">
          <CategoryFilterContainer1 />
          <div className="relative box-border w-[85%] h-[0.5px] opacity-[0.3] border-t-[0.5px] border-solid border-text2" />
          <ExploreOurProducts />
        </section>
      </div>
      <div className="absolute top-[1087px] right-[-297px] z-0 w-[500px] overflow-hidden ">
        <div
          className="relative rounded-[50%] w-[417px]  h-[410px] bg-scondry opacity-30 "
        />
      </div>
      <div className="absolute top-[2073px] left-[-282px] z-0 w-[500px] overflow-hidden ">
        <div
          className="relative rounded-[50%] w-[417px]  h-[410px] bg-scondry opacity-30 "
        />
      </div>
      <MusicContainer />
      <div className="absolute top-[2798px] right-[-297px] z-0 w-[500px] overflow-hidden ">
        <div
          className="relative rounded-[50%] w-[417px]  h-[410px] bg-scondry opacity-30 "
        />
      </div>
      <BestSelling />
      <div className="absolute top-[3398px] left-[-297px] z-0 w-[500px] overflow-hidden ">
        <div
          className="relative rounded-[50%] w-[417px]  h-[410px] bg-scondry opacity-30 "
        />
      </div>
      <NewArrival />
      <div className="absolute top-[4359px] right-[-322px] z-0 w-[500px] overflow-hidden ">
        <div
          className="relative rounded-[50%] w-[417px]  h-[410px] bg-scondry opacity-30 "
        />
      </div>
      <SubscribeForm />
    </main>
  );
};

export default HOME;
