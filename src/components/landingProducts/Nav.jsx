import React from "react";
import { useFetch } from "../../hooks/useFetch";

export const Nav = () => {
  const { data } = useFetch(
    "https://apiproyecto-react.onrender.com/categorias"
  );
  return (
    <div>
      <h1 style={{ textAlign: "center", marginBottom: 30, fontSize: 40 }}>
        Nuestras Categorías
      </h1>

      <nav
        className="navbar navbar-expand-lg bg-dark border-body"
        data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Todos los productos
          </a>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            {data?.map((category) => (
              <div key={category.id} className="navbar-nav">
                <a href="" className="nav-link">
                  {category.nombre}
                </a>
              </div>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};
