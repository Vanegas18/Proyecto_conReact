import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router";
import { useEntity } from "../../hooks/useEntity";

export const EditCategory = () => {
  const { categoryId } = useParams();
  const {
    entity: categoria,
    loading,
    handleChange,
    handleSubmit,
  } = useEntity("Categorias", categoryId);

  return (
    <div className="containerRegister containerCategory">
      <h2 className="h2">Editar categoría</h2>
      {loading ? (
        <p>Cargando datos</p>
      ) : (
        <form action="" id="form" onSubmit={handleSubmit}>
          <div className="input-group2">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={categoria.nombre}
              onChange={handleChange}
            />
          </div>
          <div className="input-group2">
            <label htmlFor="Descripcion">Descripcion</label>
            <input
              type="text"
              id="descripcion"
              name="descripcion"
              value={categoria.descripcion}
              onChange={handleChange}
            />
          </div>
          <div className="input-group2">
            <button type="submit" className="button btn-registrar" id="submit">
              Registrar
            </button>
          </div>
          <div className="input-group2">
            <NavLink to={"/categoriasProductos"}>
              <button type="submit" className="button btn-cancel">
                Cancelar
              </button>
            </NavLink>
          </div>
        </form>
      )}
    </div>
  );
};
