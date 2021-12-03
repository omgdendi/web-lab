const mongoose = require("mongoose");

const RoleModel = new mongoose.Schema({
    value: {type: String, unique: true, default: "USER"}
})

module.exports = mongoose.model('RoleModel', RoleModel);