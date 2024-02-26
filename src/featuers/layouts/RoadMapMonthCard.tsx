import style from "./roadmap.module.css";

type RoadMapCardProps = {
  month: string;
  mainFocus: string;
  completed: boolean;
};
const RoadMapMonthCard = ({
  month,
  mainFocus,
  completed,
}: RoadMapCardProps) => {
  const returnCompletedColor = (bool: boolean) => {
    if (bool) {
      return "green";
    }
    return "red";
  };
  return (
    <div
      className={style.roadMapMonthCard}
      style={{ border: `1px solid ${returnCompletedColor(completed)}` }}
    >
      <h2>{month}</h2>
      <p>{mainFocus}</p>
    </div>
  );
};
export default RoadMapMonthCard;
