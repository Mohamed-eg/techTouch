'use client'
import SubscribeForm from "./subscribe-form";
import MainHeader from "./main-header";
import CategoryFilterContainer1 from "./category-filter-container1";
import ExploreOurProducts from "./explore-our-products";
import MusicContainer from "./music-container";
import BestSelling from "./best-selling";
import NewArrival from "./new-arrival";
import Hero from "./hero";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../src/firebase/firebase";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setAllProducts, setCurrentUser } from '../src/redux/slices/categoriesSlice';
import { setCategories } from '../src/redux/slices/categoriesSlice';
import { setCart } from '../src/redux/slices/productsSlice';
import { changAll } from '../src/redux/slices/wishListSlice';
import { useSearchParams } from 'next/navigation';

const HOME = () => {
  const myuser = auth.currentUser
  const dispatch = useDispatch()
  const searchParams = useSearchParams();
  const query = searchParams.get('id');
  const fetchHome = async () => {
    try {
      const response = await axios.get(`https://backend.touchtechco.com/homeProducts`);
      return response.data.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };
  const fetchCategories = async () => {
    try {
      const response = await axios.get(`https://backend.touchtechco.com/categories`);
      return response.data.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };
  const getmycart = async (userID: String | undefined) => {
    console.log(userID)
    try {
      const response = await axios.get(`https://backend.touchtechco.com/userGen?coll=cart&userId=${userID}`);
      return response.data.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };
  const getmyList = async (userID: String | undefined) => {
    console.log(userID)
    try {
      const response = await axios.get(`https://backend.touchtechco.com/userGen?coll=cart&wishlist=${userID}`);
      return response.data.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };
  // const fetchnewArrival = async () => {
  //   try {
  //     const response = await axios.get(`https://backend.touchtechco.com/newArrival`);
  //     return response.data.data;
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //     return null;
  //   }
  // };
  // const fetchHighLight = async () => {
  //   try {
  //     const response = await axios.get(`https://backend.touchtechco.com/highlight`);
  //     return response.data.data;
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //     return null;
  //   }
  // };
  useEffect(() => {
    const userID = myuser?.uid
    fetchHome().then((data: any) => {
      if (data != null) { dispatch(setAllProducts(data)) }
    });
    fetchCategories().then((data: any) => {
      if (data != null) { dispatch(setCategories(data)) }
    });
    getmycart(userID).then((data: any) => {
      console.log(data)
      if (data != null) { dispatch(setCart(data)) }
    })
    getmyList(userID).then((data: any) => {
      console.log(data)
      if (data != null) { dispatch(changAll(data)) }
    })
    // fetchnewArrival().then((data: any) => {
    //   console.log(data)
    //   // dispatch(setAllProducts(data))
    // });
    // fetchHighLight().then((data: any) => {
    //   console.log(data)
    //   // dispatch(setAllProducts(data))
    // });
    dispatch(setCurrentUser(userID))
  }, [myuser])

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
