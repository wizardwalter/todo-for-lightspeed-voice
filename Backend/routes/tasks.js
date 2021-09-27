var express = require("express");
var router = express.Router();
var tasksController = require("../controllers/tasksController");



router.post("/create", tasksController.createTask);

router.get('', tasksController.getTasks);

router.put('/:id', tasksController.editTask);

router.get('/:id', tasksController.getoneTask);

router.delete('/:id', tasksController.deleteTask)

//router.get('/:user', tasksController.getProjectList);
module.exports = router;