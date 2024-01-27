import MainHeader from "../../../components/main-header"
import DeliveryContainer from "../../../components/delivery-container"
import FooterComp from "../../../components/footer"
import deleveryImg1 from "../../../public/services.png";
import deleveryImg2 from "../../../public/services1.png";
import deleveryImg3 from "../../../public/services@2x.png";
import Image from "next/image";
import sideImg from "../../../public/about/Side Image.png"
import shop from "../../../public/about/Group (1).svg"
import sales from "../../../public/about/Icon-Sale.svg"
import icon2 from "../../../public/about/Group.svg"
import vector from "../../../public/about/Vector.svg"
import person from "../../../public/about/image 46.png"

const page = () => {
  return (
    <>
     <MainHeader/>

        <section className="flex flex-col mt-[220px] p-10 justify-center w-full">
            <div className="flex flex-row justify-end items-center w-full">
                <div className="mr-[50px]">
                    <h1 className="text-4xl font-title-20px-semibol">
                        Our Story
                    </h1>
                    <p className="text-lg leading-[140%] font-semibold inline-block w-[526.5px]">{`We recommended you to subscribe to our newspaper, enter your email below to get our daily update about us.
                    We recommended you to subscribe to our newspaper, enter your email below to get our daily update about us.
                    We recommended you to subscribe to our newspaper, enter your email below to get our daily update about us. `}</p>
                </div>
                <div>
                    <Image src={sideImg}width={620} height={609} alt="Ali" ></Image>
                </div>
            </div>
            <div className="flex flex-row m-5 items-center justify-around">
                <div className="flex flex-col items-center justify-between rounded-lg p-5 mx-5 icon-box">
                    <div className="rounded-full bg-primary1 w-10 h-10 flex justify-center items-center "><Image src={icon2} width={40} height={40} className="object-contain p-2" alt="shop"></Image>
                    </div>
                    <h2>10.5k</h2>
                    <p>Sallers active our site</p>
                </div>
                <div className="flex flex-col items-center justify-between rounded-lg p-5 mx-5 icon-box-selected">
                    <div className="rounded-full bg-primary1 w-10 h-10 flex justify-center items-center "><Image src={sales} width={40} height={40} className="object-contain p-2" alt="shop"></Image>
                    </div>
                    <h2>10.5k</h2>
                    <p>Sallers active our site</p>
                </div>
                <div className="flex flex-col items-center justify-between rounded-lg p-5 mx-5 icon-box">
                    <div className="rounded-full bg-primary1 w-10 h-10 flex justify-center items-center "><Image src={vector} width={40} height={40} className="object-contain p-2" alt="shop"></Image>
                    </div>
                    <h2>10.5k</h2>
                    <p>Sallers active our site</p>
                </div>
                <div className="flex flex-col items-center justify-between rounded-lg p-5 mx-5 icon-box">
                    <div className="rounded-full bg-primary1 w-10 h-10 flex justify-center items-center "><Image src={shop} width={40} height={40}className="object-contain p-2" alt="shop"></Image>
                    </div>
                    <h2>10.5k</h2>
                    <p>Sallers active our site</p>
                </div>
            </div>
            <div className="flex flex-row justify-around items-center w-[100vw]">
           <div className="flex flex-col item-start w-[33%] p-5 justify-center">
                <div className=" bg-slate-100 px-10 rounded">
                    <Image src={person} alt="person"></Image>
                </div>
                <div>
                    <h2>Ali Atwan</h2>
                    <span className="text-[#94477D]">Founder</span>
                </div>
           </div>
            <div className="flex flex-col item-start w-[33%] p-5 justify-center">
                <div className="bg-slate-100 px-10 rounded">
                <Image src={person} alt="person"></Image>
                </div>
                <div>
                    <h2>Amr Hassan</h2>
                    <span className="text-[#94477D]">Managing Director</span>
                </div>
            </div>
            <div className="flex flex-col item-start w-[33%] p-5 justify-center">
                <div className="bg-slate-100 px-10 rounded">
                    <Image src={person} alt="person"></Image>
                </div>
                <div>
                    <h2>Magdy</h2>
                    <span className="text-[#94477D]">Product</span>
                </div>
            </div>
            </div>


               


        </section>

     <div className="flex flex-row items-center justify-around">
            <DeliveryContainer
              featureImageUrl={deleveryImg1}
              serviceDescription="FREE AND FAST DELIVERY"
              discreption="Free delivery for all orders over $140"
            />
            <DeliveryContainer
              featureImageUrl={deleveryImg2}
              serviceDescription="24/7 CUSTOMER SERVICE"
              discreption="Friendly 24/7 customer support"
            />
            <DeliveryContainer
              featureImageUrl={deleveryImg3}
              serviceDescription="MONEY BACK GUARANTEE"
              discreption="We reurn money within 30 days"
            />
          </div>
         <FooterComp
              frameDivPosition="unset"
              frameDivBottom="unset"
              frameDivLeft="unset"
              iconsCurvedLocationObjectFit="unset"
            />
    </>
  )
}

export default page
