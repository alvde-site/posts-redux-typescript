import stylesSinglePostPage from "../../components/SinglePostPage/SinglePostPage.module.css";
import { useAppSelector } from "../../utils/hooks";
import { Link, useParams } from "react-router-dom";
import { selectPostById } from "../../services/reducers/postsSlice";
import { PostAuthor } from "../PostAuthor/PostAuthor";
import { selectAllAuth } from "../../services/reducers/authSlice";

export const SinglePostPage = () => {
  const { postId } = useParams();
  const post = useAppSelector((state) => selectPostById(state, postId!));
  const auth = useAppSelector(selectAllAuth);

  if (!post) {
    return (
      <section>
        <h2 className={stylesSinglePostPage.title}>Отзыв не найдет по указанному id!</h2>
      </section>
    );
  }

  return (
    <section>
      <article className={stylesSinglePostPage.post}>
        <PostAuthor
          userId={post.user}
          timestamp={post.created_at}
          dateTitle={post.dateTitle}
          director={post.director}
        />
        <h2 className={stylesSinglePostPage.title}>{post.nameRU}</h2>
        <p className={stylesSinglePostPage.post__content}>{post.description}</p>
        <div className={stylesSinglePostPage.post__links}>
          {(auth.userId === "0" || auth.userId === post.user) && (
            <Link
              className={stylesSinglePostPage.post__link}
              to={`/editPost/${post.id}`}
            >
              Редактировать отзыв
            </Link>
          )}
          <Link className={stylesSinglePostPage.post__link} to="/">
            К остальным отзывам
          </Link>
        </div>
      </article>
    </section>
  );
};
