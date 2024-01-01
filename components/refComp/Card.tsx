import type { NextPage } from "next";
import MainHeader from "../main-header";
import FooterComp from "../footer";
import Image from "next/image";
import prodact2 from "../../public/Monitor-Cart-Small2.png"
import prodact1 from "../../public/Monitor-Cart-Small.png"
const Cart: NextPage = () => {
  return (
    <main className="bg-bg w-full mt-12 overflow-hidden flex flex-col items-center justify-start gap-[140px] text-left text-sm text-bg font-title-20px-medium">
      <div className="w-full overflow-hidden shrink-0 flex flex-col items-center justify-center gap-[80px]">
      <MainHeader/>
        <div className="w-[1170px] h-[989px] flex flex-col items-center justify-start gap-[80px] text-button font-rubik">
          <div className="w-[1170px] overflow-hidden flex flex-col items-start justify-center">
            <div className="flex flex-col items-start justify-start">
              <div className="shrink-0 flex flex-row items-center justify-start gap-[12px]">
                <div className="relative leading-[21px] opacity-[0.5]">
                  Home /
                </div>
                <div className="relative leading-[21px]">Cart</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[80px] text-base font-title-20px-medium">
            <div className="shrink-0 flex flex-col items-start justify-start gap-[24px]">
              <div className="shrink-0 flex flex-col items-start justify-start gap-[40px]">
                <div className="rounded-lg bg-bg shadow-[0px_1px_13px_rgba(0,_0,_0,_0.05)] w-[1168px] overflow-hidden flex flex-col items-start justify-start py-6 px-[39px] box-border">
                  <div className="flex flex-row items-center justify-start gap-[284px]">
                    <div className="relative leading-[24px] font-medium">
                      Product
                    </div>
                    <div className="relative leading-[24px] font-medium">
                      Price
                    </div>
                    <div className="relative leading-[24px] font-medium">
                      Quantity
                    </div>
                    <div className="relative leading-[24px] font-medium">
                      Subtotal
                    </div>
                  </div>
                </div>
                <div className="relative rounded-lg bg-bg shadow-[0px_1px_13px_rgba(0,_0,_0,_0.05)] w-[1170px] h-[102px] overflow-hidden shrink-0">
                  <div className="absolute top-[20px] left-[30px] w-[285px] h-[58px] overflow-hidden flex flex-row items-start justify-start">
                    <div className="overflow-hidden flex flex-row items-start justify-start p-[3px] relative gap-[10px]">
                      <div className="relative rounded-[50%] bg-secondary-2 w-[18px] h-[18px] z-[0]" />
                      {/* <Image
                        className="absolute my-0 mx-[!important] h-1/4 w-3/12 top-[37.5%] right-[37.5%] bottom-[37.5%] left-[37.5%] max-w-full overflow-hidden max-h-full object-cover z-[1]"
                        alt="img"
                        src="/vector@2x.png"
                      /> */}
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[20px] ml-[-15px]">
                      <Image
                        className="relative rounded-2xl w-[54px] h-[54px] overflow-hidden shrink-0 object-cover"
                        alt="img"
                        src={prodact1}
                      />
                      <div className="relative leading-[24px]">
                        Havic HV G-92 Gamepad
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[39px] left-[386px] leading-[24px]">
                    650 EGP
                  </div>
                  <div className="absolute top-[39px] left-[1062px] leading-[24px] font-semibold text-primary">
                    600 EGP
                  </div>
                  <div className="absolute top-[27.5px] left-[708.5px] rounded-lg overflow-hidden flex flex-col items-start justify-start py-1.5 px-3 border-[1.5px] border-solid border-gray-200">
                    <div className="shrink-0 flex flex-row items-center justify-start gap-[16px]">
                      <div className="relative leading-[24px]">02</div>
                    </div>
                  </div>
                </div>
                <div className="relative rounded-lg bg-bg shadow-[0px_1px_13px_rgba(0,_0,_0,_0.05)] w-[1170px] h-[102px] overflow-hidden shrink-0">
                  <div className="absolute top-[20px] left-[30px] overflow-hidden hidden flex-row items-start justify-start p-[3px] gap-[10px]">
                    <div className="relative rounded-[50%] bg-secondary-2 w-[18px] h-[18px] z-[0]" />
                    {/* <Image
                      className="absolute my-0 mx-[!important] h-1/4 w-3/12 top-[37.5%] right-[37.5%] bottom-[37.5%] left-[37.5%] max-w-full overflow-hidden max-h-full object-cover z-[1]"
                      alt="img"
                      src="/vector@2x.png"
                    /> */}
                  </div>
                  <div className="absolute top-[39px] left-[386px] leading-[24px]">
                    650 EGP
                  </div>
                  <div className="absolute top-[39px] left-[1062px] leading-[24px] font-semibold text-primary">
                    600 EGP
                  </div>
                  <div className="absolute top-[29px] left-[710px] w-[72.5px] h-11 overflow-hidden flex flex-col items-center justify-start">
                    <div className="rounded-lg overflow-hidden flex flex-col items-start justify-start py-1.5 px-3 border-[1.5px] border-solid border-gray-200">
                      <div className="shrink-0 flex flex-row items-center justify-start gap-[16px]">
                        <div className="relative leading-[24px]">01</div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[24px] left-[39px] flex flex-row items-center justify-start gap-[20px]">
                    <Image
                      className="relative rounded-2xl w-[54px] h-[54px] overflow-hidden shrink-0 object-cover"
                      alt="img"
                      src={prodact2}
                    />
                    <div className="relative leading-[24px]">
                      Havic HV G-92 Gamepad
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch shrink-0 flex flex-row items-center justify-start text-primary font-rubik">
                <div className="rounded-lg shrink-0 flex flex-row items-center justify-center py-4 px-12 border-[1px] border-solid border-primary">
                  <div className="relative leading-[24px]">Return To Shop</div>
                </div>
              </div>
            </div>
            <div className="self-stretch shrink-0 flex flex-row items-start justify-start gap-[173px]">
              <div className="shrink-0 flex flex-row items-end justify-start gap-[16px]">
                <div className="rounded-lg bg-text box-border w-[300px] overflow-hidden shrink-0 flex flex-row items-end justify-start py-4 px-6 border-[1px] border-solid border-text">
                  <div className="relative leading-[24px] opacity-[0.5]">
                    Coupon Code
                  </div>
                </div>
                <div className="rounded-lg bg-primary shrink-0 flex flex-row items-center justify-center py-4 px-12 text-bg">
                  <div className="relative leading-[24px] font-medium">
                    Apply Coupon
                  </div>
                </div>
              </div>
              <div className="flex-1 rounded-2xl shadow-[0px_0px_5px_rgba(12,_26,_75,_0.04),_0px_4px_20px_-2px_rgba(50,_50,_71,_0.02)] overflow-hidden flex flex-col items-start justify-start py-8 px-6 gap-[32px] border-[1.5px] border-solid border-gray-200">
                <div className="flex flex-col items-start justify-start gap-[24px]">
                  <div className="relative text-xl leading-[28px] font-medium">
                    Cart Total
                  </div>
                  <div className="w-[422px] shrink-0 flex flex-row items-start justify-between">
                    <div className="relative leading-[24px]">Subtotal:</div>
                    <div className="relative leading-[24px]">1200 EGP</div>
                  </div>
                  <div className="shrink-0 flex flex-col items-start justify-start opacity-[0.4]">
                    <div className="relative box-border w-[423px] h-px border-t-[1px] border-solid border-gray-100" />
                  </div>
                  <div className="shrink-0 flex flex-row items-start justify-start gap-[314px]">
                    <div className="relative leading-[24px]">Shipping:</div>
                    <div className="relative leading-[24px]">Free</div>
                  </div>
                  <div className="shrink-0 flex flex-col items-start justify-start opacity-[0.4]">
                    <div className="relative box-border w-[423px] h-px border-t-[1px] border-solid border-gray-100" />
                  </div>
                  <div className="w-[422px] shrink-0 flex flex-row items-start justify-between">
                    <div className="relative leading-[24px]">Total:</div>
                    <div className="relative leading-[24px]">1200 EGP</div>
                  </div>
                </div>
                <div className="rounded-2xl bg-primary flex flex-row items-center justify-center py-4 px-12 text-bg">
                  <div className="relative leading-[24px] font-medium">
                    Procees to checkout
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
<footer>
  <FooterComp/>
</footer>
    </main>
  );
};

export default Cart;
