const express = require('express');
const router = express.Router();

const v1apiRoutes = require('./v1/index') 
// const v2apiRoutes = require('./v2/index');


router.use('/v1', v1apiRoutes); //agar koi api hit kar rha hai, jiske prefix me /v1 aata hai, toh tu v1apiroutes se map kar
//router.use('/v2', v2apiRoutes); //agar koi api hit kar rha hai, jsike prefix me /v2 aata hai, toh tu v2apiroutes se map kar

module.exports = router;

//yeh toh apan dusre components routes ko use karne ke liye export kiye hai, jaise service --> communicate --> repository vaise



