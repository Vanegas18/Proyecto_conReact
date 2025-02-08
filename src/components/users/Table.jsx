import { NavLink } from "react-router";
import { useFetch } from "../../hooks/useFetch";
import { useChangeState } from "../../hooks/useChangeState";

export const TableUsers = () => {
  const { data } = useFetch("https://apiproyecto-react.onrender.com/usuarios");

  const changeState = useChangeState(null);

  const transPassword = (password) => {
    return "********";
  };
  return (
    <>
      <table className="tablaUsuarios">
        <thead>
          <tr>
            <th className="hidden">ID</th>
            <th>Documento</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Numero</th>
            <th>Contraseña</th>
            <th>Rol</th>
            <th>Estado</th>
            <th>Editar</th>
            <th>Cambiar estado</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((user) => (
            <tr key={user._id}>
              <td className="hidden">{user._id}</td>
              <td>{user.documento}</td>
              <td>{user.nombre}</td>
              <td>{user.email}</td>
              <td>{user.numero}</td>
              <td>{transPassword(user.contraseña)}</td>
              <td>{user.rol}</td>
              <td>{user.estado}</td>
              <td>
                <NavLink to={"/editUser"}>
                  <button style={{ cursor: "pointer" }}>
                    <i className="fa-solid fa-pen-to-square"></i>
                  </button>
                </NavLink>
              </td>
              <td>
                <button
                  onClick={() => changeState(user.estado)}
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
