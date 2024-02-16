import { ScheduleType } from "../Art/illSchedule";
import { returnTaskNode } from "../../../utili";

export const returnThreeSchedule = (monthIndex: number): ScheduleType => {
  return scheduleHolder[monthIndex];
};

const febSchedule: ScheduleType = [
  [
    { weekDay: "Mon", task: "qwe" },
    { weekDay: "Fri", task: "321" },
    { weekDay: "Sat", task: "321" },
    {
      weeklyTask: "draw some big asss pussy",
      image: "",
      id: 1,
    },
  ],
  [
    {
      weekDay: "Mon",
      task: returnTaskNode(
        "Model the basic mesh of the apple watch",
        true,
        "Link to first video on material shading",
        true,
        "https://www.youtube.com/watch?v=Wg244y2f9Fw&t=38s"
      ),
    },
    {
      weekDay: "Fri",
      task: returnTaskNode(
        "Add the details of the apple watch",
        true,
        "Link to the second video on material shading",
        true,
        "https://www.youtube.com/watch?v=jBT6MD7IzHU"
      ),
    },
    {
      weekDay: "Sat",
      task: returnTaskNode("Model the bands and finish the project", false),
    },
    {
      weeklyTask: (
        <ul>
          <li className="taskBulletPoints">
            Create a hydroflask with simple material shading
          </li>
          <li className="taskBulletPoints">
            Create an apple watch with simple material shading
          </li>
          <li className="taskBulletPoints">
            Watch videos on material shading.
          </li>
        </ul>
      ),
      image: "",
      id: 1,
    },
  ],
  [
    { weekDay: "Mon", task: "qwe" },
    {
      weekDay: "Fri",
      task: returnTaskNode(
        "Do a hard surface tutorial",
        true,
        "Link to a video on hardsurface tutorial",
        true,
        "https://www.youtube.com/watch?v=POIY8z11jG4&t=573s"
      ),
    },
    {
      weekDay: "Sat",
      task: returnTaskNode(
        "Watch video the videos on material shading and take notes",
        true,
        "Link to a video on material shading",
        true,
        "https://www.youtube.com/watch?v=Wg244y2f9Fw&t=38s"
      ),
    },
    {
      weeklyTask: (
        <ul>
          <li className="taskBulletPoints">
            Do a tutorial on hardsurface modeling
          </li>
          <li className="taskBulletPoints">
            Watch both videos on material shading
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
      task: returnTaskNode(
        "Watch video  on material nodes and take notes",
        true,
        "Link to a video on material shading",
        true,
        "https://www.youtube.com/watch?v=cQ0qtcSymDI"
      ),
    },
    {
      weekDay: "Fri",
      task: returnTaskNode(
        "Watch Grant Abbitt on material nodes",
        true,
        "Link to a video on material shading",
        true,
        "https://www.youtube.com/watch?v=moKFSMJwpmE"
      ),
    },
    {
      weekDay: "Sat",
      task: returnTaskNode(
        "Continue watching Grant Abbitt's tutorial on material nodes",
        true,
        "Link to a video on material shading",
        true,
        "https://www.youtube.chttps://www.youtube.com/watch?v=2vPMMivnMZcom/watch?v=Wg244y2f9Fw&t=38s"
      ),
    },
    {
      weeklyTask: (
        <ul>
          <li className="taskBulletPoints">Watch videos on material shading</li>
          <li className="taskBulletPoints">
            Complete Grabt Abbitt nodes guide
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
      task: returnTaskNode(
        "Do Josh Gambrell beginners guide to Hard Surface Modeling",
        true,
        "Link to a video",
        true,
        "https://www.youtube.com/watch?v=1qVbGr_ie30"
      ),
    },
    {
      weekDay: "Fri",
      task: returnTaskNode(
        "Do Josh Gambrell industrial tutorial",
        true,
        "Link to a video",
        true,
        "https://www.youtube.com/watch?v=vfxG9c2Ogow"
      ),
    },
    {
      weekDay: "Sat",
      task: returnTaskNode(
        "Nintendo Switch replicate + shading and texturing",
        false,
        "Link to a video on material shading",
        false,
        "https://www.youtube.com/watch?v=1qVbGr_ie30"
      ),
    },
    {
      weeklyTask: (
        <ul>
          <li className="taskBulletPoints">
            Do two hard surface tutorials from Josh Gambrell
          </li>
          <li className="taskBulletPoints">Model a Nintedo Switch</li>
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
