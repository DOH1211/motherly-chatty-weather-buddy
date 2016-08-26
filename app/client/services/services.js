angular.module('chattyWeather.services', [])
.factory('goGet', function($http, location) {
  var getWeather = function() {
    navigator.geolocation.getCurrentPosition(function(location) {
      var latitude = Math.floor(location.coords.latitude);
      var longitude = Math.floor(location.coords.longitude);
    });
    return $http({
      method: 'GET',
      url: '/api/weather',
      params: { latitude: latitude, longitude: longitude }
    });
  };
});