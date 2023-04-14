class CrudRepository{
    constructor(model){
        this.model = model;
    }
    async create(data){
        try {
            const result = await this.model.create(data);
            return result;
        } catch (error) {
            console.log("Something went wrong in the crud-repo");
            throw {error};
        }

    }
    async destroy(modelid){
        try {
            await this.model.destroy({
                where:{
                    id: modelid,
                }
            });
        } catch (error) {
            console.log("Something went wrong in the crud-repo");
            throw {error};
        }

    }
    async get(modelid){
        try {
            const result = await this.model.findByPk(modelid);
            return result;
        } catch (error) {
            console.log("Something went wrong in the crud-repo");
            throw {error};
            
        }

    }
    async getAll(){
        try {
            const result = await this.model.findAll();
            return result;
        } catch (error) {
            console.log("Something went wrong in the crud-repo");
            throw {error};
        }

    }
    async update(modelid, data){
        try {
            const result = await this.model.update({
                where: {
                    id: modelid
                }
            });
            return result;
        } catch (error) {
            console.log("Something went wrong in the crud-repo");
            throw {error};
        }

    }
}
module.exports = CrudRepository;