const {CityRepository} = require('../repository/index');

class CityService {
    constructor(){
        this.CityRepository = new CityRepository();
    }
    async createCity(data){
        try {
            const city = await this.CityRepository.createCity(data);
            return city;
            
        } catch (error) {
            throw {error};
        }

    }
    async deleteCity(cityId){
        try {
            const response = await this.CityRepository.deleteCity(cityId);
            return response;

        } catch (error) {
            throw {error};
        }
    }
    async updateCity(cityId, obj){
        try {
            const city = await this.CityRepository.updateCity(cityId, obj);
            return city;
        } catch (error) {
            throw {error};
        }
    }
    async getCity(cityId){ 
        try {
            const city = await this.CityRepository.getCity(cityId);
            return city;
        } catch (error) {
            throw {error};
        }
    }


}
module.exports = CityService;