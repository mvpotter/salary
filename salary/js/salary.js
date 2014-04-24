var app = angular.module('salary', []);

app.controller('SalaryCtrl', function($scope) {

	var MONTHS_IN_A_QUARTER = 3;
	var MONTHS_IN_A_YEAR = 12;
	var QUARTERS_IN_A_YEAR = 4;

	$scope.update_monthly_salary = function() {
		var monthly = $scope.monthly;
		$scope.quarter = monthly * MONTHS_IN_A_QUARTER;
		$scope.annual = monthly * MONTHS_IN_A_YEAR; 
	};

	$scope.update_quarter_salary = function() {
		var quarter = $scope.quarter;
		$scope.monthly = quarter / MONTHS_IN_A_QUARTER;
		$scope.annual = quarter * QUARTERS_IN_A_YEAR; 
	};

	$scope.update_annual_salary = function() {
		var annual = $scope.annual;
		$scope.monthly = annual / MONTHS_IN_A_YEAR;
		$scope.quarter = annual / QUARTERS_IN_A_YEAR;
	};

});