var app = angular.module('salary', ['service']);

app.controller('salaryController', function($scope, exchangeService) {

	var WORK_HOURS_IN_A_MONTH = 165;
	var MONTHS_IN_A_QUARTER = 3;
	var MONTHS_IN_A_YEAR = 12;
	var QUARTERS_IN_A_YEAR = 4;

	$scope.currencies = ['RUB', 'EUR', 'USD', 'GBP', 'CHF'];
	$scope.currency = $scope.currencies[0];
	$scope.oldCurrency = $scope.currencies[0];

	$scope.update_hour_rate = function() {
		$scope.monthly = multipty($scope.hourRate, WORK_HOURS_IN_A_MONTH); 
		$scope.update_monthly_salary(); 
	};

	$scope.update_monthly_salary = function() {
		$scope.quarter = multipty($scope.monthly, MONTHS_IN_A_QUARTER);
		$scope.update_quarter_salary();
	};

	$scope.update_quarter_salary = function() {
		$scope.annual = multipty($scope.quarter, QUARTERS_IN_A_YEAR);
		$scope.update_annual_salary();
	};

	$scope.update_annual_salary = function() {
		$scope.quarter = divide($scope.annual, QUARTERS_IN_A_YEAR);
		$scope.monthly = divide($scope.quarter, MONTHS_IN_A_QUARTER);
		$scope.hourRate = divide($scope.monthly, WORK_HOURS_IN_A_MONTH);
	};

	$scope.change_currency = function() {
		if ($scope.currency != $scope.oldCurrency) {
			exchangeService.getRate($scope.oldCurrency, $scope.currency, successCallback);	
		}	
	};

	multipty = function(multiplicand, multiplier) {
		return Math.round(multiplicand * multiplier);
	};

	divide = function(dividend, divisor) {
		return Math.round(dividend / divisor); 
	};

	successCallback = function(data) {
		$scope.oldCurrency = $scope.currency;
		var rate = parseFloat(data.query.results.row.rate);
		$scope.hourRate = multipty($scope.hourRate, rate);
		$scope.update_hour_rate();
	};

});
