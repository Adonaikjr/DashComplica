import React from 'react'
import { Bar } from 'react-chartjs-2'
import 'chart.js/auto'

interface PropsBar {
  jan: number
  fev: number
  mar: number
  abr: number
  mai: number
  jun: number
  jul: number
  ago: number
  set: number
  out: number
  nov: number
  dez: number
  title: string
  backgroundColor: any
}

function BarChart({
  jan,
  fev,
  mar,
  abr,
  mai,
  jun,
  jul,
  ago,
  set,
  out,
  nov,
  dez,
  title,
  backgroundColor,
}: PropsBar) {
  const data = {
    labels: [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'junho',
      'julho',
      'agosto',
      'setembro',
      'outubro',
      'novembro',
      'dezembro',
    ],
    datasets: [
      {
        label: `${title}`,
        data: [jan, fev, mar, abr, mai, jun, jul, ago, set, out, nov, dez],
        backgroundColor: `${backgroundColor}`,
        borderColor: `${backgroundColor}`,
        borderWidth: 0,
      },
    ],
  }

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  }

  return <Bar data={data} options={options} />
}

export default BarChart
