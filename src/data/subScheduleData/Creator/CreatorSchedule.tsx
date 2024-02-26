type ScheduleDataType = [
  { weekDay: string; task: string; description: string },
  { weekDay: string; task: string; description: string }
];

export const creatorScheduleData: ScheduleDataType = [
  {
    weekDay: "Wed",
    task: "Create rough draft",
    description:
      "First come up with an idea to illstrate. Create multiple, if possible, mock ups/rough drafts of the idea. Come to an agreement on one idea and create a fleshed out rough draft /sketch of the final idea",
  },
  {
    weekDay: "Sun",
    task: "Finish and Render art piece",
    description:
      "Take the final rough draft and create a finished illustration from it. Apply post processing and post",
  },
];
