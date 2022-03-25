function CompanyResults({ user }) {
  const { totalTraveledWeek, totalOrder, completedOrders } = user;

  return (
    <div>
      <h5>Evolução semanal dos pedidos: {totalTraveledWeek}</h5>
      <h5>Total de Pedidos: {totalOrder}</h5>
      <h5>Total de Pedidos Finalizados: {completedOrders}</h5>
    </div>
  );
}

export default CompanyResults;
