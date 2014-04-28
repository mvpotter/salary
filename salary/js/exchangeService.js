var app = angular.module('service', []);

app.config(function($httpProvider){
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});

app.factory('exchangeService', function($http) {

	return {
			'getRate': function(from, to, successCallback, errorCallback) {
				var url = "http://query.yahooapis.com/v1/public/yql?q=select%20rate%2Cname%20from%20csv%20where%20url%3D'http%3A%2F%2Fdownload.finance.yahoo.com%2Fd%2Fquotes%3Fs%3D"+from+to+"%253DX%26f%3Dl1n'%20and%20columns%3D'rate%2Cname'&format=json&callback=successCallback";
				$http.jsonp(url).
					success(function(data, status, headers, config) {
						console.log(data);
	      				//successCallback(data);
	  				})
			}
	}
});