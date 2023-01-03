import { useAppDispatch } from "../../utils/hooks";
import { signin } from "../../services/reducers/authSlice";
import stylesHaveToLoggedIn from "../../components/HaveToLoggedIn/HaveToLoggedIn.module.css";
import { Link } from "react-router-dom";

export const HaveToLoggedIn = () => {
  const dispatch = useAppDispatch();
  const handleSignIn = () => {
    dispatch(signin({loggedIn: true}));
  };

  return (
    <section className={stylesHaveToLoggedIn.content}>
      <h2 className={stylesHaveToLoggedIn.title}>Чтобы оставить отзыв или лайк, нужно авторизоваться</h2>
      <Link to="/login" onClick={handleSignIn} className={stylesHaveToLoggedIn.link}>
        Авторизоваться
      </Link>
    </section>
  );
};
