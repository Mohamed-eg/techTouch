import FooterComp from "../../../../components/footer"
import MainHeader from "../../../../components/main-header"
import ProductDeltal from "../../../../components/refComp/productDeltal"
const page = (params:any) => {
    console.log(params)
  return (
    <>
      <MainHeader/>
      <ProductDeltal producDeta= {params}/>
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
