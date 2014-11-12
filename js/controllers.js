

var uiModule = angular.module("mineSweeperJs", []);

uiModule.controller("gameBoard", function($scope) {
	$scope.gameOver = false;
	$scope.gameWon = false;
	$scope.currentSpot = [];
	$scope.spotData = [];
	$scope.level;
	$scope.mineCount = 10;
	$scope.elapsedTime = 0;

	// JSON object for development and testing purposes.
	$scope.gameSpots = [{"position":"1-1","mine":false,"open":false,"flag":false},{"position":"1-2","mine":false,"open":false,"flag":false},{"position":"1-3","mine":false,"open":false,"flag":false},{"position":"1-4","mine":true,"open":false,"flag":false},{"position":"1-5","mine":false,"open":false,"flag":false},{"position":"1-6","mine":false,"open":false,"flag":false},{"position":"1-7","mine":false,"open":false,"flag":false},{"position":"1-8","mine":false,"open":false,"flag":false},{"position":"1-9","mine":false,"open":false,"flag":false},{"position":"1-10","mine":false,"open":false,"flag":false},{"position":"2-1","mine":false,"open":false,"flag":false},{"position":"2-2","mine":false,"open":false,"flag":false},{"position":"2-3","mine":false,"open":false,"flag":false},{"position":"2-4","mine":false,"open":false,"flag":false},{"position":"2-5","mine":false,"open":false,"flag":false},{"position":"2-6","mine":false,"open":false,"flag":false},{"position":"2-7","mine":false,"open":false,"flag":false},{"position":"2-8","mine":false,"open":false,"flag":false},{"position":"2-9","mine":false,"open":false,"flag":false},{"position":"2-10","mine":false,"open":false,"flag":false},{"position":"3-1","mine":false,"open":false,"flag":false},{"position":"3-2","mine":false,"open":false,"flag":false},{"position":"3-3","mine":false,"open":false,"flag":false},{"position":"3-4","mine":false,"open":false,"flag":false},{"position":"3-5","mine":false,"open":false,"flag":false},{"position":"3-6","mine":true,"open":false,"flag":false},{"position":"3-7","mine":false,"open":false,"flag":false},{"position":"3-8","mine":false,"open":false,"flag":false},{"position":"3-9","mine":false,"open":false,"flag":false},{"position":"3-10","mine":false,"open":false,"flag":false},{"position":"4-1","mine":false,"open":false,"flag":false},{"position":"4-2","mine":false,"open":false,"flag":false},{"position":"4-3","mine":false,"open":false,"flag":false},{"position":"4-4","mine":false,"open":false,"flag":false},{"position":"4-5","mine":false,"open":false,"flag":false},{"position":"4-6","mine":false,"open":false,"flag":false},{"position":"4-7","mine":false,"open":false,"flag":false},{"position":"4-8","mine":false,"open":false,"flag":false},{"position":"4-9","mine":false,"open":false,"flag":false},{"position":"4-10","mine":false,"open":false,"flag":false},{"position":"5-1","mine":false,"open":false,"flag":false},{"position":"5-2","mine":false,"open":false,"flag":false},{"position":"5-3","mine":false,"open":false,"flag":false},{"position":"5-4","mine":true,"open":false,"flag":false},{"position":"5-5","mine":false,"open":false,"flag":false},{"position":"5-6","mine":false,"open":false,"flag":false},{"position":"5-7","mine":false,"open":false,"flag":false},{"position":"5-8","mine":false,"open":false,"flag":false},{"position":"5-9","mine":true,"open":false,"flag":false},{"position":"5-10","mine":false,"open":false,"flag":false},{"position":"6-1","mine":false,"open":false,"flag":false},{"position":"6-2","mine":false,"open":false,"flag":false},{"position":"6-3","mine":false,"open":false,"flag":false},{"position":"6-4","mine":true,"open":false,"flag":false},{"position":"6-5","mine":false,"open":false,"flag":false},{"position":"6-6","mine":false,"open":false,"flag":false},{"position":"6-7","mine":false,"open":false,"flag":false},{"position":"6-8","mine":false,"open":false,"flag":false},{"position":"6-9","mine":true,"open":false,"flag":false},{"position":"6-10","mine":false,"open":false,"flag":false},{"position":"7-1","mine":false,"open":false,"flag":false},{"position":"7-2","mine":false,"open":false,"flag":false},{"position":"7-3","mine":false,"open":false,"flag":false},{"position":"7-4","mine":false,"open":false,"flag":false},{"position":"7-5","mine":false,"open":false,"flag":false},{"position":"7-6","mine":false,"open":false,"flag":false},{"position":"7-7","mine":false,"open":false,"flag":false},{"position":"7-8","mine":false,"open":false,"flag":false},{"position":"7-9","mine":false,"open":false,"flag":false},{"position":"7-10","mine":false,"open":false,"flag":false},{"position":"8-1","mine":false,"open":false,"flag":false},{"position":"8-2","mine":false,"open":false,"flag":false},{"position":"8-3","mine":true,"open":false,"flag":false},{"position":"8-4","mine":false,"open":false,"flag":false},{"position":"8-5","mine":false,"open":false,"flag":false},{"position":"8-6","mine":false,"open":false,"flag":false},{"position":"8-7","mine":false,"open":false,"flag":false},{"position":"8-8","mine":false,"open":false,"flag":false},{"position":"8-9","mine":false,"open":false,"flag":false},{"position":"8-10","mine":false,"open":false,"flag":false},{"position":"9-1","mine":false,"open":false,"flag":false},{"position":"9-2","mine":false,"open":false,"flag":false},{"position":"9-3","mine":true,"open":false,"flag":false},{"position":"9-4","mine":false,"open":false,"flag":false},{"position":"9-5","mine":false,"open":false,"flag":false},{"position":"9-6","mine":false,"open":false,"flag":false},{"position":"9-7","mine":false,"open":false,"flag":false},{"position":"9-8","mine":false,"open":false,"flag":false},{"position":"9-9","mine":false,"open":false,"flag":false},{"position":"9-10","mine":true,"open":false,"flag":false},{"position":"10-1","mine":false,"open":false,"flag":false},{"position":"10-2","mine":false,"open":false,"flag":false},{"position":"10-3","mine":false,"open":false,"flag":false},{"position":"10-4","mine":false,"open":false,"flag":false},{"position":"10-5","mine":false,"open":false,"flag":false},{"position":"10-6","mine":false,"open":false,"flag":false},{"position":"10-7","mine":true,"open":false,"flag":false},{"position":"10-8","mine":false,"open":false,"flag":false},{"position":"10-9","mine":false,"open":false,"flag":false},{"position":"10-10","mine":false,"open":false,"flag":false}];

	$scope.endGame = function() {
		$scope.gameOver = true;
		clearInterval($scope.clockSeconds);
	}

	$scope.isGameover = function() {
		return $scope.gameOver;
	}

	$scope.reInitBoard = function() {
		$scope.spotData = $scope.gameSpots;
	}

	$scope.setSpot = function() {
		$scope.$apply(function() {
			$scope.reInitBoard();
		});
	}

	$scope.updateMineCount = function() {
			$scope.mineCount--;
	}

	$scope.updateClock = function() {
			$scope.$apply(function() {
				$scope.elapsedTime++;
			});
	}

	$scope.reloadGame = function() {
		// Angular-ize this instead of reloading the window
		window.location.reload();
	}
/*
	if (scope.gameOver) {
					$scope.$apply(function() {
						clearInterval(clockSeconds);
					});
				}
*/
$scope.reInitBoard();

})
.directive("pozGameSpot", function() {
	return {
  	link: function(scope, elem, attrs) {

  		var currentY, currentX, adjacentMineCount = 0, adjacentSpots = [];

  		scope.setState = function() {

  			// Mark spot with flag if shift key plus click occurs
  			if (event.shiftKey) {
  				for (var b = 0; b < scope.gameSpots.length; b++) {
  					if (scope.gameSpots[b]["position"] == attrs.position) {
  						if (scope.gameSpots[b]["open"] == true) {
  							return;
  						}
  						scope.gameSpots[b]["flag"] = !scope.gameSpots[b]["flag"];
  						scope.updateMineCount();
  						scope.reInitBoard();
  					}
  				}
  				return;
  			}

				scope.open = !scope.open;
				
				if (scope.hasMine() === "true") {
					for (var b = 0; b < scope.gameSpots.length; b++) {
						if (scope.gameSpots[b]["position"] == attrs.position) {
							scope.gameSpots[b]["open"] = true;
							scope.reInitBoard();
						}
					}
					scope.endGame();
				}
				else {
					scope.findAdjacentMines();
				}

			}

			scope.hasMine = function() {
				return attrs.hasMine;
			}
			
			scope.findAdjacentMines = function() {

				if (scope.isGameover() == false) {

					scope.currentSpot = (attrs.position).split("-");
					currentX = parseInt(scope.currentSpot[0]);
					currentY = parseInt(scope.currentSpot[1]);

					// Find adjacent eight spots, starting at top and moving clockwise:
					adjacentSpots.push( (currentX-1) + "-" + currentY );
					adjacentSpots.push( (currentX-1) + "-" + (currentY+1) );
					adjacentSpots.push( currentX + "-" + (currentY+1) );
					adjacentSpots.push( (currentX+1) + "-" + (currentY+1) );
					adjacentSpots.push( (currentX+1) + "-" + currentY );
					adjacentSpots.push( (currentX+1) + "-" + (currentY-1) );
					adjacentSpots.push( currentX + "-" + (currentY-1) );
					adjacentSpots.push( (currentX-1) + "-" + (currentY-1) );
					//  Add current spot
					adjacentSpots.push( (currentX) + "-" + (currentY) );

					for (var a = 0; a < adjacentSpots.length; a++) {
						for (var b = 0; b < scope.gameSpots.length; b++) {
							if ( scope.gameSpots[b]["position"] == adjacentSpots[a] && scope.gameSpots[b]["mine"] == false && scope.gameSpots[b]["flag"] == false) {
								scope.gameSpots[b]["open"] = true;
								scope.reInitBoard();
							}
							if (scope.gameSpots[b]["position"] == adjacentSpots[a] && scope.gameSpots[b]["mine"] == true) {
								adjacentMineCount++;
							}
						}
					}

					if (adjacentMineCount > 0) {
						elem.text(adjacentMineCount);
					}

				}
			}

  	}
 	}
})
.directive("pozGameClock", function() {
	return {
  	link: function(scope, elem, attrs) {
			scope.clockSeconds = setInterval(function(){
				scope.updateClock();
			}, 1000);
		}
	}
})
