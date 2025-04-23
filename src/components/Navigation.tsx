import navItems from "../data/navItems.json";
import Link from "next/link";

const Navigation = () => {
  return (
    <div className="fixed flex w-screen justify-center border-b-1 border-black bg-amber-50 py-[1%]">
      {navItems.map((navItem, index) => (
        <Link
          key={index}
          className="w-[10vw] text-center text-[1.4vw] font-extrabold text-black"
          href={navItem.link}
        >
          {navItem.name}
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
