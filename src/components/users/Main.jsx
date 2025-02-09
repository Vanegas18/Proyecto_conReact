import { useFetch } from "../../hooks/useFetch";
import { AnalysesParts, Pagination, Search, TableUsers } from "../index";

export const MainUsers = () => {
  const { data: users } = useFetch(
    "https://apiproyecto-react.onrender.com/usuarios"
  );

  const countByRole = (role) => {
    return users ? users.filter((user) => user.rol === role).length : 0;
  };

  const calculatePercentage = (count, total) => {
    return total > 0 ? ((count / total) * 100).toFixed(2) + "%" : "0%";
  };

  const totalUsers = users ? users.length : 0;
  const clientesCount = countByRole("Cliente");
  const administradoresCount = countByRole("Administrador");
  const gerentesCount = countByRole("Gerente");

  return (
    <>
      <main>
        <h1 className="titles">Usuarios</h1>
        <div className="analyse">
          <AnalysesParts
            types={"sales"}
            title={"Clientes"}
            number={countByRole("Cliente")}
            percentage={calculatePercentage(clientesCount, totalUsers)}
          />
          <AnalysesParts
            types={"visits"}
            title={"Administradores"}
            number={countByRole("Administrador")}
            percentage={calculatePercentage(administradoresCount, totalUsers)}
          />
          <AnalysesParts
            types={"searches"}
            title={"Gerentes"}
            number={countByRole("Gerente")}
            percentage={calculatePercentage(gerentesCount, totalUsers)}
          />
        </div>

        <div className="recent-orders">
          <Search
            title={"Buscar Usuarios"}
            options={"Registrar nuevo usuario"}
            placeholder={"Buscar usuarios..."}
            route={"/newUser"}
          />
          <TableUsers />
        </div>

        <Pagination />
      </main>
    </>
  );
};
