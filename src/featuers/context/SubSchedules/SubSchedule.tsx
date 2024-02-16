import style from "./subSchedule.module.css";

type SubScheduleProps = {
  task: string;
  weekDay: string;
};
const SubSchedule = ({ task, weekDay }: SubScheduleProps) => {
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
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptates quasi quae, quo nesciunt perferendis omnis esse
                  accusamus distinctio? Dolore nemo dolorem provident id
                  exercitationem? Recusandae iste adipisci consectetur dicta
                  consequatur.
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
