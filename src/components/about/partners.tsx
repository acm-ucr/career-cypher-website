import partners from "@/data/partners";
import Image from "next/image";

const Partners = () => {
  return (
    <div className="border-cypher-grey relative mt-30 flex h-fit w-3/4 flex-wrap items-center justify-center rounded-xl border-1 px-10 py-15 opacity-70 sm:py-20">
      <div className="absolute top-0 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
        <div className="relative rounded-lg bg-linear-to-br from-[#AFD4E3] to-[#F5ABD8] p-[2px]">
          <div className="font-poppins rounded-md bg-white px-4 py-2 text-center text-base shadow-md md:text-lg">
            Previous Partners
          </div>
        </div>
      </div>
      <div className="flex flex-row flex-wrap items-center justify-center gap-7 sm:gap-10">
        {partners.map(({ name, image }, index) => (
          <div
            className="flex aspect-square flex-col items-center justify-center"
            key={index}
          >
            <Image
              src={image}
              alt={`Logo: ${name}`}
              className="h-20 w-20 object-cover sm:h-24 sm:w-24 md:h-26 md:w-26 lg:h-30 lg:w-30"
            />
            <div>{name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
