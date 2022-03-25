function UserResults({ user }) {
  const { totalOrder, completedOrders } = user;

  return (
    <div>
      <h5>
        Total de km percorrido por dias da semana:
        {Math.round(Math.random(100) * totalOrder)} km
      </h5>
      <h5>Total de Pedidos: {totalOrder}</h5>
      <h5>Total de Pedidos Finalizados: {completedOrders}</h5>
    </div>
  );
}

export default UserResults;
