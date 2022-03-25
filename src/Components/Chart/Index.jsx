import { Chart } from "react-google-charts";

function ChartReusable({ values, options }) {
  return (
    <Chart
      options={options}
      chartType='PieChart'
      data={values}
      width='100%'
      height='400px'
      legendToggle
    />
  );
}

export default ChartReusable;
