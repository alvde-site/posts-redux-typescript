import stylesHaveToLoggedIn from "../../components/HaveToLoggedIn/HaveToLoggedIn.module.css";
import { Link } from "react-router-dom";

export const HaveToLoggedIn = () => {
  return (
    <section className={stylesHaveToLoggedIn.content}>
      <h2 className={stylesHaveToLoggedIn.title}>Чтобы оставить отзыв или лайк, нужно авторизоваться</h2>
      <Link to="/login" className={stylesHaveToLoggedIn.link}>
        Авторизоваться
      </Link>
    </section>
  );
};
