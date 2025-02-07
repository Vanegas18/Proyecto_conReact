import { AnalysesParts, Pagination, Search, TableUsers } from "../index";

export const MainUsers = () => {
  return (
    <>
      <main>
        <h1 className="titles">Usuarios</h1>
        <div className="analyse">
          <AnalysesParts
            types={"sales"}
            title={"Clientes"}
            number={"502"}
            percentage={"+81%"}
          />
          <AnalysesParts
            types={"visits"}
            title={"Administradores"}
            number={"24"}
            percentage={"+48%"}
          />
          <AnalysesParts
            types={"searches"}
            title={"Gerentes"}
            number={"4"}
            percentage={"+21%"}
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
