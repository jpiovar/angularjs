var app = angular.module('plunker', ['nvd3']);

app.controller('MainCtrl', function($scope) {


  $scope.options = {
    "chart": {
      "type": "lineChart",
      "height": 450,
      "margin": {
        "top": 20,
        "right": 20,
        "bottom": 40,
        "left": 55
      },
      "useInteractiveGuideline": false,
      "dispatch": {},
      "xAxis": {
        // "axisLabel": "Time (ms)",
        tickFormat: function (d) {
          return d3.time.format('%d/%m')(new Date(d));
        }
      },
      "yAxis": {
        "axisLabel": "Voltage (v)",
        "axisLabelDistance": -10
      }
    },
    "title": {
      "enable": true,
      "text": "Title for Line Chart"
    },
    "subtitle": {
      "enable": false,
      "text": "Subtitle for simple line chart. Lorem ipsum dolor sit amet, at eam blandit sadipscing, vim adhuc sanctus disputando ex, cu usu affert alienum urbanitas.",
      "css": {
        "text-align": "center",
        "margin": "10px 13px 0px 7px"
      }
    },
    "caption": {
      "enable": false,
      "html": "<b>Figure 1.</b> Lorem ipsum dolor sit amet, at eam blandit sadipscing, <span style=\"text-decoration: underline;\">vim adhuc sanctus disputando ex</span>, cu usu affert alienum urbanitas. <i>Cum in purto erat, mea ne nominavi persecuti reformidans.</i> Docendi blandit abhorreant ea has, minim tantas alterum pro eu. <span style=\"color: darkred;\">Exerci graeci ad vix, elit tacimates ea duo</span>. Id mel eruditi fuisset. Stet vidit patrioque in pro, eum ex veri verterem abhorreant, id unum oportere intellegam nec<sup>[1, <a href=\"https://github.com/krispo/angular-nvd3\" target=\"_blank\">2</a>, 3]</sup>.",
      "css": {
        "text-align": "justify",
        "margin": "10px 13px 0px 7px"
      }
    }
  };


  $scope.data = [
    // date, series1, series2, series3
    [1446418800000, 2, 2, 0],
    [1446591600000, 14, 12, 2],
    [1446678000000, 65, 38, 27],
    [1446764400000, 11, 6, 5],
    [1447023600000, 6, 4, 2],
    [1447369200000, 12, 2, 10],
    [1447714800000, 1, 0, 1]
  ];

  var graphData = function(data, labels, colors) {
    var series = [];

    // first(0) value is date
    for (var i = 1; i < data[0].length; i++) {
      var values = [];
      for (var j = 0; j < data.length; j++) {
        values.push({
          x: data[j][0], // x is date
          y: data[j][i] // y is value
        });
      }
      series.push({
        values: values, // graph data
        key: labels[i-1], // the label
        color: colors[i-1] // color of series
      });
    }
    return series;
  };

  $scope.graphData = graphData($scope.data, ['One', 'Two', 'Three'], ['#6C6C6C', '#2ca02c', '#E43211']);


});