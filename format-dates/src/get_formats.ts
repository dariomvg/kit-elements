import { TypeDays, TypeMonths } from "./types";
import { days } from "./utils/days";
import { months } from "./utils/months";


export const getFirstDate = (): string => {
  const date = new Date();
  const newDate: string = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
  return newDate;
};

export const getSecondDate = (): string => {
  const date = new Date();
  const month: TypeMonths[] = months.filter((month) => month.id === date.getMonth());
  const newDate: string = `${date.getDate()} ${month[0].short} ${date.getFullYear()}`;
  return newDate;
};

export const getShortDate = (): string => {
  const date = new Date();
  const newDate: string = `${date.getDate()}/${date.getMonth()+1}`;
  return newDate;
};

export const getCompleteDate = (format: string = "complete"): string => {
  const date = new Date();
  const day: TypeDays[] = days.filter((day) => day.id === date.getDay());
  const month: TypeMonths[] = months.filter((month) => month.id === date.getMonth());

  if (format === "short") {
    const newDate: string = `${day[0].short}, ${date.getDate()} ${month[0].month}`;
    return newDate;
  }

  const newDate: string = `${day[0].day}, ${month[0].month} ${date.getDate()}, ${date.getFullYear()}`;
  return newDate;
};

export const getLocalHour = (): string => {
  const date = new Date();
  const newDate = `${date.getHours()}:${date.getMinutes()}`;
  return newDate;
};

