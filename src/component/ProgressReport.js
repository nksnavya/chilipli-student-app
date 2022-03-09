import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Box, Typography } from '@mui/material';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
  },
};

const labels =
  [
    "Divya Narasimhan",
    "Madhumati",
    "swapnil",
    "NIrula",
    "Tanvee",
    "Venkat Madhavan",
    "Hariharan",
    "Vihaan Choudary",
    "tanmayi Gautami",
    "Varuna Vijayalakshmi",
    "paada kamalesha",
    "meru pranesha",
    "kanthi swarneshwari iyer",
    "Hiranmayi Chimpulkar",
  ];


export const data = {
  labels,
  datasets: [
    {
      label: 'Score',
      data: [75, 35, 50, 99, 40, 80, 61, 54, 95, 35, 51, 87, 97, 63,
      ],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Previous Score',
      data: [50, 34, 75, 35, 90, 75, 61, 35, 84, 35, 41, 80, 99, 36],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: 'Grade',
      data: [1, 2, 4, 3, 4, 3, 4, 2, 4, 1, 2, 4, 3, 2],
      backgroundColor: 'rgba(71, 51, 255, 0.5)',
    },
  ],
};

function ProgressReport() {
  return (
    <Box sx={{ mt: 4, mr: 4 }}>
      <Typography
        sx={{ display: "inline" }}
        component="h6"
        variant="h5"
        color="text.primary"
      >
        Progress Report
      </Typography>
      <Bar options={options} data={data} />
    </Box>
  )
}

export default ProgressReport;
