import style from "./developerSection.module.css";
import TaskSchedule from "../../featuers/context/SubSchedules/TaskSchedule";
import RoadmapButton from "../../featuers/layouts/RoadmapButton";
import { returnWebScehdule } from "../../data/subScheduleData/Web/webSchedule";
import { getMonthWeek } from "../../utili";

const DeveloperSection = () => {
  return (
    <section id={style.developerSection}>
      <div className={style.topContainer} id="developerSection">
        <h2>Web Development</h2>
      </div>
      <div className={style.web}>
        <h3 className={style.hThree}>Web Developer</h3>
        <div className={style.contentContainerLeft}>
          <p>
            You have come a long way from where you started as a web developer,
            but you still have a lot to learn. So this year, be a developer:
            learn things, explore ideas, and try new features. This goes for
            your exploration into game dev.
          </p>
          <p>
            You have already learn a good foundation on creating website, but
            this year focus on going out of your comfort zone. Copy and learn
            from other websites. Expore deeper and more complicated ideas.
          </p>
        </div>
        <RoadmapButton id="developer" />

        <div className={style.contentContainerRight}>
          <h4>A Developer:</h4>
          <ul>
            <li>
              Practice and reseaerch aesthetically/trendy websites and incorpate
              it into their projects
            </li>
            <li>Create their own website</li>
            <li>Finish one project before moving to another</li>
            <li>Learn.Replicate.Create.Polish</li>
          </ul>
        </div>
      </div>
      <div className={style.bottomContainer}>
        <div className={style.scheduleContainer}>
          <div className={style.webSchedule}>
            <h3 className={style.hThree}>Web Schedule</h3>
            {returnWebScehdule(new Date().getMonth()).map((week, index) => {
              if (index + 1 === getMonthWeek()) {
                return week.map((days) => {
                  return <TaskSchedule {...days} />;
                });
              }
            })}
          </div>
          <br />
        </div>
      </div>
    </section>
  );
};

export default DeveloperSection;
