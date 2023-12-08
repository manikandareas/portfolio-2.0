import { Metadata } from "next";

type NextMetadata = {
  title?: string;
  description?: string;
};

export const generateMetadata = ({ title, description }: NextMetadata) => {
  return {
    title,
    description,
  };
};

export const NextMetadata: Metadata = {
  title: {
    default: "Vito Manik - Personal Website",
    template: `%s | Vito Manik`,
  },
  description:
    "Travel Blog for the Adventurous: Read about Our Adventures and Get Inspired to Explore",
};
