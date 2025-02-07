import img1 from "/images/profile-3.png";

export const Devs = () => {
  return (
    <>
      <h2 className="separator">Equipo Build Mart</h2>

      <div className="sellers">
        <div className="item">
          <img src={img1} alt="" />
          <div className="info">
            <h4>Juan Vanegas</h4>
            <p>Desarrollador</p>
          </div>
        </div>
      </div>
    </>
  );
};
