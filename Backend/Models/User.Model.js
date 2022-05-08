const Users = require("../Database/Schemas").user;
const { Op } = require("sequelize");

module.exports = class {
    attributes = ["id", "email", "name", "userName", "password"];

    async getDetailByEmail(email){
        return await Users.findOne({
            where: {
                email,
            },
            attributes: this.attributes,
        });
    }

    async add(params){
       return await Users.create(params);
    }

    async update(params, id){
        console.log("params", params)
        return await Users.update(params, { where: { id } });
    }

    async getDetailByAuthToken(authToken, options){
        const temp = options || {
            exclude: ["password"],
        };

        return await Users.findOne({
            attributes: temp,
            where : {authToken}

        });
    }

};