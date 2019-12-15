// init data
var inventory =  [
  { name: 'Polly', animal: 'bird', color: 'blue', sex: 'female', age: 9 },
  { name: 'Peter', animal: 'fish', color: 'pink', sex: 'male', age: 1 },
  { name: 'Garfield', animal: 'cat', color: 'orange', sex: 'male', age: 14}
]

var tableFields = [
  { key: 'name', sortable: true },
  { key: 'animal', sortable: true},
  { key: 'color'},
  { key: 'sex' }
]

// test view
var app = new Vue({
    el: '#app',
    data: {
      message: 'Polly want a cracker!'
    }
  })

// Navbar
var vm1 = new Vue({
  el: '#nav',
  data: {
    title: 'Pollys Parrots'
  }
})

// list
var vm2 = new Vue({
  el: '#inv-list',
  data: {
    parrots: inventory
  }
})

// table
var vm3 = new Vue({
  el: '#table'
})

var vm4 = new Vue({
  el: '.card'
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