import stylesNavbar from "../../components/Navbar/Navbar.module.css";
import { useAppSelector } from "../../utils/hooks";

export const Navbar = ({ userId }: { userId: null | string }) => {
  const author = useAppSelector((state) =>
    state.users.find((user) => user.id === userId)
  );
  return (
    <nav className={stylesNavbar.navbar}>
      <section className={stylesNavbar.navbar__content}>
        <h1 className={stylesNavbar.navbar__title}>
          {`${author ? author.name + ", о" : "О"}`}ставь свой честный отзыв!
        </h1>
      </section>
    </nav>
  );
};
