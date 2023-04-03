const {CityService} = require('./services/index');



const cityService = new CityService();




/**
 * 
 * POST
 * 
 * data -> req.body  (data rahega req.body me  jabh hum POST (CREATE) API call karenge)
 * 
 * 
 * aisa hi rehta hai isme, controllers ka kaam hai route karna
 * 
 * CONTROLLER --- COMMUNICATE ---->  SERVICE LAYER ----COMMUNICATE ---> REPOSITORY --- COMMUNICATE --> MODEL --COMMUNICATE--> DATABASE 
 * 
 * 
 */
const create = async (req, res ) => {
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data:city,
            success: true,
            message: 'Successfully, created a city',
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success: false,
            message: 'Not able to create a City',
            err: error
        });
    }
};


/**
 * 
 * DELETE in CRUD
 * 
 * URL -> /city:id  we have id in QueryParams
 */
const destroy = async (req, res ) => {
    try {
        const response = await CityService.deleteCity(req.params.id);
        return res.status(200).json({
            data:response,
            success: true,
            message: 'Successfully, deleted a city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success: false,
            message: 'Not able to delete a City',
            err: error
        });
    }
};

/**
 * 
 * GET in CRUD
 * 
 * URL -> /city:id
 */

const get = async (req, res ) => {
    try {
        const city = await CityService.getCity(req.params.id);
        return res.status(200).json({
            data:city,
            success: true,
            message: 'Successfully, fetched the city',
            err: {}
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success: false,
            message: 'Not able to get the  City',
            err: error
        });
    }

};


/**
 * 
 * UPDATE IN CRUD
 * 
 * url -> /city:id 
 * 
 * Data -> req.body   (jiss data se update karna hai, voh bhi rahega req.body me)
 */
const update = async (req, res ) => {
    try {
        const city = await CityService.updateCity(req.params.id, req.body);
        return res.status(200).json({
            data:city,
            success: true,
            message: 'Successfully, Updated the city',
            err: {}
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success: false,
            message: 'Not able to update the  City',
            err: error
        });
    }

};

module.exports = {
    create,
    destroy,
    get,
    update
}
