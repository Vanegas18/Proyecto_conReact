import { NavLink } from "react-router";

export const NavBar = () => {
  return (
    <>
      <body>
        <nav>
          <a href="#" className="logo" style={{ fontWeight: "bold" }}>
            BuildMart
          </a>
          <div className="links">
            {/* AQUÍ USARE ROUTES */}
            <NavLink to={"/"} style={{ fontWeight: 500, fontSize: 16 }}>
              Inicio
            </NavLink>
            <NavLink
              to={"/landingProductos"}
              style={{ fontWeight: 500, fontSize: 16 }}>
              Productos
            </NavLink>
          </div>
          <div className="login">
            <NavLink
              to={"/login"}
              className="signup"
              style={{ fontWeight: 500, fontSize: 16 }}>
              Iniciar Sesión
            </NavLink>
            <NavLink
              to={"/dashboard"}
              style={{ fontWeight: 500, fontSize: 16, marginRight: 15 }}>
              Dashboard
            </NavLink>
            <button>
              <i
                className="fa-solid fa-cart-shopping"
                style={{ fontSize: 20 }}></i>
            </button>
          </div>
        </nav>
      </body>
    </>
  );
};
