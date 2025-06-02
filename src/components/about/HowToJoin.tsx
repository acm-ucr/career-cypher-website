import Image from "next/image";
import Link from "next/link";
import HowImage from "@/public/image.webp";

const HowToJoin = () => {
  return (
    <div className="my-30 flex w-[65%] flex-col items-center justify-center rounded-lg border-1 p-2 pb-15">
      <Image className="h-[95%] w-[97%] rounded-lg" src={HowImage} alt="" />

      <div className="flex flex-col items-center justify-center">
        <p className="font-poppins pt-4 pb-4 text-3xl font-bold">
          HOW TO JOIN?
        </p>
        <p className="font-poppins w-md text-center text-xl opacity-65">
          Join our discord to stay updated with weekly meetings and mock
          interview time slots!
        </p>
        <hr className="mt-6 mb-10 w-xl opacity-15"></hr>
        <Link
          href="https://discord.gg/vX7fqyENWR"
          target="_blank"
          className="font-poppins rounded-lg border-1 bg-[linear-gradient(91.22deg,_#D2F4FF_1.04%,_#E8C1FF_100.47%)] px-12 py-2 text-2xl"
        >
          JOIN OUR DISCORD
        </Link>
      </div>
    </div>
  );
};

export default HowToJoin;
