import { NavLink } from "react-router";

export const NewUser = () => {
  return (
    <>
      <div className="containerRegister">
        <h2 className="h2">Registrar nuevo usuario</h2>
        <form action="" id="form">
          <div className="input-group2">
            <label htmlFor="">Documento</label>
            <input
              type="number"
              id="documento"
              name="documento"
              aria-label="documento"
            />
          </div>
          <div className="input-group2">
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" name="nombre" />
          </div>
          <div className="input-group2">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="input-group2">
            <label htmlFor="numero">Celular</label>
            <input type="text" id="numero" name="numero" />
          </div>
          <div className="input-group2">
            <label htmlFor="rol">Rol</label>
            <select id="rol" name="rol">
              <option value="Administrador">Administrador</option>
              <option value="Gerente">Gerente</option>
            </select>
          </div>
          <div className="input-group2">
            <label htmlFor="numero">Contraseña</label>
            <input
              type="text"
              id="contraseña"
              name="contraseña"
              aria-label="contraseña"
            />
          </div>
          <div className="input-group2">
            <button type="submit" className="button btn-registrar" id="submit">
              Registrar
            </button>
          </div>
          <div className="input-group2">
            <NavLink to={"/usuarios"}>
              <button type="submit" className="button btn-cancel">
                <a href="./Usuarios.html">Cancelar</a>
              </button>
            </NavLink>
          </div>
        </form>
      </div>
    </>
  );
};
