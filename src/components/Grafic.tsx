import * as React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

type BarChartComponentProps = {
  data: any;
  options: any;
};

const BarChartComponent: React.FC<BarChartComponentProps> = ({ data, options }) => {
  return <Bar data={data} options={options} />;
};

export default BarChartComponent;
