import { useState } from "react";
import stylesAuthPage from "./AuthPage.module.css";
import { useAppSelector } from "../../utils/hooks";

export const AuthPage = () => {
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
    <section className={stylesAuthPage.auth}>
      <h2 className={stylesAuthPage.title}>Авторизация пользователя</h2>
      <form className={stylesAuthPage.authform}>
        <label htmlFor="postAuthor">Выбрать пользователя:</label>
        <select
          id="postAuthor"
          value={userId}
          onChange={onUserChanged}
          className={stylesAuthPage.item}
        >
          <option value=""></option>
          {usersOptions}
        </select>
        <button
          type="button"
          className={`${canSave?stylesAuthPage.button:stylesAuthPage.button_disabled}`}
          onClick={onAuthClick}
          disabled={!canSave}
        >
          Войти
        </button>
      </form>
    </section>
  );
};