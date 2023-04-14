class CrudService{
    constructor(repository){
        this.repository = repository;
    }
    async create(data){
        try {
            const result = await this.repository.create(data);
            return result;
        } catch (error) {
            console.log("Something went wrong in the CRUD SERVICE layer");
            throw {error};
        }

    }
    async destroy(crudid){
        try {
            await this.repository.destroy(crudid);
        } catch (error) {
            console.log("Something went wrong in the CRUD SERVICE layer");
            throw {error};
        }

    }
    async get(crudid){
        try {
            const result = this.repository.get(crudid);
            return result;
        } catch (error) {
            console.log("Something went wrong in the CRUD SERVICE layer");
            throw {error};
        }
    }
    async getAll(){
        try {
            const result = await this.repository.getAll();
            return result;
            
        } catch (error) {
            console.log("Something went wrong in the CRUD SERVICE layer");
            throw {error};
        }
    }
    async update(crudid, data){
        try {
            await this.repository.update(crudid, data);
        } catch (error) {
            console.log("Something went wrong in the CRUD SERVICE layer");
            throw {error};
        }
    }
}
module.exports = CrudService;