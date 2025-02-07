import { FiUser, FiMail, FiLock, FiArrowLeft } from "react-icons/fi";
import { NavLink } from "react-router";

export const RegisterPage = () => {
  return (
    <>
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <NavLink to={"/login"}>
              <div className="back-icon">
                <FiArrowLeft onClick={() => window.history.back()} />
              </div>
            </NavLink>
            <h1>Crea tu cuenta</h1>
            <p>Regístrate para comenzar</p>
          </div>

          <form className="login-form">
            <div className="input-group">
              <label>Nombre completo</label>
              <div className="input-field">
                <FiUser className="input-icon" />
                <input
                  type="text"
                  placeholder="Juan Pérez"
                  required
                  aria-label="name"
                />
              </div>
            </div>

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

            <div className="input-group">
              <label>Confirmar Contraseña</label>
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
              Registrarse
            </button>
          </form>

          <div className="login-footer">
            <p>
              ¿Ya tienes cuenta?{" "}
              <a href="/login" className="footer-link">
                Inicia sesión
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
