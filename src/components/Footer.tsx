import React from "react";
import footerLinks from "@/data/footerLinks.json";
import { FaInstagram, FaDiscord } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import LogoIcon from "@/public/LogoIcon.webp";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="fixed right-0 bottom-0 left-0 p-4">
      <div className="flex justify-between items-center">
        <Image
          src={LogoIcon}
          alt="Logo"
          className="w-5 h-5"
        />

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