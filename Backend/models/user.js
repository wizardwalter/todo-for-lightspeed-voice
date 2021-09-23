const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({
	username: String,
    password: String,
    todo: [{ type: Schema.Types.ObjectId, ref: 'todo' }]
});
module.exports = mongoose.model('user', userSchema);