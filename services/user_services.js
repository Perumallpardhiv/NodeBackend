const UserModel = require('../model/user_model');
const jwt = require('jsonwebtoken');

class UserService {
    static async registerUser(email, password) {
        try {
            console.log(`email: ${email}`);
            console.log(`password: ${password}`);
            const createUser = new UserModel({email, password});
            return await createUser.save();
        } catch (e) {
            throw e;
        }
    }

    static async checkUser(email){
        try {
            return await UserModel.findOne({email});
        } catch (e) {
            throw e;
        }
    }

    static async generateToken(tokenData, secretKey, jwt_expire){
        return jwt.sign(tokenData, secretKey, {expiresIn: jwt_expire});
    }
}

module.exports = UserService;
