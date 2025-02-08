/* eslint-disable react/prop-types */
import { useFetch } from "../../hooks/useFetch";
import { StructureProduct } from "../index";
import { useInView } from "react-intersection-observer";

export const ListProducts = ({ selectedCategory }) => {
  const { data } = useFetch("https://apiproyecto-react.onrender.com/productos");
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredProducts = selectedCategory
    ? data?.filter((product) => product.categoria_id === selectedCategory)
    : data;

  return (
    <>
      <div className="nft-shop">
        <div className="nft-list">
          {filteredProducts?.map((product) => (
            <div
              ref={ref}
              key={product.Id}
              className={`items ${
                inView ? "animate__animated animate__backInDown" : ""
              }`}>
              <StructureProduct
                description={product.descripcion}
                nameProduct={product.nombre}
                price={Number(product.precio).toLocaleString("es-ES")}
                productImg={product.img}
                state={product.estado}
                stock={product.stock}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
