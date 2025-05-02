import React from "react";
import footerLinks from "@/data/footerLinks.json";
import { FaInstagram, FaDiscord } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import LogoIcon from "@/public/LogoIcon.webp";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="fixed right-0 bottom-0 left-0 border-t-1 bg-amber-50 p-4">
      <div className="flex items-center justify-between">
        <Image src={LogoIcon} alt="Logo" className="h-6 w-6.5" />

        <div className="flex space-x-6">
          {footerLinks.map((item, index) => (
            <a key={index} href={item.link}>
              {item.text === "Instagram" && <FaInstagram className="text-lg" />}
              {item.text === "Discord" && <FaDiscord className="text-lg" />}
              {item.text === "Email" && <MdOutlineMail className="text-lg" />}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
