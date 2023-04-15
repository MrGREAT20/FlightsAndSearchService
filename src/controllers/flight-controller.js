const {FlightService} = require('../services/index');
const {SuccessCodes, ServerErrors} = require('../utils/error-codes');
const flightService = new FlightService();

const create = async (req, res) => {
    try {
        const flightdata = {
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            price: req.body.price

        }
        /**
         * since kabhi kabhi ek request body me kaam se jyada bhi saaman ho sakta hai
         * or hume utne saaman ki garaj nhi hai, toh hum utna hi lenge jitne ki jarurat hai
         * or voh aage service ko pass karenge
         */
        const flight = await flightService.createFlight(flightdata);
        return res.status(SuccessCodes.CREATED).json({
            data:flight,
            success:true,
            err:{},
            message:'Successfully created the flight'
        }) 
        
    } catch (error) {
        console.log(error);
        return res.status(ServerErrors.INTERNAL_SERVER_ERROR).json({
            data:{},
            success: false,
            message: 'Not able to create a Flight',
            err: error
        });
    }
}
const getAll = async (req, res) => {
    try {
        const flights = await flightService.getAllFlights(req.query);
        return res.status(SuccessCodes.OK).json({
            data:flights,
            success:true,
            err:{},
            message:'Successfully fetched all flights'
        })
        
    } catch (error) {
        console.log(error);
        return res.status(ServerErrors.INTERNAL_SERVER_ERROR).json({
            data:{},
            success: false,
            message: 'Not able to fetch Flights',
            err: error
        });
    }
}
const getFlight = async(req, res) => {
    try {
        const flight = await flightService.getFlightData(req.params.id);
        return res.status(SuccessCodes.OK).json({
            data:flight,
            success:true,
            err:{},
            message:'Successfully fetched the flight'
        })
    } catch (error) {
        console.log(error);
        return res.status(ServerErrors.INTERNAL_SERVER_ERROR).json({
            data:{},
            success: false,
            message: 'Not able to fetch Flight',
            err: error
        });
    }
}


module.exports = {
    create,
    getFlight,
    getAll
}