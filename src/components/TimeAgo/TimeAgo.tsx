import { parseISO, formatDistanceToNow } from "date-fns";
import { translatedTime } from "../../utils/translateTimestamp";
import { TAuthorPostTimeProps } from "../../utils/types";

export const TimeAgo = ({ timestamp, dateTitle }: TAuthorPostTimeProps) => {
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
