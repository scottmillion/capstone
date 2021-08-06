import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: [],
  datasets: [
    {
      label: 'USD Price',
      data: [],
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
    },
  ],
};

const options = {
  scales: {
    
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
    
  },
  
};

const LineChart = (props) => (
  <>
    <div className='header'>
      <h1 className='title'>Bitcoin Historic Data in USD</h1>
    </div>
    {Object.entries(props.data).forEach(entry => {
      console.log(entry[0], entry[1])
      data.labels.push(entry[0])
      data.datasets[0].data.push(entry[1])
    })}
    {console.log(data.labels)}
    {console.log(data.datasets[0].data)}
    <Line data={data} options={options} />
  </>
);

export default LineChart;