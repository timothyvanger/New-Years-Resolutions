import useModal from "../hooks/useModal";
import { RoadMapDataID } from "../../data/subScheduleData/Roadmap/roadMapData";
import RoadMap from "./RoadMap";

type RoadmapButtonProps = {
  id: RoadMapDataID;
};
const RoadmapButton = ({ id }: RoadmapButtonProps) => {
  const { openModal, closeModal, isOpen, createModal } = useModal();

  return (
    <>
      {isOpen && createModal()}
      <button
        className="roadMapButton"
        onClick={() => openModal(<RoadMap id={id} />)}
      >
        Click for Roadmap
      </button>
      ;
    </>
  );
};

export default RoadmapButton;
