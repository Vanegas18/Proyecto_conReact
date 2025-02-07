import { NavLink } from "react-router";

export const NewUsersMain = () => {
  return (
    <>
      <div className="new-users">
        <h1 className="titles">Nuevos Usuarios</h1>
        <div className="user-list">
          <div className="user">
            <img
              src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cm9zdHJvc3xlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
            <h2>Juan</h2>
            <p>Hace 54 minutos</p>
          </div>
          <div className="user">
            <img
              src="https://img.freepik.com/foto-gratis/hombre-sopla-mejillas-tiene-expresion-descontento-no-esta-satisfecho-algo_273609-17085.jpg"
              alt=""
            />
            <h2>Jose</h2>
            <p>Hace 3 horas</p>
          </div>
          <div className="user">
            <img
              src="https://modaellos.com/wp-content/uploads/2017/11/cortes-tipo-rostro-ovalado-istock.jpg"
              alt=""
            />
            <h2>Daniel</h2>
            <p>Hace 6 horas</p>
          </div>
          <div className="user">
            <NavLink to={"/register"}>
              <img
                src="https://media.istockphoto.com/id/688550958/es/vector/signo-de-negro-s%C3%ADmbolo-positivo.jpg?s=612x612&w=0&k=20&c=LyVTdpQ0VUUnhYVyY6Emy6CXx96dUOU9O7GXmEN_Vxo="
                alt=""
              />
            </NavLink>
            <h2>Mas</h2>
            <p>Nuevo usuario</p>
          </div>
        </div>
      </div>
    </>
  );
};
