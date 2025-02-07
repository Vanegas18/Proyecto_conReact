import { useFetch } from "../../hooks/useFetch";

export const TableProducts = () => {
  const { data } = useFetch([
    "https://apiproyecto-react.onrender.com/productos",
    "https://apiproyecto-react.onrender.com/categorias",
  ]);

  if (!data) return <div></div>;

  const [products, categories] = data;

  const getCategoryName = (categoryId) => {
    const category = categories.find((cat) => cat._id === categoryId);
    return category ? category.nombre : "Desconocido";
  };

  return (
    <>
      <table className="tablaUsuarios">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Categoría</th>
            <th>Img</th>
            <th>Estado</th>
            <th>Editar</th>
            <th>Cambiar estado</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product) => (
            <tr key={product._id}>
              <td>{product.productId}</td>
              <td>{product.nombre}</td>
              <td>{product.descripcion}</td>
              <td>{Number(product.precio).toLocaleString("es-ES")}</td>
              <td>{product.stock}</td>
              <td>{getCategoryName(product.categoria_id)}</td>
              <td>
                <img
                  src={product.img}
                  alt=""
                  style={{ borderRadius: 10, width: 120, marginLeft: 40 }}
                />
              </td>
              <td>{product.estado}</td>
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
