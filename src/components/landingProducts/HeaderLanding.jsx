import { Nav } from "./Nav";

export const HeaderLanding = () => {
  return (
    <>
      <header>
        <div className="left">
          <h1>Nuestros Productos</h1>
          <p>
            Descubre nuestra amplia gama de productos diseñados para ayudarte a
            construir el hogar de tus sueños, con materiales de alta calidad,
            diseños innovadores y precios accesibles. Convierte tus ideas en
            realidad con soluciones duraderas y funcionales para cada espacio.
            🏡✨
          </p>
        </div>
        <div className="right animate__animated animate__bounceInRight">
          <img src="/images/construction.png" alt="Imagen de productos" />
        </div>
      </header>
    </>
  );
};
