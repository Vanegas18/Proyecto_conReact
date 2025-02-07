import { useFetch } from "../../hooks/useFetch";

export const TableCategories = () => {
  const { data } = useFetch(
    "https://apiproyecto-react.onrender.com/categorias"
  );
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
            <tr key={category.id}>
              <td>{category.categoryId}</td>
              <td>{category.nombre}</td>
              <td>{category.descripcion}</td>
              <td>{category.estado}</td>
              <td>
                <button style={{ cursor: "pointer" }}>
                  <i className="fa-solid fa-pen-to-square"></i>
                </button>
              </td>
              <td>
                <button style={{ cursor: "pointer" }}>
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
