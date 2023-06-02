const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const db = require('../config/db');

const { Schema } = mongoose;

const userSchema = new Schema({
    email:{
        type:String,
        lowercase:true,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
});

// Encrypting Password
userSchema.pre('save', async function(){
    try {
        var user = this;
        const salt = await (bcrypt.genSalt(10));
        const hashPwd = await bcrypt.hash(user.password, salt);
        user.password = hashPwd;
    } catch (error) {
        throw error
    }
});

userSchema.methods.comparePwd = async function(userPwd){
    try {
        const isMatch = await bcrypt.compare(userPwd, this.password);
        return isMatch;
    } catch (e) {
        throw e;
    }
};

const UserModel = db.model('user', userSchema);

module.exports = UserModel;
