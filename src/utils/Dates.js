const TimeConverter = {
  millisecondsToMinutes(time) {
    return time / (1000 * 60);
  },

  millisecondsToHours(time) {
    return time / (1000 * 60 * 60);
  },

  millisecondsToDays(time) {
    return time / (1000 * 60 * 60 * 24);
  },

  millisecondsToWeeks(time) {
    return time / (1000 * 60 * 60 * 24 * 7);
  },

  millisecondsToMonths(time) {
    return time / (1000 * 60 * 60 * 24 * 7 * 4);
  },

  millisecondsToYears(time) {
    return time / (1000 * 60 * 60 * 24 * 7 * 4 * 12);
  },

  minutesToMilliseconds(time) {
    return time * (1000 * 60);
  },

  hoursToMilliseconds(time) {
    return time * (1000 * 60 * 60);
  },

  daysToMilliseconds(time) {
    return time * (1000 * 60 * 60 * 24);
  },

  weeksToMilliseconds(time) {
    return time * (1000 * 60 * 60 * 24 * 7);
  },

  monthsToMilliseconds(time) {
    return time * (1000 * 60 * 60 * 24 * 7 * 4);
  },

  yearsToMilliseconds(time) {
    return time * (1000 * 60 * 60 * 24 * 7 * 4 * 12);
  },
};

export { TimeConverter };
