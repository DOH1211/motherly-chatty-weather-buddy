angular.module('chattyWeather', [
  'chattyWeather.weather',
  'chattyWeather.services',
  'ngRoute'
  ])
.config(function($routeProvider, $httpProvider) {
  $routeProvider
	  .when('/weather', {
	    templateUrl: 'weather/weather.html',
	    controller: 'WeatherController'
	  })
    .otherwise({
      redirectTo: '/'
    });
})