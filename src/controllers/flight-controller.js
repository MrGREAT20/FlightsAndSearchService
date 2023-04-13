const {FlightService} = require('../services/index');

const flightService = new FlightService();

const create = async (req, res) => {
    try {
        const flight = await flightService.createFlight(req.body);
        return res.status(201).json({
            data:flight,
            success:true,
            err:{},
            message:'Successfully created the flight'
        }) 
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
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
        return res.status(200).json({
            data:flights,
            success:true,
            err:{},
            message:'Successfully fetched all flights'
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
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
        return res.status(200).json({
            data:flight,
            success:true,
            err:{},
            message:'Successfully fetched the flight'
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
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