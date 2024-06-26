import { ProjectItemProps } from "../definition/projects";

export const projects = [
  {
    title: "{ News } App",
    is_featured: true,
    description:
      "Website berita dengan fitur authentikasi dan manajement beruta untuk editor. Terhubung dengan API dari beberap Media besar di indonesia",
    link_demo: "https://news-app-git-main-manikxixis-projects.vercel.app/",
    link_github: "https://github.com/manikandareas/news-app",
    slug: "news-app",
    image: "/images/projects/news-app.png",
    is_show: true,
    stacks: ["Next.js", "React.js", "TailwindCSS", "TypeScript"],
    created_at: new Date(),
    content:
      "Website berita dengan fitur authentikasi dan manajement beruta untuk editor. Terhubung dengan API dari beberapa Media Besar di indonesia, dibuat dengan Nextjs 14, Shadcn UI, Tanstack Query, Drizzle ORM, TailwindCSS, Neon Database serta library lainnya.",
    updated_at: new Date(),
  },
  {
    title: "vitomanik.com",
    is_featured: true,
    description:
      "Personal website built from scratch using Next.js 14, inspired by <a title='aulianza.id' href='https://aulianza.id/' target='_blank' rel='noreferrer'><u>Ryan Aulia</u></a>.",
    link_demo: "https://vitomanik.com",
    link_github: "https://github.com/manikandareas/portfolio-2.0",
    slug: "vitomanik-com",
    image: "/images/projects/portfolio2-0.png",
    is_show: true,
    stacks: ["Next.js", "React.js", "TailwindCSS", "TypeScript"],
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
    stacks: ["Nuxt.js", "Vue.js", "TypeScript", "Supabase"],
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
    stacks: ["Next.js", "TypeScript", "Tanstack Query", "TailwindCSS"],
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
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "Trpc",
      "Prisma",
      "TailwindCSS",
    ],
    created_at: new Date(),
    content:
      "Personal website was built originally from scratch using several powerful stacks.",
    updated_at: new Date(),
  },
] satisfies ProjectItemProps[];
