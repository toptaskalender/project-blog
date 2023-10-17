import React from "react";
import { Work_Sans, Spline_Sans_Mono } from "next/font/google";
import { cookies } from "next/headers";

import clsx from "clsx";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RespectedMotionConfig from "@/components/RespectedMotionConfig";

import { LIGHT_TOKENS, DARK_TOKENS } from "@/constants";

import "./styles.css";

const mainFont = Work_Sans({
  subsets: ["latin"],
  display: "fallback",
  weight: "variable",
  variable: "--font-family",
});
const monoFont = Spline_Sans_Mono({
  subsets: ["latin"],
  display: "fallback",
  weight: "variable",
  variable: "--font-family-mono",
});

function RootLayout({ children }) {
  const savedTheme = cookies().get("color-theme");
  const theme = savedTheme?.value || "light";

  return (
    <RespectedMotionConfig>
      <html
        lang="en"
        className={clsx(mainFont.variable, monoFont.variable)}
        data-color-theme={theme}
        style={theme === "light" ? LIGHT_TOKENS : DARK_TOKENS}
      >
        <body>
          <Header initialTheme={theme} />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </RespectedMotionConfig>
  );
}

export default RootLayout;
