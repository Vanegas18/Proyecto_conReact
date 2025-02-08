import React from "react";
import { NavLink } from "react-router";

export const Edit = () => {
  return (
    <div className="containerRegister">
      <h2 className="h2">Editar Usuario</h2>
      <form id="form" method="POST">
        <input
          type="text"
          name="id_editar"
          id="id_editar"
          hidden
          aria-label="id"
        />
        <div className="input-group2">
          <label htmlFor="nombre">Documento</label>
          <input
            type="text"
            id="documento_editar"
            name="documento"
            aria-label="documento"
          />
        </div>
        <div className="input-group2">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre_editar"
            name="nombre"
            aria-label="nombre"
          />
        </div>
        <div className="input-group2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email_editar"
            name="email"
            aria-label="email"
          />
        </div>
        <div className="input-group2">
          <label htmlFor="numero">Celular</label>
          <input
            type="text"
            id="numero_editar"
            name="numero"
            aria-label="numero"
          />
        </div>
        <div className="input-group2">
          <label htmlFor="rol">Rol</label>
          <select id="rol_editar" name="rol">
            <option value="Administrador">Administrador</option>
            <option value="Gerente">Gerente</option>
          </select>
        </div>
        <div className="input-group2">
          <label htmlFor="numero">Contraseña</label>
          <input
            type="password"
            id="numero_editar"
            name="numero"
            aria-label="numero"
          />
        </div>
        <div className="input-group2">
          <button type="submit" className="btn" id="editBtn">
            Editar
          </button>
        </div>
        <div className="input-group2">
          <NavLink to={"/usuarios"}>
            <button type="button" className="btn-cancel">
              Cancelar
            </button>
          </NavLink>
        </div>
      </form>
    </div>
  );
};
