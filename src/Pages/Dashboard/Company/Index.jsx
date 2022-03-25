import ChartReusable from "../../../Components/Chart/Index";

function CompanyResults({ user }) {
  const { totalTraveledWeek, totalOrder, completedOrders } = user;

  const values = [
    ["Infos", "Informações"],
    ["Evolução semanal dos pedidos", totalTraveledWeek],
    ["Total de Pedidos", totalOrder],
    ["Total de Pedidos Finalizados", completedOrders],
  ];

  const options = { title: "Resumo da Companhia" };

  return <ChartReusable options={options} values={values} />;
}

export default CompanyResults;
