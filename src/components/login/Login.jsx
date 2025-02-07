import { FiMail, FiLock } from "react-icons/fi";
import { NavLink } from "react-router";

export const LoginPage = () => {
  return (
    <>
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <h1>Bienvenido</h1>
            <p>Inicia sesión en tu cuenta</p>
          </div>

          <form className="login-form">
            <div className="input-group">
              <label>Correo electrónico</label>
              <div className="input-field">
                <FiMail className="input-icon" />
                <input
                  type="email"
                  placeholder="tu@email.com"
                  required
                  aria-label="email"
                />
              </div>
            </div>

            <div className="input-group">
              <label>Contraseña</label>
              <div className="input-field">
                <FiLock className="input-icon" />
                <input
                  type="password"
                  placeholder="••••••••"
                  required
                  aria-label="password"
                />
              </div>
            </div>

            <button type="submit" className="login-button">
              Iniciar sesión
            </button>
          </form>

          <div className="login-footer">
            <NavLink to={"/forgotPassword"}>
              <a href="#" className="footer-link">
                ¿Olvidaste tu contraseña?
              </a>
            </NavLink>
            <p>
              ¿No tienes cuenta?{" "}
              <NavLink to={"/register"}>
                <a href="#" className="footer-link">
                  Regístrate
                </a>
              </NavLink>
            </p>
            <NavLink to={"/"}>
              <a href="#" className="footer-link">
                Volver
              </a>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
