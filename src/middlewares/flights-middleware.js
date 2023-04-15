
const {ClientErrors} = require('../utils/error-codes');
const validateCreateFlight = (req, res, next) => {
    if(
        !req.body.flightNumber || !req.body.airplaneId || !req.body.departureAirportId 
        || !req.body.arrivalAirportId || !req.body.arrivalTime || !req.body.departureTime || !req.body.price
    )
    {
        //if any of the body params is not present, then aise request ko aage jaane hi matt do, because yeh sabh
        //params important hai flight service ke liye
        return res.status(ClientErrors.BAD_REQUEST).json({
            message:'Invalid req body to create flight',
            data: {},
            success: false,
            err: 'Missing mandatory properties to create a flight'
        })
    }
    next(); //agar sabh sahi salamat hai toh next middleware call hoga, agar iske aage koi middle ware nhi toh direct
    //controller ke functions call honge
}
module.exports = {
    validateCreateFlight,
}