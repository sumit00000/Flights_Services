const { StatusCodes } = require('http-status-codes');

const { ErrorResponse } = require('../utils/common')

function validateCreateRequest(req, res, next) {
    if(!req.body.modelNumber) {
        ErrorResponse.message = 'Somthing went wrong while creating airplane';
        ErrorResponse.error =  {explanation: 'Model Number is not found in the incoming request in the correct form'};
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
                // .json({
                //     success: false,
                //     message: 'Somthing went wrong while creating airplane',
                //     data: {},
                //     error: {explanation: 'Model Number is not found in the incoming request in the correct form'}
                // });
    }
    next();
}

module.exports = {
    validateCreateRequest
}