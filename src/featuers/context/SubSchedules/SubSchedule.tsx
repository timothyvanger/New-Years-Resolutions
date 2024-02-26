import style from "./subSchedule.module.css";

type SubScheduleProps = {
  task: string;
  weekDay: string;
  description: string;
};
const SubSchedule = ({ task, weekDay, description }: SubScheduleProps) => {
  return (
    <>
      <div className={style.dayContainer}>
        <label htmlFor="c1" className={style.containerCard}>
          <div className={style.row}>
            <div className={style.icon}>{weekDay}</div>
            <div className={style.desc}>
              <div className={style.resoCon}>
                <p>
                  <em>{task}</em>
                  <br />
                  {description}
                </p>
              </div>
            </div>
          </div>
        </label>
      </div>
    </>
  );
};

export default SubSchedule;
