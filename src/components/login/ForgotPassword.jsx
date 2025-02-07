import { FiMail, FiArrowLeft } from "react-icons/fi";

export const ForgotPassword = () => {
  return (
    <>
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <div className="back-icon">
              <FiArrowLeft onClick={() => window.history.back()} />
            </div>
            <div>
              <h1>Recuperar contraseña</h1>
              <p>Ingresa tu email para restablecerla</p>
            </div>
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

            <button type="submit" className="login-button">
              Enviar instrucciones
            </button>
          </form>

          <div className="login-footer">
            <p>
              ¿Volver al inicio?{" "}
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
