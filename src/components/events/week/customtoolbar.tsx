import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { ToolbarProps, Navigate } from "react-big-calendar";
import type { CalendarEvent } from "../calendarcall";

interface CustomToolbarProps extends ToolbarProps<CalendarEvent, object> {
  selectedEventTypes: string[];
  setSelectedEventTypes: (types: string[]) => void;
  allEventTypes: string[];
}
const CustomToolbar: React.FC<CustomToolbarProps> = ({ date, onNavigate }) => {
  const monthNames = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  return (
    <div className="mx-auto flex w-full flex-col items-center justify-between pb-8 md:flex-row">
      <div className="flex w-full items-center justify-center pb-6 md:justify-start md:space-x-4 md:pb-0">
        <span className="text-acm-gray-900 order-2 w-fit px-4 text-3xl md:order-1 md:px-0 md:text-4xl">
          {monthNames[date.getMonth()]} {date.getFullYear()}
        </span>
        <button
          onClick={() => onNavigate(Navigate.PREVIOUS)}
          className="order-1 text-2xl transition hover:-translate-x-1 md:order-2 md:text-3xl"
        >
          <SlArrowLeft />
        </button>
        <button
          onClick={() => onNavigate(Navigate.NEXT)}
          className="order-3 text-2xl transition hover:translate-x-1 md:text-3xl"
        >
          <SlArrowRight />
        </button>
      </div>
    </div>
  );
};

export default CustomToolbar;
