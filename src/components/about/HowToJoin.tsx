import Image from "next/image";
import HowImage from "@/public/image1.jpg";

const HowToJoin = () => {
  return (
    <div className="mt-30 h-200 w-170 pt-2 justify-items-center rounded-lg border-1 pb-15">

      <Image className="w-166 rounded-lg h-80 " src={HowImage} alt="" />

      <p className="font-poppins pt-4 pb-4 text-3xl font-[1000]">HOW TO JOIN?</p>
      <p className="font-poppins w-md text-center text-xl opacity-65">
        Join our discord to stay updated with weekly meetings and mock interview
        time slots!
      </p>
      <hr className="mt-6 mb-10 w-xl opacity-15"></hr>

      <a
        href="#"
        className="font-poppins rounded-lg border-1 bg-[linear-gradient(91.22deg,_#D2F4FF_1.04%,_#E8C1FF_100.47%)] px-12 py-2 text-2xl"
      >
        JOIN OUR DISCORD
      </a>
    </div>
  );
};

export default HowToJoin;
