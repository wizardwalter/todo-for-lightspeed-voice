var express = require("express");
var router = express.Router();
var todoController = require("../controllers/todoController");



router.post("/create", todoController.createTodo);

router.get('/', todoController.getTodos);

router.get('/:id', todoController.getoneTodo);

router.delete('/:id', todoController.deleteTodo);


module.exports = router;