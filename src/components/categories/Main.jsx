import { useFetch } from "../../hooks/useFetch";
import { AnalysesParts, Pagination, Search, TableCategories } from "../index";

export const MainCategories = () => {
  const { data: categories } = useFetch(
    "https://apiproyecto-react.onrender.com/categorias"
  );

  const countAllCategories = () => {
    return categories ? categories.length : 0;
  };

  const countByState = (state) => {
    return categories
      ? categories.filter((category) => category.estado === state).length
      : 0;
  };

  const calculatePercentage = (count, total) => {
    return total > 0 ? ((count / total) * 100).toFixed(2) + "%" : "0%";
  };

  const totalCategories = countAllCategories();
  const activeCategoriesCount = countByState("Activo");
  const inactiveCategoriesCount = countByState("Inactivo");
  return (
    <>
      <main>
        <h1 className="titles">Categorías de productos</h1>
        <div className="analyse">
          <AnalysesParts
            types={"sales"}
            title={"Categorías totales"}
            number={totalCategories}
            percentage={calculatePercentage(totalCategories, totalCategories)}
          />
          <AnalysesParts
            types={"visits"}
            title={"Categorías activas"}
            number={countByState("Activo")}
            percentage={calculatePercentage(
              activeCategoriesCount,
              totalCategories
            )}
          />
          <AnalysesParts
            types={"searches"}
            title={"Categorías inactivas"}
            number={countByState("Inactivo")}
            percentage={calculatePercentage(
              inactiveCategoriesCount,
              totalCategories
            )}
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
