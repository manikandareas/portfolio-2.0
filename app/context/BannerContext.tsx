import { createContext } from "react";

type BannerContextProps = {
  isBannerShow: boolean;
  setIsBannerShow: React.Dispatch<React.SetStateAction<boolean>>;
};

export const BannerContext = createContext<BannerContextProps | undefined>(
  undefined
);
