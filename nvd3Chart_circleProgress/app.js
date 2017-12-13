var app = angular.module('nvd3', []);

app.controller('MainCtrl', function($scope) { 

    $(document).ready(function(){
      // $(window).resize(function(){detectSizeApply('chart1')});
    });

    function detectSizeApply(aChart){ 
      chObj[aChart].chartWidth = parseInt(chObj[aChart].containerChart.style("width"));
      chObj[aChart].chartHeight = parseInt(chObj[aChart].containerChart.style("height"));

      chObj[aChart].svg
        .attr('height', '100%')
        .attr('width','100%')
        .attr('viewBox','0 0 '+Math.max(chObj[aChart].chartWidth,chObj[aChart].chartHeight) +' '+Math.max(chObj[aChart].chartWidth,chObj[aChart].chartHeight));
  
      // svg1.select('text.title').remove();
      chObj[aChart].svgWidth = parseInt(chObj[aChart].svg.style("width")); // 500px to 500
      chObj[aChart].chartTitle.attr("x", chObj[aChart].svgWidth/2 + 30);
    }

    
    $scope.title = "Chart title";
    
    var body = d3.select("body");

    var chObj = {      
      'chart2':{
        'chartData':null,
        'chart':null,
        'svg':body.select("#chart2 svg"),
        'svgWidth':parseInt(body.select("#chart2 svg").style("width")),
        'containerChart':d3.select('#chart2'),
        'chartWidth':null,
        'chartHeight':null,
        'chartTitle':null
      }                   
    };


    
    
    function initialLineChart(aChart){

      chObj[aChart].svg
      .append("text").classed('title',true)
      .attr("x", chObj[aChart].svgWidth/2 + 30)             
      .attr("y", 30)
      .attr("text-anchor", "middle")  
      .text(aChart+' title');
      chObj[aChart].chartTitle = chObj[aChart].svg.select('text.title');  
      chObj[aChart].svg.attr('transform', 'translate(-20,0)'); // move whole chart complex little left
  

      nv.addGraph(function() {
        chObj[aChart].chart = nv.models.lineChart()
                .margin({left: 100})  //Adjust chart margins to give the x-axis some breathing room.
                .useInteractiveGuideline(true)  //We want nice looking tooltips and a guideline!
                .showLegend(true)       //Show the legend, allowing users to turn on/off line series.
                .showYAxis(true)        //Show the y-axis
                .showXAxis(true)        //Show the x-axis
                .clipEdge(false)        // show full dot, not cutted in top
                .duration(250);   
                // .legendPosition("top");

        chObj[aChart].chart.margin({ top:100, bottom: 50 });  // space in relation to top and title
                     

        chObj[aChart].chart.yAxis.tickPadding(10);  // yAxis labels position in relation to Y line 
        chObj[aChart].chart.xAxis.tickPadding(10); // xAxis labels position in relation to X line

        // chart.legend.padding({top: 10, bottom: 20, left: 100, right: 100});
                 
        // chart.legend.rightAlign(true); 
        chObj[aChart].chart.legend.margin({top: 30, right: 0, left: 0, bottom: 50});

        chObj[aChart].chart.xAxis     //Chart x-axis settings
        .axisLabel('Time (ms)')
        .tickFormat(d3.format(',r'));
      
        chObj[aChart].chart.yAxis     //Chart y-axis settings
        .axisLabel('Voltage (v)')
        .tickFormat(d3.format('.02f'));
      
        /* Done setting the chart up? Time to render it!*/
        var myData1 = sinAndCos();   //You need data...
      
        chObj[aChart].chartData = d3.select('#' + aChart + ' svg')    //Select the <svg> element you want to render the chart in.   
        .datum(myData1)         //Populate the <svg> element with chart data...
        .call(chObj[aChart].chart);          //Finally, render the chart!
      
        //Update the chart when window resizes.
        nv.utils.windowResize(function() { 
          detectSizeApply(aChart); 
          chObj[aChart].chart.update(); 
        });
        return chObj[aChart].chart;
      });

    }



    

    initialLineChart('chart2');

    
    
        
    detectSizeApply('chart2');



    
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


  
    $scope.updateDataLine = function(){ 

      $scope.title = "ok title";

      chObj['chart2'].chartTitle.text($scope.title);
        
      var myData2 = sinAndCos1();   //You need data...
        
      chObj['chart2'].chartData.datum(myData2).call(chObj['chart2'].chart);

      nv.utils.windowResize(function(){ chObj['chart2'].chart.update(); });

    }









    /* chart arc == circle progress bar Start */

    var $container;
    var arc;
    var svgArc;
    var textArc;
    var background;
    var foreground;
    var τ;

    function initialCircleProgress(){ 
      // $container = $('.chartArc'); // jQuery way
      $container = body.select(".chartArc");
      τ = 2 * Math.PI;
      // var width = $container.width(), // jQuery way
      var width = parseInt($container.style("width")),
          // height = $container.height(), // jQuery way
          height = parseInt($container.style("height")),
          outerRadius = Math.max(width,height)/2,
          innerRadius = (outerRadius/5)*4,
          fontSize = (Math.max(width,height)/4);

      arc = d3.svg.arc()
          .innerRadius(innerRadius)
          .outerRadius(outerRadius)
          .startAngle(0);

      svgArc = d3.select('.chartArc').append("svg")
          .attr("width", '100%')
          .attr("height", '100%')
          .attr('viewBox','0 0 '+Math.max(width,height) +' '+Math.max(width,height) )
          .attr('preserveAspectRatio','xMinYMin')
          .append("g")
          .attr("transform", "translate(" + Math.max(width,height) / 2 + "," + Math.max(width,height) / 2 + ")");
  
      textArc = svgArc.append("text")
          .text('0%')
          .attr("text-anchor", "middle")
          .style("font-size",fontSize+'px')
          .attr("dy",fontSize/3)
          .attr("dx",2);

      background = svgArc.append("path")
          .datum({endAngle: τ})
          .style("fill", "#7cc35f")
          .attr("d", arc);
  
      foreground = svgArc.append("path")
          .datum({endAngle: 0 * τ})
          .style("fill", "#57893e")
          .attr("d", arc);

      // setInterval(function() {
      //   foreground.transition()
      //       .duration(750)
      //       .call(arcTween, Math.random() * τ);
      // }, 1500);

    }

    function arcTween(transition, newAngle) { 
      
        transition.attrTween("d", function(d) { 
    
            var interpolate = d3.interpolate(d.endAngle, newAngle);
            
            return function(t) {
                
                d.endAngle = interpolate(t);
                
                textArc.text(Math.round((d.endAngle/τ)*100)+'%');
                
                return arc(d);
            };
        });
    }

    initialCircleProgress();

    $scope.updateDataArc = function(){
      // foreground.transition().duration(750).call(arcTween, Math.random() * τ);
      arcTween(foreground.transition().duration(750),Math.random() * τ);
    }

    /* chart arc == circle progress bar End */

});