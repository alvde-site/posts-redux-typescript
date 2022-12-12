import { useSelector } from "react-redux";
import { TimeAgo } from "../TimeAgo/TimeAgo";

export const PostAuthor = ({ userId, timestamp, dateTitle }) => {
  const author = useSelector((state) =>
    state.users.find((user) => user.id === userId)
  );

  return (
    <p>
      {author ? author.name : "Неизвестный автор"}
      <TimeAgo timestamp={timestamp} dateTitle={dateTitle}></TimeAgo>
    </p>
  );
};
