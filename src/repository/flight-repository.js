const {Flights} = require('../models/index');
const {Op} = require('sequelize');

class FlightRepository{
    #createFilter(data){
        let filter = {};
        if(data.arrivalAirportId){
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        if(data.departureAirportId){
            filter.departureAirportId = data.departureAirportId;
        }
        let priceFilter = [];
        if(data.minPrice){
            priceFilter.push({price:{[Op.gte]:data.minPrice}});
            //Object.assign(filter, {price:{[Op.gte]:data.minPrice}});
        }
        if(data.maxPrice){
            priceFilter.push({price:{[Op.lte]:data.maxPrice}});
            //Object.assign(filter, {price:{[Op.lte]:data.maxPrice}});
        }
        Object.assign(filter, {[Op.and]:priceFilter});
        console.log(filter);
        return filter;
    }
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
    async getAllFlights(filter){
        try {
            const filterObject = this.#createFilter(filter);
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