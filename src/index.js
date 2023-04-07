const express = require('express');
const bodyParser = require('body-parser');
const {PORT} = require('./config/serverconfig.js');
const CityRepository = require('./repository/city-repository.js');
const CityService = require('./services/city-services.js');
const APIroutes = require('./routes/index.js');
const setupAndStartServer = async() =>{
    //create a express object
    const app = express();
    //const PORT = 3000; //abhi yeh PORT number, humare liye 3000 lekin kisi or ke isme yeh PORT khali nhi ho sakta, toh hum
    //isko config folder me daal sakte hai shayad

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use('/api', APIroutes); //any incoming request with '/api' comes than it would be of "v1" or "v2"
    app.listen(PORT, ()=>{
        console.log(`Server running at ${PORT}`);
        
        //repo.createCity({name: "New Delhi"});
    })
}
setupAndStartServer();