const CustomDayHeader = ({ date }: { date: Date }) => {
  const day = date
    .toLocaleDateString("en-US", { weekday: "long" })
    .toUpperCase();

  return (
    <div
      className={`font-poppins flex items-center justify-center pt-3 pb-3 text-[9px] md:text-[1vw]`}
    >
      {day}
      <span className="hidden md:inline">&nbsp;</span>
    </div>
  );
};

export default CustomDayHeader;
