var app = new Vue({
    el: '#app',
    data: {
      message: 'Polly want a cracker!'
    }
  })

var ctx = document.getElementById('testLine').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Crackers Consumed',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },

    // Configuration options go here
    options: {
      tooltips: {
        mode: 'point'
    }
    }
});