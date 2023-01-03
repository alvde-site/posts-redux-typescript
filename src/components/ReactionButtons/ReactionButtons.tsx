import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import stylesReactionButtons from "../../components/ReactionButtons/ReactionButtons.module.css";

import { reactionAdded } from "../../services/reducers/postsSlice";
import { TPost } from "../../utils/types";
import { selectAllAuth } from "../../services/reducers/authSlice";

const reactionEmoji = {
  thumbsUp: "👍",
  thumbsDown: "👎",
  hooray: "🎉",
  heart: "❤️",
  rocket: "🚀",
  eyes: "👀",
};

export const ReactonButtons = ({ post }: { post: TPost }) => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector(selectAllAuth);

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        className={`${isLoggedIn?stylesReactionButtons.button:stylesReactionButtons.button_disabled}`}
        key={name}
        type="button"
        onClick={() =>
          { isLoggedIn && dispatch(reactionAdded({ postId: post.id, reaction: name }))}
        }
      >
        {emoji} {post.reactions[name]}
      </button>
    );
  });

  return <div>{reactionButtons}</div>;
};
