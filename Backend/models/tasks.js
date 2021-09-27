const mongoose = require("mongoose");
const todo = require("./todo");
const Schema = mongoose.Schema;

var tasksSchema = new mongoose.Schema({
	title: String,
    estimatedHours: Number,
    user: {type: Schema.Types.ObjectId, ref: 'user'},
    todo: {type: Schema.Types.ObjectId, ref: 'todo'},
});
module.exports = mongoose.model('tasks', tasksSchema);


