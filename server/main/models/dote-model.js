const mongoose = require("mongoose");

const DoteModel = new mongoose.Schema({
    x_value: {type: Number, required: true},
    y_value: {type: Number, required: true},
    r_value: {type: Number, required: true},
    result: {type: Boolean, required: true},
    user: {type: String, ref: 'User', required: true}
})

module.exports = mongoose.model('DoteModel', DoteModel);