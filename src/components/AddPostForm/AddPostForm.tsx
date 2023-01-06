import React, { useState } from "react";
import stylesAddPostForm from "../../components/AddPostForm/AddPostForm.module.css";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { postAdded } from "../../services/reducers/postsSlice";

export const AddPostForm = ({userId}:{userId: null | string}) => {
  const [description, setDescription] = useState("");
  const [nameRU, setNameRU] = useState("");

  const dispatch = useAppDispatch();

  const author = useAppSelector((state) =>
    state.users.find((user) => user.id === userId)
  );

  const onSavePostClick = () => {
    author && setNameRU(author.name);
    if (description && nameRU && userId) {
      dispatch(postAdded(description, nameRU, userId));
    }

    setDescription("");
    setNameRU("");
  };

  const onTitleChanged = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNameRU(e.target.value);
  const onContentChanged = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setDescription(e.target.value);

  const canSave = Boolean(description) && Boolean(nameRU) && Boolean(userId);

  return (
    <section className={stylesAddPostForm.addpost}>
      <h2 className={stylesAddPostForm.title}>Оставить отзыв</h2>
      <form className={stylesAddPostForm.postform}>
        <label htmlFor="postTitle" className={stylesAddPostForm.postform__item}>
          Заголовок отзыва:
        </label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={nameRU}
          onChange={onTitleChanged}
          className={stylesAddPostForm.item}
        />
        <label htmlFor="postContent" className={stylesAddPostForm.item}>
          Описание:
        </label>
        <textarea
          id="postContent"
          name="postContent"
          value={description}
          onChange={onContentChanged}
          className={stylesAddPostForm.description}
        />
        <button
          type="button"
          className={stylesAddPostForm.button}
          onClick={onSavePostClick}
          disabled={!canSave}
        >
          Сохранить отзыв
        </button>
      </form>
    </section>
  );
};
