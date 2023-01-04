import { useAppSelector } from "../../utils/hooks";
import { TimeAgo } from "../TimeAgo/TimeAgo";
import { TAuthorPostTimeProps } from "../../utils/types";

export const PostAuthor: React.FC<TAuthorPostTimeProps> = ({
  userId,
  timestamp,
  dateTitle,
  director
}) => {
  const author = useAppSelector((state) =>
    state.users.find((user) => user.id === userId)
  );

  return (
    <p>
      {author ? author.name : director? director:"Неизвестный автор"}
      <TimeAgo timestamp={timestamp} dateTitle={dateTitle}></TimeAgo>
    </p>
  );
};
