import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { selectPostById } from "../../services/reducers/postsSlice";
import { PostAuthor } from "../PostAuthor/PostAuthor";

export const SinglePostPage = () => {

  const { postId } = useParams();
  const post = useSelector((state) => selectPostById(state, postId));

  if (!post) {
    return (
      <section>
        <h2>Отзыв не найдет по указанному id!</h2>
      </section>
    );
  }

  return (
    <section>
      <article className="post">
        <PostAuthor userId={post.user} />
        <h2>{post.nameRU}</h2>
        <p className="post__content">{post.description}</p>
        <div className="post__links">
          <Link className="post__link" to={`/editPost/${post.id}`}>
            Редактировать отзыв
          </Link>
          <Link className="post__link" to="/">
            К остальным отзывам
          </Link>
        </div>
      </article>
    </section>
  );
};
