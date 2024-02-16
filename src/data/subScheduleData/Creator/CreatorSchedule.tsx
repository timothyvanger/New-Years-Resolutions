type ScheduleDataType = {
  week: [
    [
      {
        weekDay: string;
        task: string;
      },
      {
        weekDay: string;

        task: string;
      },
      {
        weekDay: string;

        task: string;
      }
    ],
    [
      {
        weekDay: string;

        task: string;
      },
      {
        weekDay: string;

        task: string;
      },
      {
        weekDay: string;

        task: string;
      }
    ],
    [
      {
        weekDay: string;

        task: string;
      },
      {
        weekDay: string;

        task: string;
      },
      {
        weekDay: string;
        task: string;
      }
    ]
  ];
};

export const creatorScheduleData: ScheduleDataType = {
  week: [
    [
      {
        weekDay: "Tue",
        task: "Script + StoryBoard",
      },
      {
        weekDay: "Thur",
        task: "StoryBoard + Rough Draft",
      },
      {
        weekDay: "Sat",
        task: "Rough Drasft + Final Draft",
      },
    ],
    [
      {
        weekDay: "Tue",
        task: "Final Draft",
      },
      {
        weekDay: "Thur",
        task: "Final Draft",
      },
      {
        weekDay: "Sat",
        task: "Final Draft",
      },
    ],
    [
      {
        weekDay: "Tue",
        task: "Finish final draft + audio recording",
      },
      {
        weekDay: "Thur",
        task: "Audio recording + sound layout + editing",
      },
      {
        weekDay: "Sat",
        task: "Audio Recording + sound layout + editing",
      },
    ],
  ],
};
