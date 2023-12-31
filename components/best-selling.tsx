import type { NextPage } from "next";
import BestSellingProductsCard from "./best-selling-products-card";
import CardWithLinksAndText from "./card-with-links-and-text";

const BestSelling: NextPage = () => {
  return (
    <div className=" p-[8vw] relative w-full flex flex-col items-center justify-center">
      <section className="w-full overflow-hidden flex flex-col items-start justify-center text-left text-base text-primary1 font-title-20px-semibold">
        <div className="flex flex-col items-start justify-start gap-[60px]">
          <div className=" flex flex-row items-end justify-start gap-[611px]">
            <BestSellingProductsCard
              sectionTitle="This Month"
              pageTitle="Best Selling Products"
              propBackgroundColor="#0a5c99"
              propColor="#0a5c99"
              propMargin="0"
            />
          </div>
          <div className=" flex flex-row items-start justify-start gap-[30px] text-text2">
            <CardWithLinksAndText />
            <CardWithLinksAndText />
            <CardWithLinksAndText />
            <CardWithLinksAndText />
          </div>
        </div>
      </section>
    </div>
  );
};

export default BestSelling;
