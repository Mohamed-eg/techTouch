"use client";
import { Fragment, useState,useEffect } from "react";
import { addToCart } from "../../src/redux/slices/productsSlice";
import { addToList } from "../../src/redux/slices/wishListSlice";
import { setSelectedProducts } from "../../src/redux/slices/categoriesSlice";
import { setSelectedCategory } from "../../src/redux/slices/categoriesSlice";
import productImg from "../../public/ideapadgaming3i01500x500-1@2x.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import FooterComp from "../footer";
import MainHeader from "../main-header";
import Image from "next/image";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";
import cartIcon from "../../public/Buy.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";
import { Pagination } from "swiper/modules";
import slidesImg from "../../public/Photo.png";
import Link from "next/link";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import axios from "axios";
import { setCategories } from "../../src/redux/slices/categoriesSlice";



const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: true },
  { name: "Newest", href: "#", current: true },
  { name: "Price: Low to High", href: "#", current: true },
  { name: "Price: High to Low", href: "#", current: true },
];
const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White", checked: true },
      { value: "black", label: "Black", checked: true },
      { value: "blue", label: "Blue", checked: true },
      { value: "red", label: "Red", checked: true },
      { value: "green", label: "Green", checked: true },
      { value: "purple", label: "Purple", checked: true },
    ],
  },
  {
    id: "category",
    name: "Category",
    options: [
      { value: "new-arrivals", label: "New Arrivals", checked: true },
      { value: "computer", label: "Computer", checked: true },
      { value: "camera", label: "Camera", checked: true },
      { value: "smartwatch", label: "Smartwatch", checked: true },
      { value: "headphone", label: "Headphone", checked: true },
      { value: "gaming", label: "Gaming", checked: true },
      { value: "taplet", label: "Taplet", checked: true },
      { value: "tools", label: "Tools", checked: true },
      { value: "phone", label: "Phone", checked: true },
      { value: "accessories", label: "Accessories", checked: true },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "2l", label: "2L", checked: true },
      { value: "6l", label: "6L", checked: true },
      { value: "12l", label: "12L", checked: true },
      { value: "18l", label: "18L", checked: true },
      { value: "20l", label: "20L", checked: true },
      { value: "40l", label: "40L", checked: true },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const isitcheaked = () => {
  return filters.flat().options.checked;
};

export default function Categorypage() {
  const [catProd,setCatProd] = useState([]);
  const [checked,setChecked] = useState(false)
  const AllProducts = useSelector((state) => state.categories.allproducts);
  const categories = useSelector((state) => state.categories.allCategories)
  const [color, setColor] = useColor("rgb(86 30 203)");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(true);
  const selectedCategory = useSelector(
    (state) => state.categories.selectedCategory
  );
    const dispatch = useDispatch();
  const fetchCategories = async () => {
    try {
      const response = await axios.get(`https://backend.touchtechco.com/categories`);
      return response.data.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };
  useEffect(() => {
    fetchCategories().then((data) => {
      if (data != null) { dispatch(setCategories(data)) }
    });
  }, [])
  // const fetchCat = async () => {
  //   console.log(selectedCategory)
  //   try {
  //     const response = await axios.get(`https://backend.touchtechco.com/fieldGen?coll=products&filedName=categoryId&filedValue=${selectedCategory}`);
  //     return response.data.data;

  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //     return null;
  //   }
  // };
  // useEffect(()=>{
  //   fetchCat().then((res)=>{setCatProd(res)
  //     console.log(catProd)})

  // },[selectedCategory])
  const List = useSelector((state) => state.wishList.List);
  return (
    <div className="bg-white">
      <MainHeader />
      <div>
        {/* Mobile filter dialog */} 

        <main className="mx-auto mt-[200px] max-w-7xl  px-4 sm:px-6 lg:px-8">
          <div className="w-full !flex justify-center  rounded-xl items-center overflow-hidden">
            <Swiper
              className="!flex justify-center  !p-0 rounded-xl !w-[100vw] items-center"
              modules={[Pagination]}
              loop={true}
              pagination={{ clickable: true }}>
              <SwiperSlide className=" rounded-xl">
                <Image
                  alt="img"
                  className="w-full h-auto object-contain !rounded-xl"
                  src={slidesImg}
                />
              </SwiperSlide>
              <SwiperSlide className=" rounded-xl">
                <Image
                  alt="img"
                  className="w-full h-auto object-contain !rounded-xl"
                  src={slidesImg}
                />
              </SwiperSlide>
              <SwiperSlide className=" rounded-xl">
                <Image
                  alt="img"
                  className="w-full h-auto object-contain !rounded-xl"
                  src={slidesImg}
                />
              </SwiperSlide>
              <SwiperSlide className=" rounded-xl">
                <Image
                  alt="img"
                  className="w-full h-auto object-contain !rounded-xl"
                  src={slidesImg}
                />
              </SwiperSlide>
              <SwiperSlide className=" rounded-xl">
                <Image
                  alt="img"
                  className="w-full h-auto object-contain !rounded-xl"
                  src={slidesImg}
                />
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              explore our products
            </h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-900 hover:text-black">
                    Sort
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95">
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <a
                              href={option.href}
                              className={classNames(
                                option.current
                                  ? "font-medium text-black"
                                  : "text-gray-900",
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm"
                              )}>
                              {option.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              <button
                type="button"
                className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                <span className="sr-only">View grid</span>
                <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}>
                <span className="sr-only">Filters</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              <div className="lg:col-span-3 ">
                <div className="w-full flex flex-row items-center justify-center flex-wrap">
                  {catProd?null:<h1>there is no product matcheing</h1>}
                  {categories
                    .map((category) => {
                      return (
                        <Link className="m-10 " href={`./home`} key={category.title}>
                        <div className="relative flex flex-col w-[170px] h-[145px] !p-0 items-center cursor-poniter justify-center peer border hover:bg-scondry border-[#0000004d] border-solid rounded-3xl overflow-hidden">
                          <div className="relative w-full leading-[20px] mt-0 hover:text-white font-semibold">
                            <Image width={140} height={80} alt="img" src={category.imageLink} className="text-white w-full m-0 h-auto mt-0 rounded-t-lg bg-cover" />
                          </div>
                        </div>
                        <p className="text-[#000] m-0 pb-3 peer-hover:text-scondry">{category.title}</p>
                      </Link>
                        // <div
                        //   className="flex m-5 w-[240px] flex-row group items-center justify-start gap-[16px]"
                        //   key={`prod-${product.id}`}>
                        //   <div className="relative flex flex-col normal-border w-full leading-[20px] font-semibold">
                        //     <div className="w-full relative hover: flex flex-col rounded-xl z-0 h-[250px] items-center bg-slate-100 overflow-hidden">
                        //       <Link
                        //         href={`/productDeta/${product.id}`}
                        //         className="object-contain w-full">
                        //         {" "}
                        //         <Image
                        //           alt="img"
                        //           src={productImg}
                        //           className="w-full h-auto  object-contain p-10"
                        //         />
                        //       </Link>
                        //       <FontAwesomeIcon
                        //         onClick={(
                        //           mouse_event,
                        //           id = product.id,
                        //           name = product.name,
                        //           url = product.url,
                        //           prise = product.prise,
                        //           colors = product.colors
                        //         ) =>
                        //           dispatch(
                        //             addToList({ id, name, url, prise, colors })
                        //           )
                        //         }
                        //         icon={faHeart}
                        //         className={`w-[18px] cursor-pointer ${
                        //           List.find((p) => p.id === product.id)
                        //             ? "loved"
                        //             : "unloved"
                        //         } h-[18px] absolute right-2 top-2 text-black bg-white p-2 rounded-full`}
                        //       />
                        //       <div
                        //         className={`w-[51px] h-[26px] absolute top-2 left-2 rounded-lg text-white text-center leading-[26px] bg-scondry ${
                        //           !product.isNew && "hidden"
                        //         } `}>
                        //         new
                        //       </div>
                        //       <button
                        //         onClick={(
                        //           mouse_event,
                        //           categore = product.categories,
                        //           id = product.id,
                        //           name = product.name,
                        //           url = product.url,
                        //           prise = product.prise,
                        //           colors = product.colors
                        //         ) =>
                        //           dispatch(
                        //             addToCart({
                        //               id,
                        //               name,
                        //               url,
                        //               prise,
                        //               colors,
                        //               categore,
                        //             })
                        //           )
                        //         }
                        //         className="w-[240px] h-[40px] absolute text-white  bottom-[-40px] group-hover:bottom-[0px] z-10 text-xl duration-300 p-1 cursor-pointer bg-scondry border-none flex items-center justify-center flex-row">
                        //         <Image
                        //           alt="img"
                        //           className="w-[24px] mr-[10px] h-[24px]"
                        //           src={cartIcon}
                        //         />
                        //         <p className="m-0">add to cart</p>
                        //       </button>
                        //     </div>
                        //     <div>
                        //       <p className="text-black">{product.categories}</p>
                        //       <span className="">{`${product.prise} EGP`}</span>
                        //     </div>
                        //     <div className="my-[10px] text-white ml-[-10px]">
                        //       {product.colors.map((color) => {
                        //         return (
                        //           <div
                        //             className={`w-[18px] h-[18px] px-3 inline rounded-full m-2 !box-content border border-solid border-black  bg-${color}`}
                        //             key={`-product-${product.id}`}></div>
                        //         );
                        //       })}
                        //       <h2>{product.categories}</h2>
                        //     </div>
                        //   </div>
                        // </div>
                      );
                    })}
                </div>
              </div>
              {/* Filters */}
              {/* <form className="hidden lg:block">
                <h3 className="sr-only">Categories</h3>
                 
                  <Disclosure
                    as="div"
                    key={"useid"}
                    className="border-b border-gray-200 py-6">
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between rounded-lg bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">
                              color
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                          <ColorPicker color={color} onChange={setColor} />;
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <Disclosure
                    as="div"
                    key={"altid"}
                    className="border-b border-gray-200 py-6">
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between rounded-lg bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">
                              category
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                            {categories.map((option, optionIdx) => (
                              <div
                                key={option.title}
                                className="flex items-center">
                                <input
                                  id={`filter-${option.id}-${optionIdx}`}
                                  name={`${option.id}[]`}
                                  defaultValue={option.title}
                                  type="checkbox"
                                  defaultChecked={checked}
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                  onClick={(e, categoryId = option.id) => {
                                    setChecked(!checked)
                                    dispatch(setSelectedCategory(option.id));
                                  }}
                                />
                                <label
                                  htmlFor={`filter-${option.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-900">
                                  {option.title}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                
              </form> */}
            </div>
          </section>
        </main>
      </div>
      <FooterComp />
    </div>
  );
}
