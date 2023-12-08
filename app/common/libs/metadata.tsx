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
    "Personal website Vito Andareas Manik, build with Next.js, Shadncn UI, and TailwindCSS.",
};
