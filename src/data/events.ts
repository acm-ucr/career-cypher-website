export const events: {
  [key: string]: { title: string; time: string; location: string }[];
} = {
  Sunday: [],
  Monday: [
    { title: "Event 1", time: "2:10 - 2:30", location: "@location1" },
    { title: "Event 2", time: "2:20 - 2:30", location: "@location2" },
  ],
  Tuesday: [
    { title: "Event 3", time: "2:30 - 2:30", location: "@location3" },
    { title: "Event 4", time: "2:20 - 2:30", location: "@location4" },
  ],
  Wednesday: [
    { title: "Event 5", time: "2:10 - 2:30", location: "@location5" },
    { title: "Event 6", time: "2:00 - 2:30", location: "@location6" },
  ],
  Thursday: [
    { title: "Event 7", time: "2:10 - 2:30", location: "@location7" },
    { title: "Event 8", time: "2:20 - 2:30", location: "@location8" },
    { title: "Event 9", time: "2:30 - 2:30", location: "@location9" },
  ],
  Friday: [{ title: "Event 10", time: "2:10 - 2:30", location: "@location1" }],
  Saturday: [],
};
