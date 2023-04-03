const express = require('express');
const bodyParser = require('body-parser');
const {PORT} = require('./config/serverconfig.js');
const CityRepository = require('./repository/city-repository.js');
const setupAndStartServer = async() =>{
    //create a express object
    const app = express();
    //const PORT = 3000; //abhi yeh PORT number, humare liye 3000 lekin kisi or ke isme yeh PORT khali nhi ho sakta, toh hum
    //isko config folder me daal sakte hai shayad

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.listen(PORT, ()=>{
        console.log(`Server running at ${PORT}`);
        const repo = new CityRepository();
        repo.updateCity(1, {name:"Mumbai"});
        //repo.createCity({name: "New Delhi"});
    })
}
setupAndStartServer();