import startOfWeek from "date-fns/startOfWeek";
import isSameDay from "date-fns/isSameDay";
import addDays from "date-fns/addDays";
import format from "date-fns/format";

export const calculatePercent = (total, num) => ((num / total) * 100).toFixed(2);

export const timeToFloat = (time) => {
  const hoursMinutes = time.split(/[.:]/);
  const hours = parseInt(hoursMinutes[0], 10);
  const minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;

  return hours + minutes / 60;
};

export const getDate = (date) => {
  const splitDate = date.split('-');
  return new Date(splitDate[2], +splitDate[1] - 1, splitDate[0]);
};

export const isDateEqual = (date, selectedDate) => {
  const dateLeft = date instanceof Date ? date : getDate(date);
  const dateRight = selectedDate instanceof Date ? selectedDate : getDate(selectedDate);
  return isSameDay(dateLeft, dateRight);
};

export const isDateInRange = (date, selectedDate) => {
  const startDay = date instanceof Date ? startOfWeek(date) : startOfWeek(getDate(date));
  const selectedStartDay = selectedDate instanceof Date ? startOfWeek(selectedDate) : startOfWeek(getDate(selectedDate));

  return isDateEqual(startDay, selectedStartDay);
};

export const getWeekName = (date) => {
  const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const weekIndex = getDate(date).getDay();
  return week[weekIndex];
};

export const updateAndFormatDate = (date, value) => format(addDays(date, value), 'dd-MM-yyyy');
