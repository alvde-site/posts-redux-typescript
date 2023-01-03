import React, { useState } from "react";
import stylesAddPostForm from "../../components/AddPostForm/AddPostForm.module.css";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { postAdded } from "../../services/reducers/postsSlice";


export const AddPostForm = () => {
  const [description, setDescription] = useState("");
  const [nameRU, setNameRU] = useState("");
  const [userId, setUserId] = useState("");

  const dispatch = useAppDispatch();

  const users = useAppSelector((state) => state.users);

  const onSavePostClick = () => {
    if (description && nameRU && userId) {
      dispatch(postAdded(description, nameRU, userId));
    }

    setDescription("");
    setNameRU("");
    setUserId("");
  };

  const onTitleChanged = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNameRU(e.target.value);
  const onAuthorChanged = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setUserId(e.target.value);
  const onContentChanged = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setDescription(e.target.value);

  const canSave = Boolean(description) && Boolean(nameRU) && Boolean(userId);

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));


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
        <label htmlFor="postAuthor">Автор отзыва:</label>
        <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
          <option value=""></option>
          {usersOptions}
        </select>
        <label
          htmlFor="postContent"
          className={stylesAddPostForm.item}
        >
          Описание:
        </label>
        <textarea
          id="postContent"
          name="postContent"
          value={description}
          onChange={onContentChanged}
          className={stylesAddPostForm.item}
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
