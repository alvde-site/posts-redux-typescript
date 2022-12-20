import { useAppSelector } from "../../utils/hooks";
import { TAuthorPostTime } from "../../utils/types";
import { TimeAgo } from "../TimeAgo/TimeAgo";

export const PostAuthor = ({ userId, timestamp, dateTitle }:TAuthorPostTime) => {
  const author = useAppSelector((state) =>
    state.users.find((user) => user.id === userId)
  );

  return (
    <p>
      {author ? author.name : "Неизвестный автор"}
      <TimeAgo timestamp={timestamp} dateTitle={dateTitle}></TimeAgo>
    </p>
  );
};
