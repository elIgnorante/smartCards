
import { Link, NavLink } from "react-router-dom";
import { Logo } from "../../assets";
import { use, useEffect } from "react";

export const NavbarHome = () => {

// Función para hacer scroll suave a la sección
useEffect(() => {
  let lastScrollY = window.scrollY;
  
  const controlNavbar = () => {
    const currentScrollY = window.scrollY;

    if(currentScroolY > lastScrollY && currentScrollY > 100) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    lastScrollY = currentScrollY;
  }

  window.addEventListener('scroll', controlNavbar);
  return () => {
    window.removeEventListener('scroll', controlNavbar);
  };

  
}, []);

 const navLinks = [
  { to: "/#inicio", label: "Inicio" },
  { to: "/#comoFunciona", label: "¿Comó funciona?" },
  { to: "/#FAQ", label: "FAQ" }
  ];



  return (
      <section className="seccionNavbarhome">
        <div className="cointainerLogo">
          <Logo className="logoHome" />
          <span className="textLogo">NotaFlash</span>
        </div>

        <nav className="NavbarHome">
          <ul className="navList">
            <li className="navItem">
              <Link
                to="/#inicio"
                className="navLink"
              >
                Inicio
              </Link>
            </li>

            <li className="navItem">
              <Link
                to="/#comoFunciona"
                className="navLink"
              >
                ¿Comó funciona?
              </Link>
            </li>

            <li className="navItem">
              <Link
                to="/#FAQ"
                className="navLink"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </nav>

        <div className="containerLoginLogUp">
          <NavLink
            className="navLinkLogin"
            to="/login"
          >
            Log in
          </NavLink>

          <NavLink
            className="navLinkLogUp"
            to="/register"
          >
            Registrate
          </NavLink>
        </div>
      </section>
  )
}
