export type RoadMapDataID =
  | "developer"
  | "3D"
  | "illustration"
  | "content"
  | "animation";

type RoadMapDataType = [
  {
    month: string;
    mainFocus: string;
    completed: boolean;
  },
  {
    month: string;
    mainFocus: string;
    completed: boolean;
  },
  {
    month: string;
    mainFocus: string;
    completed: boolean;
  },
  {
    month: string;
    mainFocus: string;
    completed: boolean;
  },
  {
    month: string;
    mainFocus: string;
    completed: boolean;
  },
  {
    month: string;
    mainFocus: string;
    completed: boolean;
  },
  {
    month: string;
    mainFocus: string;
    completed: boolean;
  },
  {
    month: string;
    mainFocus: string;
    completed: boolean;
  },
  {
    month: string;
    mainFocus: string;
    completed: boolean;
  },
  {
    month: string;
    mainFocus: string;
    completed: boolean;
  },
  {
    month: string;
    mainFocus: string;
    completed: boolean;
  },
  {
    month: string;
    mainFocus: string;
    completed: boolean;
  }
];

export const returnRoadmap = (id: RoadMapDataID): RoadMapDataType => {
  return allRoadMapObj[id];
};

const developerRoadMap: RoadMapDataType = [
  {
    month: "Januaray",
    mainFocus: "This Jan",
    completed: false,
  },
  {
    month: "Feburuary",
    mainFocus: "This Feb",
    completed: false,
  },
  {
    month: "March",
    mainFocus: "this is March",
    completed: false,
  },
  {
    month: "April",
    mainFocus: "This April",
    completed: false,
  },
  {
    month: "May",
    mainFocus: "This is May",
    completed: false,
  },
  {
    month: "June",
    mainFocus: "This June",
    completed: false,
  },
  {
    month: "July",
    mainFocus: "This is July",
    completed: false,
  },
  {
    month: "August",
    mainFocus: "This is Augusy",
    completed: false,
  },
  {
    month: "September",
    mainFocus: "This is Sep",
    completed: false,
  },
  {
    month: "October",
    mainFocus: "This is Oct",
    completed: false,
  },
  {
    month: "Novemeber",
    mainFocus: "This is Nov",
    completed: false,
  },
  {
    month: "Decemeber",
    mainFocus: "This is Decemeber",
    completed: false,
  },
];

const allRoadMapObj = {
  developer: developerRoadMap,
};
