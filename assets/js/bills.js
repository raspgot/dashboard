$(document).ready(function () {

    $.getJSON('data/example.json', function (data) {

        var chartType = 'bar';
        var myBarChart;

        //Additions
        var date = [],
            ammount = [];
        $(data.bills).each(function (key, value) {
            date.push(value.date);
            ammount.push(value.amount);
        });

        var cfg = {
            type: 'line',
            data: {
                labels: date,
                datasets: [{
                    label: 'Bills',
                    data: ammount,
                    backgroundColor: ['rgba(115, 135, 213, 0.8)'],
                    borderColor: ['rgba(115, 135, 213, 1)'],
                    borderWidth: 1,
                    lineTension: 0,
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            max: 50,
                            beginAtZero: true
                        }
                    }]
                }
            }
        };

        var ctx = document.getElementById("bills").getContext('2d');
        var billsChart = new Chart(ctx, cfg);

        var myChart;

        $("#line").click(function () {
            change('line');
        });

        $("#bar").click(function () {
            change('bar');
        });

        function change(newType) {
            var ctx = document.getElementById("bills").getContext("2d");

            // Remove the old chart and all its event handles
            if (myChart) {
                myChart.destroy();
            }

            // Chart.js modifies the object you pass in. Pass a copy of the object so we can use the original object later
            var temp = jQuery.extend(true, {}, cfg);
            temp.type = newType;
            myChart = new Chart(ctx, temp);
        };

    });

});