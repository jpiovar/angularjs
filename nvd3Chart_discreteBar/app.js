var app = angular.module('nvd3', []);

app.controller('MainCtrl', function($scope) { 

    $scope.dataChart = [
        {
            key: "Cumulative Return",
            values: [
                {
                    "label" : "A" ,
                    "value" : 29.765957771107
                } ,
                {
                    "label" : "B" ,
                    "value" : 0
                } ,
                {
                    "label" : "C" ,
                    "value" : 32.807804682612
                } ,
                {
                    "label" : "D" ,
                    "value" : 196.45946739256
                } ,
                {
                    "label" : "E" ,
                    "value" : 0.19434030906893
                } ,
                {
                    "label" : "F" ,
                    "value" : 98.079782601442
                } ,
                {
                    "label" : "G" ,
                    "value" : 13.925743130903
                } ,
                {
                    "label" : "H" ,
                    "value" : 5.1387322875705
                }
            ]
        }
    ];


    $scope.dataChart1 = [
        {
            key: "Cumulative Return",
            values: [
                {
                    "label" : "AA" ,
                    "value" : 39.765957771107
                } ,
                {
                    "label" : "B" ,
                    "value" : 0
                } ,
                {
                    "label" : "C" ,
                    "value" : 32.807804682612
                } ,
                {
                    "label" : "D" ,
                    "value" : 196.45946739256
                } ,
                {
                    "label" : "E" ,
                    "value" : 0.19434030906893
                } ,
                {
                    "label" : "F" ,
                    "value" : 98.079782601442
                } ,
                {
                    "label" : "G" ,
                    "value" : 13.925743130903
                } ,
                {
                    "label" : "H" ,
                    "value" : 5.1387322875705
                }
            ]
        }
    ];

    $scope.title = "hola";

    var chartData;
    var chart;

    d3.select('#chart1 svg')
    .append("text")
    .attr("x", 300)             
    .attr("y", 50)
    .attr("text-anchor", "middle")  
    .text($scope.title);

    nv.addGraph(function() {
        chart = nv.models.discreteBarChart()
            .x(function(d) { return d.label })
            .y(function(d) { return d.value })
            .staggerLabels(true)
            //.staggerLabels(dataChart[0].values.length > 8)
            .showValues(true)
            .duration(250);
        chartData = d3.select('#chart1 svg')
            .datum($scope.dataChart)
            .call(chart);
        nv.utils.windowResize(chart.update);
        return chart;
    });


    $scope.updateData = function(){ 

        

        chartData.datum($scope.dataChart1).call(chart);

        nv.utils.windowResize(chart.update);

    }

});