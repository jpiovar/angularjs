var app = angular.module('d3app', []);

app.controller('MainCtrl', function($scope) {

    $scope.dataChart = [
        {letter: "A", frequency: 0.08167},
        {letter: "B", frequency: 0.01492},
        {letter: "C", frequency: 0.08167},
        {letter: "D", frequency: 0.01492},
        {letter: "E", frequency: 0.08167},
        {letter: "F", frequency: 0.01492},
        {letter: "G", frequency: 0.08167},
        {letter: "H", frequency: 0.01492},
        {letter: "I", frequency: 0.08167},
        {letter: "J", frequency: 0.01492},
        {letter: "K", frequency: 0.08167},
        {letter: "L", frequency: 0.01492},
        {letter: "M", frequency: 0.08167},
        {letter: "N", frequency: 0.01492},
        {letter: "O", frequency: 0.08167},
        {letter: "P", frequency: 0.01492},
        {letter: "R", frequency: 0.08167},
        {letter: "S", frequency: 0.01492},
        {letter: "T", frequency: 0.08167},
        {letter: "U", frequency: 0.01492},
        {letter: "V", frequency: 0.08167},
        {letter: "Z", frequency: 0.01492}
    ];

    var margin = {top: 40, right: 20, bottom: 30, left: 40},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

    var formatPercent = d3.format(".0%");

    var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);

    var y = d3.scale.linear()
    .range([height, 0]);

    var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

    var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .tickFormat(formatPercent);

    var tip = d3.tip()
    .attr('class', 'd3-tip')
    .offset([-10, 0])
    .html(function(d) {
        return "<strong>Frequency:</strong> <span style='color:red'>" + d.frequency + "</span>";
    });

    var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    svg.call(tip);

    $scope.initChart = function(){ 

        

        loadData();
        

    }

    function loadData(){

        var data = $scope.dataChart;
        
        x.domain(data.map(function(d) { return d.letter; }));
        y.domain([0, d3.max(data, function(d) { return d.frequency; })]);

        svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

        svg.append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Frequency");

        svg.selectAll(".bar")
        .data(data)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function(d) { return x(d.letter); })
        .attr("width", x.rangeBand())
        .attr("y", function(d) { return y(d.frequency); })
        .attr("height", function(d) { return height - y(d.frequency); })
        .on('mouseover', tip.show)
        .on('mouseout', tip.hide);

    }

    function type(d) {
        d.frequency = +d.frequency;
        return d;
    }

    $scope.changeChart = function(){
        

        $scope.dataChart = [
            {letter: "AA", frequency: 0.01},
            {letter: "B", frequency: 0.09},
            {letter: "C", frequency: 0.08167},
            {letter: "D", frequency: 0.01492},
            {letter: "E", frequency: 0.08167},
            {letter: "F", frequency: 0.01492},
            {letter: "G", frequency: 0.08167},
            {letter: "H", frequency: 0.01492},
            {letter: "I", frequency: 0.08167},
            {letter: "J", frequency: 0.01492},
            {letter: "K", frequency: 0.08167},
            {letter: "L", frequency: 0.01492},
            {letter: "M", frequency: 0.08167},
            {letter: "N", frequency: 0.01492},
            {letter: "O", frequency: 0.08167},
            {letter: "P", frequency: 0.01492},
            {letter: "R", frequency: 0.08167},
            {letter: "S", frequency: 0.01492},
            {letter: "T", frequency: 0.08167},
            {letter: "U", frequency: 0.01492},
            {letter: "V", frequency: 0.08167},
            {letter: "Z", frequency: 0.01492}
        ];


        var data = $scope.dataChart; 

        x.domain(data.map(function(d) { return d.letter; }));
        
        y.domain([0, d3.max(data, function(d) { return d.frequency; })]);


        xAxis = d3.svg.axis()
        .scale(x);   

        svg.selectAll("g .x.axis")
        .call(xAxis); 

        yAxis = d3.svg.axis()
        .scale(y);
        // .orient("left")
        // .tickFormat(formatPercent);

        
        margin = {top: 40, right: 20, bottom: 30, left: 40};
        width = 960 - margin.left - margin.right;
        height = 500 - margin.top - margin.bottom;

        svg.selectAll(".bar")
        .data(data)
        // .attr("x", function(d) { return x(d.letter); })
        // .attr("width", x.rangeBand())
        .attr("y", function(d) { return y(d.frequency); })
        .attr("height", function(d) { return height - y(d.frequency); })
        .call(yAxis);



    }

});