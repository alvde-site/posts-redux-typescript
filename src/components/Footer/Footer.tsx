import stylesFooter from "./Footer.module.css";

function Footer() {
    return (
      <footer className={stylesFooter.footer}>
        <h2 className={stylesFooter.footer__title}>
        Pet-project Александра Демиденко
        </h2>
        <div className={stylesFooter.footer__lowercolumn}>
          <p className={stylesFooter.footer__copyright}>© 2022</p>
          <ul className={stylesFooter.footer__social}>
            <li>
              <a
                href="https://github.com/alvde-site"
                rel="noreferrer"
                target="_blank"
                className={stylesFooter.footer__sociallink}
              >
                Github
              </a>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  