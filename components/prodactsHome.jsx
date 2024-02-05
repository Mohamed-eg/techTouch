import React from "react";

const prodactsHome = () => {
  return (
    <div>
      <MainHeader />
      <div className=" h-[100vh] overflow-y-auto"></div>
      <footer>
        <FooterComp
          frameDivPosition="unset"
          frameDivBottom="unset"
          frameDivLeft="unset"
          iconsCurvedLocationObjectFit="unset"
        />
      </footer>
    </div>
  );
};

export default prodactsHome;
