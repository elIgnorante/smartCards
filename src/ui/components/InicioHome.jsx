import { NavLink } from "react-router-dom";
import { NavbarHome } from "./NavbarHome";
import {
  IconLight,
  IconMonitorDesktop,
  StarIcon,
  IconBellCute,
} from "../../assets";
import { IconLightmini } from "../../assets/svgs/IconLightmini";
import personas from "../../assets/images/personas.png";

export const InicioHome = () => {
  return (
    <>
      <section className="sectionInicio" id="inicio">
        <NavbarHome />

        <div className="mainInicio">
          <h1>
            Aprende mejor.
            <br />
            Memoriza más rápido
          </h1>
          <NavLink className="navLinkComienzaAhora" to="/register">
            Comienza ahora
          </NavLink>
        </div>
      </section>

      <section className="sectionCaracteristicas">
        <div className="containerCaracteristicas">
          <section className="section1C">
            <div className="cointainerSuperior">
              <div className="caracteristica">
                <span className="iconContainer">
                  <StarIcon />
                </span>
                <h3>Personaliza tus mazos</h3>
                <p>
                  Crea mazos con estructura libre, asigna categorías, agrega
                  notas y ajusta el contenido a tus necesidades.
                </p>
              </div>
              <div className="caracteristica">
                <span className="iconContainer">
                  <IconMonitorDesktop />
                </span>
                <h3>Accede a la comunidad</h3>
                <p>
                  Explora, filtra y utiliza mazos compartidos por otros
                  usuarios. Participa en un entorno de aprendizaje colaborativo.
                </p>
              </div>
            </div>

            {/* inferior */}

            <div className="cointainerInferior caracteristica">
              <div>
                <span className="iconContainer">
                  <IconLightmini />
                </span>
                <h3>Analiza y establece objetivos</h3>
                <p>
                  Nuestro sistema registra tus sesiones de estudio, calcula tu
                  rendimiento y te muestra estadísticas claras sobre los
                  conceptos dominados y aquellos que necesitas repasar.
                  Visualiza tu evolución con gráficos intuitivos y mantente
                  motivado con objetivos alcanzables.
                </p>
              </div>
              <div className="iconLightContainer">
                <IconLight />
              </div>
            </div>
          </section>

          {/* seccion2 */}

          <section className="section2C caracteristica">
            <span className="iconContainer">
              <IconBellCute />
            </span>
            <h3>Accede a contenido Premium</h3>
            <p>
              Accede a mazos profesionales desarrollados por expertos o usuarios
              verificados. Invierte en tu aprendizaje con contenido de calidad.
            </p>
            <img src={personas} alt="personas" />
          </section>
        </div>
      </section>
    </>
  );
};
