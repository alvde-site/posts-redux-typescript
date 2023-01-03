import { useState } from "react";
import stylesSignin from "./Signin.module.css";
import { useAppSelector } from "../../utils/hooks";

export const Signin = () => {
  const [userId, setUserId] = useState("");
  const onUserChanged = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setUserId(e.target.value);

  const canSave = Boolean(userId);

  const users = useAppSelector((state) => state.users);

  const onAuthClick = () => {
    // if (description && nameRU && userId) {
    //   dispatch(postAdded(description, nameRU, userId));
    // }

    setUserId("");
  };

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section className={stylesSignin.auth}>
      <h2 className={stylesSignin.title}>Авторизация пользователя</h2>
      <form className={stylesSignin.authform}>
        <label htmlFor="postAuthor">Выбрать пользователя:</label>
        <select id="postAuthor" value={userId} onChange={onUserChanged}>
          <option value=""></option>
          {usersOptions}
        </select>
        <label htmlFor="postContent" className={stylesSignin.item}>
          Описание:
        </label>
        <button
          type="button"
          className={stylesSignin.button}
          onClick={onAuthClick}
          disabled={!canSave}
        >
          Сохранить отзыв
        </button>
      </form>
    </section>
  );
};
