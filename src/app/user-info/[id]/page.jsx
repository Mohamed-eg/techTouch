import UserInfoNav from "../../../../components/user-info/UserInfoNav";
import UserInfoDetail from "../../../../components/user-info/UserInfoDetail";
import UserInfoLayout from "../../../../components/user-info/UserInfoLayout";

// import Profile from "../../../components/refComp/profile";
// import MainHeader from "../../../components/main-header";
// import FooterComp from "../../../components/footer";

const page = () => {
  return (
    <UserInfoLayout>
      <UserInfoNav />
      <UserInfoDetail />

      {/* <MainHeader /> */}
      {/* <Profile /> */}
      {/* <footer>
        <FooterComp
          frameDivPosition="unset"
          frameDivBottom="unset"
          frameDivLeft="unset"
          iconsCurvedLocationObjectFit="unset"
        />
      </footer> */}
    </UserInfoLayout>
  );
};

export default page;
