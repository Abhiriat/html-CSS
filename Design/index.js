const options = {
  series: [{
    name: "Earnings in $",
    data: [2000, 2100, 2000, 2200, 2800, 2300, 2500, 2400, 2300, 1800, 2700, 3000]
  }],
  chart: {
    height: 350,
    type: 'line',
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight'
  },
  title: {
    text: 'Earnings (past 12 months)',
    align: 'center'
  },
  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'], 
      opacity: 0.5
    },
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  }
};

const chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

const optionsDonutChart = {
  series: [44, 30, 15, 8], 
  chart: {
    height: 350,
    type: 'donut',
  },
  labels: ['Academic', 'Non-academic', 'Administration', 'Others'],
  colors: ['#00A86B', '#007FFF', '#FFD700', '#800080'],
  title: {
    text: 'Employees',
    align: 'center'
  },
  legend: {
    position: 'top'
  },
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
};

const chart2 = new ApexCharts(document.querySelector("#chart2"), optionsDonutChart);
chart2.render();