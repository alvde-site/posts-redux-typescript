import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { postAdded } from "../../services/reducers/postsSlice";

export const AddPostForm = () => {
  const [description, setDescription] = useState("");
  const [nameRU, setNameRU] = useState("");
  const [userId, setUserId] = useState("");

  const dispatch = useDispatch();

  const users = useSelector(state => state.users);

  const onSavePostClick = () => {
    if (description && nameRU && userId) {
      dispatch(postAdded(description, nameRU, userId));
    }

    setDescription("");
    setNameRU("");
    setUserId("");
  };

  const onTitleChanged = (e) => setNameRU(e.target.value);
  const onContentChanged = (e) => setDescription(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);

  const canSave = Boolean(description) && Boolean(nameRU) && Boolean(userId);

  const usersOptions = users.map(user => (
    <option key={user.id} value={user.id}>
        {user.name}
    </option>
  ))

  return (
    <section className="addpost">
      <h2 className="addpost__title">Оставить отзыв</h2>
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
        <label htmlFor="postAuthor">Автор отзыва:</label>
        <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
            <option value=""></option>
            {usersOptions}
        </select>
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
          disabled={!canSave}
        >
          Сохранить отзыв
        </button>
      </form>
    </section>
  );
};
