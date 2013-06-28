'use strict';

function GoogleChartCtrl($scope, $http) {
	$scope.loadData = function() {
      google.load("visualization", "1", {packages:["corechart"]});
      google.setOnLoadCallback(drawChart);
      function drawChart() {
        $http.get("http://localhost:3000/data/findAll/VIFWEBAnalysis").success(function(data, status, headers, config) {
	        var objs = JSON.parse(data);
	        var array = [['directory', 'xmlSize', 'javaSize']];
	        for (obj in objs) {
	        	var d = objs[obj];
	        	array.push([d.directory, d.javaFileSize, d.xmlFileSize]);
	        }

	        var data = google.visualization.arrayToDataTable(
        		array
			);

        	var options = {
          	title: 'Measures',
          	hAxis: {title: 'Year', titleTextStyle: {color: 'red'}}
        	};

	        var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
    	    chart.draw(data, options);
      	}
    });
  }
}