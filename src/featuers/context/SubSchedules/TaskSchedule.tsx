import { ReactNode } from "react";
import style from "./taskSchedule.module.css";

type TaskScheduleProps = {
  task?: string | ReactNode;
  weekDay?: string;
  id?: undefined | number;
  weeklyTask?: string | ReactNode;
  image?: string;
};
const TaskSchedule = ({
  task,
  weekDay,
  id,
  weeklyTask,
  image,
}: TaskScheduleProps) => {
  if (id === 1) {
    return (
      <div className={style.taskContainer}>
        <label htmlFor="c1" className={style.containerCard}>
          <div className={style.row}>
            <div className={style.icon}>{weekDay}</div>
            <div className={style.desc}>
              <div className={style.resoCon}>{weeklyTask}</div>
            </div>
          </div>
        </label>
      </div>
    );
  }

  return (
    <>
      <div className={style.taskContainer}>
        <label htmlFor="c1" className={style.containerCard}>
          <div className={style.row}>
            <div className={style.icon}>{weekDay}</div>
            <div className={style.desc}>
              <div className={style.resoCon}>
                <em>{task}</em>
              </div>
            </div>
          </div>
        </label>
      </div>
    </>
  );
};

export default TaskSchedule;
