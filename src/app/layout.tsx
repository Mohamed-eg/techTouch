import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./index.css";
import Providers from "../redux/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Touch Tech",
  description: "Come and shop what you want",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        /> */}
        <link rel="icon" href="/icons/logo-mini.svg" />
      </head>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
