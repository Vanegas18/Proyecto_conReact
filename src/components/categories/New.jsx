import { NavLink } from "react-router";

export const NewCategory = () => {
  return (
    <>
      <div className="containerRegister containerCategory">
        <h2 className="h2">Registrar nueva categoría</h2>
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
            <button type="submit" className="button btn-registrar" id="submit">
              Registrar
            </button>
          </div>
          <div className="input-group2">
            <NavLink to={"/categoriasProductos"}>
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
