import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { SaleSucess } from 'types/sales';
import { round } from 'utils/format';
import { BASE_URL } from 'utils/requests';

type SeriesData = {
    name: string;
    data: number[];
}

type ChartData = {
    labels: {
        categories: string[];
    };
    series: SeriesData[];
}

const BarChart = () => {

    const [chartData, setChartData] = useState<ChartData>({
        labels: {
            categories: []
        },
        series: [
            {
                name: "",
                data: []                   
            }
        ]
    });

    useEffect(() => {
        axios.get(`${BASE_URL}/sales/success-by-seller`).then((response) => {
          console.log(response.data);
          const data = response.data as SaleSucess[];
          const chartLabels = data.map((x) => x.sellerName);
          const chartSeries = data.map((x) => round(100 * (x.deals / x.visited), 1));
    
          setChartData({ 
            labels: {
                categories: chartLabels
            },
            series: [
                {
                    name: "% Success",
                    data: chartSeries                   
                }
            ]        
          });
        });
      }, []);
  

    const options = {
      plotOptions: {
          bar: {
              horizontal: true,
          }
      },
    };

 

    return (
        <Chart
        options={{...options, xaxis: chartData.labels}}
        series={chartData.series}
        type="bar"
        height="240"
        />
    )
}

export default BarChart;
