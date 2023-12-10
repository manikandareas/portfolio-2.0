"use client";

import { BannerContext } from "@/app/context/BannerContext";
import React, { PropsWithChildren } from "react";

type Props = {};

export default function BannerProvider({ children }: PropsWithChildren) {
  const [isBannerShow, setIsBannerShow] = React.useState(true);
  return (
    <BannerContext.Provider value={{ isBannerShow, setIsBannerShow }}>
      {children}
    </BannerContext.Provider>
  );
}
