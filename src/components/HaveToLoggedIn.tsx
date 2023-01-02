import { useAppDispatch } from "../utils/hooks";
import { signin } from "../services/reducers/authSlice";

export const HaveToLoggedIn = () => {
  const dispatch = useAppDispatch();
  const handleSignIn = () => {
    dispatch(signin({loggedIn: true}));
  };

  return (
    <>
      <h2>Чтобы оставить отзыв или лайк, нужно авторизоваться</h2>
      <button onClick={handleSignIn}>
        Авторизоваться
      </button>
    </>
  );
};
