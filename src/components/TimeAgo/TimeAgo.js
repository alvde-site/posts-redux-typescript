import { parseISO, formatDistanceToNow } from "date-fns";
import { translatedTime } from "../../utils/translateTimestamp";

export const TimeAgo = ({ timestamp, dateTitle }) => {
  let timeAgo = "";
  if (timestamp && timestamp !== "") {
    const date = parseISO(timestamp);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${translatedTime(timePeriod)} назад`;
  }

  return (
    <span title={dateTitle}>
      &nbsp; <i>{timeAgo}</i>
    </span>
  );
};
