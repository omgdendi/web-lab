const mongoose = require("mongoose");

const TokenModel = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    refreshToken: {type: String, required: true}
})

module.exports = mongoose.model('Token', TokenModel);