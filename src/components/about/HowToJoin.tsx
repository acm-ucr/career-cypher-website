import Image from "next/image";
import Link from "next/link";
import HowImage from "@/public/image.webp";

const HowToJoin = () => {
  return (
    <div className="my-30 flex w-full flex-col items-center justify-center rounded-lg border p-4 pb-15 sm:w-11/12 md:w-3/4 lg:w-2/3 xl:w-[65%]">
      <Image
        className="w-full rounded-lg object-cover"
        src={HowImage}
        alt="How to join graphic"
      />

      <div className="mt-6 flex flex-col items-center justify-center">
        <p className="font-poppins text-center text-2xl font-bold sm:text-3xl">
          HOW TO JOIN?
        </p>
        <p className="font-poppins mt-4 text-center text-lg break-words whitespace-normal opacity-65 sm:text-xl">
          Join our Discord to stay updated with weekly meetings and mock
          interview time slots!
        </p>

        <hr className="mt-6 mb-10 w-3/4 opacity-15" />

        <Link
          href="https://discord.gg/vX7fqyENWR"
          target="_blank"
          className="font-poppins rounded-lg border bg-[linear-gradient(91.22deg,#D2F4FF_1.04%,#E8C1FF_100.47%)] px-8 py-2 text-lg sm:text-2xl"
        >
          JOIN OUR DISCORD
        </Link>
      </div>
    </div>
  );
};

export default HowToJoin;
