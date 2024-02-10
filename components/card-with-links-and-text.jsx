import Link from "next/link";
import Image from 'next/image'

const CardWithLinksAndText = (props) => {
  return (
    <div className=" flex flex-col items-start justify-start gap-[16px] text-left text-base text-text2 font-title-20px-semibold">
      <Link
        className="cursor-pointer [text-decoration:none] relative rounded-xl bg-secondary w-[270px] h-[250px] overflow-hidden   "
        href="/product-details-page"
      >
        <Image  width={5} height={5} alt="img"
          className="absolute top-[8px] right-[8px] max-w-full overflow-hidden max-h-full"
           
          src="/wishlist@2x.png"
        />
        <Image height={5} alt="img"
          width={190}
          className="absolute top-[calc(50%_-_90px)] left-[calc(50%_-_95px)] w-[190px] h-[180px] overflow-hidden object-cover"
           
          src={props?.imageLink}
        />
      </Link>
      <div className=" flex flex-col items-start justify-start gap-[8px]">
        <p className="m-0 relative leading-[24px] font-medium">
          {props?.title}
        </p>
        <div className=" flex flex-row items-center justify-start text-lg text-primary1">
          <span className=" flex flex-row items-start justify-start">
            <div className="relative leading-[24px] font-semibold">{props?.price} EGP</div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardWithLinksAndText;
