import type { NextPage } from "next";
import Image from "next/image";
import FooterComp from '../../../components/footer';
import MainHeader from '../../../components/main-header';
import SignIn from '../../../components/refComp/signInForm'
import market from "../../../public/background@2x.png";
import massgIcon from "../../../public/iconscurvedmessage@2x.png";
import bigTuch from "../../../public/touch-tech-logo-final-2@2x.png";
import LockIcone from "../../../public/iconscurvedlock@2x.png";


const LogIn: NextPage = () => {
  return (
    <section className="bg-secondary-colors-white w-[1440px] h-[1478px] overflow-hidden text-left text-sm text-secondary-colors-white font-title-20px-medium">
      <MainHeader />
      <SignIn />
      {/* <div className="absolute top-[142px] left-[723px] w-[720px] h-[962px]">
        <Image 
          className="absolute top-[0px] left-[0px] rounded-tl-81xl rounded-tr-none rounded-b-none w-[720px] h-[962px] object-cover"
          alt="img"
          src={market}
        />
        <div className="absolute top-[0px] left-[0px] rounded-tl-81xl rounded-tr-none rounded-b-none [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0.7))] w-[720px] h-[962px] overflow-hidden" />
      </div>
      <div className="absolute top-[178px] left-[135px] flex flex-col items-center justify-start gap-[41px] text-[36px] text-button">
        <div className="shrink-0 flex flex-col items-start justify-start gap-[80px]">
          <div className="self-stretch flex flex-col items-center justify-center">
            <Image 
              className="relative w-[319px] h-[220px] object-cover"
              alt=""
              src={bigTuch}
            />
          </div>
          <div className="shrink-0 flex flex-col items-start justify-start gap-[60px]">
            <div className="self-stretch flex flex-col items-center justify-center gap-[24px]">
              <div className="relative tracking-[0.04em] leading-[30px] uppercase font-semibold">
                Sign in now
              </div>
              <div className="relative text-base leading-[24px]">
                Enter your details below
              </div>
            </div>
            <div className="shrink-0 flex flex-col items-start justify-start gap-[32px] text-xs text-secondary-colors-steel">
              <div className="shrink-0 flex flex-col items-start justify-start gap-[32px]">
                <div className="rounded-xl bg-secondary-colors-white box-border w-[450px] overflow-hidden flex flex-row items-center justify-between py-2 px-5 border-[1px] border-solid border-grey-colors-grey-300">
                  <div className="shrink-0 flex flex-col items-start justify-start gap-[6px]">
                    <div className="relative leading-[16px]">Email</div>
                    <div className="relative text-sm leading-[18px] text-additional-colors-line-dark">
                      {"aliatwan02@gmail.com"}
                    </div>
                  </div>
                  <div className="shrink-0 flex flex-row items-start justify-start">
                    <Image 
                      className="relative w-[22px] h-[22px] object-cover"
                      alt=""
                      src={massgIcon}
                    />
                  </div>
                </div>
                <div className="rounded-xl bg-secondary-colors-white box-border w-[450px] overflow-hidden flex flex-row items-center justify-between py-[17px] px-5 text-sm border-[1px] border-solid border-grey-colors-grey-300">
                  <div className="relative leading-[22px]">{`Enter your password `}</div>
                  <Image 
                    className="relative w-[22px] h-[22px] object-cover"
                    alt=""
                    src={LockIcone}
                  />
                </div>
              </div>
              <div className="shrink-0 flex flex-row items-center justify-center gap-[8px] text-base text-grey-g200">
                <div className="shrink-0 flex flex-row items-start justify-start py-[1.25px] px-0">
                  <div className="rounded-8xs shrink-0 flex flex-row items-start justify-start">
                    <div className="relative rounded-8xs box-border w-5 h-5 border-[1.3px] border-solid border-primary-g75" />
                  </div>
                </div>
                <div className="relative leading-[20px]">Remember me</div>
              </div>
            </div>
            <div className="rounded-xl bg-primary w-[450px] h-14 flex flex-row items-center justify-center py-[18px] px-[142px] box-border text-center text-lg text-gray font-sf-ui-display">
              <div className="relative leading-[20px] font-semibold">
                Sign In
              </div>
            </div>
          </div>
        </div>
        <div className="shrink-0 flex flex-row items-center justify-center gap-[8px] text-base text-grey-g200">
          <div className="relative leading-[16px]">{"Don’t have an account?"}</div>
          <div className="relative leading-[16px] font-semibold text-primary">
            Sign up
          </div>
        </div>
      </div> */}
      <FooterComp />
    </section>
  );
};

export default LogIn;
