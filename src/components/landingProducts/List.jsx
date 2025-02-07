import { useFetch } from "../../hooks/useFetch";
import { StructureProduct } from "../index";
import { useInView } from "react-intersection-observer";

export const ListProducts = () => {
  const { data } = useFetch("https://apiproyecto-react.onrender.com/productos");
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <>
      <div className="nft-shop">
        <div className="nft-list">
          {data?.map((product) => (
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
          {/* <div
            className={`items ${
              inView ? "animate__animated animate__backInDown" : ""
            }`}
            ref={ref}>
            <StructureProduct
              nameCategory={"Casas Prefabricadas"}
              description={"Casa prefabricada de 2 pisos"}
              nameProduct={"Casa de 2 pisos"}
              price={"$ 1.000.000"}
              productImg={
                "https://images.homify.com/v1443654352/p/photo/image/960352/Imativa_Casa_Carrasco_0013.jpg"
              }
              state={"En venta"}
              stock={10}
            />
            <StructureProduct
              nameCategory={"Casas Prefabricadas"}
              description={"Casa prefabricada de 1 piso"}
              nameProduct={"Casa de 1 piso"}
              price={"$ 500.000"}
              productImg={
                "https://images.homify.com/v1464986821/p/photo/image/1535150/IMG_2384.jpg"
              }
              state={"En venta"}
              stock={5}
            />
            <StructureProduct
              nameCategory={"Herramientas"}
              description={"Martillo de acero"}
              nameProduct={"Martillo"}
              price={"$ 50.000"}
              productImg={
                "https://nikatto.com/1173-large_default/martillo-de-acero-macizo-con-garra-desgarradora.jpg"
              }
              state={"En venta"}
              stock={20}
            />
            <StructureProduct
              nameCategory={"Herramientas"}
              description={"Destornillador de acero"}
              nameProduct={"Destornillador"}
              price={"$ 30.000"}
              productImg={
                "https://nikatto.com/2222-large_default/destornillador-pro-punta-gabinete.jpg"
              }
              state={"En venta"}
              stock={10}
            />
            <StructureProduct
              nameCategory={"Herramientas"}
              description={"Martillo de acero"}
              nameProduct={"Martillo"}
              price={"$ 50.000"}
              productImg={
                "https://nikatto.com/1173-large_default/martillo-de-acero-macizo-con-garra-desgarradora.jpg"
              }
              state={"En venta"}
              stock={20}
            />
            <StructureProduct
              nameCategory={"Herramientas"}
              description={"Martillo de acero"}
              nameProduct={"Martillo"}
              price={"$ 50.000"}
              productImg={
                "https://nikatto.com/1173-large_default/martillo-de-acero-macizo-con-garra-desgarradora.jpg"
              }
              state={"En venta"}
              stock={20}
            />
          </div> */}
        </div>
      </div>
    </>
  );
};
