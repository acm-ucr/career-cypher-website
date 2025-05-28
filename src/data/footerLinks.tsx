import { FaInstagram, FaDiscord } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { ReactNode } from "react";
export type footerLink = {
  text: string;
  link: string;
  icon: ReactNode;
};

export const footerLinks: footerLink[] = [
  {
    text: "Instagram",
    link: "https://instagram.com/careercipher",
    icon: <FaInstagram />,
  },
  {
    text: "Discord",
    link: "https://discord.gg/vX7fqyENWR",
    icon: <FaDiscord />,
  },
  {
    text: "Email",
    link: "mailto:careercipher2023@gmail.com",
    icon: <MdMailOutline />,
  },
];
