import { format, addDays, isToday } from "date-fns";

export const getWeekDays = (from = new Date()) =>
  Array.from({ length: 7 }, (_, i) => {
    const date = addDays(from, i);
    return { day: format(date, "EEE").toUpperCase(), date: date.getDate(), isToday: isToday(date) };
  });

