var sideBarApp = angular.module('sideBarApp', []);

sideBarApp.controller('sidebarCtrl', ['$scope', '$http',
	function ($scope, $http) {
		$http.get('app/sidebar/sidebar.json').success(function(data) {
			$scope.items = data;
		});

		$scope.orderProp = 'age';
	}]);

/*
sideBarApp.controller('sidebarCtrl', function ($scope) {
	$scope.items = [
	{
		"id": 437,
		"name": "My first jmeter test",
		"created": 1437290589,
		"updated": 1437386204,
		"location": "us-central1-a",
		"type": "jmeter"
	},
	{
		"id": 441,
		"name": "some test",
		"created": 1437316436,
		"updated": 1437386115,
		"location": "us-central1-a",
		"type": "http"
	},
	{
		"id": 439,
		"name": "My http test with Code Pipeline",
		"created": 1437299328,
		"updated": 1437308804,
		"location": "us-east-1",
		"type": "http"
	},
	{
		"id": 438,
		"name": "My http test with Code Pipeline",
		"created": 1437299285,
		"updated": 1437307884,
		"location": "us-east-1",
		"type": "http"
	},
	{
		"id": 440,
		"name": "My http test with CodePipeline2",
		"created": 1437299670,
		"updated": 1437299670,
		"location": "us-east-1",
		"type": "http"
	},
	{
		"id": 433,
		"name": "new jmeter test",
		"created": 1437061562,
		"updated": 1437299011,
		"location": "us-east-1",
		"type": "jmeter"
	},
	{
		"id": 434,
		"name": "new webdriver test",
		"created": 1437062061,
		"updated": 1437298969,
		"location": "us-central1-a",
		"type": "webdriver"
	},
	{
		"id": 436,
		"name": "My first http test",
		"created": 1437289456,
		"updated": 1437289456,
		"location": "us-central1-a",
		"type": "http"
	},
	{
		"id": 435,
		"name": "sssdf",
		"created": 1437063542,
		"updated": 1437063542,
		"location": "us-central1-a",
		"type": "http"
	},
	{
		"id": 431,
		"name": "new http test",
		"created": 1437061052,
		"updated": 1437063193,
		"location": "eu-west-1",
		"type": "http"
	},
	{
		"id": 428,
		"name": "some jmx test",
		"created": 1436962481,
		"updated": 1437046436,
		"location": "us-central1-a",
		"type": "jmeter"
	},
	{
		"id": 430,
		"name": "aaa",
		"created": 1436970527,
		"updated": 1436970527,
		"location": "us-central1-a",
		"type": "jmeter"
	},
	{
		"id": 429,
		"name": "sdfsdf",
		"created": 1436965701,
		"updated": 1436965701,
		"location": "us-central1-a",
		"type": "jmeter"
	},
	{
		"id": 427,
		"name": "asdf",
		"created": 1436880065,
		"updated": 1436880065,
		"location": "us-central1-a",
		"type": "jmeter"
	},
	{
		"id": 403,
		"name": "Webdriver dummy name",
		"created": 1435483685,
		"updated": 1436702771,
		"location": "us-central1-a",
		"type": "http"
	},
	{
		"id": 76,
		"name": "Webdriver delay test",
		"created": 1406203014,
		"updated": 1436690728,
		"location": "eu-west-1",
		"type": "webdriver"
	},
	{
		"id": 420,
		"name": "test name",
		"created": 1435826791,
		"updated": 1436094713,
		"location": "us-central1-a",
		"type": "jmeter"
	},
	{
		"id": 417,
		"name": "asdfasdfsad",
		"created": 1435679537,
		"updated": 1436077635,
		"location": "us-east-1",
		"type": "http"
	},
	{
		"id": 418,
		"name": "asdf",
		"created": 1435738713,
		"updated": 1435738713,
		"location": "us-central1-a",
		"type": "jmeter"
	},
	{
		"id": 416,
		"name": "My first http test with Code Pipeline",
		"created": 1435678609,
		"updated": 1435678609,
		"location": "us-east-1",
		"type": "http"
	},
	{
		"id": 415,
		"name": "My first http test with Code Pipeline",
		"created": 1435678087,
		"updated": 1435678087,
		"location": "us-east-1",
		"type": "http"
	},
	{
		"id": 414,
		"name": "My first http test with Code Pipeline",
		"created": 1435677784,
		"updated": 1435677784,
		"location": "us-east-1",
		"type": "http"
	},
	{
		"id": 413,
		"name": "My first http test with Code Pipeline",
		"created": 1435677269,
		"updated": 1435677269,
		"location": "us-east-1",
		"type": "http"
	},
	{
		"id": 412,
		"name": "My first http test with Code Pipeline",
		"created": 1435676675,
		"updated": 1435676675,
		"location": "us-east-1",
		"type": "http"
	},
	{
		"id": 411,
		"name": "My first http test with Code Pipeline",
		"created": 1435676468,
		"updated": 1435676468,
		"location": "us-east-1",
		"type": "http"
	},
	{
		"id": 410,
		"name": "My first http test with Code Pipeline",
		"created": 1435676435,
		"updated": 1435676435,
		"location": "us-east-1",
		"type": "http"
	},
	{
		"id": 409,
		"name": "My first http test with Code Pipeline",
		"created": 1435676401,
		"updated": 1435676401,
		"location": "us-east-1",
		"type": "http"
	},
	{
		"id": 408,
		"name": "My first http test",
		"created": 1435578965,
		"updated": 1435671986,
		"location": "us-central1-a",
		"type": "http"
	},
	{
		"id": 407,
		"name": "My first http test",
		"created": 1435578717,
		"updated": 1435578717,
		"location": "us-central1-a",
		"type": "http"
	}
	];
});

*/