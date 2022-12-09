import { TODAY_EN } from "../constants/date";

export const isValidDate = (date: Date) => !isNaN(date.getTime());

export const isDateInTheFuture = (date: Date) => {
  const today = new Date();
  return date.toDateString() > today.toDateString();
};

const areDatesEqual = (date1: Date, date2: Date) =>
  date1.toDateString() === date2.toDateString();

export const getDateMonthFromDateString = (dateStr: string) => {
  const today = new Date();
  const date = new Date(dateStr);

  if (areDatesEqual(date, today)) {
    return TODAY_EN;
  } else {
    const monthName = new Intl.DateTimeFormat("fr-FR", {
      month: "short",
    }).format(date);
    return `${("0" + date.getDate()).slice(-2)} ${monthName}`;
  }
};
