const userModel = new(require("../Models/User.Model"))();
const encrypt = new (require("../Configs/encrypt"))();
const jwt = require("jsonwebtoken")

module.exports = class{

  async signIn(req, res){
    try{
      let user = await userModel.getDetailByEmail(req.body.email);
        if(!user) 
        return res.handler.notFound("VALIDATION.NOT_FOUND.USER");

        if(!user.password)
        return res.handler.notFound("VALIDATION.NOT_FOUND.PASSWORD");

        if(!encrypt.compareBcrypt(req.body.password, user.password))
        return res.handler.conflict("VALIDATION.PASSWORD.INCORRECT");
       
        const token = jwt.sign({ user: user.dataValues.id },  process.env.TOKEN_KEY);
        req.body.authToken  = encrypt.bcrypt(token)
       
        await userModel.update({authToken : req.body.authToken}, user.dataValues.id);
        user.dataValues.authToken = req.body.authToken
        
        res.handler.success(user,"USER.LOGIN");
    } 
    catch(err){
      res.handler.serverError(err);
    }
  }

  async signUp(req, res){
    try{
      const userExist = await userModel.getDetailByEmail(req.body.email);
        if(userExist){
          if(userExist.email === req.body.email){
            return res.handler.conflict("VALIDATION.EXISTS.EMAIL");
          }
        }

      const newUser = await userModel.add(req.body);

      if(newUser){
        const token = jwt.sign({ user: newUser.dataValues.id },  process.env.TOKEN_KEY);
        req.body.authToken  = encrypt.bcrypt(token)
       
        await userModel.update({authToken : req.body.authToken}, newUser.dataValues.id);
      }
       
      newUser.dataValues.authToken = req.body.authToken
      delete newUser.dataValues["password"];

      res.handler.created(newUser, "USER.SIGNUP");
    } 
    catch(err){
      res.handler.serverError(err);
    }
  }
}