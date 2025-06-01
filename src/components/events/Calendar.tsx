"use client";

import { events } from "@/data/events";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const Calendar = () => {
  return (
    <div className="flex w-full flex-col items-center px-[6vw]">
      <div className="flex w-full flex-col border-[0.1vw] border-b-[0.15vw] border-black md:grid md:grid-cols-7">
        {days.map((day) => (
          <div key={day} className="flex flex-col border-x border-black">
            <div className="border-y-[0.1vw] border-black bg-gray-200 py-[0.3vw] text-center text-[5vw] md:text-[1.3vw]">
              {day}
            </div>

            <div className="flex h-[80vh] flex-col space-y-[1vh] border-t border-black p-[4vh] md:p-[5%]">
              {events[day].map((event, idx) => (
                <Dialog key={`${day}-${idx}`}>
                  <DialogTrigger asChild>
                    <div className="w-full cursor-pointer border border-gray-200 bg-white p-[4vh] shadow-lg md:p-[2vh]">
                      <p>{event.title}</p>
                      <p>{event.time}</p>
                      <p className="pb-[2vw]">{event.location}</p>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="h-auto w-[90vw] md:h-[20vh] md:w-[40vw]">
                    <DialogHeader>
                      <DialogTitle>{event.title}</DialogTitle>
                      <DialogDescription>
                        Time: {event.time}, Location: {event.location}
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
