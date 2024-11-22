import { TypeDays, TypeMonths } from "./types";
import { days } from "./utils/days";
import { months } from "./utils/months";

export const getFirstDate = (): string => {
  const date = new Date();
  return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
};

export const getSecondDate = (): string => {
  const date = new Date();
  const month: TypeMonths[] = months.filter((month) => month.id === date.getMonth());
  return `${date.getDate()} ${month[0].short} ${date.getFullYear()}`;
};

export const getShortDate = (): string => {
  const date = new Date();
  return `${date.getDate()}/${date.getMonth()+1}`;
};

export const getCompleteDate = (format: string = "complete"): string => {
  const date = new Date();
  const day: TypeDays[] = days.filter((day) => day.id === date.getDay());
  const month: TypeMonths[] = months.filter((month) => month.id === date.getMonth());

  if (format === "short") {
    return `${day[0].short}, ${date.getDate()} ${month[0].month}`;
  }

  return `${day[0].day}, ${month[0].month} ${date.getDate()}, ${date.getFullYear()}`;
};

export const getLocalHour = (): string => {
  const date = new Date();
  return `${date.getHours()}:${date.getMinutes()}`;
};

