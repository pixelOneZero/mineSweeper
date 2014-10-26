

var uiModule = angular.module("mineSweeperJs", []);

uiModule.controller("gameBoard", function($scope) {
	$scope.gameOver = false;
	$scope.gameWon = false;
	// JSON object for development and testing purposes.
	$scope.gameSpots = [{"position":"1-1","mine":false,"open":false},{"position":"1-2","mine":false,"open":false},{"position":"1-3","mine":false,"open":false},{"position":"1-4","mine":true,"open":false},{"position":"1-5","mine":false,"open":false},{"position":"1-6","mine":false,"open":false},{"position":"1-7","mine":false,"open":false},{"position":"1-8","mine":false,"open":false},{"position":"1-9","mine":false,"open":false},{"position":"1-10","mine":false,"open":false},{"position":"2-1","mine":false,"open":false},{"position":"2-2","mine":false,"open":false},{"position":"2-3","mine":false,"open":false},{"position":"2-4","mine":false,"open":false},{"position":"2-5","mine":false,"open":false},{"position":"2-6","mine":false,"open":false},{"position":"2-7","mine":false,"open":false},{"position":"2-8","mine":false,"open":false},{"position":"2-9","mine":false,"open":false},{"position":"2-10","mine":false,"open":false},{"position":"3-1","mine":false,"open":false},{"position":"3-2","mine":false,"open":false},{"position":"3-3","mine":false,"open":false},{"position":"3-4","mine":false,"open":false},{"position":"3-5","mine":false,"open":false},{"position":"3-6","mine":true,"open":false},{"position":"3-7","mine":false,"open":false},{"position":"3-8","mine":false,"open":false},{"position":"3-9","mine":false,"open":false},{"position":"3-10","mine":false,"open":false},{"position":"4-1","mine":false,"open":false},{"position":"4-2","mine":false,"open":false},{"position":"4-3","mine":false,"open":false},{"position":"4-4","mine":false,"open":false},{"position":"4-5","mine":false,"open":false},{"position":"4-6","mine":false,"open":false},{"position":"4-7","mine":false,"open":false},{"position":"4-8","mine":false,"open":false},{"position":"4-9","mine":false,"open":false},{"position":"4-10","mine":false,"open":false},{"position":"5-1","mine":false,"open":false},{"position":"5-2","mine":false,"open":false},{"position":"5-3","mine":false,"open":false},{"position":"5-4","mine":true,"open":false},{"position":"5-5","mine":false,"open":false},{"position":"5-6","mine":false,"open":false},{"position":"5-7","mine":false,"open":false},{"position":"5-8","mine":false,"open":false},{"position":"5-9","mine":true,"open":false},{"position":"5-10","mine":false,"open":false},{"position":"6-1","mine":false,"open":false},{"position":"6-2","mine":false,"open":false},{"position":"6-3","mine":false,"open":false},{"position":"6-4","mine":true,"open":false},{"position":"6-5","mine":false,"open":false},{"position":"6-6","mine":false,"open":false},{"position":"6-7","mine":false,"open":false},{"position":"6-8","mine":false,"open":false},{"position":"6-9","mine":true,"open":false},{"position":"6-10","mine":false,"open":false},{"position":"7-1","mine":false,"open":false},{"position":"7-2","mine":false,"open":false},{"position":"7-3","mine":false,"open":false},{"position":"7-4","mine":false,"open":false},{"position":"7-5","mine":false,"open":false},{"position":"7-6","mine":false,"open":false},{"position":"7-7","mine":false,"open":false},{"position":"7-8","mine":false,"open":false},{"position":"7-9","mine":false,"open":false},{"position":"7-10","mine":false,"open":false},{"position":"8-1","mine":false,"open":false},{"position":"8-2","mine":false,"open":false},{"position":"8-3","mine":true,"open":false},{"position":"8-4","mine":false,"open":false},{"position":"8-5","mine":false,"open":false},{"position":"8-6","mine":false,"open":false},{"position":"8-7","mine":false,"open":false},{"position":"8-8","mine":false,"open":false},{"position":"8-9","mine":false,"open":false},{"position":"8-10","mine":false,"open":false},{"position":"9-1","mine":false,"open":false},{"position":"9-2","mine":false,"open":false},{"position":"9-3","mine":true,"open":false},{"position":"9-4","mine":false,"open":false},{"position":"9-5","mine":false,"open":false},{"position":"9-6","mine":false,"open":false},{"position":"9-7","mine":false,"open":false},{"position":"9-8","mine":false,"open":false},{"position":"9-9","mine":false,"open":false},{"position":"9-10","mine":true,"open":false},{"position":"10-1","mine":false,"open":false},{"position":"10-2","mine":false,"open":false},{"position":"10-3","mine":false,"open":false},{"position":"10-4","mine":false,"open":false},{"position":"10-5","mine":false,"open":false},{"position":"10-6","mine":false,"open":false},{"position":"10-7","mine":true,"open":false},{"position":"10-8","mine":false,"open":false},{"position":"10-9","mine":false,"open":false},{"position":"10-10","mine":false,"open":false}];

	$scope.endGame = function() {
		$scope.gameOver = true;
	}

	$scope.isGameover = function() {
		return $scope.gameOver;
	}

})
.directive("myGameSpot", function() {
	return {
  	link: function(scope, elem, attrs) {
  		scope.setState = function() {
				scope.open = !scope.open;
				
				if (scope.checkForMine() === "true") {
					scope.endGame();
					console.log("game over!");
				}

				scope.findAdjacentMines();
			}
			scope.findAdjacentMines = function() {
				if (scope.isGameover == false) {
					console.log(attrs.position);
				}
			}
			scope.checkForMine = function() {
				return attrs.hasMine;
			}
  	}
 	}
})
