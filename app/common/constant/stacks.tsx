import { BsFillBootstrapFill } from "react-icons/bs";
import {
  SiCss3,
  SiExpress,
  SiHelpscout,
  SiJavascript,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiNuxtdotjs,
  SiPrisma,
  SiPwa,
  SiReact,
  SiReactquery,
  SiRedux,
  SiSupabase,
  SiTailwindcss,
  SiTrpc,
  SiTypescript,
  SiVite,
  SiVuedotjs,
  SiWordpress,
} from "react-icons/si";

export type stacksProps = {
  [key: string]: JSX.Element;
};

const iconSize = 24;

export const STACKS: stacksProps = {
  Supabase: <SiSupabase size={iconSize} className="text-green-500" />,
  JavaScript: <SiJavascript size={iconSize} className="text-yellow-400" />,
  TypeScript: <SiTypescript size={iconSize} className="text-blue-400" />,
  "Next.js": <SiNextdotjs size={iconSize} />,
  "React.js": <SiReact size={iconSize} className="text-sky-500" />,
  TailwindCSS: <SiTailwindcss size={iconSize} className="text-cyan-300" />,
  Bootstrap: (
    <BsFillBootstrapFill size={iconSize} className="text-purple-500" />
  ),
  WordPress: <SiWordpress size={iconSize} />,
  Vite: <SiVite size={iconSize} className="text-purple-500" />,
  Prisma: <SiPrisma size={iconSize} className="text-emerald-500" />,
  "Vue.js": <SiVuedotjs size={iconSize} className="text-green-500" />,
  "Nuxt.js": <SiNuxtdotjs size={iconSize} className="text-green-400" />,
  "Node.js": <SiNodedotjs size={iconSize} className="text-green-600" />,
  "Redux Toolkit": <SiRedux size={iconSize} className="text-purple-500" />,
  PWA: <SiPwa size={iconSize} className="text-amber-600" />,
  Nginx: <SiNginx size={iconSize} className="text-green-500" />,
  CSS: <SiCss3 size={iconSize} className="text-blue-300" />,
  Express: <SiExpress size={iconSize} />,
  "Shadcn ui": <SiHelpscout size={iconSize} className="text-black" />,
  Trpc: <SiTrpc size={iconSize} className="text-blue-500" />,
  "Tanstack Query": <SiReactquery size={iconSize} className="text-red-500" />,
};
