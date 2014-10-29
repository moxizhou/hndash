angular.module('myApp.directivegraph', [])
	.factory('linegraph', function(d3Service) {
    var lineData = [{x: 0, y: 0}];
    var time = 1;
		return {
      link: function(scope,element, attrs) {
    			var score = scope.score;
    			var comments = scope.comments;
    			// var time = scope.createdAt;
    			// var currentTime = new Date();
    			// var time = currentTime.getHours() + ':' + currentTime.getMinutes() + ':' + currentTime.getSeconds();
      		lineData.push({x: time, y: score});
      		if (lineData.length > 20) {
      			lineData.pop();
      		};
      		console.log(lineData);
      		time++;
      		var update = function() {
      			var graph = d3.select('.linegraph');
      			var width = 700;
      			var height = 300;
      			var margins = {
      				top: 20,
      				right: 20,
      				bottom: 20,
      				left: 50
      			}
      			var xRange = d3.scale.linear().range([margins.left, width-margins.right]).domain([d3.min(lineData, function(d) {
      				return d.x;
      			}), d3.max(lineData, function(d) {
      				return d.x;
      			})]);
      			var yRange = d3.scale.linear().range([height - margins.top, margins.bottom]).domain([d3.min(lineData, function(d) {
      				return d.y/1.1;
      			}), d3.max(lineData, function(d) {
      				return d.y*1.25;
      			})]);
      			var xAxis = d3.svg.axis()
      				.scale(xRange)
      				.tickSize(5)
      				.tickSubdivide(true);
      			var yAxis = d3.svg.axis()
      				.scale(yRange)
      				.tickSize(5)
      				.orient('left')
      				.tickSubdivide(true);
      			d3.selectAll('.tick').remove();
      			graph.append('svg:g')
      				.attr('class', 'x axis')
      				.attr('transform', 'translate(0,'+ (height - margins.bottom) + ')')
      				.call(xAxis);
      			graph.append('svg:g')
      				.attr('class', 'y axis')
      				.attr('transform', 'translate('+ (margins.left) + ',0)')
      				.call(yAxis);
      			var line = d3.svg.line()
      				.x(function(d) {
      					return xRange(d.x);
      				})
      				.y(function(d) {
      					return yRange(d.y);
      				})
      				.interpolate('linear');

      			d3.select('.test').remove();
      			graph.append('svg:path')
      				.attr('d', line(lineData))
      				.attr('class', 'test')
      				.attr('stroke', 'blue')
      				.attr('stroke-width', 2)
      				.attr('fill', 'none')
      		};
      		update()
      }, 
      restrict: 'EA',
      scope: {
      	score: "=",
      	comments: "=",
      	time: "="
      }
    }
	})
