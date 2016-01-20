 var app = angular.module('doneDigital',[]);

  app.controller('doneDigitalController', function($scope) {


  	$scope.hello = "from the other side";

  	items = [{name:'home'}, {name:'other'}];

  	$scope.items = items;


  	});