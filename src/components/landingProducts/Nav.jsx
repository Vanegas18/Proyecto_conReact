/* eslint-disable react/prop-types */
import React from "react";
import { useFetch } from "../../hooks/useFetch";

export const Nav = ({ onCategorySelect }) => {
  const { data } = useFetch(
    "https://apiproyecto-react.onrender.com/categorias"
  );
  const handleCategoryClick = (event, categoryId) => {
    event.preventDefault();
    onCategorySelect(categoryId);
  };
  return (
    <div>
      <h1 style={{ textAlign: "center", marginBottom: 30, fontSize: 40 }}>
        Nuestras Categorías
      </h1>

      <nav
        className="navbar navbar-expand-lg bg-dark border-body"
        data-bs-theme="dark">
        <div className="container-fluid">
          <a
            className="navbar-brand"
            href="#"
            onClick={(event) => handleCategoryClick(event, null)}>
            Todos los productos
          </a>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            {data?.map((category) => (
              <div key={category.id} className="navbar-nav">
                <a
                  href="#"
                  className="nav-link"
                  onClick={(event) => handleCategoryClick(event, category._id)}>
                  {category.nombre}
                </a>
              </div>
            ))}
          </div>
          <form action="" className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Buscar producto"
              aria-label="Buscar"
            />
            <button className="btn btn-outline-light" type="submit">
              Buscar
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};
