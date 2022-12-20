import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { Link } from "react-router-dom";
import { fetchPosts, selectAllPosts } from "../../services/reducers/postsSlice";
import { PostAuthor } from "../PostAuthor/PostAuthor";
import { ReactonButtons } from "../ReactionButtons/ReactionButtons";
import { Spinner } from "../Spinner/Spinner";
import { TPost } from "../../utils/types";

const PostExcerpt = ({ post }:{ post: TPost}) => {
  return (
    <article className="posts__excerpt" key={post.id}>
      <h3>{post.nameRU}</h3>
      <p className="posts__content">{post.description}</p>
      <PostAuthor
        userId={post.user}
        timestamp={post.created_at}
        dateTitle={post.dateTitle}
      />
      <Link className="posts__morelink" to={`/posts/${post.id}`}>
        читать весь отзыв
      </Link>
      <ReactonButtons post={post} />
    </article>
  );
};

export const PostsList = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(selectAllPosts);

  const postStatus = useAppSelector((state) => state.posts.status);
  const error = useAppSelector((state) => state.posts.error);

  let oneRender = 1;

  useEffect(() => {
    if (postStatus === "idle" && oneRender === 1) {
      oneRender++;
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch, oneRender]);

  let content;

  if (postStatus === "loading") {
    content = <Spinner text="Загрузка..." />;
  } else if (postStatus === "succeeded") {
    content = posts.map((post) => <PostExcerpt key={post.id} post={post} />);
    content.reverse();
  } else if (postStatus === "failed") {
    content = <div>{error}</div>;
  }

  return (
    <section className="posts">
      <h2 className="posts__title">Отзывы</h2>
      {content}
    </section>
  );
};
