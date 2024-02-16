import { useEffect, useRef, useState } from "react";
import style from "./mainSchedule.module.css";
import MainScheduleCard from "./MainScheduleCard";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { returnDisplayDate } from "../../utili";

export type ScheduleContent = {
  weekDay:
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
    | "Sunday";
  weekDayIndex: number;
  morningRoutine: string;
  eveningRoutine: string;
  date: number;
  exerciseSchedule?: string;
  isChecked: boolean;
};

const MainSchedule = () => {
  const [currentData, setCurrentDate] = useLocalStorage(
    {
      mondayIndex: 1,
      currentMondayDate: 15,
      lastDayOfMonth: undefined,
    },
    "MAIN_SCHEDULE"
  );
  const [schedule, setSchedule] = useState<ScheduleContent[]>([
    {
      weekDay: "Monday",
      weekDayIndex: 1,
      morningRoutine: "Art Drawing",
      exerciseSchedule: "Workout",
      eveningRoutine: "Blender / 3D Art",
      date: returnDisplayDate(
        currentData.currentMondayDate + 0,
        currentData.lastDayOfMonth,
        1
      ),
      isChecked: false,
    },
    {
      weekDay: "Tuesday",
      weekDayIndex: 2,
      morningRoutine: "Content Creation",
      eveningRoutine: "Art Drawing",
      date: returnDisplayDate(
        currentData.currentMondayDate + 1,
        currentData.lastDayOfMonth,
        2
      ),
      isChecked: false,
    },
    {
      weekDay: "Wednesday",
      weekDayIndex: 3,
      morningRoutine: "Web Development",
      exerciseSchedule: "Workout",
      eveningRoutine: "Game Development",
      date: returnDisplayDate(
        currentData.currentMondayDate + 2,
        currentData.lastDayOfMonth,
        3
      ),
      isChecked: false,
    },
    {
      weekDay: "Thursday",
      weekDayIndex: 4,
      morningRoutine: "Content Creation",
      eveningRoutine: "Game Development",
      date: returnDisplayDate(
        currentData.currentMondayDate + 3,
        currentData.lastDayOfMonth,
        4
      ),
      isChecked: false,
    },
    {
      weekDay: "Friday",
      weekDayIndex: 5,
      morningRoutine: "Art Drawing",
      exerciseSchedule: "Workout",
      eveningRoutine: "Blender / 3D Art",
      date: returnDisplayDate(
        currentData.currentMondayDate + 4,
        currentData.lastDayOfMonth,
        5
      ),
      isChecked: false,
    },
    {
      weekDay: "Saturday",
      weekDayIndex: 6,
      morningRoutine: "Content Creation",
      eveningRoutine: "Blender / 3D Art",
      date: returnDisplayDate(
        currentData.currentMondayDate + 5,
        currentData.lastDayOfMonth,
        6
      ),
      isChecked: false,
    },
    {
      weekDay: "Sunday",
      weekDayIndex: 0,
      morningRoutine: "Web Development",
      eveningRoutine: "Game Development",
      date: returnDisplayDate(
        currentData.currentMondayDate + 6,
        currentData.lastDayOfMonth,
        7
      ),
      isChecked: false,
    },
  ]);

  useEffect(() => {
    const currentDate = new Date();
    //const textingDate = new Date(2024, 0, 29);
    setSchedule((prev) => {
      return prev.map((weekday) => {
        if (weekday.weekDayIndex === currentDate.getDay()) {
          return { ...weekday, isChecked: true };
        }
        return weekday;
      });
    });
    if (currentDate.getDay() !== currentData.mondayIndex) return;

    const lastDay = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    );
    setCurrentDate((prev) => {
      return {
        ...prev,
        currentMondayDate: currentDate.getDate(),
        lastDayOfMonth: lastDay.getDate(),
      };
    });
  }, []);

  const settingDateData = (index: number, date: number) => {
    setCurrentDate((prev) => {
      return { mondayIndex: index, currentMondayDate: date };
    });
  };

  return (
    <div className={style.mainSchedule}>
      <div className={style.dayContainer}>
        {schedule.map((day, index) => {
          return <MainScheduleCard {...day} key={index} cardIndex={index} />;
        })}
      </div>
    </div>
  );
};

export default MainSchedule;
