const { validationResult } = require('express-validator');
const userModel = new (require("../Models/User.Model"))()
module.exports = class Authentication {

    static async all(req, res, next) {
        try {
            //Check error if exist then send validationError
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.handler.validationError(undefined, errors.array())
            }
            
            //Get & check authToken if not exist then send unauthorized
            let authToken = req.headers.authorization
            if (!authToken) return res.handler.unauthorized()

            console.log("auth", authToken);
            let data = await userModel.getDetailByAuthToken(authToken)
            console.log("data", data)
            //Check data ,if exist then set isFound variable true
            let isFound = false
               if(data) {
                    isFound = true
                    req.user= data
                }
           

            //If isFound is false then send unauthorized
            if (!isFound) return res.handler.unauthorized()

            //If All done
            next()

        } catch (err) {
            res.handler.serverError(err)
        }
    }

    //For User Authentication
    static async user(...params) {
        await Authentication.all(...params)
    }

}