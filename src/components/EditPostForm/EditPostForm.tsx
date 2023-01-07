import { useState } from "react";
import stylesEditPostForm from "../../components/EditPostForm/EditPostForm.module.css";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { useNavigate, useParams } from "react-router-dom";

import {
  postUpdated,
  selectPostById,
} from "../../services/reducers/postsSlice";

export const EditPostForm = () => {
  const { postId } = useParams();
  const post = useAppSelector((state) => selectPostById(state, postId!));
  const [nameRU, setNameRU] = useState(post!.nameRU);
  const [description, setDescription] = useState(post!.description);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onTitleChanged = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNameRU(e.target.value);
  const onContentChanged = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setDescription(e.target.value);

  const onSavePostClick = (e: React.FormEvent) => {
    e.preventDefault();
    if (nameRU && description) {
      dispatch(postUpdated({ id: postId, nameRU, description }));
      navigate(`/posts/${postId}`);
    }
  };

  return (
    <section className={stylesEditPostForm.editpost}>
      <h2 className={stylesEditPostForm.editpost__title}>
        Редактировать отзыв
      </h2>
      <form
        className={stylesEditPostForm.postform}
        onSubmit={onSavePostClick}
        action="#"
        name="editform"
      >
        <label
          htmlFor="postTitle"
          className={stylesEditPostForm.postform__item}
        >
          Заголовок отзыва:
        </label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          minLength={2}
          value={nameRU}
          onChange={onTitleChanged}
          className={stylesEditPostForm.postform__item}
        />
        <label
          htmlFor="postContent"
          className={stylesEditPostForm.postform__item}
        >
          Описание:
        </label>
        <textarea
          id="postContent"
          name="postContent"
          value={description}
          onChange={onContentChanged}
          className={stylesEditPostForm.postform__description}
        />
        <button type="submit" className={stylesEditPostForm.postform__button}>
          Сохранить отзыв
        </button>
      </form>
    </section>
  );
};
