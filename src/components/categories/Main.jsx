import { AnalysesParts, Pagination, Search, TableCategories } from "../index";

export const MainCategories = () => {
  return (
    <>
      <main>
        <h1 className="titles">Categorías de productos</h1>
        <div className="analyse">
          <AnalysesParts
            types={"sales"}
            title={"Categorías disponibles"}
            number={"20"}
            percentage={"+81%"}
          />
          <AnalysesParts
            types={"visits"}
            title={"Categorías vetados"}
            number={"15"}
            percentage={"-28%"}
          />
          <AnalysesParts
            types={"searches"}
            title={"Categorías en desarrollo"}
            number={"4"}
            percentage={"+21%"}
          />
        </div>
        <div className="recent-orders">
          <Search
            title={"Buscar categorias"}
            options={"Añadir nueva categoria"}
            placeholder={"Buscar categorias..."}
            route={"/newCategory"}
          />
          <TableCategories />
        </div>
        <Pagination />
      </main>
    </>
  );
};
