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
  keywords: [
    "Vito Manik",
    "Vito Andareas Manik",
    "Portfolio",
    "Personal Website",
    "Next.js",
    "Next.js 14",
    "TypeScript",
    "TailwindCSS",
    "Shadcn UI",
  ],
  authors: [{ name: "Vito Andareas Manik", url: "https://vitomanik.com" }],
};
