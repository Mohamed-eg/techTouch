import type { NextPage } from "next";

const FormWithRadios: NextPage = () => {
  return (
    <div className=" flex flex-row items-start justify-start gap-[8px]">
      <input className="cursor-pointer m-0 relative w-5 h-5" type="radio" />
      <div className="relative rounded-[50%] bg-button2 w-5 h-5" />
    </div>
  );
};

export default FormWithRadios;
