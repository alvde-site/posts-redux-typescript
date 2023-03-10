import { useEffect } from "react";
import stylesPostsList from "../../components/PostsList/PostsList.module.css";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { Link } from "react-router-dom";
import {
  fetchPosts,
  postShown,
  selectAllInitialPosts,
  selectAllPosts,
} from "../../services/reducers/postsSlice";
import { PostAuthor } from "../PostAuthor/PostAuthor";
import { ReactonButtons } from "../ReactionButtons/ReactionButtons";
import { Spinner } from "../Spinner/Spinner";
import { TPost } from "../../utils/types";
import { postDeleted } from "../../services/reducers/postsSlice";
import { selectAllAuth } from "../../services/reducers/authSlice";

const PostExcerpt = ({ post }: { post: TPost }) => {
  const dispatch = useAppDispatch();
  const handleDeletePost = () => {
    dispatch(postDeleted({ id: post.id }));
  };
  const auth = useAppSelector(selectAllAuth);
  return (
    <article className={stylesPostsList.posts__excerpt} key={post.id}>
      {(auth.userId === "0" || auth.userId === post.user) && (
        <button onClick={handleDeletePost}>Удалить отзыв</button>
      )}
      <h3 className={stylesPostsList.posts__title}>{post.nameRU}</h3>
      <p className={stylesPostsList.posts__content}>{post.description}</p>
      <PostAuthor
        userId={post.user}
        timestamp={post.created_at}
        dateTitle={post.dateTitle}
        director={post.director}
      />
      <Link
        className={stylesPostsList.posts__morelink}
        to={`/posts/${post.id}`}
      >
        читать весь отзыв
      </Link>
      <ReactonButtons post={post} />
    </article>
  );
};

export const PostsList = ({fieldRef}:any) => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(selectAllPosts);
  const initialPosts = useAppSelector(selectAllInitialPosts);
  const postsCount = useAppSelector((state) => state.posts.postsStart);
  const handleShowPosts = () => {
    dispatch(postShown());
  };

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
    content = posts
      .slice(postsCount)
      .map((post) => <PostExcerpt key={post.id} post={post} />);
    content.reverse();
  } else if (postStatus === "failed") {
    content = <div>{error}</div>;
  }

  return (
    <section className={stylesPostsList.posts}>
      <h2 className={stylesPostsList.posts__title} ref={fieldRef}>Отзывы</h2>
      <div className={stylesPostsList.posts__container}>{content}</div>
      {posts.length !== initialPosts.length && (
        <button
          className={stylesPostsList.posts__button}
          onClick={handleShowPosts}
        >
          Показать еще
        </button>
      )}
    </section>
  );
};
