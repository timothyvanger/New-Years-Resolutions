import { RoadMapDataID } from "../../data/subScheduleData/Roadmap/roadMapData";
import { returnRoadmap } from "../../data/subScheduleData/Roadmap/roadMapData";
import RoadMapMonthCard from "./RoadMapMonthCard";
import style from "./roadmap.module.css";
type RoadMapProps = {
  id: RoadMapDataID;
};
const RoadMap = ({ id }: RoadMapProps) => {
  return (
    <>
      {returnRoadmap(id) &&
        returnRoadmap(id).map((month) => {
          return (
            <div className={style.roadMapWrapper}>
              <RoadMapMonthCard {...month} />
            </div>
          );
        })}
    </>
  );
};

export default RoadMap;
