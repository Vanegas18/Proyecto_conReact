import casa2 from "/images/casa2.jpg";
import casa3 from "/images/casa3.jpg";
import casa4 from "/images/casa4.jpg";
import { ListHouses } from "../index";
import { NavLink } from "react-router";
import { useInView } from "react-intersection-observer";

export const InfoShop = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <>
      <body>
        <div
          ref={ref}
          className={`nft-shop ${
            inView ? "animate__animated animate__backInDown" : ""
          }`}>
          <div className="nft-lists">
            <ListHouses
              img={casa2}
              title={"MCV Campestre"}
              price={"$60.000.000"}
              m2={"300 m2"}
            />

            <ListHouses
              img={casa3}
              title={"MCV Verano"}
              price={"$150.000.000"}
              m2={"280 m2"}
            />

            <ListHouses
              img={casa4}
              title={"MCV Familiar"}
              price={"$80.000.000"}
              m2={"320 m2"}
            />
          </div>
        </div>

        <div className="view-more">
          <NavLink to={"/landingProductos"} className="signup">
            Mirar mas
          </NavLink>
        </div>
      </body>
    </>
  );
};
