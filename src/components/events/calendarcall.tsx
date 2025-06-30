"use client";
import React from "react";
import { useState, useEffect, useMemo } from "react";
import { Calendar as RBCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { useQuery } from "@tanstack/react-query";
import "react-big-calendar/lib/css/react-big-calendar.css";
import CustomToolbar from "./week/customtoolbar";
import CustomDayHeader from "./week/customdayheader";
import "./week/index.css";

const localizer = momentLocalizer(moment);

export type GoogleEventProps = {
  start: { dateTime?: string; date?: string };
  end: { dateTime?: string; date?: string };
  location?: string;
  description?: string;
  summary: string;
};

export type CalendarEvent = {
  title: string;
  start: Date;
  end: Date;
  allDay: boolean;
  resource: GoogleEventProps;
};

export function useWindowWidth() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024,
  );

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

const CustomEvent = ({ event }: { event: CalendarEvent }) => {
  const resource = event.resource;

  const startTime = new Date(event.start).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });

  const endTime = new Date(event.end).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });

  const timeRange = `${startTime} – ${endTime}`;

  return (
    <div className="text-cypher-grey font-poppins m-1 bg-white px-2 pt-2 pb-5 text-[0.75vw] text-ellipsis shadow-lg">
      <div className="font-semibold">{event.title}</div>
      <div>{timeRange}</div>
      <div className="text-cypher-grey">
        @ {resource.location ?? "Location"}
      </div>
    </div>
  );
};

const CalendarCall = () => {
  //const [date, setDate] = useState<Date | undefined>(new Date());
  const [date, setDate] = useState<Date | undefined>(new Date("2025-06-15")); //SWITCH WHEN U GET KEY

  const isMobile = useWindowWidth() < 768;

  const { data } = useQuery<GoogleEventProps[]>({
    queryKey: ["googleCalendarEvents"],
    queryFn: async () => {
      const apiKey = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY;
      const calendarId = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_ID;

      if (!apiKey || !calendarId) {
        throw new Error("Missing API key or Calendar ID");
      }

      const now = new Date();
      const timeMin = new Date(now);
      timeMin.setMonth(now.getMonth() - 2);
      const timeMax = new Date(now);
      timeMax.setMonth(now.getMonth() + 2);

      const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(
        calendarId,
      )}/events?key=${apiKey}&orderBy=startTime&singleEvents=true&timeMin=${encodeURIComponent(
        timeMin.toISOString(),
      )}&timeMax=${encodeURIComponent(timeMax.toISOString())}`;

      const res = await fetch(url);
      if (!res.ok) throw new Error(`Error: ${res.status}`);
      const response = await res.json();
      return response.items || [];
    },
  });

  const calendarEvents = useMemo(() => {
    if (!data) return [];

    return data
      .map((event) => {
        const startStr = event.start?.dateTime || event.start?.date;
        const endStr = event.end?.dateTime || event.end?.date;
        if (!startStr || !endStr) return null;

        return {
          title: event.summary ?? "Untitled Event",
          start: new Date(startStr),
          end: new Date(endStr),
          allDay: true,
          resource: event,
        };
      })
      .filter((e): e is CalendarEvent => e !== null);
  }, [data]);

  return (
    <div>
      <div className="rounded-calendar-top mx-auto mt-[5vh] min-h-[500px] w-[80vw] pb-8">
        <RBCalendar
          localizer={localizer}
          events={calendarEvents}
          defaultView="week"
          views={["week"]}
          startAccessor="start"
          endAccessor="end"
          allDayAccessor="allDay"
          showMultiDayTimes={false}
          toolbar={false}
          step={1440} // 1 day per row
          timeslots={1}
          min={new Date(1970, 1, 1, 0, 0)}
          max={new Date(1970, 1, 1, 23, 59)}
          date={date}
          onNavigate={setDate}
          formats={{
            timeGutterFormat: (date) =>
              isMobile
                ? moment(date).format("hA")
                : moment(date).format("h:mm A"),
          }}
          key={isMobile ? "mobile" : "desktop"}
          components={{
            toolbar: (props) => (
              <CustomToolbar
                {...props}
                selectedEventTypes={["general"]}
                setSelectedEventTypes={() => {}}
                allEventTypes={["general"]}
              />
            ),
            event: CustomEvent,
            header: CustomDayHeader,
          }}
          eventPropGetter={() => ({
            style: {
              backgroundColor: "transparent",
              border: "none",
              boxShadow: "none",
              padding: 0,
              margin: 0,
            },
          })}
        />
      </div>
    </div>
  );
};

export default CalendarCall;
