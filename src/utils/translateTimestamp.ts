import {
  LESS,
  LESSTHANMINUTE,
  LESSTHANMINUTERU,
  ONEDAY,
  DAY,
  DAYRU,
  TWOMINUTES,
  THREEMINUTES,
  FOURMINUTES,
  MINUTES,
  MINUTESRU,
  MINUTESFROMFIVERU,
  MINUTE,
  MINUTERU,
  ALMOST_TWO_YEARS,
  ALMOST_TWO_YEARS_RU,
  ABOUT_TWO_YEARS,
} from "./constants";

export const translatedTime = (time: string) => {
  let res;
  if (time.includes(LESS)) {
    res = time.replace(LESSTHANMINUTE, LESSTHANMINUTERU);
  } else if (time.includes(ONEDAY)) {
    res = time.replace(DAY, DAYRU);
  } else if (
    time.includes(TWOMINUTES) ||
    time.includes(THREEMINUTES) ||
    time.includes(FOURMINUTES)
  ) {
    res = time.replace(MINUTES, MINUTESRU);
  } else if (time.includes(MINUTES)) {
    res = time.replace(MINUTES, MINUTESFROMFIVERU);
  } else if (time.includes(MINUTE)) {
    res = time.replace(MINUTE, MINUTERU);
  } else if (time.includes(ALMOST_TWO_YEARS || ABOUT_TWO_YEARS)) {
    res = time.replace(ALMOST_TWO_YEARS, ALMOST_TWO_YEARS_RU);
  } else if (time.includes(ABOUT_TWO_YEARS)) {
    res = time.replace(ABOUT_TWO_YEARS, ALMOST_TWO_YEARS_RU);
  } else {
    res = time;
  }
  return res;
};
