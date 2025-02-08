/* eslint-disable react/prop-types */
import { OptionsAsideBar } from "../index";
import { NavLink } from "react-router";

export const AsideBar = ({ activeLink }) => {
  return (
    <>
      <aside>
        <div className="sidebar">
          <div className="toggle">
            <div className="logo">
              <h2 className="titlee">
                Build<span className="danger">Mart</span>
              </h2>
            </div>
          </div>
          <NavLink to={"/dashboard"}>
            <OptionsAsideBar
              className={activeLink === "dashboard" ? "active" : ""}
              link={"#"}
              iconName={"dashboard"}
              title={"Dashboard"}
            />
          </NavLink>
          <NavLink to={"/usuarios"}>
            <OptionsAsideBar
              className={activeLink === "usuarios" ? "active" : ""}
              link={"#"}
              iconName={"person_outline"}
              title={"Usuarios"}
            />
          </NavLink>
          <NavLink to={"/roles"}>
            <OptionsAsideBar link={"#"} iconName={"settings"} title={"Roles"} />
          </NavLink>

          <NavLink to={"/proveedores"}>
            <OptionsAsideBar
              link={"#"}
              iconName={"inventory_2"}
              title={"Proveedores"}
            />
          </NavLink>

          <NavLink to={"/categoriasProveedores"}>
            <OptionsAsideBar
              link={"#"}
              iconName={"inventory_2"}
              title={"Categoria Proveedores"}
            />
          </NavLink>

          <NavLink to={"/productos"}>
            <OptionsAsideBar
              className={activeLink === "productos" ? "active" : ""}
              link={"#"}
              iconName={"construction"}
              title={"Productos"}
            />
          </NavLink>

          <NavLink to={"/categoriasProductos"}>
            <OptionsAsideBar
              className={activeLink === "categoryProducts" ? "active" : ""}
              link={"#"}
              iconName={"category"}
              title={"Categorías productos"}
            />
          </NavLink>

          <NavLink to={"/compras"}>
            <OptionsAsideBar
              link={"#"}
              iconName={"attach_money"}
              title={"Compras"}
            />
          </NavLink>

          <NavLink to={"/ventas"}>
            <OptionsAsideBar
              link={"#"}
              iconName={"currency_exchange"}
              title={"Ventas"}
            />
          </NavLink>
          <NavLink to={"/clientes"}>
            <OptionsAsideBar
              link={"#"}
              iconName={"groups"}
              title={"Clientes"}
            />
          </NavLink>

          <NavLink to={"/"}>
            <OptionsAsideBar link={"#"} iconName={"house"} title={"Landing"} />
          </NavLink>

          <NavLink to={"/"}>
            <OptionsAsideBar
              link={"#"}
              iconName={"settings"}
              title={"Perfil"}
            />
          </NavLink>
          <NavLink to={"/"}>
            <OptionsAsideBar
              link={"#"}
              iconName={"logout"}
              title={"Cerrar Sesión"}
            />
          </NavLink>
        </div>
      </aside>
    </>
  );
};
