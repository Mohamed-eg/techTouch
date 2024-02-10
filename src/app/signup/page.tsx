import FooterComp from '../../../components/footer';
import MainHeader from '../../../components/main-header';
import Signup from "../../../components/refComp/signUpform";


const LogIn = () => {
  return (
    <section className="bg-secondary-colors-white w-[1440px] h-[1478px] overflow-hidden text-left text-sm text-secondary-colors-white font-title-20px-medium">
      <MainHeader />
      <Signup />
      <FooterComp />
    </section>
  );
};

export default LogIn;
