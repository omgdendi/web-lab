const mongoose = require("mongoose");

const UserModel = new mongoose.Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    roles: [{type: String, ref: 'Role'}]
})

module.exports = mongoose.model('UserModel', UserModel);