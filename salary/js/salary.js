var app = angular.module('salary', []);

app.controller('SalaryCtrl', function($scope) {

	var WORK_HOURS_IN_A_MONTH = 200;
	var MONTHS_IN_A_QUARTER = 3;
	var MONTHS_IN_A_YEAR = 12;
	var QUARTERS_IN_A_YEAR = 4;

	$scope.update_hour_rate = function() {
		$scope.monthly = $scope.hourRate * WORK_HOURS_IN_A_MONTH; 
		$scope.update_monthly_salary(); 
	};

	$scope.update_monthly_salary = function() {
		$scope.quarter = $scope.monthly * MONTHS_IN_A_QUARTER;
		$scope.update_quarter_salary();
	};

	$scope.update_quarter_salary = function() {
		$scope.annual = $scope.quarter * QUARTERS_IN_A_YEAR;
		$scope.update_annual_salary();
	};

	$scope.update_annual_salary = function() {
		$scope.quarter = $scope.annual / QUARTERS_IN_A_YEAR;
		$scope.monthly = $scope.quarter / MONTHS_IN_A_QUARTER;
		$scope.hourRate = $scope.monthly / WORK_HOURS_IN_A_MONTH;
	};

});