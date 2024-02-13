import FooterComp from "../../../../components/footer"
import MainHeader from "../../../../components/main-header"
import ProductDeltal from "../../../../components/refComp/productDeltal"
// import { useRouteruse,useSearchParams } from 'next/navigation';
const page = ({ params }: { params: { id: string } }) => {
  // const router = usePathname();
  // const { id } = router.query;
  console.log(params)
  return (
    <>
      <MainHeader />
      <ProductDeltal params={{ id: params.id }} />
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
