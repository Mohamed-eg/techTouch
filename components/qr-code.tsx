"use client"
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from 'next/image'
import qrcode1 from "../public/qrcode.png"

type QrCodeType = {
  /** Style props */
  qrCodePosition?: CSSProperties["position"];
  qrCodeFlexShrink?: CSSProperties["flexShrink"];
};

const QrCode: NextPage<QrCodeType> = ({
  qrCodePosition,
  qrCodeFlexShrink,
}) => {
  const qrCodeStyle: CSSProperties = useMemo(() => {
    return {
      position: qrCodePosition,
      flexShrink: qrCodeFlexShrink,
    };
  }, [qrCodePosition, qrCodeFlexShrink]);

  return (
    <div className="bg-text2 w-20 h-20 overflow-hidden" style={qrCodeStyle}>
      <Image  alt="img"
        className="absolute top-[2px] left-[2px] w-[76px] h-[76px] object-contain"
        src={qrcode1}
      />
    </div>
  );
};

export default QrCode;
