angular.module('chattyWeather.weather', [])

.controller('WeatherController', function($scope, goGet) {
	$scope.weatherData = "temp";


  var init = function () {
    goGet.getWeatherData()
      .then(function (data) {
        // console.log(data.data[0].name);
        $scope.weatherData = data.data[0].name;
        console.log($scope.weatherData);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  init();
})