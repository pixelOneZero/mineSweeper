

var uiModule = angular.module("mineSweeperJs", []);

uiModule.controller("gameBoard", function($scope) {
	// JSON object for development and testing purposes.
	$scope.gameSpots = {"a-0":{"cleared":false,"mine":false, "open":false},"a-1":{"cleared":false,"mine":false,"open":false},"a-2":{"cleared":false,"mine":false,"open":false},"a-3":{"cleared":false,"mine":false,"open":false},"a-4":{"cleared":false,"mine":false,"open":false},"a-5":{"cleared":false,"mine":true,"open":false},"a-6":{"cleared":false,"mine":true,"open":false},"a-7":{"cleared":false,"mine":true,"open":false},"a-8":{"cleared":false,"mine":true,"open":false},"a-9":{"cleared":false,"mine":true,"open":false},"b-0":{"cleared":false,"mine":false,"open":false},"b-1":{"cleared":false,"mine":true,"open":false},"b-2":{"cleared":false,"mine":true,"open":false},"b-3":{"cleared":false,"mine":true,"open":false},"b-4":{"cleared":false,"mine":true,"open":false},"b-5":{"cleared":false,"mine":true,"open":false},"b-6":{"cleared":false,"mine":true,"open":false},"b-7":{"cleared":false,"mine":true,"open":false},"b-8":{"cleared":false,"mine":false,"open":false},"b-9":{"cleared":false,"mine":false,"open":false},"c-0":{"cleared":false,"mine":false,"open":false},"c-1":{"cleared":false,"mine":false,"open":false},"c-2":{"cleared":false,"mine":true,"open":false},"c-3":{"cleared":false,"mine":true,"open":false},"c-4":{"cleared":false,"mine":true,"open":false},"c-5":{"cleared":false,"mine":true,"open":false},"c-6":{"cleared":false,"mine":true,"open":false},"c-7":{"cleared":false,"mine":true,"open":false},"c-8":{"cleared":false,"mine":true,"open":false},"c-9":{"cleared":false,"mine":true,"open":false},"d-0":{"cleared":false,"mine":false,"open":false},"d-1":{"cleared":false,"mine":false,"open":false},"d-2":{"cleared":false,"mine":true,"open":false},"d-3":{"cleared":false,"mine":false,"open":false},"d-4":{"cleared":false,"mine":true,"open":false},"d-5":{"cleared":false,"mine":false,"open":false},"d-6":{"cleared":false,"mine":true,"open":false},"d-7":{"cleared":false,"mine":true,"open":false},"d-8":{"cleared":false,"mine":true,"open":false},"d-9":{"cleared":false,"mine":true,"open":false},"e-0":{"cleared":false,"mine":true,"open":false},"e-1":{"cleared":false,"mine":true,"open":false},"e-2":{"cleared":false,"mine":true,"open":false},"e-3":{"cleared":false,"mine":true,"open":false},"e-4":{"cleared":false,"mine":true,"open":false},"e-5":{"cleared":false,"mine":true,"open":false},"e-6":{"cleared":false,"mine":true,"open":false},"e-7":{"cleared":false,"mine":true,"open":false},"e-8":{"cleared":false,"mine":true,"open":false},"e-9":{"cleared":false,"mine":true,"open":false},"f-0":{"cleared":false,"mine":true,"open":false},"f-1":{"cleared":false,"mine":true,"open":false},"f-2":{"cleared":false,"mine":true,"open":false},"f-3":{"cleared":false,"mine":true,"open":false},"f-4":{"cleared":false,"mine":true,"open":false},"f-5":{"cleared":false,"mine":true,"open":false},"f-6":{"cleared":false,"mine":true,"open":false},"f-7":{"cleared":false,"mine":true,"open":false},"f-8":{"cleared":false,"mine":true,"open":false},"f-9":{"cleared":false,"mine":true,"open":false},"g-0":{"cleared":false,"mine":true,"open":false},"g-1":{"cleared":false,"mine":true,"open":false},"g-2":{"cleared":false,"mine":true,"open":false},"g-3":{"cleared":false,"mine":false,"open":false},"g-4":{"cleared":false,"mine":false,"open":false},"g-5":{"cleared":false,"mine":false,"open":false},"g-6":{"cleared":false,"mine":true,"open":false},"g-7":{"cleared":false,"mine":true},"g-8":{"cleared":false,"mine":true,"open":false,"open":false},"g-9":{"cleared":false,"mine":true,"open":false},"h-0":{"cleared":false,"mine":true,"open":false},"h-1":{"cleared":false,"mine":true,"open":false},"h-2":{"cleared":false,"mine":true,"open":false},"h-3":{"cleared":false,"mine":true,"open":false},"h-4":{"cleared":false,"mine":true,"open":false},"h-5":{"cleared":false,"mine":false,"open":false},"h-6":{"cleared":false,"mine":false,"open":false},"h-7":{"cleared":false,"mine":false,"open":false},"h-8":{"cleared":false,"mine":true,"open":false},"h-9":{"cleared":false,"mine":true,"open":false},"i-0":{"cleared":false,"mine":true,"open":false},"i-1":{"cleared":false,"mine":true,"open":false},"i-2":{"cleared":false,"mine":true,"open":false},"i-3":{"cleared":false,"mine":true,"open":false},"i-4":{"cleared":false,"mine":true,"open":false},"i-5":{"cleared":false,"mine":true,"open":false},"i-6":{"cleared":false,"mine":true,"open":false},"i-7":{"cleared":false,"mine":true,"open":false},"i-8":{"cleared":false,"mine":true,"open":false},"i-9":{"cleared":false,"mine":true,"open":false},"j-0":{"cleared":false,"mine":true,"open":false},"j-1":{"cleared":false,"mine":true,"open":false},"j-2":{"cleared":false,"mine":true,"open":false},"j-3":{"cleared":false,"mine":true,"open":false},"j-4":{"cleared":false,"mine":true,"open":false},"j-5":{"cleared":false,"mine":true,"open":false},"j-6":{"cleared":false,"mine":true,"open":false},"j-7":{"cleared":false,"mine":true,"open":false},"j-8":{"cleared":false,"mine":true,"open":false},"j-9":{"cleared":false,"mine":true,"open":false}};
	
	$scope.setState = function() {
		this.open = !this.open;
		console.log(this.open);
		console.log(this.mine);
	}
})
