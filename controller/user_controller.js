const UserService = require('../services/user_services');

exports.register = async(req,res,next)=>{
    try {
        const {email, password} = req.body;
        const successReg = await UserService.registerUser(email, password);

        res.json({status:true, success:"User Registered Successfully"});
    } catch (er) {
        throw er
    }
}
