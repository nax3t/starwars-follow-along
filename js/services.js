app.service('StarWarsService', ['$http', '$q', function($http, $q) {
	this.getFilms = function(){
		var baseUrl = 'http://swapi.co/api/',
				skywalkerFilms = [],
				deferred = $q.defer();

		$http.get(baseUrl + 'people/1/')
			.then(function(skywalker){
				var films = skywalker.data.films;
				films.forEach(function(film) {
					$http.get(film).then(function(filmData){
						skywalkerFilms.push(filmData.data);
					});
				});
				skywalker.data.films = skywalkerFilms;
				deferred.resolve(skywalker.data);
			});
		return deferred.promise;
	};
}]);