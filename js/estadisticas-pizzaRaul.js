$(window).on("load", function(){

  var ctx = $("#bar-chart");

  var chartOptions = {
      elements: {
          rectangle: {
              borderWidth: 2,
              borderColor: 'rgb(0, 255, 0)',
              borderSkipped: 'left'
          }
      },
      responsive: true,
      maintainAspectRatio: false,
      responsiveAnimationDuration:500,
      legend: {
          position: 'bottom',
      },
      scales: {
          xAxes: [{
              display: true,
              gridLines: {
                  color: "#f3f3f3",
                  drawTicks: false,
              },
              scaleLabel: {
                  display: true,
              }
          }],
          yAxes: [{
              display: true,
              gridLines: {
                  color: "#f3f3f3",
                  drawTicks: false,
              },
              scaleLabel: {
                  display: true,
              }
          }]
      },
      title: {
          display: false,
          text: 'Horizontal Bar Chart'
      }
  };

  // Chart Data
  var chartData = {
      labels: ["SMP", "Los Olivos", "Comas", "Cercado de Lima", "Bellavista", "Pueblo Libre", "San Luis", "La Victoria", "Lince", "Jesús María", "Breña", "Surquillo", "Ate", "Anita", "SJL", "La Molina", "Surco","SMP", "Los Olivos", "Comas", "Cercado de Lima", "Bellavista", "Pueblo Libre", "San Luis", "La Victoria", "Lince", "Jesús María", "Breña", "Surquillo", "Ate", "Anita", "SJL", "La Molina", "Surco"],
      datasets: [{
          label: "Pedidos por tienda",
          data: [65, 59, 80, 81,65, 59, 80, 81,65, 99, 80, 81,65, 60, 80, 81, 80,65, 59, 80, 81,92, 59, 80, 81,65, 52, 80, 81,60, 59, 80, 81, 25],
          backgroundColor: "#000000",
          hoverBackgroundColor: "#BD1218",
          borderColor: "transparent",
      }]
  };

  var config = {
      type: 'bar',

      // Chart Options
      options : chartOptions,
      data : chartData
  };

  // Create the chart
  var lineChart = new Chart(ctx, config);
});
