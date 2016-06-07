angular.module('tabApp')
	.directive('animatedTabs', function($timeout) {

		return {
			restrict: 'A', //restricts directive to an attribute
			controller: function($scope) {

				//transform highlight function
				$scope.transformLine = function(el) {
					$scope.highlight.style.left = el.offsetLeft + 'px';
				    $scope.highlight.style.width = el.offsetWidth + 'px';
				}

				//change tab handler
				$scope.navigate = function(e) {
					e.stopPropagation(); //prevents event from bubbling up the DOM tree
					$scope.transformLine(e.target); //e.target will be the element you add this directive to (nav)
				};
			},
			link: function(scope, element) { //element will be the element you add this directive to (nav)
				//add highlight element to DOM
				var h = document.createElement("div"); //creates a div element on the DOM
				h.classList.add('highlight'); //adds the 'highlight' class to the div element
				scope.highlight = element[0].appendChild(h); //element is nav
			}
		}
	


	})

