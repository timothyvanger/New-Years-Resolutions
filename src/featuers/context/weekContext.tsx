import React, { createContext, useContext, useEffect, useState } from "react";

type WeekProviderValue = {
  week: number;
};
type WeekProviderProps = {
  children: React.ReactNode;
};

const WeekContext = createContext<WeekProviderValue | undefined>(undefined);

export const useWeekContext = (): WeekProviderValue => {
  const context = useContext(WeekContext);

  if (!context) {
    throw new Error("There is no context");
  }
  return context;
};

export const WeekProvider = ({ children }: WeekProviderProps) => {
  const [week, setWeek] = useState<number>(0);

  useEffect(() => {
    CalculateWeek();
  }, []);

  const CalculateWeek = () => {
    const currentDate = new Date();
    const startdate = new Date(currentDate.getFullYear(), 0, 1);
    const day = Math.floor((currentDate - startdate) / (24 * 60 * 60 * 1000));

    const week = Math.ceil(day / 7);

    setWeek(week);
  };

  return (
    <WeekContext.Provider value={{ week }}>{children}</WeekContext.Provider>
  );
};
