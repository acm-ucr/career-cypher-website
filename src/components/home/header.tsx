import Image from "next/image";
import Logo from "@/public/resources/Logo.svg";

const Header = () => {
  return (
    <div className="font-poppins flex w-full flex-col items-center justify-center gap-3 text-lg">
      <Image
        src={Logo}
        alt={"Career Cipher Logo"}
        className="h-full max-h-18 w-full max-w-18"
      />
      Career Cipher at UCR
    </div>
  );
};

export default Header;
