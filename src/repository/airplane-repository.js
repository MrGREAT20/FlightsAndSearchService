const {Airplane} = require('../models/index');

class AirplaneRepository {
    async getAirplane(id){
        try {
            const airplane = await Airplane.findByPk(id);
            console.log(airplane);
            return airplane;
        } catch (error) {
            console.log("Something is wrong in the Airplane repository layer");
            throw {error};
            
        }
    }
}
module.exports = AirplaneRepository;