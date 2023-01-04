import stylesSinglePostPage from "../../components/SinglePostPage/SinglePostPage.module.css";
import { useAppSelector } from "../../utils/hooks";
import { Link, useParams } from "react-router-dom";
import { selectPostById } from "../../services/reducers/postsSlice";
import { PostAuthor } from "../PostAuthor/PostAuthor";

export const SinglePostPage = () => {
  const { postId } = useParams();
  const post = useAppSelector((state) => selectPostById(state, postId!));

  if (!post) {
    return (
      <section>
        <h2>Отзыв не найдет по указанному id!</h2>
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
        <h2>{post.nameRU}</h2>
        <p className={stylesSinglePostPage.post__content}>{post.description}</p>
        <div className={stylesSinglePostPage.post__links}>
          <Link className={stylesSinglePostPage.post__link} to={`/editPost/${post.id}`}>
            Редактировать отзыв
          </Link>
          <Link className={stylesSinglePostPage.post__link} to="/">
            К остальным отзывам
          </Link>
        </div>
      </article>
    </section>
  );
};
