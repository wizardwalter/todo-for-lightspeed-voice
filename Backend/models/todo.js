const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var todoSchema = new mongoose.Schema({
	title: String,
    estimatedHours: Number,
    users: [{ type: Schema.Types.ObjectId, ref: 'user' }],
    tasks: [{type: Schema.Types.ObjectId, ref: 'tasks'}],
});
module.exports = mongoose.model('todo', todoSchema);