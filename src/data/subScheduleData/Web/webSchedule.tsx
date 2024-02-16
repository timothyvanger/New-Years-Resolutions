import { ReactNode } from "react";
import { returnTaskNode } from "../../../utili";
export const returnWebScehdule = (monthIndex: number): WebSchedule => {
  return scheduleHolder[monthIndex];
};
type WebSchedule = [
  [
    {
      weekDay: string;
      task: ReactNode;
    },
    {
      weekDay: string;
      task: ReactNode;
    },
    {
      weeklyTask: ReactNode;
      image: string;
      id: number;
    }
  ],
  [
    {
      weekDay: string;
      task: ReactNode;
    },
    {
      weekDay: string;
      task: ReactNode;
    },
    {
      weeklyTask: ReactNode;
      image: string;
      id: number;
    }
  ],
  [
    {
      weekDay: string;
      task: ReactNode;
    },
    {
      weekDay: string;
      task: ReactNode;
    },
    {
      weeklyTask: ReactNode;
      image: string;
      id: number;
    }
  ],
  [
    {
      weekDay: string;
      task: ReactNode;
    },
    {
      weekDay: string;
      task: ReactNode;
    },
    {
      weeklyTask: ReactNode;
      image: string;
      id: number;
    }
  ],
  [
    {
      weekDay: string;
      task: ReactNode;
    },

    {
      weekDay: string;
      task: ReactNode;
    },
    {
      weeklyTask: ReactNode;
      image: string;
      id: number;
    }
  ]
];

const febSchedule: WebSchedule = [
  [
    {
      weekDay: "Wed",
      task: returnTaskNode(
        "Model the basic mesh of the apple watch",
        true,
        "Link to first video on material shading",
        true,
        "https://www.youtube.com/watch?v=Wg244y2f9Fw&t=38s"
      ),
    },
    { weekDay: "Sun", task: "ya yet" },
    {
      weeklyTask: "draw some big asss pussy",
      image: "",
      id: 1,
    },
  ],
  [
    {
      weekDay: "Wed",
      task: returnTaskNode(
        "Model the basic mesh of the apple watch",
        true,
        "Link to first video on material shading",
        true,
        "https://www.youtube.com/watch?v=Wg244y2f9Fw&t=38s"
      ),
    },
    {
      weekDay: "Sun",
      task: returnTaskNode(
        "Model the basic mesh of the apple watch",
        true,
        "Link to first video on material shading",
        true,
        "https://www.youtube.com/watch?v=Wg244y2f9Fw&t=38s"
      ),
    },
    {
      weeklyTask: "draw some big asss pussy",
      image: "",
      id: 1,
    },
  ],
  [
    {
      weekDay: "Wed",
      task: returnTaskNode(
        "Model the basic mesh of the apple watch",
        true,
        "Link to first video on material shading",
        true,
        "https://www.youtube.com/watch?v=Wg244y2f9Fw&t=38s"
      ),
    },
    {
      weekDay: "Sun",
      task: returnTaskNode(
        "Implement RoadMap with modal feature; add current month completion and indicator feature",
        false,
        "Link to first video on material shading",
        false,
        "https://www.youtube.com/watch?v=Wg244y2f9Fw&t=38s"
      ),
    },
    {
      weeklyTask: (
        <ul>
          <li className="taskBulletPoints">
            Implement the roadmap feature for all sections
          </li>
        </ul>
      ),
      image: "",
      id: 1,
    },
  ],
  [
    {
      weekDay: "Wed",
      task: returnTaskNode(
        "Watch video on Figma",
        true,
        "Here is video",
        true,
        "https://www.youtube.com/watch?v=HZuk6Wkx_Eg"
      ),
    },
    {
      weekDay: "Sun",
      task: returnTaskNode(
        "Recreate New years page in figma and research trend and popular UI designs and implement into figma",
        false
      ),
    },
    {
      weeklyTask: (
        <ul>
          <li className="taskBulletPoints">
            Watch video on Figma and how to use it to create websites. Also
            recreate new years resolution page with pupular or astehetically
            pleasing ui designs.
          </li>
        </ul>
      ),
      image: "",
      id: 1,
    },
  ],
  [
    {
      weekDay: "Wed",
      task: returnTaskNode(
        "Recreate starbucks landing page in figma",
        true,
        "Starbucks website",
        true,
        "https://www.starbucks.com/"
      ),
    },
    {
      weekDay: "Sun",
      task: returnTaskNode(
        "Recreate starbucks landing page w/react",
        true,
        "Starbucks website",
        true,
        "https://www.starbucks.com/"
      ),
    },
    {
      weeklyTask: (
        <ul>
          <li className="taskBulletPoints">
            Recreate Starbucks landing page in figma and react.
          </li>
        </ul>
      ),
      image: "",
      id: 1,
    },
  ],
];

const scheduleHolder = {
  "1": febSchedule,
};
