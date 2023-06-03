const UserService = require('../services/user_services');

exports.register = async(req,res,next)=>{
    try {
        const {email, password} = req.body;
        const successReg = await UserService.registerUser(email, password);

        res.json({status:true, success:"User Registered Successfully"});
        console.log("Registered Successfully");
    } catch (er) {
        res.json({status:false});
        console.log("Already Exist");
        // throw er
    }
}

exports.login = async(req,res,next)=>{
    try {
        const {email, password} = req.body;
        const user = await UserService.checkUser(email);
        if(!user){
            res.json({status:false});
            console.log("User Not Exist");
        } else {
            const isMatch = await user.comparePwd(password);
            if(isMatch == false){
                console.log("Pwd Incorrect");
            } else {
                // res.json({status:true, success:"User Registered Successfully"});
                // console.log("Logged In Successfully");

                let tokenData = {_id:user._id, email:user.email};
                const token = await UserService.generateToken(tokenData, "secretKey", '24h');
                res.status(200).json({status:true, token:token});
            }
        }
    } catch(er){
        res.json({status:false});
        console.log("Some Error");
        // throw er
    }
}
