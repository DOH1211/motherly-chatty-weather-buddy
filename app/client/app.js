angular.module('chattyWeather', [
  'chattyWeather.weather',
  'chattyWeather.services',
  'ngRoute'
  ])
.config(function($routeProvider, $httpProvider) {
  $routeProvider
	  .when('/', {
	    templateUrl: 'weather/weather.html',
	    controller: 'WeatherController'
	  })
    .otherwise({
      redirectTo: '/'
    });
})