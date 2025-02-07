import { useFetch } from "../../hooks/useFetch";

export const TableUsers = () => {
  const { data } = useFetch("https://apiproyecto-react.onrender.com/usuarios");

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
          {/* <tr>
            <td>1013458886</td>
            <td>Juan Jose</td>
            <td>juanjoseevv@gmail.com</td>
            <td>3006764605</td>
            <td>*******</td>
            <td>Gerente</td>
            <td>Activo</td>
            <td>
              <i className="fa-solid fa-pen-to-square"></i>
            </td>
            <td>
              <button style={{ cursor: "pointer" }}>
                <i className="fa-solid fa-power-off"></i>
              </button>
            </td>
          </tr> */}
        </tbody>
      </table>
    </>
  );
};
