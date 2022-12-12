import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import {
  postUpdated,
  selectPostById,
} from "../../services/reducers/postsSlice";

export const EditPostForm = () => {
  const { postId } = useParams();
  const post = useSelector((state) => selectPostById(state, postId));
  const [nameRU, setNameRU] = useState(post.nameRU);
  const [description, setDescription] = useState(post.description);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onTitleChanged = (e) => setNameRU(e.target.value);
  const onContentChanged = (e) => setDescription(e.target.value);

  const onSavePostClick = () => {
    if (nameRU && description) {
      dispatch(postUpdated({ id: postId, nameRU, description }));
      navigate(`/posts/${postId}`);
    }
  };

  return (
    <section className="editpost">
      <h2 className="editpost__title">Редактировать отзыв</h2>
      <form className="postform">
        <label htmlFor="postTitle" className="postform__item">
          Заголовок отзыва:
        </label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={nameRU}
          onChange={onTitleChanged}
          className="postform__item"
        />
        <label htmlFor="postContent" className="postform__item">
          Описание:
        </label>
        <textarea
          id="postContent"
          name="postContent"
          value={description}
          onChange={onContentChanged}
          className="postform__item"
        />
        <button
          type="button"
          className="postform__button"
          onClick={onSavePostClick}
        >
          Сохранить отзыв
        </button>
      </form>
    </section>
  );
};
