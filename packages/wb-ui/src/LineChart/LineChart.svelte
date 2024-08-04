<svelte:options customElement="sv-linechart" />

<script>
  import { Chart, registerables } from "chart.js";
  import { Line } from "svelte-chartjs";

  Chart.register(...registerables);

  let chartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Sales 2023",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
      {
        label: "Sales 2022",
        data: [28, 48, 40, 19, 86, 27, 90],
        fill: false,
        borderColor: "rgb(255, 99, 132)",
        tension: 0.1,
      },
    ],
  };

  let chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Monthly Sales Comparison",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Sales ($)",
        },
      },
      x: {
        title: {
          display: true,
          text: "Month",
        },
      },
    },
  };
</script>

<Line data={chartData} options={chartOptions} />
