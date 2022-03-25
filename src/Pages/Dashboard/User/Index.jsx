import ChartReusable from "../../../Components/Chart/Index";

function UserResults({ user }) {
  const { totalOrder, completedOrders } = user;
  const num = Math.round(Math.random(100) * totalOrder);
  const values = [
    ["Infos", "Informações"],
    ["Total de km percorrido por dias da semana", num],
    ["Total de Pedidos", totalOrder],
    ["Total de Pedidos Finalizados", completedOrders],
  ];

  const options = { title: "Resumo do Motorista" };

  return (
    <div>
      <ChartReusable options={options} values={values} />
    </div>
  );
}

export default UserResults;
