import type { NextPage } from "next";
import Link from "next/link";

const Loveicon: NextPage = () => {
  return (
    <Link
      className="cursor-pointer [text-decoration:none] relative w-8 h-8 max-md:w-[5vw] max-md:h-[5vw] max-w-8 max-sm:hidden max-h-8"
      href="/wishlist"
    >
      <img
        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/iconscurvedheart@2x.png"
      />
    </Link>
  );
};

export default Loveicon;
