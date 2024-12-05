const express = require('express');

const { AirplaneController } = require('../../controllers')
const { AirplaneMiddlewares } = require('../../middlewares');

const router = express.Router();

// console.log("Inside airplane routes");


// /api/v1/airplanes POST
// router.post('/', AirplaneController.createAirplane);

router.post('/',                                                //add middleware
            AirplaneMiddlewares.validateCreateRequest,
            AirplaneController.createAirplane
);

// /api/v1/airplanes GET
router.get('/',
    AirplaneController.getAirplanes
);

// /api/v1/airplanes/:id GET
router.get('/:id',
    AirplaneController.getAirplane
);

// /api/v1/airplanes/:id DELETE
router.delete('/:id',
    AirplaneController.destroyAirplane
);

module.exports = router;