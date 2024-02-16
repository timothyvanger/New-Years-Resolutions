//Add a roadmap for what to learn in each month. When they are achieve, the line connecting them lights green. Roadmap is a full illustration/fundamental goal.
import { returnArtSchedule } from "../../data/subScheduleData/Art/illSchedule";
import style from "./artistSection.module.css";
import { getMonthWeek } from "../../utili";
import TaskSchedule from "../../featuers/context/SubSchedules/TaskSchedule";
import { returnThreeSchedule } from "../../data/subScheduleData/Blender/threeSchedule";
const ArtistSection = () => {
  return (
    <section id={style.artistSection}>
      <div className={style.topContainer} id="artistSection">
        <h2>I am an Artist</h2>
      </div>
      <div className={style.illustrator}>
        <h3 className={style.hThree}>Illustrator</h3>
        <div className={style.contentContainer}>
          <p>MAKE THE GOALS EASY</p>
          <p>
            You have always been artist, but you want to get better this year.
            You want to learn, grow, and improve. You want to be a better artist
            compared to the years before. You got this and you need to go
            outside your comfort zone. MAKE AN EFFORT to STUDY AND GO beyond
            what you are use to
          </p>
          <ul>
            <li>Learn something new or try something new</li>
            <li>Study and learn from other artists</li>
            <li>Learn and create something new as frequent as you can</li>
            <li>GO OUT YOUR COMFORT ZONE</li>
            <li>BE PATIENT WITH YOURSELF</li>
            <li>DON'T Give UP</li>
          </ul>
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
          nesciunt!
        </div>
      </div>
      <div className={style.threeD}>
        <h3 className={style.hThree}>3D Artist</h3>
        <div className={style.contentContainer}>
          <p>
            You want to be a 3D artist? Well just like and artist. You have to
            be diligent with your time. Be smart with learning.
          </p>
          <ul>
            <li>Study from real life</li>
            <li>model and texture from life</li>
            <li>Learn and create something new as frequent as you can</li>
            <li>BE PATIENT WITH YOURSELF</li>
            <li>DON'T Give UP</li>
          </ul>
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
          nesciunt!
        </div>
      </div>
      <div className={style.bottomContainer}>
        <div className={style.scheduleContainer}>
          <div className={style.illustratorSchedule}>
            <h3 className={style.hThree}>Illustrator Schedule</h3>
            {returnArtSchedule(new Date().getMonth()).map((week, index) => {
              if (index + 1 === getMonthWeek()) {
                return week.map((days) => {
                  return <TaskSchedule {...days} key={crypto.randomUUID()} />;
                });
              }
            })}
          </div>
          <br />
          <div className={style.illustratorSchedule}>
            <h3 className={style.hThree}>Blender Schedule</h3>
            {returnThreeSchedule(new Date().getMonth()).map((week, index) => {
              if (index + 1 === getMonthWeek()) {
                return week.map((days) => {
                  return <TaskSchedule {...days} key={crypto.randomUUID()} />;
                });
              }
            })}
          </div>
        </div>
        <p>input a roadmap for the year</p>
      </div>
    </section>
  );
};

export default ArtistSection;
