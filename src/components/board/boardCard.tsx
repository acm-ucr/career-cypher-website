import Image, { StaticImageData } from "next/image";

type BoardProps = {
  image: StaticImageData;
  name: string;
  position: string;
};

const BoardCard = ({ image, name, position }: BoardProps) => {
  return (
    <div className="flex w-3/4 flex-col items-center justify-center">
      <Image src={image} alt={`BoardMember: ${name}`} className="w-full" />
      <div className="font-poppins text-cypher-dark-purple mt-5 flex w-full flex-row justify-center gap-2 text-base whitespace-nowrap md:text-lg">
        {position}
      </div>
      <div className="font-poppins w-fit text-center text-sm md:text-base">
        <div>{name}</div>
      </div>
    </div>
  );
};

export default BoardCard;
