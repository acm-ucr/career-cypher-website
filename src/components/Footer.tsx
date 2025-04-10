import React from "react";
import footerLinks from "@/data/footerLinks.json";
import { FaInstagram, FaDiscord } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="fixed right-0 bottom-0 left-0 bg-transparent p-4">
      <div className="flex justify-center space-x-6">
        <Image
          src="/logoIcon"
          alt="Logo"
          width={96}
          height={32}
          className="object-contain"
        />

        {footerLinks.map((item, index) => (
          <a key={index} href={item.link}>
            {item.text === "Instagram" && <FaInstagram className="text-lg" />}
            {item.text === "Discord" && <FaDiscord className="text-lg" />}
            {item.text === "Email" && <MdOutlineMail className="text-lg" />}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
