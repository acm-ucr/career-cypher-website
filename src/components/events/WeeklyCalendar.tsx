"use client";
import { Button } from "@/components/ui/button";
import Calendar from "./Calendar";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "../ui/input";

const WeeklyCalendar = () => {
  return (
    <div className="flex w-full flex-col">
      <div className="flex w-[94vw] justify-between">
        <p className="mb-[0.4%] ml-[6.5%] text-[5vw] md:text-[2vw]">
          Upcoming Events
        </p>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="mb-[3%] h-[3vh] w-[25vw] cursor-pointer bg-blue-400 text-[2vw] text-white duration-300 hover:bg-blue-500 md:mb-[1%] md:h-[6vh] md:w-[15vw] md:text-[1.2vw]">
              Make an Appointment
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Book an Appointment</DialogTitle>
              <DialogDescription>Fill out the form below.</DialogDescription>
            </DialogHeader>
            <Input type="text" placeholder="Your Name" />
            <Input type="email" placeholder="Email" />
            <Input type="date" />
            <Button
              type="submit"
              className="w-full cursor-pointer bg-blue-500 text-white"
            >
              Submit
            </Button>
          </DialogContent>
        </Dialog>
      </div>
      <Calendar />
    </div>
  );
};

export default WeeklyCalendar;
