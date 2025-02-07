/* eslint-disable react/prop-types */
import { NavLink } from "react-router";

export const Search = ({ title, options, placeholder, route }) => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      <div className="contenedor-buscador">
        <div className="buscador">
          <div className="search">
            <i className="fa-solid fa-magnifying-glass" style={{marginRight: 5}}></i>
            <input
              type="text"
              className="search__search"
              id="buscador"
              placeholder={placeholder}
              aria-label="buscador"></input>
          </div>
        </div>
      </div>
      <NavLink to={route}>
        <a href="">{options}</a>
      </NavLink>
    </>
  );
};
