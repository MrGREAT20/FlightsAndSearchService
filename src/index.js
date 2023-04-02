const express = require('express');
const {PORT} = require('./config/serverconfig.js');
const setupAndStartServer = async() =>{
    //create a express object
    const app = express();
    //const PORT = 3000; //abhi yeh PORT number, humare liye 3000 lekin kisi or ke isme yeh PORT khali nhi ho sakta, toh hum
    //isko config folder me daal sakte hai shayad
    app.listen(PORT, ()=>{
        console.log(`Server running at ${PORT}`);
    })
}
setupAndStartServer();