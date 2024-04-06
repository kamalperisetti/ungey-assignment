import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({ data }) => {
  const labels = data.map(item => item.Month);
  const thisYearData = data.map(item => parseInt(item.thisYear)); // Parse to integers
  const lastYearData = data.map(item => parseInt(item.lastYear)); // Parse to integers

  const datasets = [
    {
      
      data: thisYearData,
      backgroundColor: '#B1EFFE',
      borderColor: 'rgba(54, 162, 235, 1)',
      label: 'This Year',
    },
    {
      
      data: lastYearData,
      backgroundColor: '#0067F6',
      borderColor: 'rgba(255, 99, 132, 1)',
      label: 'Last Year',
    },
  ];

  return (
    <div>
      <Bar
        data={{
          
          datasets,
          labels,
        }}
        height={400}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          plugins: {
            ChartDataLabels: {
              anchor: 'end', // Position labels at the end of bars
              content: 'dataset.label', // Display dataset label
            },
          },
        }}
      />
    </div>
  );
};

export default BarChart;
