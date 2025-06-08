import navItems from "../data/navItems.json";
import Link from "next/link";

const Navigation = () => {
  return (
    <div className="fixed z-10 flex w-screen pb-9 justify-center border-b-1 border-black bg-amber-50 md:py-[1%]">
      {navItems.map((navItem, index) => (
        <Link
          key={index}
          className="md:w-[10vw] w-30 text-center text-lg md:text-[1.4vw] translate-y-4 md:translate-y-0 font-extrabold text-black"
          href={navItem.link}
        >
          {navItem.name}
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
