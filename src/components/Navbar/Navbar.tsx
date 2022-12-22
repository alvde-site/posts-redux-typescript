import stylesNavbar from "../../components/Navbar/Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={stylesNavbar.navbar}>
      <section className={stylesNavbar.navbar__content}>
        <h1 className={stylesNavbar.navbar__title}>Оставь свой честный отзыв!</h1>
      </section>
    </nav>
  );
};
