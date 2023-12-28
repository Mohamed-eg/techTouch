import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type QrCodeType = {
  qrcode1?: string;

  /** Style props */
  qrCodePosition?: CSSProperties["position"];
  qrCodeFlexShrink?: CSSProperties["flexShrink"];
};

const QrCode: NextPage<QrCodeType> = ({
  qrcode1,
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
      <img
        className="absolute top-[2px] left-[2px] w-[76px] h-[76px] object-cover"
        alt=""
        src={qrcode1}
      />
    </div>
  );
};

export default QrCode;
