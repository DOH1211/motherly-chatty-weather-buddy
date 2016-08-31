var request = require("request");

function getHourly (req, res, next){
 // var headers = {}
 // for (var key in request.headers) {
 //   if (request.headers.hasOwnProperty(key)) {
 //   headers[key] = request.get(key)
 //   }
 // }
  var newurl = "https://api.forecast.io/forecast/32fb6fd1e3da63be7cd7cae8121fe98a/" 
    + req.query.latitude + "," + req.query.longitude;

  request.get({url:newurl}, function (error, response, body) {
   // console.log(JSON.parse(body).hourly)
   if(error) next(error);
   req.body = JSON.stringify(JSON.parse(body).hourly);
   next();
  })
 
}


module.exports = {
  getHourly: getHourly

}