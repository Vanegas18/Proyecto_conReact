import { NavLink } from "react-router";

export const Header = () => {
  return (
    <>
      <body>
        <header>
          <div className="left">
            <h1>
              ¡Construimos tus sueños!<span> Somos BuildMart</span>
            </h1>
            <p>
              ¡Hola! Bienvenido a <b>BuildMart</b> en este lugar podrás conocer
              un poco de nosotros. <br />
              ¡Ven y descubre cómo podemos ayudarte a crear el hogar de tus
              sueños!
            </p>
            <NavLink to={"https://www.whatsapp.com/"}>
              <i className="bx bx-chat"></i>
              <span>¡Contactanos!</span>
            </NavLink>
          </div>
          <div className="right animate__animated animate__bounceInRight">
            <img
              src="/images/construction.png"
              alt="Imagen de productos"
            />
          </div>
        </header>

        <h2 className="separator">Sobre nosotros</h2>
      </body>
    </>
  );
};
