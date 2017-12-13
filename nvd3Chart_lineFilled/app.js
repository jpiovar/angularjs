var app = angular.module('nvd3', []);

app.controller('MainCtrl', function($scope) { 


    
    $scope.title = "Chart title";
    
    var chartData;
    var chart;

    var body = d3.select("body");
    console.log(body);
    var svg = body.select("svg");
    console.log(svg);
    var svgWidth = parseInt(svg.style("width")); // 500px to 500
    console.log(svgWidth);


    d3.select('#chart svg')
    .append("text")
    .attr("x", svgWidth/2 + 30)             
    .attr("y", 30)
    .attr("text-anchor", "middle")  
    .text($scope.title);

    // d3.select('.nv-legendWrap').attr('transform', 'translate(0, 475)')
    
    d3.selectAll('.nvd3.nv-legend g').style('fill', "white")

    nv.addGraph(function() {
        chart = nv.models.lineChart()
                .margin({left: 100})  //Adjust chart margins to give the x-axis some breathing room.
                .useInteractiveGuideline(true)  //We want nice looking tooltips and a guideline!
                .showLegend(true)       //Show the legend, allowing users to turn on/off line series.
                .showYAxis(true)        //Show the y-axis
                .showXAxis(true)        //Show the x-axis
                .clipEdge(false)        // show full dot, not cutted in top
                .duration(250);   
                // .legendPosition("top");

        chart.margin({ top:100, bottom: 50 });  // space in relation to top and title
                     

        chart.yAxis.tickPadding(10);  // yAxis labels position in relation to Y line 
        chart.xAxis.tickPadding(10); // xAxis labels position in relation to X line

        // chart.legend.padding({top: 10, bottom: 20, left: 100, right: 100});
                 
        // chart.legend.rightAlign(true); 
        chart.legend.margin({top: 30, right: 0, left: 0, bottom: 50});

        chart.xAxis     //Chart x-axis settings
        .axisLabel('Time (ms)')
        .tickFormat(d3.format(',r'));
      
        chart.yAxis     //Chart y-axis settings
        .axisLabel('Voltage (v)')
        .tickFormat(d3.format('.02f'));
      
        /* Done setting the chart up? Time to render it!*/
        var myData = sinAndCos();   //You need data...
      
        chartData = d3.select('#chart svg')    //Select the <svg> element you want to render the chart in.   
        .datum(myData)         //Populate the <svg> element with chart data...
        .call(chart);          //Finally, render the chart!
      
        //Update the chart when window resizes.
        nv.utils.windowResize(function() { chart.update() });
        return chart;
    });
      /**************************************
       * Simple test data generator
       */
    function sinAndCos() {
        var sin = [],
            sin2 = [],
            cos = [];
      
        //Data is represented as an array of {x,y} pairs.
        for (var i = 0; i < 100; i++) {
          sin.push({x: i, y: Math.sin(i/10)});
          sin2.push({x: i, y: Math.sin(i/10) *0.25 + 0.5});
          cos.push({x: i, y: .5 * Math.cos(i/10)});
        }
      
        //Line chart data should be sent as an array of series objects.
        return [
          {
            values: sin,      //values - represents the array of {x,y} data points
            key: 'Sine Wave', //key  - the name of the series.
            color: '#ff7f0e'  //color - optional: choose your own line color.
          },
          {
            values: cos,
            key: 'Cosine Wave',
            color: '#2ca02c',
            area: true
          },
          {
            values: sin2,
            key: 'Another sine wave',
            color: '#7777ff',
            area: true      //area - set to true if you want this line to turn into a filled area chart.
          }
        ];
    }


    function sinAndCos1() {
        var sin = [],sin2 = [],
            cos = [];
      
        //Data is represented as an array of {x,y} pairs.
        for (var i = 0; i < 100; i++) {
          sin.push({x: i, y: Math.sin(i/9)});
          sin2.push({x: i, y: Math.sin(i/9) *0.25 + 0.5});
          cos.push({x: i, y: .5 * Math.cos(i/9)});
        }
      
        //Line chart data should be sent as an array of series objects.
        return [
          {
            values: sin,      //values - represents the array of {x,y} data points
            key: 'Wave 1', //key  - the name of the series.
            color: '#ff7f0e'  //color - optional: choose your own line color.
          },
          {
            values: cos,
            key: 'Wave 2',
            color: '#2ca02c',
            area: true
          },
          {
            values: sin2,
            key: 'Another wave',
            color: '#7777ff',
            area: true      //area - set to true if you want this line to turn into a filled area chart.
          }
        ];
    }





   

    

    $scope.updateData = function(){ 
        
        var myData1 = sinAndCos1();   //You need data...
        
        chartData.datum(myData1).call(chart);

        nv.utils.windowResize(chart.update);

    }

});