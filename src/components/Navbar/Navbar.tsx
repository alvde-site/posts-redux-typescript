import stylesNavbar from "../../components/Navbar/Navbar.module.css";
import { signin } from "../../services/reducers/authSlice";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";

export const Navbar = ({ userId }: { userId: null | string }) => {
  const dispatch = useAppDispatch();
  const author = useAppSelector((state) =>
    state.users.find((user) => user.id === userId)
  );

  const handleSignOut = () => {
    if (userId) {
      dispatch(signin({loggedIn: false}));
    }

    
    // setUserId("");
  };
  return (
    <nav className={stylesNavbar.navbar}>
      <section className={stylesNavbar.navbar__content}>
        <h1 className={stylesNavbar.navbar__title}>
          {`${author ? author.name + ", о" : "О"}`}ставь свой честный отзыв!
        </h1>
        {author && <button onClick={handleSignOut}>Выйти</button>}
      </section>
    </nav>
  );
};
