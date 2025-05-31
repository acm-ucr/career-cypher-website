import React from "react";
import { footerLinks } from "@/data/footerLinks";
import LogoIcon from "@/public/LogoIcon.webp";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="fixed right-0 bottom-0 left-0 z-10 w-screen border-t-1 border-black bg-amber-50 p-4">
      <div className="flex items-center justify-between">
        <Image src={LogoIcon} alt="Logo" className="h-6 w-6.5" />

        <div className="mr-4 flex space-x-5">
          {footerLinks.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              target="_blank"
              className="text-3xl hover:-translate-y-1"
            >
              {item.icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
