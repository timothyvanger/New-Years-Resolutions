import useModal from "../hooks/useModal";
import { RoadMapDataID } from "../../data/subScheduleData/Roadmap/roadMapData";
import RoadMap from "./RoadMap";
import style from "./roadmap.module.css";

type RoadmapButtonProps = {
  id: RoadMapDataID;
};
const RoadmapButton = ({ id }: RoadmapButtonProps) => {
  const { openModal, closeModal, isOpen, createModal } = useModal();

  return (
    <>
      {isOpen && createModal()}
      <button
        className={style.roadMapButton}
        onClick={() => openModal(<RoadMap id={id} closeModal={closeModal} />)}
      >
        Click for Roadmap
      </button>
      ;
    </>
  );
};

export default RoadmapButton;
