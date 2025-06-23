
import Slider from "../hooks";


export const Carrucel = () => {
  return (
    <div className="carrucelWrapper">
      <section className="carrucel">
        <section className="carrucelContainer">
          <div className="carrucelItem carrucelItem1" data-index="0">
            <h3> Paso 1: Crea o elige un mazo</h3>
            <span> Organiza tu conocimiento como quieras</span>
            <p>
              Crea tus propios mazos de tarjetas personalizadas o elige entre
              cientos de mazos públicos creados por la comunidad o por expertos.
            </p>
          </div>
          <div className="carrucelItem carrucelItem2" data-index="1">
            <h3>Paso 2: Estudia en modo memorizar</h3>
            <span>Refuerza lo aprendido con técnica efectiva</span>
            <p>
              Accede al modo estudio, donde podrás practicar con tarjetas una a
              una, repasarlas y comprobar tu progreso fácilmente.
            </p>
          </div>
          <div className="carrucelItem carrucelItem3" data-index="2">
            <h3>Paso 3: Comparte o adquiere contenido premium</h3>
            <span>Impulsa tu aprendizaje o ayuda a otros</span>
            <p>
              Comparte tus mazos con la comunidad o mejora tu estudio accediendo
              a contenido premium creado por usuarios verificados o por el
              equipo del sitio.
            </p>
          </div>
        </section>
        <div className="carrucelControls">
          <button className="carrucelButton prev" data-action="prev">
            Anterior
          </button>
          <button className="carrucelButton next" data-action="next">
            Siguiente
          </button>
        </div>
      </section>
    </div>
  );
};
