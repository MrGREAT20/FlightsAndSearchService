const { where } = require('sequelize');
const {City} = require('../models/index.js');
const city = require('../models/city.js');
const {Op} = require('sequelize');

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
    async getAllCities(filter){ //filter can be empty also
        try {
            if(filter.name){ //agar filter.name empty nhi hai, matlab user ne kuch search kiya hai character
                const cities = await City.findAll({
                    where:{
                        name:{
                            [Op.startsWith]:filter.name
                        }
                    }
                });
                return cities;

            }
            const cities = await City.findAll(); //agr filter empty hai, toh sabh cities aane chahiye
            return cities;
        } catch (error) {
            throw {error};
        }
    }
}
module.exports = CityRepository;
