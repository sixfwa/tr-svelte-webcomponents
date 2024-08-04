<svelte:options customElement="sv-bubblechart" />

<script>
  import { Chart, registerables } from "chart.js";
  import { Bubble } from "svelte-chartjs";

  Chart.register(...registerables);

  let chartData = {
    datasets: [
      {
        label: "Dataset 1",
        data: [
          { x: 20, y: 30, r: 15 },
          { x: 40, y: 10, r: 10 },
          { x: 30, y: 20, r: 8 },
          { x: 10, y: 40, r: 12 },
        ],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        data: [
          { x: 25, y: 35, r: 9 },
          { x: 35, y: 15, r: 7 },
          { x: 15, y: 25, r: 14 },
          { x: 45, y: 45, r: 11 },
        ],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
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
        text: "Bubble Chart Example",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "X Axis",
        },
      },
      y: {
        title: {
          display: true,
          text: "Y Axis",
        },
      },
    },
  };
</script>

<Bubble data={chartData} options={chartOptions} />
