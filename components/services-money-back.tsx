import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type ServicesMoneyBackType = {
  servicesMoneyBackServices?: string;

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
    <img
      className="w-20 h-20 object-cover"
      alt=""
      src={servicesMoneyBackServices}
      style={servicesMoneyBackIconStyle}
    />
  );
};

export default ServicesMoneyBack;
