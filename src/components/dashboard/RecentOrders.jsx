export const RecentOrdersMain = () => {
  return (
    <>
      <div className="recent-orders">
        <h1 className="titles">Ventas Recientes</h1>
        <table className="tablaUsuarios">
          <thead>
            <tr>
              <th>Nombre del producto</th>
              <th>Cantidad</th>
              <th>Fecha</th>
              <th>Forma de pago</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Casa prefabricada 1</td>
              <td>1</td>
              <td>01/02/25</td>
              <td>Tarjeta de crédito</td>
              <td>Entregada</td>
            </tr>
          </tbody>
        </table>

        <a href="">Mostrar mas</a>
      </div>
    </>
  );
};
