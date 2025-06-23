import { Carrucel } from "./Carrucel";

export const ComoFunciona = () => {
  return (
    <>
        <section className="comofuncionaSection">
          <div className="headerComofunciona">
            <h2>¿Cómo Funciona?</h2>
            <p>
              ¿Cómo funciona? Aprende en 3 simples pasos
            </p>
          </div>

          <div className="containerCarrucel">
            <Carrucel />
          </div>
        </section>
    </>
  )
}
