import { NavLink } from "react-router";
import { useFetch } from "../../hooks/useFetch";
import { useChangeState } from "../../hooks/useChangeState";

export const TableCategories = () => {
  const { data } = useFetch(
    "https://apiproyecto-react.onrender.com/categorias"
  );

  const changeState = useChangeState(null);

  return (
    <>
      <table className="tablaUsuarios">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Estado</th>
            <th>Editar</th>
            <th>Cambiar estado</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((category) => (
            <tr key={category._id}>
              <td>{category.categoryId}</td>
              <td>{category.nombre}</td>
              <td>{category.descripcion}</td>
              <td>{category.estado}</td>
              <td>
                <NavLink to={"/editCategory"}>
                  <button style={{ cursor: "pointer" }}>
                    <i className="fa-solid fa-pen-to-square"></i>
                  </button>
                </NavLink>
              </td>
              <td>
                <button
                  onClick={() => changeState(category.estado)}
                  style={{ cursor: "pointer" }}>
                  <i className="fa-solid fa-power-off"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
