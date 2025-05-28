import Members from "@/data/board";
import BoardCard from "./boardCard";

const Board = () => {
  return (
    <div className="mx-auto flex w-4/5 flex-wrap justify-center gap-10 md:w-3/4 md:gap-30 2xl:w-3/5">
      {Members.map(({ image, name, position }, index) => {
        return (
          <div key={index} className="flex items-center justify-center">
            <BoardCard image={image} name={name} position={position} />
          </div>
        );
      })}
    </div>
  );
};

export default Board;
