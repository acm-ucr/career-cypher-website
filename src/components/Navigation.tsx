import navItems from "../data/navItems.json";
import Link from "next/link";

const Navigation = () => {
  return (
    <div className="fixed z-10 flex w-screen justify-center border-b-1 border-black bg-amber-50 pb-9 md:py-[1%]">
      {navItems.map((navItem, index) => (
        <Link
          key={index}
          className="w-30 translate-y-4 text-center text-lg font-extrabold text-black md:w-[10vw] md:translate-y-0 md:text-[1.4vw]"
          href={navItem.link}
        >
          {navItem.name}
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
