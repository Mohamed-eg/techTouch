import Link from "next/link";
import Image from 'next/image';
import cartIcon from '../public/Buy.svg'

const CardWithLinksAndText = (props) => {
  return (
    <div className=" flex flex-col items-start group justify-start gap-[16px] text-left text-base text-text2 font-title-20px-semibold">
      <Link
        className="cursor-pointer [text-decoration:none] relative rounded-xl bg-secondary w-[270px] h-[250px] overflow-hidden   "
        href="/product-details-page"
      >
        <Image  width={5} height={5} alt="img"
          className="absolute top-[8px] right-[8px] max-w-full overflow-hidden max-h-full"
           
          src="/wishlist@2x.png"
        />
      <div className="flex items-center justify-center w-full h-auto rounded-t-lg">
      <Image height={140} alt="img"
          width={190}
          className="relative !rounded-t-lg overflow-hidden w-full h-[250px] object-cover"
          src={props?.imageLink}
        />
      </div>
        <button /*onClick={(mouse_event, categore = product.categories, id = product.id, name = product.name, url = product.url, prise = product.prise, colors = product.colors[0].color) => dispatch(addToCart({ id, name, url, prise, colors, categore }))}*/
                    className="w-[270px] h-[40px] absolute text-white  bottom-[-40px] group-hover:bottom-[0px] z-10 text-xl duration-300 p-1 cursor-pointer bg-scondry border-none flex items-center justify-center flex-row"
                  ><Image alt="img" className="w-[24px] mr-[10px] h-[24px]" src={cartIcon} /><p className="m-0">add to cart</p></button>
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
