import React from "react";
import { NavLink } from "react-router";

export const EditProduct = () => {
  return (
    <div className="containerRegister containerProduct">
      <h2 className="h2">Editar Producto</h2>
      <form action="" id="form">
        <div className="input-group2">
          <label htmlFor="nombre">Nombre</label>
          <input type="text" id="nombre" name="nombre" />
        </div>
        <div className="input-group2">
          <label htmlFor="Descripcion">Descripcion</label>
          <input type="text" id="Descripcion" name="Descripcion" />
        </div>
        <div className="input-group2">
          <label htmlFor="precio">Precio</label>
          <input type="number" id="precio" name="precio" />
        </div>
        <div className="input-group2">
          <label htmlFor="stock">Stock</label>
          <input type="number" id="stock" name="stock" />
        </div>
        <div className="input-group2">
          <label htmlFor="img">Imagen URL</label>
          <input type="text" id="img" name="img" />
        </div>
        <div className="input-group2">
          <button type="submit" className="button btn-registrar" id="submit">
            Registrar
          </button>
        </div>
        <div className="input-group2">
          <NavLink to={"/productos"}>
            <button type="submit" className="button btn-cancel">
              Cancelar
            </button>
          </NavLink>
        </div>
      </form>
    </div>
  );
};
