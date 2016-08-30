var router = require('express').Router();
var weatherController = require('./weather/weatherController.js');
var phraseController = require('./phrases/phraseController.js');

  router.get('/api/weather/', weatherController.getHourly);
  // router.get('/api/phrases/', phraseController.getPhrases);
  // router.post('/api/phrases/', phraseController.addPhrase);

  // router.post('/api/weather/', weatherController.createStatus);




module.exports = router
