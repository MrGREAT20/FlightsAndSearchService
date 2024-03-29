const express = require('express');
const CityController = require('../../controllers/city-controller');
const FlightController = require('../../controllers/flight-controller');
const AirportController = require('../../controllers/airport-controller');
const {flightsMiddleware} = require('../../middlewares/index')

const router = express.Router();
router.post('/city', CityController.createC);
router.delete('/city/:id', CityController.destroy);
router.get('/city/:id', CityController.get);
router.get('/city', CityController.getAll);
router.patch('/city/:id', CityController.update);
router.post('/flights', flightsMiddleware.validateCreateFlight,FlightController.create);
router.get('/flights', FlightController.getAll);
router.get('/flights/:id', FlightController.getFlight);
router.post('/airports', AirportController.create);
router.patch('/flights/:id', FlightController.update);
module.exports = router;