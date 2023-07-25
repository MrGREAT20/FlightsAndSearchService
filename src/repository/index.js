module.exports = {
    CityRepository: require('./city-repository'),
    FlightRepository: require('./flight-repository'),
    AirplaneRepository: require('./airplane-repository'),
    AirportRepository: require('./airport-repository'),
    CrudRepository: require('./crud-repository'),

}
// yeh alag se kyu banaya index.js?

/**
 * kyuki jabh aage humare repositories badhayenge
 * toh sabhke liye alag alag line me require karna padega, lekin usse accha ek index.js se export karo saare repositories
 * fir joh import karna hai, uska naam lelo 
 * 
 * jaise const {Cityrepository, flightrepo} = require('repository/index');
 */