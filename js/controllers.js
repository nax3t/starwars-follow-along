app.controller('starWarsCtrl', ['$scope', 'StarWarsService', 'iTunesService', function($scope, StarWarsService, iTunesService) {
	StarWarsService.getFilms()
		.then(function(skywalker) {
			$scope.luke = skywalker;
		})
		.catch(function(error){
			$scope.error = error.message;
		});

	iTunesService.getBeebz().then(function(beebz){
		$scope.beebzData = beebz;
	});
}]);