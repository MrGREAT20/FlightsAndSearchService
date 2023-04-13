const {FlightRepository, AirplaneRepository} = require('../repository/index');
const {compareTime} = require('../utils/helper');


class FlightService{
    constructor(){
        this.airplaneRepository = new AirplaneRepository(); 
        this.flightRepository = new FlightRepository();
        /**
         * har function me AirplaneRepository Class ka object banane se accha, at the time of FlightService Object
         * creation, tabh hi AirplaneRepository ka object banado
         */
    }
    async createFlight(data){
        try {
            if(!compareTime(data.arrivalTime, data.departureTime)){
                throw {error:'Arrival time cannot be less than departure time'};
            }
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            //yeh upar wale se voh airplane ka info aajayega, jaise uska naam, total seats voh sabh

            // abhi flight create karenge, flight controller se kuch data aayega, voh toh bhejenge hi lekin saath me 
            // total seats bhi bhejenge voh flight me, joh ayega airplane
            const flight = await this.flightRepository.createFlight({
                ...data, 
                totalSeats:airplane.capacity
            });
            return flight;
            
        } catch (error) {
            console.log("Something went wrong at Flight service layer");
            throw {error};
        }
    }
    async getFlightData(){
        try {
            
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }
}
module.exports = FlightService;

/**
 * joh "data" as a argument paas kiya hai flightService me voh controller se ayega, abhi yeh data me hoga kya, voh check
 * karte hai
 * 
 * "data" object me yeh sabh properties rahenge
 * 
 * flightNumber,
 * airplaneId,
 * departureAirportId,
 * arrivalAirportId,
 * arrivalTime,
 * departureTime,
 * price,
 * 
 * yeh nhi rahega neeche wala "data" me
 * totalSeats -> hume totalSeats directly nhi milega, hume airplane model/service ki garaj padegi
 */