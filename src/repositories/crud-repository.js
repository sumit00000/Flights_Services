const { where } = require('sequelize');
const { logger, Logger } = require('../config');
const AppError = require('../utils/errors/app-error');
const { getStatusCode, StatusCodes } = require('http-status-codes');

class CrudRepository {       
    constructor(model) {     
        this.model = model;
    }

    // async create(data) {         
    //     const response = await this.model.create(data);
    //     return response;
    // }
    async create(data) {       // this crete function is used to create some data
        console.log("Inside repository");
        const response = await this.model.create(data);
        return response;

    }

    async destroy(data) {       // this crete function is used to delete some data
        const response = await this.model.destroy({   //actually this destroy function takes object as an arrgument or we put a where quarry (delete somthing from a table)
            where: {
                id: data
            }
        });
        if(!response) {
            throw new AppError('Not able to find the resourse', StatusCodes.NOT_FOUND);
            
        }
        return response;
    }

    async get(data) {       // this crete function is used to get some data
        const response = await this.model.findByPk(data);  //findByPk mean find by primary key
        if(!response) {
            throw new AppError('Not able to find the resourse', StatusCodes.NOT_FOUND);
            
        }
        return response;

    }

    async getAll() {       // this crete function is used to get all also not use filtering pass 'data' some data
        const response = await this.model.findAll();  // findall mean to get all data in array
        return response;
    }

    async update(id, data) {       // data -> {column: value, ....}
        const response = await this.model.update(data, {
            where: {
                id: id
            }
        })  
        return response;
    }
}

module.exports = CrudRepository;


// here actually we created a crud repository class the constructor of this class take some model
// store it our  variable in this.model eqal to incoming model
// whatever be the model like movie model, theator model or anything we can just use this generic class there things will start working
