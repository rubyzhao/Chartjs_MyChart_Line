var ctx = document.getElementById('myChart').getContext('2d');

var chartData = [];
var loop=100;
//var loop=5.0e6;
//5700000 ok
//5800000 Aw, Snap error
//10000000; Pause before potential Out of memory crash

for(var i = 0;i<loop;i++){
  
  var x = 2 * Math.PI * i / loop;  
  var y = Math.sin(x);
  chartData.push({x: x, y:y})
}
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        datasets:[{
            label: 'Sin',
            data: chartData,
            //backgroundColor:'red', //for fill color
            borderColor:'red',
            lineTension:0,
            pointRadius:0,
            showLine: true,
            fill: false
        }],
        
    },
    
    options: {
        scales: {
            xAxes: [{
                type: 'linear',
                ticks: {
                    max: 6.5,
                    min: 0,
                    stepSize: 0.5
                },
                scaleLabel: {
                    display: true,
                    labelString: 'X'
                }
            }],
            yAxes: [{
                ticks: {
                    max: 1.2,
                    min: -1.2,
                    stepSize:0.2 
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Sin'
                }
                
            }]
        },
        elements: {
            line: {
                tension: 0 // disables bezier curves for speed
            }
        },
        animation: {
            duration: 0 // general animation time
        },
        hover: {
            animationDuration: 0 // duration of animations when hovering an item
        },
        responsiveAnimationDuration: 0 // animation duration after a resize
    }
});