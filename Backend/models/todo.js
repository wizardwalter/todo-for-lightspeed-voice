const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var todoSchema = new mongoose.Schema({
	title: String,
    description: String,
    users: [{ type: Schema.Types.ObjectId, ref: 'user' }]
});
module.exports = mongoose.model('todo', todoSchema);