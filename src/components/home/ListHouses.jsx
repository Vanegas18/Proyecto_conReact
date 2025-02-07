import PropTypes from "prop-types";

export const ListHouses = ({ img, title, price, m2 }) => {
  return (
    <div className="item">
      <img src={img} alt="" />
      <div className="info">
        <div>
          <h5>{title}</h5>
          <div className="btc">
            <i className="bx bxs-dollar-circle"></i>
            <p>{price}</p>
          </div>
        </div>
      </div>
      <div className="bid">
        <p>{m2}</p>
        {/* AQUÍ USARE ROUTES */}
        <a href="https://web.whatsapp.com/" target="_blank">
          ¡La quiero!
        </a>
      </div>
    </div>
  );
};

ListHouses.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  m2: PropTypes.string.isRequired,
};
