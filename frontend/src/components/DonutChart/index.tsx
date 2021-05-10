import axios from 'axios';
import Chart from 'react-apexcharts'
import { SaleSum } from 'types/sales';
import { BASE_URL } from 'utils/requests';

type CharData = {
  labels: string[];
  series: number[];
}

const DonutChart = () => {

  // forma erra
  let chartData : CharData = { labels: [], series: [] };

  axios.get(`${BASE_URL}/sales/amount-by-seller`)
    .then(response => {
      console.log(response.data);
      const data = response.data as SaleSum[];
      const chartLabels = data.map(x => x.sellerName );
      const chartSeries = data.map(x => x.sum);

      chartData = { labels: chartLabels, series: chartSeries}

    });
  
  const mockData = {
    series: [477138, 499928, 444867, 220426, 473088],
    labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
  }

  const options = {
      legend: {
          show: true
      }
  }
    

  return (
    <Chart
      options={{...options, labels: chartData.labels }}
      series={ chartData.series }
      type="donut"
      height="240"
    />
  );
}

export default DonutChart;
