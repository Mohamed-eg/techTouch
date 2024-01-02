
import type { NextPage } from "next";
import Header1 from "./header1";
import Nav from "./nav"

const MainHeader: NextPage = () => {


  return (
    <header className="w-full fixed top-0  z-50 overflow-hidden flex flex-col items-start justify-center">
      <section className="w-full flex flex-col items-start justify-start" id="navSec">
        <Header1 />
        <Nav/>
      </section>
    </header>
  );
};

export default MainHeader;
