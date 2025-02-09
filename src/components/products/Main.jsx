import { useFetch } from "../../hooks/useFetch";
import { AnalysesParts, Pagination, Search, TableProducts } from "../index";

export const MainProducts = () => {
  const { data: products } = useFetch(
    "https://apiproyecto-react.onrender.com/productos"
  );

  const countAllProducts = () => {
    return products ? products.length : 0;
  };

  const countByState = (state) => {
    return products
      ? products.filter((product) => product.estado === state).length
      : 0;
  };

  const calculatePercentage = (count, total) => {
    return total > 0 ? ((count / total) * 100).toFixed(2) + "%" : "0%";
  };

  const totalProducts = countAllProducts();
  const activeProductsCount = countByState("Activo");
  const inactiveProductsCount = countByState("Inactivo");

  return (
    <>
      <main>
        <h1 className="titles">Productos</h1>
        <div className="analyse">
          <AnalysesParts
            types={"sales"}
            title={"Productos totales"}
            number={totalProducts}
            percentage={calculatePercentage(totalProducts, totalProducts)}
          />
          <AnalysesParts
            types={"visits"}
            title={"Productos activo"}
            number={countByState("Activo")}
            percentage={calculatePercentage(activeProductsCount, totalProducts)}
          />
          <AnalysesParts
            types={"searches"}
            title={"Productos inactivos"}
            number={countByState("Inactivo")}
            percentage={calculatePercentage(
              inactiveProductsCount,
              totalProducts
            )}
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
