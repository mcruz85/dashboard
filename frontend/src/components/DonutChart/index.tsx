import axios from "axios";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { SaleSum } from "types/sales";
import { BASE_URL } from "utils/requests";

type CharData = {
  labels: string[];
  series: number[];
};

const DonutChart = () => {
  const [chartData, setChartData] = useState<CharData>({
    labels: [],
    series: [],
  });

  useEffect(() => {
    axios.get(`${BASE_URL}/sales/amount-by-seller`).then((response) => {
      console.log(response.data);
      const data = response.data as SaleSum[];
      const chartLabels = data.map((x) => x.sellerName);
      const chartSeries = data.map((x) => x.sum);

      setChartData({ labels: chartLabels, series: chartSeries });
    });
  }, []);


  const options = {
    legend: {
      show: true,
    },
  };

  return (
    <Chart
      options={{ ...options, labels: chartData.labels }}
      series={chartData.series}
      type="donut"
      height="240"
    />
  );
};

export default DonutChart;
