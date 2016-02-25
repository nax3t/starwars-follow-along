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
			})
			.catch(function(error) {
				error.message = "Your request failed, sorry! - Bieber";
				deferred.reject(error);
			});
		return deferred.promise;
	};
}]);

app.service('iTunesService', ['$http', '$q', function($http, $q) {
	this.getBeebz = function() {
		return $http.jsonp('https://itunes.apple.com/search?term=justin+bieber&callback=JSON_CALLBACK')
			.then(function(beebz) {
				return beebz.data.results;
			});
	};
}]);