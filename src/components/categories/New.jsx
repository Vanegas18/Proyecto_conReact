import { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import axios from "axios";
import Swal from "sweetalert2";

export const NewCategory = () => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://apiproyecto-react.onrender.com/categorias",
        {
          nombre: nombre,
          descripcion: descripcion,
        }
      );

      Swal.fire({
        title: "Buen trabajo!",
        text: "Categoría creada!",
        icon: "success",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/categoriasProductos");
        }
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Hubo un error al crear la categoria!",
      });
    }
  };
  return (
    <>
      <div className="containerRegister containerCategory">
        <h2 className="h2">Registrar nueva categoría</h2>
        <form action="" id="form" onSubmit={handleSubmit}>
          <div className="input-group2">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div className="input-group2">
            <label htmlFor="Descripcion">Descripcion</label>
            <input
              type="text"
              id="Descripcion"
              name="Descripcion"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
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
                <a href="./Usuarios.html">Cancelar</a>
              </button>
            </NavLink>
          </div>
        </form>
      </div>
    </>
  );
};
