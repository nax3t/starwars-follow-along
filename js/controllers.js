app.controller('starWarsCtrl', ['$scope', 'StarWarsService', function($scope, StarWarsService) {
	StarWarsService.getFilms()
		.then(function(skywalker) {
			$scope.luke = skywalker;
		});
}]);