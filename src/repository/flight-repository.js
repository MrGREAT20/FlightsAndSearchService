const {Flights} = require('../models/index');

class FlightRepository{
    async createFlight(data){
        try {
            console.log(data);
            const flight = await Flights.create(data);
            return flight;
            
        } catch (error) {
            console.log("Something went wrong in the Flight repository layer");
            throw {error};
        }
    }
    async getFlight(flightid){
        try {
            const flight = await Flights.findByPk(flightid);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the Flight repository layer");
            throw {error};
        }
    }
    async getAllFlights(filterObject){
        try {
            const flight = await Flights.findAll({
                where: filterObject //sequelize, where me humesha Object leta hai, toh usko Object de diya
            });
            return flight;
            
        } catch (error) {
            console.log("Something went wrong in the Flight repository layer");
            throw {error};
        }
    }
}
module.exports = FlightRepository;