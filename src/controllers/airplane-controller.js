const { StatusCodes } = require('http-status-codes');

const { AirplaneService }  = require('../services');
const { SuccessResponse, ErrorResponse } = require('../utils/common');

/**
 * POST : /airplanes
 * req-body {modelNumber: 'airbus320', capacity: 200}
 */

async function createAirplane(req, res) {
    try {
        console.log("Inside Controller");
        
        // console.log(req.body);
        
        const airplane = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        });
        SuccessResponse.data = airplane;
        return res
                .status(StatusCodes.CREATED)
                .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res
                .status(error.StatusCodes)  // needs to change statusCode
                .json(ErrorResponse);
    }
}


/**
 * POST : /airplanes
 * req-body {}
 */
async function getAirplanes(req, res) {
    try {
        const airplanes = await AirplaneService.getAirplanes();
        SuccessResponse.data = airplanes;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res
                .status(error.StatusCodes)  // needs to change statusCode
                .json(ErrorResponse);
        
    }
    
}

/**
 * POST : /airplanes/:id
 * req-body {}
 */

async function getAirplane(req, res) {
    try {
        const airplanes = await AirplaneService.getAirplane(req.params.id);  // why use params because " * POST : /airplanes/:id" this is a url params input
        SuccessResponse.data = airplanes;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)  // needs to change statusCode
                .json(ErrorResponse);
        
    }
    
}

/**
 * DELETE : /airplanes/ID
 * req-body {}
 */

async function destroyAirplane(req, res) {
    try {
        console.log("Inside Controller");
        
        // console.log(req.body);
        
        const airplane = await AirplaneService.destroyAirplane(req.params.id);
        SuccessResponse.data = airplane;
        return res
                .status(StatusCodes.CREATED)
                .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)  // needs to change statusCode
                .json(ErrorResponse);
    }
}


module.exports = {
    createAirplane,
    getAirplanes,
    getAirplane,
    destroyAirplane
}
