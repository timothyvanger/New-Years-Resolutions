import style from "./mainSchedule.module.css";

import { ScheduleContent } from "./MainSchedule";

type MainScheduleProps = {
  weekDay: string;
  eveningRoutine: string;
  morningRoutine: string;
  date: number;
  cardIndex: number;
  exerciseSchedule?: string;
  isChecked: boolean;
};

const MainScheduleCard = ({
  weekDay,
  eveningRoutine,
  morningRoutine,
  date,
  cardIndex,
  exerciseSchedule,
  isChecked,
}: MainScheduleProps) => {
  return (
    <>
      <input type="radio" name="slide" id={cardIndex.toString()} />
      <label
        htmlFor={cardIndex.toString()}
        className={style.containerCard}
        style={
          isChecked
            ? { border: "1px solid #e3b23c" }
            : { border: "1px solid transparent" }
        }
      >
        <div className={style.row}>
          <div className={style.dateName}>{weekDay}</div>
          <div
            className={style.icon}
            style={isChecked ? { color: "#e3b23c" } : { color: "white" }}
          >
            {date}
          </div>
          <div className={style.desc}>
            <div className={style.resoCon}>
              <p>{morningRoutine}</p>
            </div>
            {exerciseSchedule && (
              <div className={style.resoCon}>
                <p>{exerciseSchedule}</p>
              </div>
            )}
            <div className={style.resoCon}>
              <p>{eveningRoutine}</p>
            </div>
          </div>
        </div>
      </label>
    </>
  );
};

export default MainScheduleCard;
