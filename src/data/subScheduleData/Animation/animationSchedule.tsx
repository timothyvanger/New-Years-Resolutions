import { ScheduleType } from "../Art/illSchedule";
import { returnTaskNode } from "../../../utili";
export const returnGameSchedule = (monthIndex: number): ScheduleType => {
  return scheduleHolder[monthIndex];
};

const febSchedule: ScheduleType = [
  [
    { weekDay: "Wed", task: "" },
    { weekDay: "Thur", task: "" },
    { weekDay: "Sun", task: "" },
    {
      weeklyTask: "draw some big asss pussy",
      image: "",
      id: 1,
    },
  ],
  [
    { weekDay: "Wed", task: "" },
    { weekDay: "Thur", task: "" },
    { weekDay: "Sun", task: "" },
    {
      weeklyTask: "draw some big asss pussy",
      image: "",
      id: 1,
    },
  ],
  [
    { weekDay: "Wed", task: "" },
    { weekDay: "Thur", task: "" },
    { weekDay: "Sun", task: "" },
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
        "Study on the first animation principle: Squash and Stretch. Create 1 flat animation of the bouncing ball and 1 in perspective. Do the same with a cube",
        true,
        "Here is a video to Alan Becker on the 12 principles",
        true,
        "https://www.youtube.com/watch?v=uDqjIdI4bF4"
      ),
    },
    {
      weekDay: "Thur",
      task: returnTaskNode(
        "Study on the second animation principle: Anticipation.",
        true,
        "Here is a video to Alan Becker on the 12 principles",
        true,
        "https://www.youtube.com/watch?v=uDqjIdI4bF4"
      ),
    },
    {
      weekDay: "Sun",
      task: returnTaskNode(
        "Study on the first animation principle: Staging.",
        true,
        "Here is a video to Alan Becker on the 12 principles",
        true,
        "https://www.youtube.com/watch?v=uDqjIdI4bF4"
      ),
    },
    {
      weeklyTask: (
        <ul>
          <li className="taskBulletPoints">
            Practice the first 3 animation principle
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
        "Study on the first animation principle: Straight Ahead and Pose to pose. Create one straight ahead animation and one pose to pose",
        true,
        "Here is a video to Alan Becker on the 12 principles",
        true,
        "https://www.youtube.com/watch?v=uDqjIdI4bF4"
      ),
    },
    {
      weekDay: "Thur",
      task: returnTaskNode(
        "Study on the first animation principle: Follow Through and overlapping action.",
        true,
        "Here is a video to Alan Becker on the 12 principles",
        true,
        "https://www.youtube.com/watch?v=uDqjIdI4bF4"
      ),
    },
    {
      weekDay: "Sun",
      task: returnTaskNode(
        "Study on the first animation principle: Staging.",
        true,
        "Here is a video to Alan Becker on the 12 principles",
        true,
        "https://www.youtube.com/watch?v=uDqjIdI4bF4"
      ),
    },
    {
      weeklyTask: (
        <ul>
          <li className="taskBulletPoints">Practice principle 4,5,6.</li>
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
