export const returnDisplayDate = (
  currentDate: number,
  lastDay: number,
  dayIndex: number
): number => {
  if (currentDate > lastDay) {
    const newDate = new Date();
    const returnDate = new Date(newDate.getFullYear(), newDate.getMonth(), 1);
    let addToDate = Math.abs(returnDate.getDay() - dayIndex);
    return returnDate.getDate() + addToDate;
  }

  return currentDate;
};

export const getMonthWeek = function () {
  const currentDate = new Date();
  const firstDay = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();
  return Math.ceil((currentDate.getDate() + firstDay) / 7);
};

export const returnTaskNode = (
  text: string,
  isTwo: boolean,
  textTwo: string = "",
  isLink: boolean = false,
  link: string = ""
) => {
  if (isTwo) {
    return (
      <ul>
        <li className="taskBulletPoints">{text}</li>
        <br />
        {isLink ? (
          <li className="taskBulletPoints">
            <a href={link} className="taskScheduleLink" target="_blank">
              {textTwo}
            </a>
          </li>
        ) : (
          <li className="taskBulletPoints">{textTwo}</li>
        )}
      </ul>
    );
  }
  return <li className="taskBulletPoints">{text}</li>;
};
