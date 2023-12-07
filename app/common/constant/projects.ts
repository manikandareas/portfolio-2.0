import { ProjectItemProps, ProjectsProps } from "../definition/projects";
import { STACKS } from "./stacks";

export const projects = [
  {
    title: "Madia Blog",
    is_featured: true,
    description:
      "Personal website was built originally from scratch using several powerful stacks.",
    link_demo: "https://madia-blog.vercel.app",
    link_github: "https://github.com/vitomanik/madia-blog",
    slug: "madia-blog",
    image: "https://madia-blog.vercel.app/banner.png",
    is_show: true,
    stacks: [
      STACKS["Supabase"],
      STACKS["TypeScript"],
      STACKS["Nuxt.js"],
      STACKS["Vue.js"],
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
      "Personal website was built originally from scratch using several powerful stacks.",
    link_demo: "https://madia-blog.vercel.app",
    link_github: "https://github.com/vitomanik/madia-blog",
    slug: "madia-blog",
    image: "https://madia-blog.vercel.app/banner.png",
    is_show: true,
    stacks: [
      STACKS["Supabase"],
      STACKS["TypeScript"],
      STACKS["Nuxt.js"],
      STACKS["Vue.js"],
    ],
    created_at: new Date(),
    content:
      "Personal website was built originally from scratch using several powerful stacks.",
    updated_at: new Date(),
  },
  {
    title: "Movies",
    is_featured: true,
    description:
      "Personal website was built originally from scratch using several powerful stacks.",
    link_demo: "https://madia-blog.vercel.app",
    link_github: "https://github.com/vitomanik/madia-blog",
    slug: "madia-blog",
    image: "https://madia-blog.vercel.app/banner.png",
    is_show: true,
    stacks: [
      STACKS["Supabase"],
      STACKS["TypeScript"],
      STACKS["Nuxt.js"],
      STACKS["Vue.js"],
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
      "Personal website was built originally from scratch using several powerful stacks.",
    link_demo: "https://madia-blog.vercel.app",
    link_github: "https://github.com/vitomanik/madia-blog",
    slug: "madia-blog",
    image: "https://madia-blog.vercel.app/banner.png",
    is_show: true,
    stacks: [
      STACKS["Supabase"],
      STACKS["TypeScript"],
      STACKS["Nuxt.js"],
      STACKS["Vue.js"],
    ],
    created_at: new Date(),
    content:
      "Personal website was built originally from scratch using several powerful stacks.",
    updated_at: new Date(),
  },
] satisfies ProjectItemProps[];
