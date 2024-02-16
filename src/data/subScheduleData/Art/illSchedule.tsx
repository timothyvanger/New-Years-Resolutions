import { ReactNode } from "react";

export const returnArtSchedule = (monthIndex: number): ScheduleType => {
  return scheduleHolder[monthIndex];
};

export type ScheduleType = [
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

const febSchedule: ScheduleType = [
  [
    {
      weekDay: "Mon",
      task: "draw some shit",
    },
    {
      weekDay: "Tues",
      task: "Draw some new shit",
    },
    {
      weekDay: "Friday",
      task: "draw some boobies",
    },
    {
      weeklyTask: (
        <ul>
          <li>2 pages of human figure shaded</li>
          <li></li>
          <li></li>
        </ul>
      ),
      image: "",
      id: 1,
    },
  ],
  [
    {
      weekDay: "Mon",
      task: <li className="taskBulletPoints">1 page of human figure shaded</li>,
    },
    {
      weekDay: "Tues",
      task: <li className="taskBulletPoints">1 page of human figure shaded</li>,
    },
    {
      weekDay: "Fri",
      task: (
        <ul>
          <li className="taskBulletPoints">
            Do a study on the human figure of another artist
          </li>
          <br></br>
          <li className="taskBulletPoints">
            1 piece on the human figure in point perspective + simple props
          </li>
        </ul>
      ),
    },
    {
      weeklyTask: (
        <ul>
          <li className="taskBulletPoints">
            2 pages of human figure shaded (at least 3 figures a page)
          </li>
          <li className="taskBulletPoints">
            1 study of another artist on the human figure shaded
          </li>
          <li className="taskBulletPoints">
            1 piece after study of the human figure in one point perspective
          </li>
        </ul>
      ),
      image: "qwe",
      id: 1,
    },
  ],
  [
    {
      weekDay: "Mon",
      task: (
        <li className="taskBulletPoints">
          1 page of human figure shaded (1 figure in a dynamic pose)
        </li>
      ),
    },
    {
      weekDay: "Tues",
      task: (
        <li className="taskBulletPoints">
          1 page of human figure shaded (1 figure in a dynamic pose)
        </li>
      ),
    },
    {
      weekDay: "Fri",
      task: (
        <ul>
          <li className="taskBulletPoints">
            Do a study on the human figure of another artist
          </li>
          <br></br>
          <li className="taskBulletPoints">
            1 piece on the human figure in dynamic pose with one point
            perspective + simple props
          </li>
        </ul>
      ),
    },
    {
      weeklyTask: (
        <ul>
          <li className="taskBulletPoints">
            2 pages of human figure shaded (at least 3 figures a page)
          </li>
          <li className="taskBulletPoints">
            1 study of another artist on the human figure shaded
          </li>
          <li className="taskBulletPoints">
            1 piece artist study of the human figure in a dynamic pose with one
            point perspective
          </li>
        </ul>
      ),
      image: "",
      id: 1,
    },
  ],
  [
    {
      weekDay: "Mon",
      task: (
        <li className="taskBulletPoints">
          1 page of human figure shaded (1 figure in two point perspective)
        </li>
      ),
    },
    {
      weekDay: "Tues",
      task: (
        <li className="taskBulletPoints">
          1 page of human figure shaded (1 figure in two point perspective)
        </li>
      ),
    },
    {
      weekDay: "Fri",
      task: (
        <ul>
          <li className="taskBulletPoints">
            Do a study on the human figure of another artist
          </li>
          <br></br>
          <li className="taskBulletPoints">
            1 piece on the human figure in two perspective + simple props
          </li>
        </ul>
      ),
    },
    {
      weeklyTask: (
        <ul>
          <li className="taskBulletPoints">
            2 pages of human figure shaded (at least 3 figures a page)
          </li>
          <li className="taskBulletPoints">
            1 study of another artist on the human figure shaded
          </li>
          <li className="taskBulletPoints">
            1 piece artist study of the human figure in two point perspective
          </li>
        </ul>
      ),
      image: "",
      id: 1,
    },
  ],
  [
    {
      weekDay: "Mon",
      task: (
        <li className="taskBulletPoints">
          1 page of human figure shaded (1 figure in two point perspective in
          dynamic pose)
        </li>
      ),
    },
    {
      weekDay: "Tues",
      task: (
        <li className="taskBulletPoints">
          1 page of human figure shaded (1 figure in two point perspective in
          dynamic pose)
        </li>
      ),
    },
    {
      weekDay: "Fri",
      task: (
        <ul>
          <li className="taskBulletPoints">
            Do a study on the human figure of another artist
          </li>
          <br></br>
          <li className="taskBulletPoints">
            1 piece on the human figure in dyanmic pose with two perspective +
            simple props
          </li>
        </ul>
      ),
    },
    {
      weeklyTask: (
        <ul>
          <li className="taskBulletPoints">
            2 pages of human figure shaded (at least 3 figures a page)
          </li>
          <li className="taskBulletPoints">
            1 study of another artist on the human figure shaded
          </li>
          <li className="taskBulletPoints">
            1 piece artist study of the human figure in dynamic pose with two
            point perspective
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
