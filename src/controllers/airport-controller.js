const {AirportService} = require('../services/index');

const airportService = new AirportService();
const create = async (req, res) => {
    try {
        const airport = await airportService.create(req.body);
        return res.status(201).json({
            data: airport,
            success: true,
            err: {},
            message: 'Successfully created the airport'
        })
    } catch (error) {
        console.log("Something went wrong in the Airport Controller Layer");
        return res.status(500).json({
            data: {},
            success: false,
            err: error,
            message: 'Cannot create a new Airport'
        })
    }
}


module.exports = {
    create,
};