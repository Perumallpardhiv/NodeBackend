const UserModel = require('../model/user_model');

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
}

module.exports = UserService;
