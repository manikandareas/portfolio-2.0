import { BiRocket as ContactIcon } from "react-icons/bi";
import {
  BsEnvelopeAtFill as EmailIcon,
  BsGithub as GithubIcon,
  BsInstagram as InstagramIcon,
  BsLinkedin as LinkedinIcon,
} from "react-icons/bs";
import {
  FiBookOpen as LearnIcon,
  FiCoffee as ProjectIcon,
  FiCpu as DashboardIcon,
  FiPieChart as AnalyticsIcon,
  FiPocket as HomeIcon,
  FiUser as ProfileIcon,
} from "react-icons/fi";
import { SiJavascript } from "react-icons/si";
import { MenuItemProps } from "../definition/menu";

const iconSize = 20;

export const MENU_ITEMS: MenuItemProps[] = [
  {
    title: "Home",
    href: "/",
    icon: <HomeIcon size={iconSize} />,
    isShow: true,
    type: "Pages",
    isExternal: false,
  },
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: <DashboardIcon size={iconSize} />,
    isShow: true,
    type: "Pages",
    isExternal: false,
  },
  {
    title: "Projects",
    href: "/projects",
    icon: <ProjectIcon size={iconSize} />,
    isShow: true,
    type: "Pages",
    isExternal: false,
  },
  {
    title: "About",
    href: "/about",
    icon: <ProfileIcon />,
    isShow: true,
    type: "Pages",
    isExternal: false,
  },
  {
    title: "Contact",
    href: "/contact",
    icon: <ContactIcon />,
    isShow: true,
    type: "Pages",
    isExternal: false,
  },
  // {
  //   title: "Playground",
  //   href: "/playground",
  //   icon: <SiJavascript />,
  //   isShow: true,
  //   type: "Pages",
  //   isExternal: false,
  // },
];

export const SOCIAL_MEDIA: MenuItemProps[] = [
  {
    title: "Email",
    href: "mailto:vitoandareas13@gmail.com",
    icon: <EmailIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: "Contact: Email",
    className: "!bg-green-600 border border dark:border-neutral-700",
    type: "Link",
  },

  {
    title: "Linkedin",
    href: "https://www.linkedin.com/in/vitomanik/",
    icon: <LinkedinIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: "Social: Linkedin",
    className: "!bg-blue-500 border border dark:border-neutral-700",
    type: "Link",
  },
  {
    title: "Instagram",
    href: "https://instagram.com/manikandareas",
    icon: <InstagramIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: "Social: Instagram",
    className: "!bg-orange-700 border border dark:border-neutral-700",
    type: "Link",
  },
  {
    title: "Github",
    href: "https://github.com/manikandareas",
    icon: <GithubIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: "Social: Github",
    className: "!bg-black border border dark:border-neutral-700",
    type: "Link",
  },
];
