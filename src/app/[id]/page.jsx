import React from 'react'
import Profile from '../../../components/refComp/profile'
import MainHeader from '../../../components/main-header'
import FooterComp from '../../../components/footer'

const page = () => {
  return (
    <div>
        <MainHeader />
      <Profile/>
      <footer>
        <FooterComp
          frameDivPosition="unset"
          frameDivBottom="unset"
          frameDivLeft="unset"
          iconsCurvedLocationObjectFit="unset"
        />
      </footer>
    </div>
  )
}

export default page
