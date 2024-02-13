"use client"
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from 'next/image'

type ServicesMoneyBackType = {
  servicesMoneyBackServices?: string | any;

  /** Style props */
  servicesMoneyBackIconPosition?: CSSProperties["position"];
};

const ServicesMoneyBack: NextPage<ServicesMoneyBackType> = ({
  servicesMoneyBackServices,
  servicesMoneyBackIconPosition,
}) => {
  const servicesMoneyBackIconStyle: CSSProperties = useMemo(() => {
    return {
      position: servicesMoneyBackIconPosition,
    };
  }, [servicesMoneyBackIconPosition]);

  return (
    <Image  width={5} height={5} alt="img"
      className="w-20 h-20 object-cover"
       
      src={servicesMoneyBackServices}
      style={servicesMoneyBackIconStyle}
    />
  );
};

export default ServicesMoneyBack;
