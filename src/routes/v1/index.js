const express = require('express');

const { InfoController } = require('../../controllers')

const airplaneRoutes = require('./airplane-routes');

const router = express.Router();

// console.log("Inside v1 routes");


router.use('/airplanes', airplaneRoutes);

router.get('/info', InfoController.info)

// router.get('/info', (req, res) => {
//     return res.json({msg: 'ok'});
// })

module.exports = router;