/* eslint-disable react/prop-types */

export const StructureProduct = ({
  nameProduct,
  productImg,
  description,
  price,
  stock,
  state,
}) => {
  return (
    <>
      <div className="item">
        <div className="img">
          <img src={productImg} alt="" />
        </div>

        <div className="info">
          <div>
            <h5>{nameProduct}</h5>
            <p className="description">{description}</p>
          </div>

          <div className="btc">
            <h4>{price}</h4>
            <p className="stock">
              Disponibilidad: <span>{stock}</span>
            </p>
            <p className="state">
              Estado: <span>{state}</span>
            </p>
          </div>
        </div>

        <div className="bid">
          <a href="#" className="btn">
            Mas info
          </a>
          <a href="#" className="btn">
            Comprar
          </a>
        </div>
      </div>
    </>
  );
};
