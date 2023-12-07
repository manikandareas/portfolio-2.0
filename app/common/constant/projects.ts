import { ProjectItemProps } from "../definition/projects";
import { STACKS } from "./stacks";

export const projects = [
  {
    title: "vitomanik.com",
    is_featured: true,
    description:
      "Personal website built from scratch using Next.js 14, inspired by Ryan Aulia.",
    link_demo: "https://vitomanik.com",
    link_github: "https://github.com/manikandareas/portfolio-2.0",
    slug: "mini-media",
    image: "/images/projects/portfolio2-0.png",
    is_show: true,
    stacks: [
      STACKS["Next.js"],
      STACKS["React.js"],
      STACKS["TailwindCSS"],
      STACKS["TypeScript"],
    ],
    created_at: new Date(),
    content:
      "Personal website was built originally from scratch using several powerful stacks.",
    updated_at: new Date(),
  },
  {
    title: "Madia Blog",
    is_featured: true,
    description:
      "An article application inspired by dev.to, built with TypeScript, Nuxt 3, and Supabase.",
    link_demo: "https://madia.vitomanik.com/",
    link_github: "https://github.com/manikandareas/Madia",
    slug: "madia-blog",
    image: "/images/projects/madia-blog.png",
    is_show: true,
    stacks: [
      STACKS["Nuxt.js"],
      STACKS["Vue.js"],
      STACKS["TypeScript"],
      STACKS["Supabase"],
    ],
    created_at: new Date(),
    content:
      "Personal website was built originally from scratch using several powerful stacks.",
    updated_at: new Date(),
  },
  {
    title: "Nextjs Movies",
    is_featured: true,
    description:
      "Next.js Movies is an application for browsing movies and TV series.",
    link_demo: "https://movies-nextjs-coral.vercel.app/",
    link_github: "https://github.com/manikandareas/movies-nextjs",
    slug: "nextjs-movies",
    image: "/images/projects/nextjs-movies.png",
    is_show: true,
    stacks: [
      STACKS["Next.js"],
      STACKS["TypeScript"],
      STACKS["Tanstack Query"],
      STACKS["TailwindCSS"],
    ],
    created_at: new Date(),
    content:
      "Personal website was built originally from scratch using several powerful stacks.",
    updated_at: new Date(),
  },
  {
    title: "Mini Media",
    is_featured: true,
    description:
      "A Twitter-inspired social media application created using Prisma, tRPC, and Next.js 14.",
    link_demo: "https://akumanik.fun",
    link_github: "https://github.com/manikandareas/mini-media",
    slug: "mini-media",
    image: "/images/projects/mini-media.png",
    is_show: true,
    stacks: [
      STACKS["Next.js"],
      STACKS["TypeScript"],
      STACKS["Redux Toolkit"],
      STACKS["Trpc"],
      STACKS["Prisma"],
      STACKS["TailwindCSS"],
    ],
    created_at: new Date(),
    content:
      "Personal website was built originally from scratch using several powerful stacks.",
    updated_at: new Date(),
  },
] satisfies ProjectItemProps[];
