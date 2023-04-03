const {CityRepository} = require('../repository/index');

class CityService {
    constructor(){
        this.CityRepository = new CityRepository();
    }
    async createCity(data){
        try {
            await this.CityRepository.createCity(data);
            
        } catch (error) {
            throw {error};
        }

    }
    async deleteCity(cityId){
        try {
            await this.CityRepository.deleteCity(cityId);
        } catch (error) {
            throw {error};
        }
    }
    async updateCity(cityId, obj){
        try {
            await this.CityRepository.updateCity(cityId, obj);
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