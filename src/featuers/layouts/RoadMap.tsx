import { RoadMapDataID } from "../../data/subScheduleData/Roadmap/roadMapData";
import { returnRoadmap } from "../../data/subScheduleData/Roadmap/roadMapData";
import RoadMapMonthCard from "./RoadMapMonthCard";
import style from "./roadmap.module.css";

type RoadMapProps = {
  id: RoadMapDataID;
  closeModal: () => void;
};
const RoadMap = ({ id, closeModal }: RoadMapProps) => {
  return (
    <div className={style.roadMapContainer}>
      {returnRoadmap(id) &&
        returnRoadmap(id).map((month) => {
          return (
            <div className={style.roadMapWrapper}>
              <RoadMapMonthCard {...month} />
            </div>
          );
        })}
      <button className={style.closeBtn} onClick={() => closeModal()}>
        Close
      </button>
    </div>
  );
};

export default RoadMap;
