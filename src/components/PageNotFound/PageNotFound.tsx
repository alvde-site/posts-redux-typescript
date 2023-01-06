import { useNavigate } from "react-router-dom";
import stylesPageNotFound from "./PageNotFound.module.css";

function PageNotFound() {
  const navigate = useNavigate();
  function handleBack() {
    navigate(-1);
  }
  return (
    <div className={stylesPageNotFound.notfound}>
      <h3 className={stylesPageNotFound.notfound__title}>404</h3>
      <p className={stylesPageNotFound.notfound__text}>Страница не найдена</p>
      <button className={stylesPageNotFound.notfound__main} onClick={handleBack}>
        Назад
      </button>
    </div>
  );
}

export default PageNotFound;
