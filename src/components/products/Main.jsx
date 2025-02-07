import { AnalysesParts, Pagination, Search, TableProducts } from "../index";

export const MainProducts = () => {
  return (
    <>
      <main>
        <h1 className="titles">Productos</h1>
        <div className="analyse">
          <AnalysesParts
            types={"sales"}
            title={"Productos disponibles"}
            number={"120"}
            percentage={"+81%"}
          />
          <AnalysesParts
            types={"visits"}
            title={"Productos vetados"}
            number={"24"}
            percentage={"-28%"}
          />
          <AnalysesParts
            types={"searches"}
            title={"Productos en desarrollo"}
            number={"4"}
            percentage={"+21%"}
          />
        </div>
        <div className="recent-orders">
          <Search
            title={"Buscar productos"}
            options={"Añadir nuevo producto"}
            placeholder={"Buscar productos..."}
            route={"/newProduct"}
          />
          <TableProducts />
        </div>
        <Pagination />
      </main>
    </>
  );
};
