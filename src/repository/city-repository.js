const { where } = require('sequelize');
const {City} = require('../models/index.js');
const city = require('../models/city.js');

class CityRepository{
    async createCity({name}){
        try{
            const city = await City.create({name});
            return city;
        }catch(error){
            throw {error};
        }
    }
    async deleteCity(cityId){
        try{
            await City.destroy({
                where: {
                    id: cityId
                }
            });
        }catch(error){
            throw {error};
        }

    }
    async updateCity(cityId, obj){
        try {
            await City.update({
                name: obj.name,
            },{
                where: {
                    id: cityId,
                }
            });
        } catch (error) {
            throw {error};
        }
    }

    async getCity(cityId){
        try {
            const city = await City.findByPk(cityId);  //since out cityid is a primary key, so agar mujhe getcity karna hai
            // to me uske primarykey se karunga
            return city;
        } catch (error) {
            throw {error};
        }
    }
    async getAllCities(){
        try {
            const cities = await City.findAll();
            return cities;
        } catch (error) {
            throw {error};
        }
    }
}
module.exports = CityRepository;
